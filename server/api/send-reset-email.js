import nodemailer from 'nodemailer';
import { readBody, send, createError, eventHandler } from 'h3';
import crypto from 'crypto';
import { db } from './firebaseAdmin';

function generateResetToken() {
  return crypto.randomBytes(32).toString('hex');
}

async function saveResetToken(email, token) {
  const expirationTime = Date.now() + 3600000; // 1時間後に期限切れ
  await db.collection('password_resets').doc(email).set({
    token,
    expires: expirationTime,
  });
}

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;

  const resetToken = generateResetToken();
  await saveResetToken(email, resetToken);

  const resetLink = `http://localhost:3000/reset-password-confirm?token=${resetToken}&email=${email}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ska070760@gmail.com',
      pass: 'mhva nobh ywrc udvg',
    },
  });

  const mailOptions = {
    from: 'ska070760@gmail.com',
    to: email,
    subject: 'パスワードリセット',
    text: `以下のリンクをクリックしてパスワードをリセットしてください: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return send(event, JSON.stringify({ message: 'リセットリンクがメールで送信されました。' }));
  } catch (error) {
    console.error('メール送信エラー: ', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'メールの送信に失敗しました',
      data: error.message,
    });
  }
});
