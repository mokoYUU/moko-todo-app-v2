<template>
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>収支管理フォーム</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-card class="pa-6 mb-6" elevation="2">
            <v-card-title class="text-h5">収支の入力</v-card-title>
            <v-divider></v-divider>
            <v-form @submit.prevent="handleSubmit">
  
              <!-- 日付ピッカー -->
              <v-row>
                <v-col cols="12" sm="6">
                  <DatePicker v-model="date" />
                </v-col>
              </v-row>
  
              <!-- 収支の詳細 -->
              <v-row>
                <v-col cols="12">
                  <DetailsInput v-model="details" />
                </v-col>
              </v-row>
  
              <!-- メモの入力 -->
              <v-row>
                <v-col cols="12">
                  <MemoInput v-model="memo" />
                </v-col>
              </v-row>
  
              <!-- カテゴリー選択 -->
              <v-row>
                <v-col cols="12" sm="6">
                  <CategorySelect v-model="selectedCategory" />
                </v-col>
              </v-row>
  
              <!-- 支出/収入切り替え -->
              <v-row>
                <v-col cols="12" sm="6">
                  <TransactionTypeToggle v-model="transactionType" />
                </v-col>
              </v-row>
  
              <!-- 送信ボタン -->
              <v-btn type="submit" color="primary" block>保存</v-btn>
            </v-form>
          </v-card>
        </v-container>
      </v-main>
  
      <!-- フィードバック表示スナックバー -->
      <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
        {{ snackbar.message }}
      </v-snackbar>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, signOut } from 'firebase/auth' // Firebase Auth のインポート
  
  import DatePicker from '~/components/DatePicker.vue'
  import DetailsInput from '~/components/DetailsInput.vue'
  import MemoInput from '~/components/MemoInput.vue'
  import CategorySelect from '~/components/CategorySelect.vue'
  import TransactionTypeToggle from '~/components/TransactionTypeToggle.vue'
  
  const date = ref(new Date().toISOString().substr(0, 10))
  const details = ref('')
  const memo = ref('')
  const selectedCategory = ref(null)
  const transactionType = ref('支出')
  
  const snackbar = ref({
    show: false,
    message: '',
    color: '',
    timeout: 3000 
  })
  
  const router = useRouter()
  const auth = getAuth() // Firebase Auth のインスタンス取得
  
  const handleSubmit = () => {
    console.log('日付:', date.value)
    console.log('詳細:', details.value)
    console.log('メモ:', memo.value)
    console.log('カテゴリー:', selectedCategory.value)
    console.log('タイプ:', transactionType.value)
  }
  
  const logout = async () => {
    try {
      await signOut(auth)
      console.log('ログアウトしました')
      showSnackbar('ログアウトしました。', 'success')
      router.push('/login') // 適切なページにリダイレクト
    } catch (error) {
      console.error('ログアウトエラー:', error)
      showSnackbar('ログアウトに失敗しました。', 'error')
    }
  }
  
  const showSnackbar = (message, color) => {
    snackbar.value.message = message
    snackbar.value.color = color
    snackbar.value.show = true
  }
  </script>
  