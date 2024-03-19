import * as z from 'zod';

export const ContactCoachSchema = z.object({
    email: z.string().email(),
    message: z.string().min(3).max(150)
});
