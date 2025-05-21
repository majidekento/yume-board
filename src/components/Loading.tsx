import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingProps {
  /**
   * ローディング中に表示するテキスト
   * @default "読み込み中..."
   */
  text?: string;
  /**
   * ローディングインジケーターのサイズ
   * @default 40
   */
  size?: number;
  /**
   * コンテナの高さ
   * @default "100vh"
   */
  height?: string | number;
}

/**
 * ローディング表示用の共通コンポーネント
 */
export default function Loading({
  text = '読み込み中...',
  size = 40,
  height = '100vh',
}: LoadingProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}
    >
      <CircularProgress size={size} />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {text}
      </Typography>
    </Box>
  );
}
