<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: '詹琇安 Anne | Mobius Style Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&family=Noto+Serif+TC:wght@400;700&family=JetBrains+Mono:wght@400&display=swap'
    }
  ],
  script: [
    {
      src: 'https://unpkg.com/lucide@latest',
      defer: true,
      onload: () => {
        // @ts-ignore
        if (typeof lucide !== 'undefined') {
          // @ts-ignore
          lucide.createIcons();
        }
      }
    }
  ]
});

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Re-run lucide icons in case script loaded early
  // @ts-ignore
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const menuItems = [
  { name: '首頁', href: '#home' },
  { name: '關於', href: '#about' },
  { name: '作品', href: '#projects' },
  { name: '技術', href: '#gallery' },
];

// Map Portfolio Data
const featuredProjects = computed(() => portfolioData.projects.featured);
const otherProjects = computed(() => portfolioData.projects.other);
const contact = computed(() => portfolioData.contact);

const frontendHighlights = computed(() => portfolioData.skills.frontend.highlight.join(' / '));
const backendHighlights = computed(() => portfolioData.skills.backend.highlight.join(' / '));

</script>

<template>
  <div class="antialiased overflow-x-hidden bg-[#0f172a] text-[#f8fafc] selection:bg-amber-500/30">

    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300 border-b', scrolled ? 'bg-slate-900/90 backdrop-blur-md py-2 border-slate-800' : 'bg-transparent py-4 border-transparent']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-2">
            <i data-lucide="infinity" class="h-8 w-8 text-amber-400"></i>
            <span class="text-xl font-bold tracking-widest uppercase">Anne <span class="text-slate-500 text-sm">/ 詹琇安</span></span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a v-for="item in menuItems" :key="item.name" :href="item.href"
                class="hover:text-amber-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">{{ item.name }}</a>
              <a href="#watch"
                class="bg-amber-500 text-slate-900 hover:bg-amber-400 px-4 py-2 rounded-sm text-sm font-bold transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)]">聯絡我</a>
            </div>
          </div>
          <div class="md:hidden">
            <button class="text-slate-300 hover:text-white p-2">
              <i data-lucide="menu" class="h-6 w-6"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1496369666323-868bf9769562?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
        <div class="hero-gradient absolute inset-0"></div>
      </div>

      <!-- Abstract Background Animation -->
      <div class="mobius-bg">
        <div class="mobius-ring"></div>
        <div class="mobius-ring" style="width: 600px; height: 600px; animation-duration: 40s; border-color: rgba(34, 211, 238, 0.2);"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div class="mb-4 flex justify-center space-x-4 text-xs tracking-[0.3em] text-cyan-400 opacity-80 mono-font">
          <span>SYSTEM ONLINE</span>
          <span>//</span>
          <span>STATUS: STABLE</span>
          <span>//</span>
          <span>CORE: FULL-STACK</span>
        </div>

        <h1 class="text-6xl md:text-8xl font-bold serif-title mb-2 text-white glitch-text tracking-tighter">
          詹琇安
        </h1>
        <p class="text-2xl md:text-3xl font-light text-slate-300 uppercase tracking-widest mb-8 font-sans">
          Full Stack Developer
        </p>

        <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed border-l-2 border-amber-500/50 pl-6 italic">
          「在無盡的程式碼中，尋找最優解的優雅。」<br>
          熱衷於探索新技術，將複雜的邏輯轉化為直觀的使用者體驗。
        </p>

        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#projects" class="group relative px-8 py-3 bg-transparent border border-amber-400 text-amber-400 font-bold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
            <span class="absolute w-0 h-full bg-amber-400 left-0 top-0 transition-all duration-300 group-hover:w-full opacity-10"></span>
            查看專案
          </a>
          <a href="#about" class="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
            <i data-lucide="play-circle" class="h-10 w-10"></i>
            <span>關於我</span>
          </a>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <i data-lucide="chevron-down" class="h-8 w-8"></i>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-slate-900 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold serif-title text-white flex items-center">
              <span class="w-12 h-1 bg-amber-500 mr-4"></span>
              個人簡介
            </h2>
            <p class="text-slate-400 leading-8 text-lg">
              我是 <strong class="text-slate-200">詹琇安 (Anne)</strong>，一名專注於全端開發與產品邏輯的工程師。
            </p>
            <p class="text-slate-400 leading-8">
              具備從 UI/UX 設計到前後端系統架構的完整開發能力。擅長使用 Vue.js、Nuxt.js 建構高效能前端應用，並結合 Node.js 與 MongoDB 打造穩定的後端服務。
            </p>
            <p class="text-slate-400 leading-8">
              我相信技術不只是工具，更是解決問題、創造價值的媒介。在多變的技術浪潮中，我始終保持好奇心與持續學習的動力。
            </p>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="bg-slate-800 p-4 border-l-2 border-cyan-500">
                <h4 class="text-cyan-400 font-bold mb-1">前端核心</h4>
                <p class="text-sm text-slate-300">{{ frontendHighlights }}</p>
              </div>
              <div class="bg-slate-800 p-4 border-l-2 border-amber-500">
                <h4 class="text-amber-400 font-bold mb-1">後端開發</h4>
                <p class="text-sm text-slate-300">{{ backendHighlights }}</p>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/30"></div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30"></div>
            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
              alt="Programming Concept"
              class="w-full h-[500px] object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl">
            <div class="absolute bottom-0 left-0 bg-black/80 p-4 w-full backdrop-blur-sm">
              <p class="text-xs font-mono text-cyan-400">DEV_STATUS: ACTIVE // EXPERTISE: FULL_STACK</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold serif-title text-white mb-4">精選作品集</h2>
          <div class="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="project in featuredProjects" :key="project.title"
            class="group relative overflow-hidden bg-slate-900 border border-slate-800 transition-transform duration-300 hover:-translate-y-2">
            <div class="h-80 overflow-hidden relative">
              <div class="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 font-mono text-xl group-hover:scale-110 transition-all duration-500">
                [ {{ project.title.substring(0, 10) }}... ]
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-1">{{ project.title }}</h3>
              <p class="text-amber-400 text-sm tracking-widest uppercase mb-4">{{ project.type }}</p>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags.slice(0, 4)" :key="tag" class="text-[10px] border border-slate-700 px-2 py-1 text-slate-500 uppercase tracking-tighter">
                  {{ tag }}
                </span>
              </div>
              <div class="flex space-x-4">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank" class="text-xs text-cyan-400 hover:text-white transition-colors underline underline-offset-4">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery / More Projects -->
    <section id="gallery" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-bold serif-title text-white">其他作品與實驗</h2>
            <p class="text-slate-500 mt-2">持續累積的開發印記...</p>
          </div>
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div class="w-3 h-3 bg-slate-700 rounded-full"></div>
            <div class="w-3 h-3 bg-slate-700 rounded-full"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="project in otherProjects" :key="project.title"
            class="bg-slate-800/50 p-6 rounded-sm border border-slate-700 hover:border-amber-400/50 transition-all group">
            <h4 class="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{{ project.title }}</h4>
            <p class="text-slate-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
            <a :href="project.link.url" target="_blank" class="text-xs font-mono text-cyan-400 flex items-center gap-1">
              VIEW_SOURCE <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer / Contact -->
    <footer id="watch" class="bg-black py-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-8">與我聯絡</h3>

        <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a :href="'mailto:' + contact.email"
            class="w-64 py-4 bg-amber-500 text-slate-900 font-bold rounded-md hover:bg-amber-400 transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
            <i data-lucide="mail" class="w-5 h-5"></i>
            <span>{{ contact.email }}</span>
          </a>
        </div>

        <div class="flex justify-center space-x-8 mb-8 text-slate-500">
          <a :href="contact.github" target="_blank" class="hover:text-amber-400 transition-colors"><i data-lucide="github" class="w-6 h-6"></i></a>
          <a :href="contact.linkedin" target="_blank" class="hover:text-amber-400 transition-colors"><i data-lucide="linkedin" class="w-6 h-6"></i></a>
        </div>

        <p class="text-slate-600 text-sm">
          &copy; {{ new Date().getFullYear() }} Anne Jan. All Rights Reserved. <br>
          Designed in Mobius Cinematic Style.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
}

.serif-title {
  font-family: 'Noto Serif TC', serif;
}

.mono-font {
  font-family: 'JetBrains Mono', monospace;
}

/* Glitch Effect Animation */
.glitch-text:hover {
  text-shadow: 2px 0 #fbbf24, -2px 0 #22d3ee;
  animation: noise-anim 0.3s infinite linear alternate-reverse;
}

@keyframes noise-anim {
  0% { clip-path: inset(10% 0 80% 0); }
  20% { clip-path: inset(80% 0 1% 0); }
  40% { clip-path: inset(40% 0 20% 0); }
  60% { clip-path: inset(10% 0 50% 0); }
  80% { clip-path: inset(70% 0 5% 0); }
  100% { clip-path: inset(30% 0 60% 0); }
}

/* Custom Gradient for Hero */
.hero-gradient {
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 1) 100%);
}

/* Mobius Strip CSS approximation */
.mobius-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.1;
}

.mobius-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  animation: spin 60s linear infinite;
}

.mobius-ring::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 50%;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
