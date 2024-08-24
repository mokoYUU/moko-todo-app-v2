<!-- /components/DeleteCategory.vue -->
<template>
    <v-card>
      <v-card-title>カテゴリー削除</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="削除するカテゴリーを選択"
          outlined
          required
        ></v-select>
        <v-btn color="error" @click="deleteCategory">削除</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCategory = ref(null)
  const categories = ref(['食費', '交通費', '娯楽', '家賃', '給与'])
  
  const deleteCategory = () => {
    if (selectedCategory.value) {
      console.log(`削除するカテゴリー: ${selectedCategory.value}`)
      // 削除処理
    } else {
      alert('カテゴリーを選択してください。')
    }
  }
  </script>
  