'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Alert,
  CircularProgress,
  FormHelperText,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signupSchema, type SignupFormData } from '../schemas/signup.schema';
import { useSignup } from '../hooks/useSignup';

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      agreeToTerms: false,
    },
    resolver: zodResolver(signupSchema),
  });

  const { mutate, isPending, error, isError } = useSignup();

  const onSubmit = (data: SignupFormData) => {
    const { email, password, name } = data;
    const signupData = { email, password, name };
    mutate(signupData);
  };

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        p: 2,
      }}
    >
      {isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error instanceof Error ? error.message : 'サインアップ中にエラーが発生しました'}
        </Alert>
      )}

      <Typography variant="h5" component="h1" align="center" gutterBottom>
        アカウント作成
      </Typography>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="名前"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="メールアドレス"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="パスワード"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="パスワードの表示切替"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="agreeToTerms"
        control={control}
        render={({ field }) => (
          <Box>
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} color="primary" />}
              label={
                <>
                  <Typography component="span">
                    <Link href="/terms" target="_blank">
                      利用規約
                    </Link>
                    に同意します
                  </Typography>
                </>
              }
            />
            {errors.agreeToTerms && (
              <FormHelperText error>{errors.agreeToTerms.message}</FormHelperText>
            )}
          </Box>
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={isPending}
        sx={{ mt: 2 }}
      >
        {isPending ? <CircularProgress size={24} /> : 'アカウント作成'}
      </Button>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          すでにアカウントをお持ちですか？ <Link href="/auth/login">ログイン</Link>
        </Typography>
      </Box>
    </Box>
  );
};
