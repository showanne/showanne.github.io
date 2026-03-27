<template>
  <body class="bg-cream text-slate-800 font-sans antialiased selection:bg-champagne selection:text-white">

    <!-- 導航列 -->
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar" :class="{ 'shadow-sm': scrolledNavbar }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center gap-2">
            <div
              class="w-8 h-8 bg-midnight text-white flex items-center justify-center rounded-sm font-serif font-bold text-xl">
              H</div>
            <span class="font-serif font-bold text-xl tracking-wider text-midnight">許皓宇<span
                class="text-champagne">.dev</span></span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8 items-center">
            <a href="#about"
              class="text-slate-600 hover:text-champagne font-medium transition-colors text-sm tracking-widest uppercase">關於我</a>
            <a href="#skills"
              class="text-slate-600 hover:text-champagne font-medium transition-colors text-sm tracking-widest uppercase">專業技能</a>
            <a href="#projects"
              class="text-slate-600 hover:text-champagne font-medium transition-colors text-sm tracking-widest uppercase">精選專案</a>
            <a href="#contact"
              class="px-6 py-2 bg-midnight text-white text-sm tracking-widest font-medium hover:bg-champagne transition-colors duration-300 shadow-lg shadow-midnight/20 rounded-sm shine-effectable">
              聯繫我
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-midnight hover:text-champagne focus:outline-none" @click="toggleMobileMenu">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Panel -->
      <div id="mobile-menu" class="md:hidden bg-cream border-t border-champagne/10 absolute w-full" :class="{ 'hidden': !mobileMenuOpen }">
        <div class="px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <a href="#about"
            class="block px-3 py-3 text-base font-medium text-slate-600 hover:text-champagne hover:bg-rose-dust/20 rounded-md">關於我</a>
          <a href="#skills"
            class="block px-3 py-3 text-base font-medium text-slate-600 hover:text-champagne hover:bg-rose-dust/20 rounded-md">專業技能</a>
          <a href="#projects"
            class="block px-3 py-3 text-base font-medium text-slate-600 hover:text-champagne hover:bg-rose-dust/20 rounded-md">精選專案</a>
          <a href="#contact" class="block px-3 py-3 text-base font-medium text-champagne font-bold">聯繫我</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 bg-pattern z-0"></div>
      <!-- 裝飾光暈 -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-champagne-light/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-rose-dust/40 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20 text-champagne text-xs font-bold tracking-widest uppercase">
              <span class="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
              Available for hire
            </div>
            <h1 class="text-5xl lg:text-7xl font-serif font-bold text-midnight leading-tight">
              用代碼構建<br>
              <span class="text-gradient italic">耀眼</span> 的數位世界
            </h1>
            <p class="text-lg text-slate-600 max-w-lg leading-relaxed">
              我是許皓宇，一名追求極致與美感的全端工程師。在邏輯的架構中注入設計的靈魂，如同《許我耀眼》般，讓每一個專案都成為閃耀的作品。
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#projects"
                class="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-midnight hover:bg-slate-800 shadow-lg shadow-midnight/20 transition-all shine-effectable">
                瀏覽作品
                <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
              </a>
              <a href="#contact"
                class="inline-flex justify-center items-center px-8 py-3 border border-midnight text-base font-medium rounded-sm text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                下載履歷
              </a>
            </div>

            <div class="pt-8 flex gap-6 text-slate-400">
              <a href="#" class="hover:text-champagne transition-colors"><i data-lucide="github"
                  class="w-6 h-6"></i></a>
              <a href="#" class="hover:text-champagne transition-colors"><i data-lucide="linkedin"
                  class="w-6 h-6"></i></a>
              <a href="#" class="hover:text-champagne transition-colors"><i data-lucide="twitter"
                  class="w-6 h-6"></i></a>
            </div>
          </div>

          <!-- Hero Image Area -->
          <div class="relative lg:h-[600px] flex items-center justify-center">
            <div
              class="relative w-full max-w-md aspect-[3/4] rounded-t-[100px] rounded-b-lg overflow-hidden border-4 border-white shadow-2xl shadow-champagne/20">
              <!-- Placeholder for Developer Image -->
              <div
                class="w-full h-full bg-slate-200 object-cover flex items-center justify-center text-slate-400 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
              </div>
              <!-- Glass Overlay Card -->
              <div
                class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded shadow-lg border-l-4 border-champagne">
                <div class="flex justify-between items-end">
                  <div>
                    <p class="text-xs text-slate-500 uppercase tracking-wider mb-1">Current Focus</p>
                    <p class="font-serif text-lg font-bold text-midnight">React & AI Integration</p>
                  </div>
                  <div class="text-champagne">
                    <i data-lucide="sparkles" class="w-6 h-6"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative Elements -->
            <div
              class="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-champagne rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
            </div>
            <div
              class="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section id="skills" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-midnight mb-4">專業技能庫</h2>
          <div class="w-16 h-1 bg-champagne mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600 max-w-2xl mx-auto">如同許妍在職場上的多面手能力，我也具備從前端互動到後端架構的完整技術棧。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="p-8 bg-cream rounded-xl border border-slate-100 card-hover group">
            <div
              class="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
              <i data-lucide="layout" class="w-6 h-6 text-rose-500"></i>
            </div>
            <h3 class="text-xl font-bold text-midnight mb-4 font-serif">前端開發</h3>
            <p class="text-slate-500 mb-6 text-sm leading-relaxed">打造絲滑流暢的用戶體驗，注重每一個像素的細節。</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in frontendSkills" :key="skill"
                class="px-3 py-1 bg-white border border-rose-100 text-rose-600 text-xs font-medium rounded-full">{{ skill }}</span>
            </div>
          </div>

          <!-- Backend -->
          <div class="p-8 bg-cream rounded-xl border border-slate-100 card-hover group">
            <div
              class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <i data-lucide="server" class="w-6 h-6 text-indigo-600"></i>
            </div>
            <h3 class="text-xl font-bold text-midnight mb-4 font-serif">後端架構</h3>
            <p class="text-slate-500 mb-6 text-sm leading-relaxed">構建穩固、高效的系統核心，如同都市的地下管網般重要。</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in backendSkills" :key="skill"
                class="px-3 py-1 bg-white border border-indigo-100 text-indigo-600 text-xs font-medium rounded-full">{{ skill }}</span>
            </div>
          </div>

          <!-- Tools & DevOps -->
          <div class="p-8 bg-cream rounded-xl border border-slate-100 card-hover group">
            <div
              class="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
              <i data-lucide="container" class="w-6 h-6 text-champagne"></i>
            </div>
            <h3 class="text-xl font-bold text-midnight mb-4 font-serif">部署與工具</h3>
            <p class="text-slate-500 mb-6 text-sm leading-relaxed">自動化流程與雲端部署，確保產品隨時保持最佳狀態。</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in devopsSkills" :key="skill"
                class="px-3 py-1 bg-white border border-amber-100 text-champagne text-xs font-medium rounded-full">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl lg:text-4xl font-serif font-bold text-midnight mb-4">精選專案</h2>
            <p class="text-slate-600">展現技術與美學的結合</p>
          </div>
          <a href="#"
            class="hidden md:flex items-center text-champagne font-medium hover:text-champagne-light transition-colors mt-4 md:mt-0">
            查看 Github
            <i data-lucide="arrow-up-right" class="ml-1 w-4 h-4"></i>
          </a>
        </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div v-for="(project, index) in featuredProjects" :key="project.title" class="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100" :class="{'lg:mt-12': index === 1}">

                  <div class="relative overflow-hidden h-64 bg-slate-200">

                    <div

                      class="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">

                      <i data-lucide="shopping-bag" class="w-16 h-16 text-white/20"></i>

                    </div>

                    <div

                      class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-midnight uppercase tracking-wide">

                      {{ project.type.includes('團隊') ? '團隊協作' : '個人專案' }}

                    </div>

                  </div>

                  <div class="p-8">

                    <h3 class="text-2xl font-serif font-bold text-midnight mb-3 group-hover:text-champagne transition-colors">

                      {{ project.title }}</h3>

                    <p class="text-slate-500 mb-6 line-clamp-2">{{ project.description }}</p>

                    <div class="flex items-center justify-between border-t border-slate-100 pt-6">

                      <div class="flex gap-3">

                        <i data-lucide="code-2" class="w-5 h-5 text-slate-400"></i>

                        <span class="text-sm text-slate-500">{{ project.tags.slice(0, 3).join(', ') }}</span>

                      </div>

                      <a :href="project.links[0]?.url || '#'" target="_blank"

                        class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-midnight group-hover:bg-midnight group-hover:text-white transition-all">

                        <i data-lucide="arrow-right" class="w-5 h-5"></i>

                      </a>

                    </div>

                  </div>

                </div>

              </div>

        <div class="mt-12 text-center md:hidden">
          <a href="#"
            class="inline-flex items-center text-champagne font-medium hover:text-champagne-light transition-colors">
            查看 Github
            <i data-lucide="arrow-up-right" class="ml-1 w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonial / Quote Section (Atmosphere) -->
    <section class="py-20 bg-midnight relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <i data-lucide="quote" class="w-12 h-12 text-champagne mx-auto mb-6 opacity-50"></i>
        <h2 class="text-3xl md:text-4xl font-serif text-white leading-normal mb-8">
          「在這個充滿變數的時代，唯有專業與熱愛，能讓我們在人群中<span class="text-champagne">耀眼</span>奪目。」
        </h2>
        <div class="flex items-center justify-center gap-4">
          <div
            class="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl font-serif text-white border-2 border-champagne">
            C</div>
          <div class="text-left">
            <p class="text-white font-bold">Client Name</p>
            <p class="text-slate-400 text-sm">CEO of TechStart</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-white relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-midnight mb-4">開啟合作</h2>
          <div class="w-16 h-1 bg-champagne mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600">有任何專案想法？讓我們一起將它實現。</p>
        </div>

        <form class="space-y-6 bg-cream p-8 md:p-12 rounded-2xl border border-slate-100 shadow-xl shadow-champagne/5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 mb-2">姓名</label>
              <input type="text" id="name"
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:ring-2 focus:ring-champagne focus:border-transparent outline-none transition-all"
                placeholder="您的稱呼">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 mb-2">電子郵件</label>
              <input type="email" id="email"
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:ring-2 focus:ring-champagne focus:border-transparent outline-none transition-all"
                placeholder="name@example.com">
            </div>
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-slate-700 mb-2">主旨</label>
            <input type="text" id="subject"
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:ring-2 focus:ring-champagne focus:border-transparent outline-none transition-all"
              placeholder="專案類型">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-slate-700 mb-2">訊息內容</label>
            <textarea id="message" rows="4"
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:ring-2 focus:ring-champagne focus:border-transparent outline-none transition-all"
              placeholder="請描述您的需求..."></textarea>
          </div>
          <button type="button"
            class="w-full py-4 px-6 bg-midnight text-white font-medium text-lg rounded-sm hover:bg-slate-800 transition-all shadow-lg shadow-midnight/20 shine-effectable">
            發送訊息
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-midnight text-slate-400 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <span class="font-serif font-bold text-xl text-white">許皓宇<span class="text-champagne">.dev</span></span>
            <p class="text-sm mt-2">© 2024 All Rights Reserved.</p>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-white transition-colors">Instagram</a>
            <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" class="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

