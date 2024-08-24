<template>
    <v-app>
      <v-main class="d-flex align-center justify-center" style="background-color: #f5f5f5; min-height: 100vh;">
        <v-card class="pa-10" elevation="3" style="width: 500px;">
          <v-card-title class="text-h4 text-center">パスワードリセット</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="resetPassword">
              <v-text-field
                v-model="email"
                label="メールアドレス"
                type="email"
                required
                outlined
              ></v-text-field>
              <v-btn type="submit" color="primary" block>リセットリンクを送信</v-btn>
            </v-form>
          </v-card-text>
          <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
            {{ snackbar.message }}
          </v-snackbar>
        </v-card>
      </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const snackbar = ref({
  show: false,
  message: '',
  color: '',
  timeout: 3000 
})

const resetPassword = async () => {
  try {
    const response = await axios.post('/api/send-reset-email', { email: email.value });
    showSnackbar('パスワードリセットリンクがメールに送信されました。', 'success');
  } catch (error) {
    showSnackbar('エラー: ' + error.message, 'error');
  }
}

const showSnackbar = (message, color) => {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.show = true
}
</script>
