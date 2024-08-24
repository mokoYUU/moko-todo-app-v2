
# MokoTodoApp

MokoTodoAppは、Nuxt.js 3.xとVuetifyを使用して構築されたシンプルなTo-Doアプリケーションです。このアプリケーションでは、Firebase Authenticationを使用したユーザー認証と、Firebase Firestoreを使用したタスクや収支の管理が可能です。

## 使用技術

- **Nuxt.js 3.x**: Vue.jsフレームワークをベースにしたサーバーサイドレンダリングおよび静的サイトジェネレーター。
- **Vuetify**: Vue.js向けのマテリアルデザインコンポーネントライブラリ。
- **Firebase Authentication**: ユーザー認証。
- **Firebase Firestore**: データの保存および管理を行うNoSQLデータベース。

## セットアップ

1. Firebaseコンソールでプロジェクトを作成し、AuthenticationとFirestoreを有効にします。
2. `firebaseConfig.ts`ファイルにプロジェクトの設定を追加します。

```typescript
// firebaseConfig.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
```

## 起動

開発サーバーを http://localhost:3000 で起動します:

```bash
npm run dev
```

## Production

本番環境向けにアプリケーションをビルドします:

```bash
npm run build
```

デプロイに関する詳細な情報はNuxtのデプロイメントドキュメントを確認してください。

## Firebaseホスティングへのデプロイ

Firebase CLIを使ってアプリケーションをデプロイします。

```bash
npm install -g firebase-tools
firebase login
firebase init
```

以下のコマンドでデプロイを実行します。

```bash
npm run build
firebase deploy
```

## 使用方法

### アカウントの作成
1. サインアップページで新しいアカウントを作成します。
2. 左側の「アカウント作成」ボタンを押し、任意のメールアドレスとパスワードを入力します。
3. 入力後、「アカウントを作成する」ボタンを押します。メールアドレスやパスワードに問題がなければ、サインアップが完了し、Todoリスト管理画面へ遷移します。

### ログイン
1. 作成したアカウントでログインします。
2. リロード等で再度ログイン画面に遷移した場合は、サインアップ時に作成したメールアドレスとパスワードを入力します。
3. 「ログイン」ボタンを押下することで、Todoリスト管理画面へ遷移します。

### タスクの管理
- **タスクの追加**: テキストフィールドにタスクを入力し、「追加」ボタンをクリックします。
- **タスクの完了**: 緑色の完了チェックボックスをクリックしてタスクを完了済みにします。
- **タスクの削除**: 赤色の削除ボタンをクリックしてタスクを削除します。
- **タスクのフィルタリング**: タスクフィルタードロップダウンで「すべて」「未完了」「完了」を選択し、タスクをフィルタリングします。
