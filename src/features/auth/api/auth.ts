import { supabase } from '@/lib/supabase';
import { translateSupabaseError } from '@/utils';

interface SignUpParams {
  email: string;
  password: string;
  name: string;
}

export const signUp = async ({ email, password, name }: SignUpParams) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    throw new Error(translateSupabaseError(error.message));
  }

  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(translateSupabaseError(error.message));
  }

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(translateSupabaseError(error.message));
  }
};
