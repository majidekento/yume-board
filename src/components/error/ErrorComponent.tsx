'use client';

import { Box, Typography, Button } from '@mui/material';
import { useEffect } from 'react';

interface ErrorComponentProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 3,
      }}
    >
      <Typography variant="h5" color="error" gutterBottom>
        エラーが発生しました
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        申し訳ありませんが、ページの読み込み中にエラーが発生しました。
      </Typography>
      <Button variant="contained" onClick={reset}>
        再試行する
      </Button>
    </Box>
  );
}
