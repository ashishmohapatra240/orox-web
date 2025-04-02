import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const signupSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    invitationCode: z.string().min(1, 'Invitation code is required'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>