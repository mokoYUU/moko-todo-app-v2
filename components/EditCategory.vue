<!-- /components/EditCategory.vue -->
<template>
    <v-card>
      <v-card-title>カテゴリー編集</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="編集するカテゴリーを選択"
          outlined
          required
        ></v-select>
        <v-text-field v-model="newCategoryName" label="新しい名前" outlined></v-text-field>
        <v-btn color="primary" @click="editCategory">保存</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCategory = ref(null)
  const newCategoryName = ref('')
  const categories = ref(['食費', '交通費', '娯楽', '家賃', '給与'])
  
  const editCategory = () => {
    if (selectedCategory.value && newCategoryName.value) {
      console.log(`編集するカテゴリー: ${selectedCategory.value}, 新しい名前: ${newCategoryName.value}`)
      // 編集処理
    } else {
      alert('カテゴリーと新しい名前を入力してください。')
    }
  }
  </script>
  