import { z } from 'zod';

export const YogaClassSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  instructor: z.string().min(1, 'Instructor name is required'),
  duration: z.number().min(30, 'Class must be at least 30 minutes'),
  maxParticipants: z.number().positive('Maximum participants must be positive'),
  schedule: z.object({
    dayOfWeek: z.enum([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]),
    startTime: z
      .string()
      .regex(/^([0-1]?\d|2[0-3]):[0-5]\d$/, 'Invalid time format'),
  }),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  isActive: z.boolean().default(true),
});

export const YogaClassUpdateSchema = YogaClassSchema.partial().extend({
  id: z.string().uuid(),
});

export const YogaClassInputSchema = YogaClassSchema.omit({ id: true });

export type YogaClass = z.infer<typeof YogaClassSchema>;
export type YogaClassUpdate = z.infer<typeof YogaClassUpdateSchema>;
export type YogaClassInput = z.infer<typeof YogaClassUpdateSchema>;

export const YogaClassQuerySchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
  instructor: z.string().optional(),
  dayOfWeek: z
    .enum([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ])
    .optional(),
});

export type YogaClassQuery = z.infer<typeof YogaClassQuerySchema>;
