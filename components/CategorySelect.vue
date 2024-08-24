<!-- /components/CategorySelect.vue -->
<template>
    <v-select
      v-model="selectedCategory"
      :items="categories"
      label="カテゴリーを選択"
      outlined
      required
    ></v-select>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCategory = ref(null)
  const categories = ref(['食費', '交通費', '娯楽', '家賃', '給与'])
  </script>
  