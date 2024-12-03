import { z } from 'zod';

export const yogaClassSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Name is required'),
  instructor: z.string().min(1, 'Instructor is required'),
  duration: z.number().min(15, 'Duration must be at least 15 minutes'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
});

export const yogaClassInputSchema = yogaClassSchema.omit({ id: true });

export const fetchStateSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    data: dataSchema.nullable(),
    error: z
      .object({
        name: z.string(),
        message: z.string(),
      })
      .nullable(),
    isLoading: z.boolean(),
  });

export const fetchOptionsSchema = z.object({
  onSuccess: z.function().args(z.unknown()).optional(),
  onError: z.function().args(z.instanceof(Error)).optional(),
});

// Types derived from schemas
export type YogaClass = z.infer<typeof yogaClassSchema>;
export type YogaClassInput = z.infer<typeof yogaClassInputSchema>;
export type FetchState<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
};
export type FetchOptions = z.infer<typeof fetchOptionsSchema>;
