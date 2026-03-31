<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Anne Jan | Professional & Empathetic Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@300;400;500;700&display=swap'
    }
  ]
});

// Data Mapping
const featuredProjects = computed(() => portfolioData.projects.featured);
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

const experiences = [
  {
    company: '國泰金融控股 (緯創軟體駐點)',
    period: '2025.02 - Present',
    role: '前端工程師',
    tasks: [
      '開發企業級請假管理系統，實作動態篩選與延遲載入技術',
      '使用 Vue-i18n 架構多語系平台',
      '基於 Quasar 元件庫進行 UI/UX 高質量切版'
    ]
  },
  {
    company: '城邦媒體控股集團',
    period: '2024.05 - 2025.02',
    role: '前端工程師',
    tasks: [
      '全面導入 TypeScript，建立嚴謹的靜態型別檢查',
      '與跨語言後端團隊合作重構 API 架構',
      '主導前端專案架構改版，大幅優化渲染效能'
    ]
  }
];

const scrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <div class="bg-[#0c0a09] text-stone-100 font-sans antialiased selection:bg-amber-500 selection:text-white overflow-x-hidden">

    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-500 border-b', scrolled ? 'bg-stone-900/90 backdrop-blur-xl py-4 border-white/10 shadow-lg' : 'bg-transparent py-6 border-transparent']">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" class="font-serif text-2xl font-bold tracking-wider text-amber-400 uppercase">Anne J.</a>
        <div class="hidden md:flex space-x-10 text-[11px] tracking-[0.3em] uppercase text-stone-400 font-medium">
          <a href="#about" class="hover:text-amber-400 transition-colors">About</a>
          <a href="#experience" class="hover:text-amber-400 transition-colors">Experience</a>
          <a href="#skills" class="hover:text-amber-400 transition-colors">Skills</a>
          <a href="#works" class="hover:text-amber-400 transition-colors">Works</a>
          <a href="#lifestyle" class="hover:text-amber-400 transition-colors">Lifestyle</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
      <div class="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>

      <div class="relative z-10 text-center max-w-4xl px-6">
        <p class="text-amber-400 tracking-[0.4em] uppercase text-[10px] mb-6 font-bold opacity-80">Full-Stack Developer // Creative Technologist</p>
        <h1 class="font-serif text-6xl md:text-9xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-stone-400 text-glow">
          詹琇安 Anne
        </h1>
        <p class="text-lg md:text-2xl text-stone-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          「勇於嘗試、積極學習、斜槓發展」<br />
          <span class="text-sm text-stone-500 mt-4 block tracking-widest uppercase">Transforming ideas into dazzling digital experiences.</span>
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#works" class="px-10 py-4 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 transition-all duration-500 uppercase tracking-widest text-xs font-bold">
            View Portfolio
          </a>
          <a :href="'mailto:' + contact.email" class="px-10 py-4 bg-stone-800 text-stone-300 hover:bg-stone-700 transition-all duration-500 uppercase tracking-widest text-xs font-bold">
            Hire_Me()
          </a>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-32 bg-[#1c1917]">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div class="relative group">
          <div class="absolute -inset-2 bg-gradient-to-r from-amber-400 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div class="relative aspect-[3/4] bg-stone-800 rounded-sm overflow-hidden border border-white/5">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
              alt="Anne Portrait" class="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
          </div>
        </div>

        <div class="space-y-8">
          <h2 class="font-serif text-4xl md:text-6xl text-white leading-tight">
            Professional &<br /><span class="text-amber-400 italic">Empathetic</span>
          </h2>
          <div class="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
            <p>
              我是一位擁有四年前端實戰經驗的全端工程師，擅長 Vue.js 與 Node.js 生態系。我不僅僅是寫程式，更憑藉敏銳的設計美感與同理心，致力於從使用者角度優化體驗。
            </p>
            <p>
              從媒體產業到金融控股，我主導過多項專案的技術升級與架構重構。我相信技術是為了解決問題並創造價值，這反映在我對代碼品質與互動細節的偏執追求上。
            </p>
          </div>

          <div class="mt-12 grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
            <div>
              <h4 class="text-amber-400 font-serif text-2xl mb-1">4+ Years</h4>
              <p class="text-stone-500 text-[10px] uppercase tracking-widest font-bold font-mono">Dev Experience</p>
            </div>
            <div>
              <h4 class="text-amber-400 font-serif text-2xl mb-1">Full-Stack</h4>
              <p class="text-stone-500 text-[10px] uppercase tracking-widest font-bold font-mono">Nuxt / Node / Mongo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-32 bg-[#0c0a09] relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="font-serif text-4xl text-center mb-24 text-white uppercase tracking-widest italic">Career Path</h2>

        <div class="space-y-20 relative timeline-dot">
          <div v-for="exp in experiences" :key="exp.company" class="relative pl-12 md:pl-0">
            <div class="md:flex items-center justify-between group">
              <div class="md:w-5/12 md:text-right md:pr-12">
                <h3 class="text-2xl text-white font-serif group-hover:text-amber-400 transition-colors uppercase">{{ exp.company }}</h3>
                <p class="text-amber-400/60 text-xs font-mono mt-2 tracking-widest">{{ exp.period }}</p>
              </div>
              <div class="absolute left-0 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full border-2 border-stone-900 transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
              <div class="md:w-5/12 md:pl-12 mt-6 md:mt-0">
                <h4 class="text-lg text-stone-200 font-bold uppercase tracking-tighter">{{ exp.role }}</h4>
                <ul class="text-stone-500 text-sm mt-4 space-y-3 font-light leading-relaxed">
                  <li v-for="task in exp.tasks" :key="task" class="flex gap-2">
                    <span class="text-amber-500/50">•</span> {{ task }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-32 bg-[#1c1917]">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="font-serif text-4xl mb-16 text-white border-l-2 border-amber-400 pl-8 uppercase italic tracking-widest">Technical Arsenal</h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(cat, key) in skills" :key="key" class="bg-[#0c0a09] p-10 border border-stone-800 hover:border-amber-500/30 transition-all group">
            <h3 class="text-amber-400 font-serif text-2xl mb-8 uppercase italic group-hover:translate-x-2 transition-transform">{{ key }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in cat.tags" :key="tag"
                class="px-3 py-1 bg-stone-800 text-stone-400 text-[10px] uppercase font-bold tracking-tighter hover:text-white transition-colors">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Works Section -->
    <section id="works" class="py-32 bg-[#0c0a09]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-serif text-4xl md:text-6xl text-center mb-24 text-white uppercase italic tracking-widest">Selected Works</h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            class="bg-[#1c1917] border border-stone-800 slash-card group overflow-hidden">
            <div class="h-56 bg-stone-800 overflow-hidden relative">
              <div class="absolute inset-0 bg-stone-900 flex items-center justify-center text-stone-700 font-serif text-2xl opacity-40 uppercase tracking-widest italic group-hover:scale-110 transition-transform duration-700">
                Project_{{ index + 1 }}
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-amber-500 text-stone-900 text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">Featured</span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors uppercase italic">{{ project.title }}</h3>
              <p class="text-amber-500 text-[9px] font-bold uppercase tracking-widest mb-6 opacity-60">{{ project.tags.slice(0, 3).join(' • ') }}</p>
              <p class="text-stone-500 text-sm font-light mb-8 line-clamp-3 leading-relaxed">
                {{ project.description }}
              </p>
              <a :href="project.links[0]?.url" target="_blank" class="text-white border-b border-amber-500/30 pb-1 text-xs font-bold uppercase tracking-widest hover:text-amber-400 hover:border-amber-400 transition-all">
                Access Case Study ->
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lifestyle Section -->
    <section id="lifestyle" class="py-32 bg-gradient-to-b from-[#0c0a09] to-[#1c1917] relative">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-20 items-center">
          <div class="space-y-8 animate-on-scroll">
            <span class="text-amber-400 tracking-[0.4em] uppercase text-[10px] font-black">Beyond the Code</span>
            <h2 class="font-serif text-4xl md:text-6xl text-white leading-tight uppercase italic">Crafting Life with Precision</h2>
            <p class="text-stone-400 font-light leading-relaxed text-lg">
              在程式碼之外，我熱愛透過雙手創造實體的溫度。
            </p>
            <p class="text-stone-500 font-light leading-relaxed">
              **金工 (Metalworking)** 與 **皮雕 (Leather Carving)** 是我修煉專注力與美感的途徑。這些愛好讓我能以藝術家的眼光去審視每一個 UI 元件的細節與質地。
            </p>
            <div class="flex gap-4">
              <span v-for="hobby in ['Metalworking', 'Leather Craft', 'Active Learner']" :key="hobby"
                class="px-5 py-2 border border-stone-700 text-stone-500 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:border-amber-400/50 hover:text-amber-400 transition-all">
                {{ hobby }}
              </span>
            </div>
          </div>

          <div class="relative h-[500px]">
            <div class="absolute top-0 right-0 w-72 h-72 bg-stone-800 rounded-sm overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 border border-white/5 group">
              <img src="https://images.unsplash.com/photo-1622625208493-272e50302b4d?q=80&w=2070&auto=format&fit=crop"
                class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Metalworking" />
            </div>
            <div class="absolute bottom-0 left-10 w-72 h-72 bg-stone-800 rounded-sm overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-700 border border-white/5 group">
              <img src="https://images.unsplash.com/photo-1598532163257-5260155b9588?q=80&w=2072&auto=format&fit=crop"
                class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Leather craft" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-950 py-20 border-t border-white/5">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
        <div class="space-y-4">
          <h2 class="font-serif text-3xl text-white uppercase tracking-widest font-bold">Anne<span class="text-amber-400">.</span></h2>
          <p class="text-stone-600 text-[10px] uppercase font-bold tracking-[0.3em]">Designing the future, one pixel at a time.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
          <a :href="contact.github" target="_blank" class="hover:text-amber-400 transition-colors">GitHub</a>
          <a :href="contact.linkedin" target="_blank" class="hover:text-amber-400 transition-colors">LinkedIn</a>
          <a :href="'mailto:' + contact.email" class="hover:text-amber-400 transition-colors">Email</a>
        </div>
      </div>
      <div class="text-center mt-20 text-stone-800 text-[9px] uppercase tracking-[0.5em] font-bold">
        &copy; {{ new Date().getFullYear() }} Anne Jan. All rights reserved. // Inspired by "The Diamond's Dream".
      </div>
    </footer>
  </div>
</template>

<style scoped>
.glass-nav {
  background: rgba(12, 10, 9, 0.85);
  backdrop-filter: blur(16px);
}
.text-glow {
  text-shadow: 0 0 25px rgba(251, 191, 36, 0.25);
}
.slash-card {
  clip-path: polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%);
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.slash-card:hover {
  transform: translateY(-8px);
  border-color: rgba(251, 191, 36, 0.4);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}
.timeline-dot::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(251, 191, 36, 0.2), transparent);
  left: 50%;
  top: 0;
  z-index: 0;
}
@media (max-width: 768px) {
  .timeline-dot::after {
    left: 6px;
  }
}
.bg-hero-pattern {
  background-image: radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, rgba(12, 10, 9, 0) 60%);
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
