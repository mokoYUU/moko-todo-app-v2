<!-- /components/DetailsInput.vue -->
<template>
    <v-card>
      <v-card-title>詳細入力</v-card-title>
      <v-card-text>
        <v-textarea
          v-model="details"
          label="支出/収入の詳細"
          outlined
          rows="3"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const details = ref('')
  </script>
  