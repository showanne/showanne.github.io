<script setup lang="ts">
  // Global head metadata
  useHead({
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} | Anne's Portfolio`
        : '詹琇安 Anne — Full Stack Developer 作品集';
    },
    htmlAttrs: {
      lang: 'zh-Hant'
    },
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      }
    ]
  });
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <AppFooter />
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
