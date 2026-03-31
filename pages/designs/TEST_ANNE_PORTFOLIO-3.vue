<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Gemini Fusion | Anne Jan Full-Stack Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Chakra+Petch:wght@400;700&family=Share+Tech+Mono&family=Playfair+Display:ital,wght@0,700;1,700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ],
  script: [{ src: 'https://unpkg.com/@phosphor-icons/web', defer: true }]
});

// Data Mapping
const featuredProjects = computed(() => portfolioData.projects.featured);
const otherProjects = computed(() => portfolioData.projects.other);
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

const scrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
  });
});
</script>

<template>
  <div class="bg-[#0B0E14] text-white font-sans overflow-x-hidden selection:bg-[#F59E0B] selection:text-black">

    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-black/90 shadow-lg py-3' : 'bg-transparent py-5']">
      <div class="container mx-auto px-6 flex justify-between items-center text-sm font-mono tracking-widest uppercase">
        <a href="#" class="text-2xl font-bold flex items-center gap-2">
          <i class="fa-solid fa-crosshairs text-[#EF4444]"></i>
          <span>FUSION<span class="text-[#F59E0B]">.</span>LOG</span>
        </a>
        <div class="hidden md:flex space-x-10">
          <a href="#about" class="hover:text-[#F59E0B] transition-colors">// About</a>
          <a href="#featured" class="hover:text-[#F59E0B] transition-colors">// Featured</a>
          <a href="#repos" class="hover:text-[#F59E0B] transition-colors">// Repos</a>
          <a href="#contact" class="hover:text-[#F59E0B] transition-colors">// Connect</a>
        </div>
      </div>
    </nav>

    <!-- [1] Hero Section - Crossfire Style -->
    <header id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 z-0 flex flex-col md:flex-row">
        <!-- Left: Frontend (Orange) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover sepia-[.5] brightness-50 scale-105 group-hover:scale-110 transition-transform duration-1000" alt="Visual">
          <div class="absolute inset-0 bg-[#F59E0B]/10 mix-blend-overlay"></div>
        </div>
        <!-- Right: Backend (Blue) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2584&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover hue-rotate-[180deg] brightness-50 scale-105 group-hover:scale-110 transition-transform duration-1000" alt="Logic">
          <div class="absolute inset-0 bg-[#0EA5E9]/10 mix-blend-overlay"></div>
        </div>
      </div>

      <div class="relative z-20 text-center px-4">
        <div class="inline-block mb-4 animate-float">
          <span class="bg-[#EF4444] text-white text-[10px] font-bold px-3 py-1 tracking-[0.3em] uppercase rounded-sm">System Fusion Active</span>
        </div>
        <h1 class="text-6xl md:text-9xl font-black font-tech uppercase tracking-tighter mb-2 glitch-text leading-none" data-text="ANNE JAN">
          ANNE JAN
        </h1>
        <h2 class="text-2xl md:text-5xl font-bold text-white mb-12 tracking-[0.4em] uppercase">
          全端<span class="text-[#F59E0B]">視覺</span>與<span class="text-[#0EA5E9]">邏輯</span>
        </h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 font-mono">
          <div class="text-right group cursor-default">
            <p class="text-[#F59E0B] text-xl font-bold mb-1">FRONTEND</p>
            <h3 class="text-3xl font-bold opacity-80 transition-opacity group-hover:opacity-100">視覺呈現</h3>
          </div>
          <div class="h-12 w-px bg-white/20 hidden md:block"></div>
          <div class="text-left group cursor-default">
            <p class="text-[#0EA5E9] text-xl font-bold mb-1">BACKEND</p>
            <h3 class="text-3xl font-bold opacity-80 transition-opacity group-hover:opacity-100">核心邏輯</h3>
          </div>
        </div>
      </div>
    </header>

    <!-- [2] About Section - Movie 7 Style -->
    <section id="about" class="py-32 relative bg-[#0B0E14] overflow-hidden">
      <div class="glow-orb bg-[#F59E0B]/5 w-96 h-96 top-0 left-1/4 -translate-y-1/2"></div>
      <div class="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-center animate-on-scroll">
        <div class="md:w-1/2">
          <h2 class="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span class="block text-slate-500 text-lg font-mono font-normal tracking-widest uppercase mb-4">// About Me</span>
            理性的架構<br>
            <span class="text-gold italic">感性的呈現</span>
          </h2>
          <p class="text-slate-400 leading-loose text-lg font-light max-w-xl">
            我深信程式碼不僅是冰冷的邏輯堆疊，更是解決問題的藝術品。
            在全端開發的旅程中，我追求極致的效能優化與架構潔癖，同時保持對美學的敏銳度與用戶體驗的細膩度。
          </p>
          <div class="grid grid-cols-2 gap-8 mt-12 font-mono">
            <div>
              <div class="text-4xl text-[#F59E0B] font-bold mb-1">4+</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div>
              <div class="text-4xl text-[#F59E0B] font-bold mb-1">{{ featuredProjects.length }}+</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest">Major Projects</div>
            </div>
          </div>
        </div>
        <!-- Skills Grid Inside About -->
        <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full font-mono">
          <div v-for="(cat, key) in skills" :key="key" class="glass-card p-8 rounded-sm border-white/5 border hover:border-[#F59E0B]/30 transition-all">
            <h3 class="text-xl font-bold mb-4 text-[#F59E0B] uppercase tracking-tighter">{{ key }}</h3>
            <ul class="space-y-2 text-xs text-slate-400">
              <li v-for="tag in cat.tags.slice(0, 5)" :key="tag">> {{ tag }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- [3] Featured Section - Movie 4 Style -->
    <section id="featured" class="py-32 bg-black/40">
      <div class="container mx-auto px-6">
        <div class="text-center mb-24 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4">精選作品 <span class="text-[#F59E0B]">.</span></h2>
          <div class="w-20 h-px bg-[#F59E0B]/50 mx-auto"></div>
          <p class="mt-6 text-slate-500 font-mono text-sm tracking-widest uppercase">Visual Masterpieces & System Architectures</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            class="group relative rounded-2xl overflow-hidden glass-card border border-white/5 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-700 animate-on-scroll">
            <div class="h-64 bg-gray-900 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 to-black/60 z-10"></div>
              <div class="w-full h-full flex items-center justify-center font-serif text-4xl text-white/10 group-hover:scale-110 transition-transform duration-700 uppercase tracking-[0.2em]">
                {{ project.title.substring(0, 10) }}
              </div>
              <div class="absolute top-4 right-4 z-20">
                <span class="bg-black/80 border border-white/10 text-[10px] px-3 py-1 font-mono tracking-widest uppercase">{{ project.type.split(' · ')[0] }}</span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">{{ project.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="tag in project.tags.slice(0, 4)" :key="tag" class="text-[9px] font-mono border border-white/10 px-2 py-1 text-slate-500 uppercase">{{ tag }}</span>
              </div>
              <div class="flex justify-between items-center border-t border-white/5 pt-6">
                <a :href="project.links[0]?.url" target="_blank" class="text-xs font-mono text-[#F59E0B] hover:text-white flex items-center gap-2 transition-colors">
                  VIEW_DETAILS <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [4] Repos Section - Sleep 2 Style -->
    <section id="repos" class="py-32 bg-[#05070A] bg-grid-pattern bg-[size:50px_50px]">
      <div class="container mx-auto px-6">
        <h2 class="font-mono text-3xl font-bold mb-20 flex items-center gap-4 uppercase tracking-tighter animate-on-scroll">
          <span class="text-[#F59E0B] underline">02</span> SELECTED REPOS
        </h2>

        <div class="space-y-32">
          <div v-for="(project, idx) in otherProjects.slice(0, 3)" :key="project.title"
            :class="['flex flex-col gap-16 items-center animate-on-scroll', idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
            <div class="w-full md:w-3/5 group relative overflow-hidden bento-card aspect-video border border-white/5">
              <div class="w-full h-full bg-slate-900 flex items-center justify-center text-[#F59E0B]/20 font-mono italic uppercase tracking-[0.2em]">
                [ Source_Module_0{{ idx + 1 }} ]
              </div>
              <div class="absolute inset-0 bg-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="w-full md:w-2/5">
              <p class="font-mono text-[#F59E0B] text-xs mb-4 tracking-[0.3em] uppercase">// Open Source</p>
              <h3 class="text-4xl font-bold mb-6 tracking-tighter">{{ project.title }}</h3>
              <p class="text-slate-400 mb-8 leading-loose text-sm font-light">
                {{ project.description }}
              </p>
              <a :href="project.link.url" target="_blank" class="text-[10px] font-mono tracking-[0.3em] text-white border-b border-[#F59E0B] pb-1 hover:text-[#F59E0B] transition-all uppercase">
                EXPLORE_SOURCE()
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [5] Contact Section - Sleep 3 Bento Style -->
    <section id="contact" class="py-32 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16 animate-on-scroll">
          <h2 class="text-4xl font-bold tracking-tighter uppercase font-mono italic">Initiate_Handshake()</h2>
          <div class="hidden md:block text-right font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase">
            <div>Latency: 14ms // Region: TW</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[550px] animate-on-scroll">
          <!-- Main Mail Block -->
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm border border-white/5 bg-[#0a0a0a] p-10 flex flex-col justify-center">
            <div class="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
              <i class="ph ph-paper-plane-tilt text-[20rem]"></i>
            </div>
            <h4 class="text-3xl font-bold mb-6 italic">Ready to deploy a new project?</h4>
            <p class="text-slate-500 mb-10 max-w-md font-light leading-relaxed">
              我正在尋找具挑戰性的開發機會。無論是新創產品開發，或是系統架構優化，都歡迎來信討論。
            </p>
            <a :href="'mailto:' + contact.email" class="inline-block border border-[#F59E0B] text-[#F59E0B] px-8 py-4 font-mono text-sm hover:bg-[#F59E0B] hover:text-black transition-all w-fit">
              SAY_HELLO()
            </a>
          </div>

          <!-- Github -->
          <a :href="contact.github" target="_blank" class="md:col-span-1 md:row-span-1 glass-card border border-white/5 p-8 hover:border-[#F59E0B]/50 transition-colors block group">
            <div class="flex justify-between items-start mb-10">
              <i class="ph ph-github-logo text-4xl group-hover:text-[#F59E0B] transition-colors"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-2xl font-bold font-mono">GITHUB</div>
            <div class="text-[10px] text-slate-600 mt-1 uppercase tracking-widest">Source Repositories</div>
          </a>

          <!-- Terminal Decoration -->
          <div class="md:col-span-1 md:row-span-1 bg-[#1F2833]/20 border border-white/5 p-6 font-mono text-[10px] text-green-500/60 flex flex-col justify-center">
            <div class="mb-4 border-b border-green-500/10 pb-2 text-green-500">TERMINAL_OUTPUT</div>
            <p>> git push origin master</p>
            <p>> build success: 4.2s</p>
            <p>> environment: production</p>
            <p class="animate-pulse">> _</p>
          </div>

          <!-- LinkedIn -->
          <a :href="contact.linkedin" target="_blank" class="md:col-span-1 md:row-span-1 bg-[#0077b5]/10 border border-[#0077b5]/20 p-8 hover:bg-[#0077b5]/20 transition-all block group">
            <div class="flex justify-between items-start mb-10">
              <i class="ph ph-linkedin-logo text-4xl text-[#0077b5]"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-2xl font-bold font-mono">LINKEDIN</div>
            <div class="text-[10px] text-slate-600 mt-1 uppercase tracking-widest">Professional Network</div>
          </a>

          <!-- Location -->
          <div class="md:col-span-1 md:row-span-1 relative overflow-hidden border border-white/5 bg-void flex items-center justify-center p-0">
            <div class="w-full h-full bg-[#111] flex flex-col items-center justify-center opacity-40 grayscale group-hover:opacity-100 transition-opacity">
               <i class="ph ph-map-pin text-4xl text-[#EF4444] mb-2"></i>
               <span class="text-[10px] font-mono uppercase tracking-[0.3em]">Taipei, Taiwan</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-black border-t border-white/5 text-center font-mono text-[10px] text-slate-700 tracking-[0.4em] uppercase">
      &copy; {{ new Date().getFullYear() }} ANNE JAN // BUILT WITH NUXT 3 // FUSION CORE
    </footer>
  </div>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.font-mono { font-family: 'Share Tech Mono', monospace; }
.font-serif { font-family: 'Playfair Display', serif; }

.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
}

.text-gold {
  background: linear-gradient(to right, #FDE68A, #F59E0B, #D97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

.glitch-text {
  position: relative;
  text-shadow: 2px 0 #EF4444, -2px 0 #0EA5E9;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  pointer-events: none;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

.cursor-blink::after {
  content: '_';
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
