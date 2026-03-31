<script setup lang="ts">
import { ref, onMounted } from 'vue';

const scrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });
});

const menuItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'HISTORY', href: '#experience' },
  { name: 'REPO', href: '#projects' },
  { name: 'TERMINAL', href: '#contact' },
];
</script>

<template>
  <nav :class="['fixed w-full z-50 glass transition-all duration-500', scrolled ? 'h-16 border-b border-[#45F3FF]/20' : 'h-24 border-b border-transparent']">
    <div class="max-w-7xl mx-auto px-8 h-full flex items-center justify-between font-tech">
      <div class="flex items-center gap-3 cursor-pointer group" @click="() => $emit('scrollToTop')">
        <div class="w-10 h-10 bg-gradient-to-br from-[#45F3FF] to-[#A855F7] p-px">
          <div class="w-full h-full bg-[#050505] flex items-center justify-center">
            <i class="ph ph-terminal-window text-[#45F3FF] text-xl"></i>
          </div>
        </div>
        <span class="font-bold text-xl tracking-[0.2em] text-white uppercase">ANNE<span class="text-[#45F3FF]">.</span>V3</span>
      </div>
      <div class="hidden md:flex space-x-12 font-mono text-[11px] tracking-[0.3em] uppercase text-slate-400">
        <a v-for="item in menuItems" :key="item.name" :href="item.href" class="hover:text-[#45F3FF] transition-colors relative group">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.glass { background: rgba(5, 5, 5, 0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
</style>
