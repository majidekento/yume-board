import { describe, it, expect } from 'vitest';
import { translateSupabaseError } from '../error';

describe('translateSupabaseError', () => {
  it('should translate known error messages correctly', () => {
    const testCases = [
      {
        input: 'User already registered',
        expected: 'このメールアドレスは既に登録されています。',
      },
      {
        input: 'Invalid login credentials',
        expected: 'メールアドレスまたはパスワードが正しくありません。',
      },
      {
        input: 'Email not confirmed',
        expected: 'メールアドレスが確認されていません。確認メールをチェックしてください。',
      },
      {
        input: 'Password should be at least 6 characters',
        expected: 'パスワードは6文字以上である必要があります。',
      },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(translateSupabaseError(input)).toBe(expected);
    });
  });

  it('should handle partial matches correctly', () => {
    const result = translateSupabaseError('Error: Email already in use in the database');
    expect(result).toBe('このメールアドレスは既に使用されています。');
  });

  it('should return a default message for unknown errors', () => {
    const unknownError = 'Some unexpected error occurred';
    const result = translateSupabaseError(unknownError);
    expect(result).toBe(`エラーが発生しました: ${unknownError}`);
  });
});
