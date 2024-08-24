<template>
    <v-app>
      <v-main class="d-flex align-center justify-center" style="background-color: #f5f5f5; min-height: 100vh;">
        <v-card class="pa-10" elevation="3" style="width: 500px;">
          <v-card-title class="text-h4 text-center">新しいパスワードを設定</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="resetPassword">
              <v-text-field
                v-model="newPassword"
                label="新しいパスワード"
                type="password"
                required
                outlined
              ></v-text-field>
              <v-btn type="submit" color="primary" block>パスワードをリセット</v-btn>
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
  import { useRouter, useRoute } from 'vue-router'
  
  const newPassword = ref('')
  const snackbar = ref({
    show: false,
    message: '',
    color: '',
    timeout: 3000 
  })
  
  const router = useRouter()
  const route = useRoute()
  
  const resetPassword = async () => {
    try {
      const { token, email } = route.query
      const response = await axios.post('/api/reset-password', { token, email, newPassword: newPassword.value });
      showSnackbar('パスワードがリセットされました。', 'success');
      router.push('/login')
    } catch (error) {
      showSnackbar('エラー: ' + error.response.data.message, 'error');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  }
  
  const showSnackbar = (message, color) => {
    snackbar.value.message = message
    snackbar.value.color = color
    snackbar.value.show = true
  }
  </script>
  
  