<!-- /components/BudgetSetting.vue -->
<template>
    <v-card>
      <v-card-title>予算設定</v-card-title>
      <v-card-text>
        <v-form>
          <v-select
            v-model="selectedCategory"
            :items="categories"
            label="カテゴリーを選択"
            required
          ></v-select>
          <v-text-field
            v-model="budget"
            label="月間予算 (円)"
            type="number"
            outlined
          ></v-text-field>
          <v-btn color="primary" @click="setBudget">設定</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCategory = ref(null)
  const budget = ref('')
  const categories = ref(['食費', '交通費', '娯楽', '家賃', '給与'])
  
  const setBudget = () => {
    if (selectedCategory.value && budget.value) {
      console.log(`カテゴリー: ${selectedCategory.value}, 予算: ${budget.value}円`)
      // 予算設定の処理
    } else {
      alert('カテゴリーと予算を入力してください。')
    }
  }
  </script>
  