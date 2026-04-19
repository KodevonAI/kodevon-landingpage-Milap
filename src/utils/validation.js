import { z } from 'zod'

export const citaSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, 'Ingresa un número de 10 dígitos (ej: 3001234567)'),
  service: z.string().min(1, 'Selecciona un servicio'),
  date: z.string().min(1, 'Selecciona una fecha'),
  time: z.string().min(1, 'Selecciona un horario'),
  message: z.string().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  subject: z.string().min(1, 'El asunto es requerido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  phone: z.string().optional(),
})
