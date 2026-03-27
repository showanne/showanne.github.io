<template>
  <div class="min-h-screen bg-[#0D0D0D] text-white selection:bg-amber-500/30">

    <!-- Navigation -->
    <nav
      :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6']">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1
          class="text-2xl font-serif tracking-widest bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent font-bold">
          CODE <span class="text-sm font-light text-gray-400 ml-2 italic">& CRAFT</span>
        </h1>
        <div class="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <a v-for="item in menuItems" :key="item" href="#" class="hover:text-amber-400 transition-colors">{{ item
            }}</a>
        </div>
        <button
          class="border border-amber-500/50 px-5 py-2 text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
          聯絡我
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0D0D0D] z-10"></div>
        <!-- 背景改為更具科技感的暗色抽象圖片 -->
        <div
          class="w-full h-full bg-[url('https://images.unsplash.com/photo-1517139272242-5f5990bc70ca?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center scale-105 animate-pulse-slow">
        </div>
      </div>

      <div class="relative z-20 text-center px-4 max-w-4xl">
        <p class="text-amber-400 tracking-[0.3em] mb-4 uppercase text-sm animate-fade-in">全端開發 · 架構設計 · 數據驅動</p>
        <h2 class="text-6xl md:text-8xl font-serif mb-6 tracking-tight leading-tight">
          數位 <span class="italic font-light text-amber-100">工藝師</span>
        </h2>
        <p class="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-2xl mx-auto">
          擅長於極簡與效能之間尋找完美平衡。
          從底層數據邏輯到極致的前端交互，將創意轉化為可擴展的軟體解決方案。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-amber-500 text-black font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-amber-400 transition-all transform hover:scale-105">
            <i data-lucide="code" class="w-5 h-5"></i> 檢視專案
          </button>
          <button
            class="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            <i data-lucide="download" class="w-5 h-5"></i> 下載履歷
          </button>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>

    <!-- Core Strengths Section (原劇集亮點) -->
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div v-for="(item, idx) in strengths" :key="idx"
          class="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-2xl">
          <div
            class="mb-6 inline-flex p-3 rounded-full bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">
            <i :data-lucide="item.icon" class="w-7 h-7"></i>
          </div>
          <h3 class="text-xl font-serif mb-4 text-amber-200">{{ item.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ item.content }}
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section (原人物誌) -->
    <section class="py-24 bg-gradient-to-b from-transparent to-black/40">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
          <div>
            <h2 class="text-amber-500 uppercase tracking-widest text-sm mb-2 font-bold">Featured Projects</h2>
            <h3 class="text-4xl font-serif">精選作品</h3>
          </div>
          <button class="text-amber-500 flex items-center gap-2 hover:underline group">
            查看 GitHub 全庫 <i data-lucide="chevron-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(project, idx) in projects" :key="idx"
            class="relative group overflow-hidden rounded-3xl aspect-[16/9] bg-gray-900">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <!-- 專案展示圖 -->
            <div :style="{ backgroundImage: `url(${project.image})` }"
              class="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0">
            </div>

            <div class="relative z-20 h-full flex flex-col justify-end p-10">
              <span class="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">{{ project.tech }}</span>
              <h4 class="text-3xl font-serif mb-4">{{ project.name }}</h4>
              <p
                class="text-gray-300 max-w-md text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {{ project.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section (原劇照滾動) -->
    <section class="py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 class="text-3xl font-serif italic text-amber-100/80">「程式碼是我的詩，效能是我的韻律。」</h3>
      </div>

      <!-- 橫向滾動顯示技能標籤或證書 -->
      <div class="flex gap-4 animate-scroll whitespace-nowrap px-4">
        <div v-for="skill in skills" :key="skill"
          class="min-w-[200px] h-[100px] bg-white/5 flex items-center justify-center rounded-lg border border-white/10 hover:border-amber-500/50 transition-colors">
          <span class="text-gray-400 font-serif text-lg tracking-widest group-hover:text-amber-500">{{ skill }}</span>
        </div>
        <!-- 為了無限滾動效果再顯示一次 -->
        <div v-for="skill in skills" :key="skill + '_repeat'"
          class="min-w-[200px] h-[100px] bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
          <span class="text-gray-400 font-serif text-lg tracking-widest">{{ skill }}</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-16 px-6 border-t border-white/5">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-2">
          <h2 class="text-xl font-serif text-amber-500 mb-6 tracking-widest uppercase">ENGINEERED BY ME</h2>
          <p class="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            專注於構建高效、可擴展且具備美感的數位產品。如果您有任何有趣的合作想法，歡迎與我聯繫。
          </p>
          <div class="flex gap-4">
            <i data-lucide="github" class="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"></i>
            <i data-lucide="linkedin" class="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"></i>
            <i data-lucide="mail" class="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h4 class="text-white font-bold mb-6 text-sm uppercase">站內導航</h4>
          <ul class="text-gray-500 text-sm space-y-4">
            <li><a href="#" class="hover:text-amber-400 transition-colors">精選作品集</a></li>
            <li><a href="#" class="hover:text-amber-400 transition-colors">我的技術棧</a></li>
            <li><a href="#" class="hover:text-amber-400 transition-colors">關於我的理念</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-6 text-sm uppercase">聯絡諮詢</h4>
          <div class="flex border-b border-gray-700 py-2">
            <input type="text" placeholder="留下您的訊息" class="bg-transparent text-sm w-full focus:outline-none" />
            <button class="text-amber-500 hover:text-amber-400">發送</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

const scrolled = ref(false);
const menuItems = ['首頁', '技術', '專案', '聯繫'];

// Replace hardcoded strengths with a more representative static one or map from skills
const strengths = [
  { icon: 'layers', title: '前端開發', content: '使用 Vue.js 和 Nuxt.js 構建高效、可交互的前端介面。' },
  { icon: 'server', title: '後端技術', content: '熟悉 Node.js 與 Express，能建立穩定的 RESTful API。' },
  { icon: 'cpu', title: '開發工具', content: '使用 Git, Figma, 和各式開發工具提升工作效率。' }
];

// Map projects from the imported JSON data
const projects = computed(() => portfolioData.projects.featured.map(p => ({
  name: p.title,
  tech: p.tags.slice(0, 3).join(' / '), // Show first 3 tags
  desc: p.description,
  // Assuming a placeholder image logic as the JSON doesn't contain images
  image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426`
})));

// Concatenate all skills from the JSON data for the scrolling banner
const skills = computed(() => [
  ...portfolioData.skills.frontend.highlight,
  ...portfolioData.skills.frontend.tags,
  ...portfolioData.skills.backend.highlight,
  ...portfolioData.skills.backend.tags,
  ...portfolioData.skills.tools.tags
]);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Lucide icons would be handled by a Nuxt plugin or a component library
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/*
  The original <head> content including <style> tags and <link> for fonts
  should be managed at the Nuxt.js level (e.g., nuxt.config.ts or useHead).
  For this conversion, we're placing styles here for direct correspondence,
  but in a real Nuxt app, these would be externalized or handled by Nuxt.
*/
body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: #0D0D0D;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}

@keyframes pulse-slow {

  0%,
  100% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(1.1);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
