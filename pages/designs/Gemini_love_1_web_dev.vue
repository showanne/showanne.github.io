<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Showanne | Full-Stack Developer Portfolio (Dual Theme)',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;700&family=Fira+Code:wght@400;500&display=swap'
    }
  ]
});

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Data Mapping
const featuredProjects = computed(() => portfolioData.projects.featured);
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

const menuItems = [
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
</script>

<template>
  <div class="bg-[#0F172A] text-[#F8FAFC] font-sans antialiased selection:bg-[#C5A572] selection:text-[#0F172A]">

    <!-- 粒子背景 -->
    <div class="particles"></div>

    <!-- 導航列 -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-[#0F172A]/95 shadow-lg py-4' : 'glass-panel py-6']">
      <div class="container mx-auto px-6 flex justify-between items-center relative z-10">
        <a href="#" class="text-xl font-mono font-bold tracking-widest text-[#C5A572] hover:text-white transition-colors">
          SHOWANNE<span class="text-[#38BDF8]">.</span>
        </a>
        <div class="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-gray-400 font-mono">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" class="hover:text-[#C5A572] transition-colors">{{ item.name }}</a>
        </div>
        <a :href="contact.github" target="_blank" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 flex">
        <!-- 左側：視覺美學 (前端) -->
        <div class="w-1/2 h-full bg-slate-800 relative group overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay cinematic-filter group-hover:scale-105 transition-transform duration-[3s]"
            style="background-image: url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop');">
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#1E293B]/80 to-transparent"></div>
          <div class="absolute bottom-20 left-10 md:left-20 font-serif text-white/20 text-4xl md:text-8xl select-none uppercase">
            UI / UX<br>FRONTEND
          </div>
        </div>
        <!-- 右側：資料邏輯 (後端) -->
        <div class="w-1/2 h-full bg-[#0a0f18] relative group overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay cinematic-filter group-hover:scale-105 transition-transform duration-[3s]"
            style="background-image: url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop');">
          </div>
          <div class="absolute inset-0 bg-gradient-to-l from-[#0F172A] via-transparent to-transparent"></div>
          <div class="absolute top-32 right-10 md:right-20 font-mono text-[#C5A572]/10 text-4xl md:text-8xl select-none text-right uppercase">
            SERVER<br>BACKEND
          </div>
        </div>
      </div>

      <!-- 中央標題 -->
      <div class="relative z-10 text-center px-4">
        <p class="font-mono text-[#C5A572] text-sm md:text-base tracking-[0.4em] mb-4 uppercase animate-fade-in-up">
          Anne Jan
        </p>
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-tight opacity-0 animate-fade-in-up" style="animation-delay: 0.2s;">
          邏輯與美學的<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#38BDF8] italic">雙重奏</span>
        </h1>
        <p class="text-lg md:text-xl font-light text-gray-400 mt-6 tracking-widest font-sans opacity-0 animate-fade-in-up" style="animation-delay: 0.4s;">
          FULL-STACK SOFTWARE ENGINEER
        </p>
        <div class="mt-12 flex justify-center gap-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.6s;">
          <a href="#projects" class="px-8 py-3 bg-[#C5A572] text-[#0F172A] font-bold rounded hover:bg-white hover:shadow-[0_0_20px_rgba(197,165,114,0.5)] transition-all duration-300">
            探索作品集
          </a>
        </div>
      </div>

      <div class="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </header>

    <!-- Philosophy & Dual Cards -->
    <section id="philosophy" class="py-32 relative bg-[#0F172A] z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-5/12 text-left animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-8 border-l-4 border-[#C5A572] pl-6 leading-snug">
              在虛擬的代碼中<br>構築真實的體驗
            </h2>
            <div class="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                開發不僅僅是編寫程式碼，而是一場<strong class="text-[#C5A572] font-normal">「前端與後端的對話」</strong>。
              </p>
              <p>
                我致力於將嚴謹的<strong class="text-[#38BDF8] font-normal">資料庫架構與 API 邏輯</strong>（幕後），轉化為使用者眼前流暢、美觀且直覺的<strong class="text-[#C5A572] font-normal">互動介面</strong>（幕前）。
              </p>
              <p>
                熟練掌握 Vue/Nuxt 前端生態，並深耕 Node.js 與資料庫運作，讓我能在專案中以全局視角解決問題，打造內外兼修的數位產品。
              </p>
            </div>
          </div>

          <!-- Flip Cards -->
          <div class="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Front-End Card -->
            <div class="flip-card h-[380px] w-full cursor-pointer group">
              <div class="flip-card-inner">
                <div class="flip-card-front glass-panel rounded-xl p-8 flex flex-col justify-center items-center text-center border-t border-white/10 shadow-2xl">
                  <span class="text-[#C5A572] font-mono text-sm mb-4 block tracking-widest uppercase">幕前 THE STAGE</span>
                  <h3 class="text-3xl font-serif text-white mb-4">前端開發</h3>
                  <p class="text-gray-400 text-sm italic">{{ skills.frontend.highlight.join(' / ') }}</p>
                  <div class="mt-8 w-10 h-10 rounded-full border border-[#C5A572]/50 flex items-center justify-center text-[#C5A572] group-hover:bg-[#C5A572] group-hover:text-[#0F172A] transition-colors">
                    <i class="fas fa-eye text-sm"></i>
                  </div>
                </div>
                <div class="flip-card-back bg-slate-800 rounded-xl p-8 border border-[#C5A572]/30 flex flex-col justify-center text-left">
                  <h4 class="text-[#C5A572] font-mono mb-4 text-lg border-b border-[#C5A572]/20 pb-2 uppercase tracking-tighter">Frontend Stack</h4>
                  <ul class="space-y-3 text-sm text-gray-300 font-sans tech-list">
                    <li v-for="tag in skills.frontend.tags" :key="tag">{{ tag }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Back-End Card -->
            <div class="flip-card h-[380px] w-full cursor-pointer group">
              <div class="flip-card-inner">
                <div class="flip-card-front glass-panel rounded-xl p-8 flex flex-col justify-center items-center text-center border-t border-white/10 shadow-2xl">
                  <span class="text-[#38BDF8] font-mono text-sm mb-4 block tracking-widest uppercase">幕後 THE BACKSTAGE</span>
                  <h3 class="text-3xl font-serif text-white mb-4">後端與架構</h3>
                  <p class="text-gray-400 text-sm italic">{{ skills.backend.highlight.join(' / ') }}</p>
                  <div class="mt-8 w-10 h-10 rounded-full border border-[#38BDF8]/50 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#0F172A] transition-colors">
                    <i class="fas fa-database text-sm"></i>
                  </div>
                </div>
                <div class="flip-card-back bg-[#0a0f18] rounded-xl p-8 border border-[#38BDF8]/30 flex flex-col justify-center text-left">
                  <h4 class="text-[#38BDF8] font-mono mb-4 text-lg border-b border-[#38BDF8]/20 pb-2 uppercase tracking-tighter">Backend Stack</h4>
                  <ul class="space-y-3 text-sm text-gray-300 font-sans tech-list">
                    <li v-for="tag in skills.backend.tags" :key="tag">{{ tag }}</li>
                    <li v-for="tag in skills.tools.tags.slice(0, 2)" :key="tag">{{ tag }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Immersive Projects Section -->
    <section id="projects" class="py-32 bg-[#0B1120] relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-24 animate-on-scroll">
          <span class="text-[#C5A572] font-mono tracking-widest text-sm uppercase">Selected Works</span>
          <h2 class="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">精選專案展演</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-[#C5A572] to-[#38BDF8] mx-auto"></div>
        </div>

        <div class="space-y-40">
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            :class="['relative group flex flex-col lg:items-center animate-on-scroll', index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">

            <div class="absolute -inset-4 bg-gradient-to-r from-[#C5A572]/10 to-[#38BDF8]/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-1000"></div>

            <!-- Visual Side -->
            <div class="lg:w-1/2 relative overflow-hidden bg-slate-800 flex items-center justify-center p-12 rounded-xl glass-panel border border-white/5">
              <div class="w-full aspect-video bg-[#1a2635] flex items-center justify-center text-[#C5A572]/20 font-serif text-3xl group-hover:scale-105 transition-transform duration-700 uppercase tracking-widest">
                {{ project.title.substring(0, 10) }}
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
              <div :class="['absolute bottom-8', index % 2 !== 0 ? 'right-8' : 'left-8']">
                <a :href="project.links[0]?.url" target="_blank" class="inline-flex items-center gap-2 text-[#C5A572] hover:text-white transition-colors">
                  <span class="font-mono text-sm tracking-widest border-b border-[#C5A572] pb-1 uppercase">Live Demo</span>
                  <i class="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </div>

            <!-- Content Side -->
            <div :class="['lg:w-1/2 p-8 md:p-12 z-10', index % 2 !== 0 ? 'lg:pr-20' : 'lg:pl-20']">
              <h3 class="text-3xl font-serif text-white mb-2">{{ project.title }}</h3>
              <p class="text-[#38BDF8] font-mono text-sm mb-8 tracking-wide uppercase">{{ project.type }}</p>

              <div class="grid gap-8">
                <div class="bg-[#1E293B]/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                  <p class="text-gray-400 text-sm leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in project.tags" :key="tag" class="text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-sm uppercase font-mono tracking-tighter">
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <div class="mt-8 flex gap-4">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank"
                  class="text-xs font-mono text-gray-500 hover:text-[#C5A572] transition-colors flex items-center gap-2 uppercase tracking-widest">
                  <i :class="link.text.includes('GitHub') ? 'fab fa-github' : 'fas fa-link'"></i> {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-[#05080f] py-24 border-t border-white/5 relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A572] via-[#38BDF8] to-[#C5A572]"></div>
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-serif text-white mb-8 italic">Let's build something amazing together.</h2>
        <p class="text-gray-500 mb-12 font-mono text-sm tracking-widest uppercase">Frontend Aesthetics × Backend Architecture</p>

        <div class="flex justify-center gap-8 mb-16">
          <a :href="contact.github" target="_blank"
            class="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C5A572] hover:text-[#0F172A] transition-all duration-500 border border-white/10 group">
            <i class="fab fa-github text-xl"></i>
          </a>
          <a :href="'mailto:' + contact.email"
            class="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C5A572] hover:text-[#0F172A] transition-all duration-500 border border-white/10 group">
            <i class="fas fa-envelope text-xl"></i>
          </a>
          <a :href="contact.linkedin" target="_blank"
            class="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C5A572] hover:text-[#0F172A] transition-all duration-500 border border-white/10 group">
            <i class="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
        <p class="text-xs text-gray-600 font-mono tracking-widest uppercase">
          © {{ new Date().getFullYear() }} SHOWANNE. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 科技感捲軸 */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0F172A;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #C5A572;
}

/* 電影質感濾鏡 */
.cinematic-filter {
  filter: contrast(1.05) saturate(0.85) brightness(0.9);
  transition: filter 0.5s ease;
}
.cinematic-filter:hover {
  filter: contrast(1) saturate(1.1) brightness(1.1);
}

/* 磨砂玻璃效果 */
.glass-panel {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* 雙面卡片 */
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}

/* 漂浮粒子 */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(#C5A572 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
  animation: moveBg 30s linear infinite;
}

@keyframes moveBg {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* 列表光點裝飾 */
.tech-list :deep(li) {
  position: relative;
  padding-left: 1.5rem;
}
.tech-list :deep(li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #C5A572;
  box-shadow: 0 0 8px #C5A572;
}

/* Animations */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}
.animate-on-scroll.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.purple-gradient-text {
  background: linear-gradient(to right, #D8B4FE, #A855F7, #6366F1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
