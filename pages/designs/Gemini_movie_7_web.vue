<template>
  <body class="bg-slate-900 text-slate-200 antialiased selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">

    <!-- Ambient Background Glows -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="glow-orb bg-amber-500/20 w-96 h-96 top-0 left-1/4 -translate-y-1/2"></div>
      <div class="glow-orb bg-purple-500/10 w-[500px] h-[500px] bottom-0 right-0 translate-y-1/3"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass border-b border-white/5 transition-all duration-300" id="navbar" :class="{ 'bg-slate-900/90 shadow-lg': scrolledNavbar }">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#"
          class="font-serif text-2xl font-bold tracking-wider text-slate-100 hover:text-amber-400 transition-colors">
          CHENG<span class="text-amber-500">.</span>
        </a>

        <div class="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-medium">
          <a href="#about" class="hover:text-amber-400 transition-colors py-2">關於我</a>
          <a href="#skills" class="hover:text-amber-400 transition-colors py-2">專業技能</a>
          <a href="#projects" class="hover:text-amber-400 transition-colors py-2">精選作品</a>
          <a href="#contact"
            class="px-5 py-2 border border-amber-500/50 rounded-full text-amber-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">聯絡我</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-2xl text-slate-200" @click="toggleMobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden glass border-t border-white/5 absolute w-full" :class="{ 'hidden': !mobileMenuOpen }">
        <div class="flex flex-col p-6 space-y-4 text-center">
          <a href="#about" class="hover:text-amber-400">關於我</a>
          <a href="#skills" class="hover:text-amber-400">專業技能</a>
          <a href="#projects" class="hover:text-amber-400">精選作品</a>
          <a href="#contact" class="text-amber-400">聯絡我</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center justify-center pt-20">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        <!-- Text Content -->
        <div class="md:w-3/5 space-y-6 z-10 opacity-0 animate-[fadeUp_1s_ease-out_0.2s_forwards]">
          <div class="inline-block px-3 py-1 border border-amber-500/30 rounded-full bg-amber-500/5 backdrop-blur-sm">
            <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Full Stack Developer</span>
          </div>

          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Code with <br>
            <span class="text-gold italic pr-2">Elegance</span> & Logic
          </h1>

          <p class="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            不僅構建功能，更雕琢體驗。在 0 與 1 的世界裡，展現專業的深度與耀眼的靈魂。
          </p>

          <div class="flex gap-4 pt-4">
            <a href="#projects"
              class="group relative px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-sm overflow-hidden transition-all hover:scale-105">
              <div
                class="absolute inset-0 w-full h-full bg-white/30 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]">
              </div>
              <span>查看作品</span>
            </a>
            <a href="#contact"
              class="px-8 py-3 border border-slate-600 hover:border-amber-500/50 hover:text-amber-400 transition-all rounded-sm">
              下載簡歷
            </a>
          </div>
        </div>

        <!-- Hero Image / Visual -->
        <div class="md:w-2/5 relative z-10 opacity-0 animate-[fadeUp_1s_ease-out_0.5s_forwards] flex justify-center">
          <div class="relative w-72 h-96 md:w-80 md:h-[500px]">
            <!-- Decorative Frames -->
            <div class="absolute inset-0 border border-amber-500/20 translate-x-4 translate-y-4 z-0"></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
              <!-- Placeholder for Profile Image -->
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Portrait"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-overlay md:mix-blend-normal">

              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60">
              </div>
            </div>
          </div>
          <!-- Scroll Indicator -->
          <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <i class="fa-solid fa-arrow-down text-xl"></i>
          </div>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-16 items-center">
          <div class="md:w-1/2 relative">
            <h2 class="font-serif text-4xl md:text-5xl font-bold mb-8">
              <span class="block text-slate-500 text-lg font-sans font-normal tracking-widest uppercase mb-2">About
                Me</span>
              理性的架構<br>
              <span class="text-gold italic">感性的呈現</span>
            </h2>
            <p class="text-slate-300 leading-loose mb-6 font-light">
              擁有 5 年開發經驗的全端工程師。我深信程式碼不僅是冰冷的邏輯堆疊，更是解決問題的藝術品。
            </p>
            <p class="text-slate-400 leading-loose mb-8">
              就像劇中的許紅豆展現的多面性，我在工作中追求極致的效能優化與架構潔癖；而在生活中，我保持對美學的敏銳度與對新事物的好奇心。這種<span
                class="text-amber-400">雙重特質</span>讓我能在開發過程中，同時兼顧系統的穩健性與用戶體驗的細膩度。
            </p>

            <div class="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div class="text-3xl font-serif text-amber-400 font-bold mb-1">5+</div>
                <div class="text-sm text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div class="text-3xl font-serif text-amber-400 font-bold mb-1">50+</div>
                <div class="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>
          </div>

          <!-- Philosophy Cards -->
          <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div class="glass-card p-8 rounded-sm">
              <i class="fa-solid fa-gem text-3xl text-amber-400 mb-4"></i>
              <h3 class="text-xl font-bold mb-3 text-slate-100">精緻細節</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                從像素級的 UI 還原到 API 的毫秒級優化，不放過任何影響品質的微小細節。
              </p>
            </div>
            <div class="glass-card p-8 rounded-sm mt-0 sm:mt-12">
              <i class="fa-solid fa-layer-group text-3xl text-slate-200 mb-4"></i>
              <h3 class="text-xl font-bold mb-3 text-slate-100">穩健架構</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                打造可擴展、易維護的系統，為未來的成長打下堅實的地基。
              </p>
            </div>
            <div class="glass-card p-8 rounded-sm">
              <i class="fa-solid fa-bolt text-3xl text-amber-400 mb-4"></i>
              <h3 class="text-xl font-bold mb-3 text-slate-100">高效靈活</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                快速適應新技術與需求變化，在變動的環境中保持耀眼的產出。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 bg-slate-900/50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent">
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Expertise</span>
          <h2 class="font-serif text-4xl font-bold mt-3">技術光譜</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="glass-card p-8 rounded-sm border-t-4 border-t-amber-500/70">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-serif italic text-slate-100">Frontend</h3>
              <i class="fa-brands fa-react text-2xl text-slate-400"></i>
            </div>
            <ul class="space-y-4">
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">React / Next.js</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[95%]"></div>
                </div>
              </li>
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">TypeScript</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[90%]"></div>
                </div>
              </li>
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">Tailwind CSS</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[98%]"></div>
                </div>
              </li>
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">Three.js / WebGL</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500/60 w-[75%]"></div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Backend -->
          <div class="glass-card p-8 rounded-sm border-t-4 border-t-slate-500/50">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-serif italic text-slate-100">Backend</h3>
              <i class="fa-solid fa-server text-2xl text-slate-400"></i>
            </div>
            <ul class="space-y-4">
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">Node.js / Express</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[90%]"></div>
                </div>
              </li>
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">Python / Django</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500/80 w-[85%]"></div>
                </div>
              </li>
              <li class="flex justify-between items-center group">
                <span class="text-slate-300 group-hover:text-amber-400 transition-colors">PostgreSQL / MongoDB</span>
                <div class="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 w-[88%]"></div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Tools & Others -->
          <div class="glass-card p-8 rounded-sm border-t-4 border-t-slate-500/50">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-serif italic text-slate-100">DevOps & Design</h3>
              <i class="fa-solid fa-wand-magic-sparkles text-2xl text-slate-400"></i>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">Docker</span>
              <span
                class="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">AWS</span>
              <span
                class="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">CI/CD</span>
              <span
                class="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">Figma</span>
              <span
                class="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Selected Works</span>
            <h2 class="font-serif text-4xl font-bold mt-3">精選作品</h2>
          </div>
          <a href="#"
            class="text-sm text-slate-400 hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-1">View
            All Projects <i class="fa-solid fa-arrow-right ml-2 text-xs"></i></a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <!-- Project 1 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-sm aspect-video mb-6 border border-white/5">
              <img src="https://images.unsplash.com/photo-1481487484168-9b995ecc1660?q=80&w=800&auto=format&fit=crop"
                alt="Project 1"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
              <div
                class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span
                  class="px-6 py-2 border border-amber-400 text-amber-400 tracking-widest uppercase text-sm font-medium hover:bg-amber-400 hover:text-slate-900 transition-all">View
                  Case</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-serif font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                  FinTech Dashboard</h3>
                <p class="text-slate-500 mt-2 text-sm max-w-sm">高併發金融數據可視化平台，整合實時交易系統。</p>
              </div>
              <span class="text-xs font-bold text-slate-600 border border-slate-700 px-2 py-1 rounded">2024</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="group cursor-pointer md:mt-12">
            <div class="relative overflow-hidden rounded-sm aspect-video mb-6 border border-white/5">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=800&auto=format&fit=crop"
                alt="Project 2"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
              <div
                class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span
                  class="px-6 py-2 border border-amber-400 text-amber-400 tracking-widest uppercase text-sm font-medium hover:bg-amber-400 hover:text-slate-900 transition-all">View
                  Case</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-serif font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                  E-Commerce Luxury</h3>
                <p class="text-slate-500 mt-2 text-sm max-w-sm">為頂級珠寶品牌打造的沉浸式購物體驗網站。</p>
              </div>
              <span class="text-xs font-bold text-slate-600 border border-slate-700 px-2 py-1 rounded">2023</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 relative overflow-hidden">
      <!-- Glows -->
      <div class="absolute right-0 bottom-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none">
      </div>

      <div class="container mx-auto px-6 max-w-4xl">
        <div class="glass-card p-10 md:p-16 rounded-sm text-center relative z-10 border border-amber-500/20">
          <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase block mb-4">Let's Talk</span>
          <h2 class="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            準備好讓您的點子<br>更加耀眼了嗎？
          </h2>
          <p class="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
            無論是新的專案合作，還是技術交流，都歡迎與我聯繫。讓我們一起創造出色的數位體驗。
          </p>

          <a href="mailto:hello@example.com"
            class="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            發送郵件
          </a>

          <div class="mt-12 flex justify-center space-x-8">
            <a href="#" class="text-slate-400 hover:text-amber-400 text-xl transition-colors"><i
                class="fa-brands fa-github"></i></a>
            <a href="#" class="text-slate-400 hover:text-amber-400 text-xl transition-colors"><i
                class="fa-brands fa-linkedin"></i></a>
            <a href="#" class="text-slate-400 hover:text-amber-400 text-xl transition-colors"><i
                class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-white/5 text-center text-slate-600 text-sm">
      <p>&copy; 2025 Cheng. Designed with <span class="text-amber-500/60">Dazzling</span> Style.</p>
    </footer>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolledNavbar = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  scrolledNavbar.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/*
  The original <head> content (styles, fonts, etc.) should be managed globally in Nuxt or
  through useHead. The following are the original inline styles, adapted to Vue's <style scoped>
*/
html {
  scroll-behavior: smooth;
}

