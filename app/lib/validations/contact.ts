import * as z from 'zod'

export const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Please enter a valid email address'),
    mobile: z.string().min(1, 'Mobile number is required'),
    reason: z.string().min(1, 'Please select a reason for contact'),
    message: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema> 