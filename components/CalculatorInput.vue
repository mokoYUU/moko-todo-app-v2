<!-- /components/CalculatorInput.vue -->
<template>
    <v-card>
      <v-card-title>金額入力</v-card-title>
      <v-card-text>
        <v-text-field v-model="amount" label="金額 (円)" type="number" outlined></v-text-field>
        <v-btn color="primary" @click="calculate">計算</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const amount = ref('')
  
  const calculate = () => {
    if (amount.value) {
      console.log(`計算した金額: ${amount.value}円`)
      // 計算処理
    } else {
      alert('金額を入力してください。')
    }
  }
  </script>
  