body {
  font-family: '"Inter"', '"Noto Sans TC"', sans-serif;
  background-color: #0f172a;
}

/* Tailwind config from original HTML */
:root {
  --slate-900: #0f172a;
  --slate-800: #1e293b;
  --slate-200: #e2e8f0;

  --amber-300: #fcd34d;
  --amber-400: #fbbf24;
  --amber-500: #f59e0b;
}

.bg-slate-900 {
  background-color: var(--slate-900);
}

.text-slate-200 {
  color: var(--slate-200);
}

.font-sans {
  font-family: '"Inter"', '"Noto Sans TC"', sans-serif;
}

.font-serif {
  font-family: '"Playfair Display"', '"Noto Serif TC"', serif;
}

.selection\:bg-amber-500\/30::selection {
  background-color: rgba(245, 158, 11, 0.3);
}

.selection\:text-amber-200::selection {
  color: #fef3c7;
}

/* Custom styles from original HTML */
.glass {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-5px);
  border-color: rgba(251, 191, 36, 0.3);
  box-shadow: 0 20px 40px -10px rgba(251, 191, 36, 0.15);
}

.text-gold {
  background: linear-gradient(to right, #fde68a, #fbbf24, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  opacity: 0.4;
}

/* Animations (from original HTML) */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-\[fadeUp_1s_ease-out_0\.2s_forwards\] {
  animation: fadeUp 1s ease-out 0.2s forwards;
}
.animate-\[fadeUp_1s_ease-out_0\.5s_forwards\] {
  animation: fadeUp 1s ease-out 0.5s forwards;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}
</style>
