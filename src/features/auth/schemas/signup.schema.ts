import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1, { message: '名前は必須です' }),
  email: z
    .string()
    .min(1, { message: 'メールアドレスは必須です' })
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z.string().min(8, { message: 'パスワードは8文字以上で入力してください' }),
  agreeToTerms: z.boolean().refine(val => val === true, { message: '利用規約に同意してください' }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
