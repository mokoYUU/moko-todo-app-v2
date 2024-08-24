<!-- /components/TransactionTypeToggle.vue -->
<template>
    <v-card>
      <v-card-title>支出/収入切り替え</v-card-title>
      <v-card-text>
        <v-btn-toggle v-model="transactionType" mandatory>
          <v-btn value="収入">収入</v-btn>
          <v-btn value="支出">支出</v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const transactionType = ref('支出')
  </script>
  