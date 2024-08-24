<!-- /components/MemoInput.vue -->
<template>
    <v-card>
      <v-card-title>メモ入力</v-card-title>
      <v-card-text>
        <v-textarea
          v-model="memo"
          label="メモ"
          outlined
          rows="3"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const memo = ref('')
  </script>
  