import { googleCalendarConfig } from '../config/googleConfig'
import { SCHEDULE } from './constants'
import { format, addMinutes, isAfter, isBefore, setHours, setMinutes, startOfDay } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const BASE_URL = 'https://www.googleapis.com/calendar/v3'

function getWorkingHours(date) {
  const day = date.getDay()
  const slots = []
  const base = startOfDay(date)

  if (day === 0) return slots // domingo cerrado

  const isSaturday = day === 6
  const schedule = isSaturday ? SCHEDULE.saturday : SCHEDULE.weekdays

  const addSlots = (openH, closeH) => {
    let current = setHours(setMinutes(base, 0), openH)
    const end = setHours(setMinutes(base, 0), closeH)
    while (isBefore(addMinutes(current, 30), end) || +addMinutes(current, 30) === +end) {
      slots.push(format(current, 'HH:mm'))
      current = addMinutes(current, 30)
    }
  }

  if (isSaturday) {
    addSlots(schedule.open, schedule.close)
  } else {
    addSlots(schedule.open, schedule.closeAm)
    addSlots(schedule.openPm, schedule.close)
  }

  return slots
}

export async function getAvailableHours(date) {
  const allSlots = getWorkingHours(date)
  if (allSlots.length === 0) return []

  try {
    const dayStart = new Date(date)
    dayStart.setHours(0, 0, 0, 0)
    const dayEnd = new Date(date)
    dayEnd.setHours(23, 59, 59, 999)

    const params = new URLSearchParams({
      key: googleCalendarConfig.apiKey,
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      singleEvents: 'true',
    })

    const res = await fetch(
      `${BASE_URL}/calendars/${encodeURIComponent(googleCalendarConfig.calendarId)}/events?${params}`
    )

    if (!res.ok) return allSlots

    const data = await res.json()
    const busySlots = new Set()

    for (const event of data.items || []) {
      if (!event.start?.dateTime) continue
      const start = new Date(event.start.dateTime)
      const end = new Date(event.end.dateTime)
      let cur = start
      while (isBefore(cur, end)) {
        busySlots.add(format(cur, 'HH:mm'))
        cur = addMinutes(cur, 30)
      }
    }

    return allSlots.filter(slot => !busySlots.has(slot))
  } catch {
    return allSlots
  }
}

export async function createCitaEvent(citaData) {
  const { name, email, phone, service, date, time } = citaData
  const [hours, minutes] = time.split(':').map(Number)
  const startDate = new Date(date)
  startDate.setHours(hours, minutes, 0, 0)
  const endDate = addMinutes(startDate, 30)

  const event = {
    summary: `Cita OpticaMilap - ${service}`,
    description: `Cliente: ${name}\nEmail: ${email}\nTel: ${phone}`,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: googleCalendarConfig.timezone,
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: googleCalendarConfig.timezone,
    },
    attendees: [
      { email: import.meta.env.VITE_BUSINESS_EMAIL || 'optica_milap@hotmail.com' },
      { email },
    ],
  }

  const res = await fetch(
    `${BASE_URL}/calendars/${encodeURIComponent(googleCalendarConfig.calendarId)}/events?key=${googleCalendarConfig.apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }
  )

  if (!res.ok) throw new Error('No se pudo crear el evento en Google Calendar')
  return res.json()
}
