import { Box, Paper, Container } from '@mui/material';
import { SignupForm } from '@/features/auth/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サインアップ | Yume Board',
  description: 'Yume Boardに新規登録する',
};

export default function SignupPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SignupForm />
        </Box>
      </Paper>
    </Container>
  );
}
