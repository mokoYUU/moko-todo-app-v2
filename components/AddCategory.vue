<!-- /components/AddCategory.vue -->
<template>
    <v-card>
      <v-card-title>カテゴリー追加</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="newCategory" label="カテゴリー名" outlined></v-text-field>
          <v-btn color="primary" @click="addCategory">追加</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const newCategory = ref('')
  
  const addCategory = () => {
    if (newCategory.value) {
      console.log(`新しいカテゴリー: ${newCategory.value}`)
      // カテゴリー追加処理
      newCategory.value = ''
    } else {
      alert('カテゴリー名を入力してください。')
    }
  }
  </script>
  