/**
 * Supabaseのエラーメッセージを日本語に変換するユーティリティ
 *
 * 参考: https://qiita.com/tks_00/items/223b0cd4a9b00a664b50
 */

type ErrorTranslations = {
  [key: string]: string;
};

/**
 * Supabaseから返されるエラーメッセージを日本語に変換する
 *
 * @param errorMessage Supabaseから返されたエラーメッセージ
 * @returns 日本語に変換されたエラーメッセージ
 */
export const translateSupabaseError = (errorMessage: string): string => {
  const errorTranslations: ErrorTranslations = {
    // アカウント関連
    'User already registered': 'このメールアドレスは既に登録されています。',
    'Email already in use': 'このメールアドレスは既に使用されています。',
    email_already_in_use: 'このメールアドレスは既に使用されています。',
    'Email not confirmed': 'メールアドレスが確認されていません。確認メールをチェックしてください。',
    email_not_confirmed: 'メールアドレスが確認されていません。確認メールをチェックしてください。',

    // 認証関連
    'Invalid login credentials': 'メールアドレスまたはパスワードが正しくありません。',
    'Invalid email': 'メールアドレスの形式が正しくありません。',
    invalid_email: 'メールアドレスの形式が正しくありません。',
    'Password should be at least 6 characters': 'パスワードは6文字以上である必要があります。',
    'missing email or phone': 'メールアドレスまたは電話番号が必要です。',
    'Anonymous sign-ins are disabled': '匿名サインインは無効になっています。',

    // レート制限関連
    'email rate limit exceeded':
      'メールの送信制限を超えました。しばらく待ってから再試行してください。',
    over_email_send_rate_limit:
      'メールの送信制限を超えました。しばらく待ってから再試行してください。',

    // バリデーション関連
    validation_failed: '入力内容の検証に失敗しました。',

    // セッション関連
    'Session expired': 'セッションの有効期限が切れました。再度ログインしてください。',

    // その他
    'Database error': 'データベースエラーが発生しました。',
    'Server error': 'サーバーエラーが発生しました。',
    'Network error': 'ネットワークエラーが発生しました。インターネット接続を確認してください。',
  };

  // 完全一致するエラーメッセージがある場合
  if (errorTranslations[errorMessage]) {
    return errorTranslations[errorMessage];
  }

  // 部分一致するエラーメッセージを探す
  for (const key in errorTranslations) {
    if (errorMessage.includes(key)) {
      return errorTranslations[key];
    }
  }

  // 該当するエラーメッセージがない場合はデフォルトメッセージを返す
  return `エラーが発生しました: ${errorMessage}`;
};
