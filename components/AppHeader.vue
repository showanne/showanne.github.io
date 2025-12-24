<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const isMenuOpen = ref(false);

  const navLinks = [
    { name: '關於我', path: '/#about' },
    { name: '專業技能', path: '/#skills' },
    { name: '精選專案', path: '/projects' },
    { name: '聯絡我', path: '/contact' }
  ];

  function closeMenu() {
    isMenuOpen.value = false;
  }
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="{
      'bg-gray-950/80 border-b border-purple-500/20 backdrop-blur-sm':
        route.path !== '/',
      'bg-transparent': route.path === '/'
    }"
  >
    <div
      class="container mx-auto flex h-16 max-w-7xl items-center justify-between px-5"
    >
      <NuxtLink to="/" class="text-xl font-bold tracking-wide">
        Anne
        <span class="text-shadow-[0_0_10px_rgba(255,215,0,0.5)] text-yellow-300"
          >.</span
        >
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Nav (Dropdown) -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-purple-500/20"
    >
      <nav class="flex flex-col items-center p-4 gap-2">
        <NuxtLink
          to="/"
          @click="closeMenu"
          class="nav-link-mobile"
          active-class="nav-link-active"
          >首頁</NuxtLink
        >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="closeMenu"
          class="nav-link-mobile"
          active-class="nav-link-active"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
