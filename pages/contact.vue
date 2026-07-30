<script setup lang="ts">
definePageMeta({
  layout: 'empty'
});

useHead({
  title: '聯絡方式',
  meta: [{ name: 'description', content: '聯絡 Anne，歡迎討論合作與專案開發' }]
});
</script>

<template>
  <main class="min-h-screen bg-[#050505] text-[#C5C6C7]">
    <FusionContact />
  </main>
</template>
