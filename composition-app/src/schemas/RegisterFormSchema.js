import * as z from 'zod';

export const RegisterFormSchema = z.object({
    firstName: z.string().min(3, {message: 'At least 3 characters long'}).max(25),
    lastName: z.string().min(5).max(35),
    description: z.string().min(3).max(150),
    rate: z.number().min(1),
    areas: z.array(z.string()).length(1, {message: 'Choose at least 1 Expertise'}),
})
