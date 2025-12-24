<script setup lang="ts">
  useHead({
    title: '聯絡方式',
    bodyAttrs: {
      // Apply dark theme and background styles to the body for this page
      class: 'dark bg-gray-950 text-white'
    }
  });
</script>

<template>
  <main class="relative min-h-screen px-5 py-14 sm:py-20">
    <!-- Background Gradients & Grid -->
    <div class="fixed inset-0 -z-10 pointer-events-none">
      <div
        class="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"
      ></div>
      <div
        class="absolute top-0 left-[10%] w-[1200px] h-[600px] bg-radial-gradient from-purple-500/20 to-transparent to-55%"
      ></div>
      <div
        class="absolute top-[20%] left-[90%] w-[900px] h-[500px] bg-radial-gradient from-yellow-400/10 to-transparent to-55%"
      ></div>
      <div
        class="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(90deg,rgba(128,0,128,0.25)_0_1px,transparent_1px_56px),repeating-linear-gradient(0deg,rgba(128,0,128,0.2)_0_1px,transparent_1px_72px)]"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto">
      <header class="mb-7 py-2.5">
        <div
          class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-purple-500/30 bg-black/50 backdrop-blur-sm text-xs tracking-[0.14em] text-gray-300"
        >
          CONTACT
        </div>
        <h1
          class="mt-3.5 mb-2.5 text-4xl font-bold tracking-wide text-shadow-[0_0_14px_rgba(255,215,0,0.18)]"
        >
          聯絡方式
        </h1>
        <p class="mb-4.5 max-w-prose text-gray-300">
          歡迎透過以下方式與我聯繫，期待與您的交流！
        </p>
        <NuxtLink to="/" class="btn-ghost"> &lt; 返回首頁</NuxtLink>
      </header>
      <!-- 引用聯絡區塊元件，並傳入 show-form prop 來顯示表單 -->
      <ContactSection :show-form="true" />
    </div>
  </main>
</template>
