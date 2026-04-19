export const googleCalendarConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY,
  calendarId: import.meta.env.VITE_CALENDAR_ID,
  timezone: 'America/Bogota',
}

export const googleMapsConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  location: {
    lat: 2.4448,
    lng: -76.6142,
    address: 'Cra. 10 #17N-60 Local 1, Antonio Nariño, Popayán, Cauca',
  },
}
