<template>
  <body class="text-gray-900 overflow-x-hidden">

    <!-- 導航欄 Navigation -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-6"
      :class="{ 'bg-white/80 backdrop-blur-md shadow-lg py-4': scrolled, 'py-6': !scrolled }">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-purple">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <span class="font-serif font-bold tracking-tighter text-2xl text-purple">
            ANNE CHAN
          </span>
        </div>

        <!-- 桌機版選單 -->
        <div class="hidden md:flex space-x-8">
          <a href="#about" class="text-sm font-semibold text-purple hover:scale-105 transition-transform">關於我</a>
          <a href="#skills" class="text-sm font-semibold text-purple hover:scale-105 transition-transform">技術棧</a>
          <a href="#projects" class="text-sm font-semibold text-purple hover:scale-105 transition-transform">作品專案</a>
          <a href="#impact" class="text-sm font-semibold text-purple hover:scale-105 transition-transform">影響力</a>
        </div>

        <button class="md:hidden text-purple" @click="toggleMobileMenu()">
          <i data-lucide="menu" id="menu-icon"></i>
        </button>
      </div>
    </nav>

    <!-- 行動版選單 Overlay -->
    <div id="mobile-menu"
      class="fixed inset-0 z-[60] bg-white transition-transform duration-500 flex flex-col items-center justify-center space-y-8"
      :class="{ 'translate-x-full': !mobileMenuOpen, 'translate-x-0': mobileMenuOpen }">
      <button @click="toggleMobileMenu()" class="absolute top-6 right-6 text-purple">
        <i data-lucide="x" size="32"></i>
      </button>
      <a href="#about" @click="toggleMobileMenu()" class="text-3xl font-bold font-serif text-purple">關於我</a>
      <a href="#skills" @click="toggleMobileMenu()" class="text-3xl font-bold font-serif text-purple">技術棧</a>
      <a href="#projects" @click="toggleMobileMenu()" class="text-3xl font-bold font-serif text-purple">作品專案</a>
      <a href="#impact" @click="toggleMobileMenu()" class="text-3xl font-bold font-serif text-purple">影響力</a>
    </div>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-gold">
        </div>
        <div
          class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-purple">
        </div>
      </div>

      <div class="relative z-10 text-center px-6">
        <h2 class="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-70 text-purple font-semibold">Full-Stack
          Engineer</h2>
        <h1 class="text-6xl md:text-8xl font-bold mb-6 leading-tight font-serif text-purple">
          許我一個<br />
          <span class="text-gold">耀眼</span>的未來
        </h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          我是詹琇安。具備敏銳設計美感與技術實戰力，<br />
          致力於將複雜的需求轉化為優雅的數位體驗。
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#projects"
            class="px-10 py-4 rounded-full text-white font-bold transition-all hover:shadow-2xl hover:-translate-y-1 bg-purple">
            查看作品
          </a>
          <a href="https://github.com/showanne"
            class="flex items-center gap-2 px-10 py-4 rounded-full border-2 border-gold text-purple font-bold transition-all hover:bg-white/50">
            <i data-lucide="github" size="20"></i> GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-5 relative">
            <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-gold">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="詹琇安照片" class="w-full h-full object-cover">
            </div>
            <div class="absolute -bottom-6 -right-6 w-full h-full rounded-2xl -z-10 bg-purple"></div>
          </div>
          <div class="md:col-span-7">
            <h3 class="text-4xl font-bold mb-6 font-serif text-purple">職涯積累與專業態度</h3>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              擁有四年開發經驗，曾任職於城邦媒體與國泰金控。我不僅僅是一位撰寫代碼的工程師，更是一個具備產品思維的開發者。我擅長在前端性能優化與後端架構穩健性之間取得完美平衡。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="p-6 rounded-xl border-l-4 bg-[#F8F5F1] border-gold">
                <h4 class="font-bold mb-1 text-purple">跨團隊協作</h4>
                <p class="text-sm text-gray-500">串接 C#, Java, PHP 各類後端團隊</p>
              </div>
              <div class="p-6 rounded-xl border-l-4 bg-[#F8F5F1] border-gold">
                <h4 class="font-bold mb-1 text-purple">優化專家</h4>
                <p class="text-sm text-gray-500">API 效能提升 75% 實績</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 px-6 relative overflow-hidden bg-purple">
      <div class="max-w-7xl mx-auto relative z-10 text-white">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 font-serif">技術精華</h2>
          <div class="w-20 h-1 mx-auto bg-gold"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- 前端 -->
          <div class="group p-10 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gold/20 text-gold">
              <i data-lucide="terminal"></i>
            </div>
            <h3 class="text-2xl font-bold mb-6">前端開發</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="skill in frontendSkills" :key="skill" class="flex items-center">
                <i data-lucide="chevron-right" class="mr-2 text-gold w-4"></i> {{ skill }}
              </li>
            </ul>
          </div>
          <!-- 後端 -->
          <div class="group p-10 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gold/20 text-gold">
              <i data-lucide="database"></i>
            </div>
            <h3 class="text-2xl font-bold mb-6">後端技術</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="skill in backendSkills" :key="skill" class="flex items-center">
                <i data-lucide="chevron-right" class="mr-2 text-gold w-4"></i> {{ skill }}
              </li>
            </ul>
          </div>
          <!-- 工具 -->
          <div class="group p-10 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gold/20 text-gold">
              <i data-lucide="cpu"></i>
            </div>
            <h3 class="text-2xl font-bold mb-6">維運與工具</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="tool in tools" :key="tool" class="flex items-center">
                <i data-lucide="chevron-right" class="mr-2 text-gold w-4"></i> {{ tool }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-6 bg-[#FDFDFD]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-2 font-serif text-purple">精選專案</h2>
            <p class="text-gray-500">實踐與創意的交匯點</p>
          </div>
          <a href="#" class="flex items-center gap-2 font-bold text-gold hover:underline">
            查看更多作品 <i data-lucide="chevron-right" size="20"></i>
          </a>
        </div>

              <div class="grid md:grid-cols-3 gap-10">
                <!-- Loop over featured projects -->
                <div v-for="project in featuredProjects" :key="project.title"
                  class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div class="relative overflow-hidden aspect-video">
                    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
                      :alt="project.title"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <a :href="project.links[0]?.url || '#'" target="_blank"
                        class="flex items-center gap-2 text-white font-bold bg-gold px-4 py-2 rounded-lg">
                        <i data-lucide="external-link" size="16"></i> 瀏覽網站
                      </a>
                    </div>
                  </div>
                  <div class="p-8">
                    <h3 class="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{{ project.title }}</h3>
                    <p class="text-gray-500 mb-6 text-sm leading-relaxed">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in project.tags.slice(0, 3)" :key="tag"
                        class="px-3 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 uppercase">{{ tag
                        }}</span>
                    </div>
                  </div>
                </div>
              </div>      </div>
    </section>

    <!-- Impact Section -->
    <section id="impact" class="py-24 px-6 bg-white border-y border-gray-100">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-12 font-serif text-purple">創造的產出價值</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col items-center">
            <span class="text-7xl font-bold mb-2 text-gold">75%</span>
            <p class="text-gray-500 uppercase tracking-widest text-sm">API 響應效能提升</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-7xl font-bold mb-2 text-gold">0%</span>
            <p class="text-gray-500 uppercase tracking-widest text-sm">重構後重大錯誤率</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 px-6 text-center bg-[#F8F5F1]">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 font-serif text-purple">期待與您共同創造耀眼瞬間</h2>
        <div class="flex justify-center gap-8 mb-12">
          <a href="#"
            class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-purple">
            <i data-lucide="github" size="20"></i>
          </a>
          <a href="#"
            class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-purple">
            <i data-lucide="globe" size="20"></i>
          </a>
          <a href="#"
            class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all text-purple">
            <i data-lucide="smartphone" size="20"></i>
          </a>
        </div>
        <p class="text-gray-400 text-sm">© 2025 ANNE CHAN. All Rights Reserved.</p>
      </div>
    </footer>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const featuredProjects = computed(() => portfolioData.projects.featured);
const frontendSkills = computed(() => [...portfolioData.skills.frontend.highlight, ...portfolioData.skills.frontend.tags]);
const backendSkills = computed(() => [...portfolioData.skills.backend.highlight, ...portfolioData.skills.backend.tags]);
const tools = computed(() => portfolioData.skills.tools.tags);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
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
/* The original <head> content (styles, fonts, etc.) should be managed globally in Nuxt or
   through useHead. The following are the original inline styles, adapted to Vue's <style scoped> */
:root {
  --purple: #2D0E4B;
  --gold: #C5A059;
  --pearl: #F8F5F1;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--pearl);
  scroll-behavior: smooth;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.bg-purple {
  background-color: var(--purple);
}

.bg-gold {
  background-color: var(--gold);
}

.text-purple {
  color: var(--purple);
}

.text-gold {
  color: var(--gold);
}

.border-gold {
  border-color: var(--gold);
}

/* 平滑滾動與自定義選取顏色 */
::selection {
  background-color: var(--gold);
  color: white;
}
</style>
