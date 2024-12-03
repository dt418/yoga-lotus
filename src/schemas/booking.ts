import * as z from 'zod';
import { phoneNumberSchema } from './phoneNumber';

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: phoneNumberSchema,
  sessionType: z.enum(['Yin Yoga', 'Hatha Yoga', 'Vinyasa Flow', 'Power Yoga']),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
