import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signUp } from '../api/auth';
import type { SignupFormData } from '../schemas/signup.schema';

export const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: Omit<SignupFormData, 'agreeToTerms'>) => {
      return signUp({
        email: data.email,
        password: data.password,
        name: data.name,
      });
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
  });
};
