'use server';

export async function sendContactForm(data: {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}) {
  try {
    if (data.honeypot) {
      return { success: false }; // スパム
    }

    // TODO: メール送信 or DB保存などの処理を書く
    console.log('名前:', data.name);
    console.log('メール:', data.email);
    console.log('メッセージ:', data.message);

    return { success: true };
  } catch (error) {
    console.error('送信エラー:', error);
    return { success: false };
  }
}
