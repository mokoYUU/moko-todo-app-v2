<template>
  <v-app>
    <!-- メインコンテンツ -->
    <v-main class="d-flex align-center justify-center" style="background-color: #f5f5f5; min-height: 100vh;">
      <v-card class="pa-10" elevation="3" style="width: 500px;">
        <v-card-title class="text-h4 text-center">ログイン</v-card-title>
        <v-card-text>
          <!-- ログインフォーム -->
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="email"
              label="メールアドレス"
              type="email"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="パスワード"
              type="password"
              required
              outlined
              class="mt-4"
            ></v-text-field>
            <!-- パスワードリセットリンク -->
            <v-btn @click="goToResetPassword" text small class="mt-2" block>パスワードを忘れた場合はこちら</v-btn>
            <!-- ボタン配置 -->
            <v-row justify="center" class="mt-6">
              <v-col cols="12" sm="6">
                <v-btn @click="goToSignUp" color="secondary" block>アカウント作成画面へ</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn type="submit" color="primary" block>ログインする</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <!-- フィードバック表示スナックバー -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
          {{ snackbar.message }}
        </v-snackbar>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const { $auth } = useNuxtApp()
const snackbar = ref({
  show: false,
  message: '',
  color: '',
  timeout: 3000 
})

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword($auth, email.value, password.value)
    showSnackbar('ログインに成功しました！', 'success')
    //await router.push('/tasks')
    await router.push('IncomeExpenseForm')
  } catch (error) {
    let message = 'ログインエラー: '
    if (error.code === 'auth/invalid-credential') {
      message += 'ユーザーが見つかりません。アカウントを作成してください。'
    } else {
      message += error.message
    }
    showSnackbar(message, 'error')
  }
}

const goToSignUp = () => {
  router.push('/signup')
}

const goToResetPassword = () => {
  router.push('/reset-password')
}

const showSnackbar = (message, color) => {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.show = true
}
</script>
