import {
  type CountryCode,
  isValidPhoneNumber,
  parsePhoneNumberWithError,
} from 'libphonenumber-js';
import { z } from 'zod';

export const phoneNumberSchema = z.string().refine(
  (value) => {
    try {
      return isValidPhoneNumber(value);
    } catch {
      return false;
    }
  },
  {
    message: 'Invalid phone number',
  },
);

export const phoneNumberWithRegionSchema = z
  .object({
    phoneNumber: z.string(),
    region: z.string().length(2),
  })
  .refine(
    ({ phoneNumber, region }) => {
      try {
        const parsed = parsePhoneNumberWithError(phoneNumber, {
          defaultCountry: region as CountryCode,
        });
        return parsed.isValid();
      } catch {
        return false;
      }
    },
    {
      message: 'Invalid phone number for the specified region',
    },
  );

// Helper function to format phone numbers
export const formatPhoneNumber = (
  phoneNumber: string,
  region?: CountryCode,
) => {
  try {
    const parsed = parsePhoneNumberWithError(phoneNumber, {
      defaultCountry: region,
    });
    return parsed.formatInternational();
  } catch {
    return phoneNumber;
  }
};

export type PhoneNumber = z.infer<typeof phoneNumberSchema>;
export type PhoneNumberWithRegion = z.infer<typeof phoneNumberWithRegionSchema>;
