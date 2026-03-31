<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata for external fonts and icons
useHead({
  title: "詹琇安 Anne | Cross Fire Style Portfolio",
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Noto+Sans+TC:wght@300;400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
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

// Map Portfolio Data
const featuredProjects = computed(() => portfolioData.projects.featured);
const otherProjects = computed(() => portfolioData.projects.other);
const contact = computed(() => portfolioData.contact);

const menuItems = [
  { name: '首頁', href: '#home' },
  { name: '時空理念', href: '#story' },
  { name: '戰隊作品', href: '#projects' },
  { name: '熱愛金句', href: '#gallery' },
];

</script>

<template>
  <div class="bg-[#0B0E14] text-white font-sans overflow-x-hidden selection:bg-[#F59E0B] selection:text-black">

    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-black/90 shadow-lg py-3' : 'glass py-4']" id="navbar">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-tech font-bold tracking-widest italic uppercase flex items-center gap-2">
          <i class="fa-solid fa-crosshairs text-[#EF4444]"></i>
          <span class="text-white">Anne</span><span class="text-[#F59E0B]">Jan</span>
        </a>

        <div class="hidden md:flex space-x-8 items-center font-tech tracking-wide text-sm">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" class="hover:text-[#F59E0B] transition-colors">{{ item.name }}</a>
          <a href="#" class="bg-[#EF4444] px-6 py-2 rounded skew-x-[-10deg] hover:bg-red-600 transition-colors group">
            <span class="block skew-x-[10deg] font-bold uppercase">Hire Me <i
                class="fa-solid fa-play ml-1 group-hover:translate-x-1 transition-transform text-xs"></i></span>
          </a>
        </div>

        <button class="md:hidden text-white text-2xl">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <header id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Splitting -->
      <div class="absolute inset-0 z-0 flex flex-col md:flex-row">
        <!-- Left: Frontend (Orange/Warm) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover sepia-[.5] brightness-50 scale-105 group-hover:scale-110 transition-transform duration-1000"
            alt="Frontend Background">
          <div class="absolute inset-0 bg-[#F59E0B]/10 mix-blend-overlay"></div>
        </div>

        <!-- Right: Backend (Blue/Cold) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2584&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover hue-rotate-[180deg] brightness-50 scale-105 group-hover:scale-110 transition-transform duration-1000"
            alt="Backend Background">
          <div class="absolute inset-0 bg-[#0EA5E9]/10 mix-blend-overlay"></div>
        </div>
      </div>

      <!-- Center Divider & Content -->
      <div class="relative z-20 container mx-auto px-4 text-center">
        <div class="inline-block mb-4 animate-float">
          <span class="bg-[#EF4444] text-white text-xs font-bold px-3 py-1 tracking-widest uppercase rounded-sm">Full-Stack Dev</span>
        </div>

        <h1 class="text-6xl md:text-9xl font-black font-tech uppercase tracking-tighter mb-2 glitch-text leading-none"
          data-text="ANNE JAN">
          ANNE JAN
        </h1>
        <h2 class="text-2xl md:text-5xl font-bold text-white mb-8 tracking-[0.5em] uppercase">
          穿越<span class="text-[#F59E0B]">邏輯</span>與<span class="text-[#0EA5E9]">美學</span>
        </h2>

        <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-12">
          <div class="text-right group cursor-pointer">
            <p class="text-[#F59E0B] text-xl font-bold mb-1 font-tech tracking-widest">FRONTEND</p>
            <h3 class="text-4xl font-bold group-hover:text-[#F59E0B] transition-colors">美學呈現</h3>
            <p class="text-gray-400 text-sm mt-2 font-mono italic">// Visual Experience</p>
          </div>

          <div class="h-16 w-1 bg-gradient-to-b from-[#F59E0B] to-[#0EA5E9] hidden md:block"></div>
          <div class="w-16 h-1 bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9] md:hidden"></div>

          <div class="text-left group cursor-pointer">
            <p class="text-[#0EA5E9] text-xl font-bold mb-1 font-tech tracking-widest">BACKEND</p>
            <h3 class="text-4xl font-bold group-hover:text-[#0EA5E9] transition-colors">邏輯核心</h3>
            <p class="text-gray-400 text-sm mt-2 font-mono italic">// Data Intelligence</p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <i class="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </header>

    <!-- Story Section -->
    <section id="story" class="py-24 bg-[#0B0E14] relative bg-[size:40px_40px] bg-grid-pattern">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-center">
          <!-- Text Content -->
          <div class="md:w-1/2">
            <h2 class="text-4xl font-bold mb-6 border-l-4 border-[#EF4444] pl-4 uppercase font-tech">
              時空對齊，<br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9]">跨越職位邊界的全端連線</span>
            </h2>
            <p class="text-gray-300 leading-relaxed mb-6 text-lg">
              在我的開發世界裡，<strong>前端</strong>不僅是像素的堆疊，它是與使用者對話的橋樑，承載著設計美感與直覺體驗。
            </p>
            <p class="text-gray-300 leading-relaxed mb-8 text-lg">
              而<strong>後端</strong>則是沉穩的地基，處理著複雜的資料流與安全驗證。兩者在同一個地圖中時空交錯，唯有精準的對齊，才能成就完美的數位產品。
            </p>
            <div class="flex gap-4">
              <div class="flex items-center gap-3 bg-gray-800/50 p-4 rounded border border-gray-700">
                <i class="fa-solid fa-code text-2xl text-[#F59E0B]"></i>
                <div>
                  <h4 class="font-bold text-[#F59E0B] font-tech">UI CRAFT</h4>
                  <p class="text-xs text-gray-400">極致的互動體驗</p>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-gray-800/50 p-4 rounded border border-gray-700">
                <i class="fa-solid fa-database text-2xl text-[#0EA5E9]"></i>
                <div>
                  <h4 class="font-bold text-[#0EA5E9] font-tech">DATA CORE</h4>
                  <p class="text-xs text-gray-400">穩健的架構邏輯</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="md:w-1/2 relative">
            <div
              class="relative w-full aspect-video glass rounded-lg overflow-hidden border-2 border-gray-700 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-full h-full bg-black/50 absolute z-0"></div>
                <i class="fa-solid fa-bolt text-6xl text-yellow-400 animate-pulse z-10"></i>
                <div class="absolute top-4 left-4 font-tech text-[#F59E0B] text-xl">VISUAL SERVER</div>
                <div class="absolute bottom-4 right-4 font-tech text-[#0EA5E9] text-xl">LOGIC SERVER</div>
                <div class="absolute inset-0 border-[20px] border-transparent border-t-[#F59E0B]/20 border-b-[#0EA5E9]/20">
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1548484352-ea579e5233a8?q=80&w=2670&auto=format&fit=crop"
                class="object-cover w-full h-full opacity-40" alt="Map">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-gradient-to-b from-[#0B0E14] to-black">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-4xl font-bold mb-4 font-tech uppercase tracking-widest">SQUADS / 戰隊專案</h2>
        <div class="w-24 h-1 bg-[#EF4444] mx-auto mb-16"></div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Featured Project 1: Frontend/Design Focus Style -->
          <div v-for="(project, idx) in featuredProjects" :key="project.title" class="group relative">
            <div
              :class="['absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 bg-gradient-to-r', idx % 2 === 0 ? 'from-orange-600 to-yellow-600' : 'from-blue-600 to-cyan-400']">
            </div>
            <div :class="['relative glass p-8 rounded-lg border-white/10', idx % 2 === 0 ? 'border-l-4 border-l-[#F59E0B]' : 'border-r-4 border-r-[#0EA5E9] text-right md:text-left']">
              <div :class="['flex items-start justify-between mb-6', idx % 2 !== 0 ? 'flex-row-reverse md:flex-row' : '']">
                <div :class="[idx % 2 !== 0 ? 'text-right' : '']">
                  <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
                  <p :class="['font-tech uppercase tracking-wider text-sm', idx % 2 === 0 ? 'text-[#F59E0B]' : 'text-[#0EA5E9]']">{{ project.type }}</p>
                </div>
                <div :class="['text-4xl text-gray-700 transition-colors duration-500', idx % 2 === 0 ? 'group-hover:text-[#F59E0B]' : 'group-hover:text-[#0EA5E9]']">
                  <i :class="idx % 2 === 0 ? 'fa-solid fa-fire-flame-curved' : 'fa-solid fa-microchip'"></i>
                </div>
              </div>
              <p class="text-gray-400 mb-6 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Skill Bars (Representing project complexity/tech stack) -->
              <div class="space-y-4">
                <div v-for="(tag, tIdx) in project.tags.slice(0, 3)" :key="tag" class="space-y-1">
                  <div :class="['flex justify-between text-[10px] text-gray-500 font-mono uppercase tracking-tighter', idx % 2 !== 0 ? 'flex-row-reverse md:flex-row' : '']">
                    <span>{{ tag }}</span>
                    <span :class="idx % 2 === 0 ? 'text-[#F59E0B]' : 'text-[#0EA5E9]'">{{ 100 - (tIdx * 8) }}%</span>
                  </div>
                  <div class="w-full bg-gray-800 h-[2px] rounded-full overflow-hidden">
                    <div :class="['h-full transition-all duration-1000 group-hover:w-full', idx % 2 === 0 ? 'bg-[#F59E0B]' : 'bg-[#0EA5E9]']" :style="{ width: (100 - (tIdx * 8)) + '%' }"></div>
                  </div>
                </div>
              </div>

              <div :class="['mt-8 flex gap-4', idx % 2 !== 0 ? 'justify-end md:justify-start' : '']">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank" class="text-[10px] font-tech text-white bg-white/5 px-3 py-1 border border-white/10 hover:bg-white/20 transition-all uppercase tracking-widest">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section id="gallery" class="py-20 bg-[#0B0E14] border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <i class="fa-solid fa-quote-left text-4xl text-gray-700 mb-6"></i>
        <h3 class="text-2xl md:text-4xl font-bold italic text-white mb-8 leading-normal font-tech">
          "代碼的熱愛是藏不住的，<br>
          就像<span class="text-[#EF4444]">子彈</span>出膛一樣，永遠向前。"
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div v-for="(project, idx) in otherProjects.slice(0, 4)" :key="project.title" class="aspect-square relative overflow-hidden group rounded bg-slate-900 border border-white/5">
            <div class="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <span class="text-[10px] text-gray-500 font-tech uppercase mb-2">Project Fragment</span>
              <h4 class="text-xs font-bold text-gray-300 leading-tight">{{ project.title }}</h4>
            </div>
            <div
              :class="['absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center', idx % 2 === 0 ? 'bg-[#F59E0B]/80' : 'bg-[#0EA5E9]/80']">
              <a :href="project.link.url" target="_blank" class="font-bold text-black bg-white/80 px-3 py-1 text-[10px] font-tech uppercase tracking-widest">View Source</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-16 border-t border-gray-800 text-center md:text-left relative overflow-hidden">
      <!-- Decorative Slant Line -->
      <div class="absolute top-0 right-0 w-1/3 h-1 bg-[#EF4444] skew-x-[-45deg] translate-x-10"></div>

      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-8 md:mb-0">
          <a href="#" class="text-2xl font-tech font-bold tracking-widest uppercase text-white">
            Anne<span class="text-[#EF4444]">Jan</span>
          </a>
          <p class="text-gray-500 text-sm mt-3 font-mono">© 2026 Full-Stack Cross-Border Portfolio.</p>
          <div class="mt-6 flex flex-col gap-2">
             <p class="text-xs text-gray-400 flex items-center gap-2"><i class="fa-solid fa-envelope text-[#EF4444]"></i> {{ contact.email }}</p>
          </div>
        </div>

        <div class="flex flex-col items-end">
          <div class="flex space-x-6 text-2xl mb-6">
            <a :href="contact.github" target="_blank" class="text-gray-500 hover:text-white transition-colors"><i class="fa-brands fa-github"></i></a>
            <a :href="contact.linkedin" target="_blank" class="text-gray-500 hover:text-white transition-colors"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" class="text-gray-500 hover:text-white transition-colors"><i class="fa-solid fa-at"></i></a>
          </div>
          <div class="text-right">
             <span class="text-[10px] font-tech text-gray-600 uppercase tracking-[0.3em]">Latency: 11ms // Status: Connected</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.font-tech {
  font-family: 'Chakra Petch', sans-serif;
}

.text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
}

.glass {
  background: rgba(11, 14, 20, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(30, 41, 59, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 41, 59, 0.2) 1px, transparent 1px);
}

/* Glitch Effect CSS */
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 #F59E0B;
  clip: rect(24px, 9999px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -1px 0 #0EA5E9;
  clip: rect(85px, 9999px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(10px, 9999px, 31px, 0); }
  20% { clip: rect(65px, 9999px, 89px, 0); }
  40% { clip: rect(34px, 9999px, 15px, 0); }
  60% { clip: rect(2px, 9999px, 78px, 0); }
  80% { clip: rect(90px, 9999px, 12px, 0); }
  100% { clip: rect(55px, 9999px, 44px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(65px, 9999px, 100px, 0); }
  20% { clip: rect(2px, 9999px, 55px, 0); }
  40% { clip: rect(90px, 9999px, 12px, 0); }
  60% { clip: rect(34px, 9999px, 78px, 0); }
  80% { clip: rect(15px, 9999px, 10px, 0); }
  100% { clip: rect(44px, 9999px, 33px, 0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
