import { auth, db } from './firebaseAdmin';
import { readBody, send, createError, eventHandler } from 'h3';

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { token, email, newPassword } = body;

    // 該当するユーザーが存在するか確認
    let userRecord;
    try {
      userRecord = await auth.getUserByEmail(email);
    } catch (error) {
      // ユーザーが存在しない場合
      throw createError({ statusCode: 400, message: 'このメールアドレスは登録されていません。' });
    }

    const resetDocRef = db.collection('password_resets').doc(email);
    const resetDoc = await resetDocRef.get();

    if (!resetDoc.exists || resetDoc.data().token !== token || resetDoc.data().expires < Date.now()) {
      throw createError({ statusCode: 400, message: '無効なまたは期限切れのトークンです。' });
    }

    await auth.updateUser(userRecord.uid, { password: newPassword });
    await resetDocRef.delete();

    console.log(`パスワードが正常にリセットされました: ${email}`);
    console.log(`新しいパスワード（テスト用）: ${newPassword}`);

    return send(event, JSON.stringify({ message: `パスワードが正常にリセットされました: ${email}` }));
  } catch (error) {
    console.error('エラー:', error);
    throw createError({ statusCode: 400, message: error.message });
  }
});