const mobileMenuOpen = ref(false);
const scrolledNavbar = ref(false);

const frontendSkills = computed(() => ['React', 'Vue.js', 'Tailwind CSS', 'Next.js']);
const backendSkills = computed(() => ['Node.js', 'Python', 'PostgreSQL', 'GraphQL']);
const devopsSkills = computed(() => ['AWS', 'Docker', 'Git', 'CI/CD']);
const featuredProjects = computed(() => portfolioData.projects.featured);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  scrolledNavbar.value = window.scrollY > 10;
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
/* Tailwind CSS config from original HTML */
body {
  font-family: '"Noto Sans TC"', sans-serif;
}

.bg-cream {
  background-color: #fdfbf7;
}

.text-slate-800 {
  color: #1e293b;
}

.font-sans {
  font-family: '"Noto Sans TC"', sans-serif;
}

.font-serif {
  font-family: '"Noto Serif TC"', 'Playfair Display', serif;
}

.selection\:bg-champagne::selection {
  background-color: #d97706;
}

.selection\:text-white::selection {
  color: #fff;
}

/* Custom Styles */
.glass-nav {
  background: rgba(253, 251, 247, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(217, 119, 6, 0.1);
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -5px rgba(217, 119, 6, 0.15);
  border-color: rgba(217, 119, 6, 0.3);
}

.text-gradient {
  background: linear-gradient(to right, #0f172a, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shine-effectable {
  position: relative;
  overflow: hidden;
}

.shine-effectable::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: skewX(-25deg);
  transition: 0.5s;
}

.shine-effectable:hover::after {
  left: 100%;
  transition: 0.7s;
}

.bg-pattern {
  background-image: radial-gradient(#d97706 0.5px, transparent 0.5px);
  background-size: 24px 24px;
  opacity: 0.05;
}

/* Animations (from original HTML) */
@keyframes blob {
  0% { transform: scale(1); }
  30% { transform: scale(1.1); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.animate-blob {
  animation: blob 8s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
