<!-- /components/CarryOver.vue -->
<template>
    <v-card>
      <v-card-title>収支繰越</v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="carryOver">繰越</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  const carryOver = () => {
    console.log('収支繰越が実行されました。')
    // 繰越処理
  }
  </script>
  