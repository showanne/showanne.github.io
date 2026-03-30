<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Gemini Fusion 4 | Cyber Combat Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Chakra+Petch:wght@400;600;700&family=Share+Tech+Mono&display=swap'
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
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

const scrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="antialiased selection:bg-[#45F3FF] selection:text-black bg-[#050505] text-[#C5C6C7] font-sans overflow-x-hidden">
    
    <!-- Sleep 3: Global Effects -->
    <div class="scanline"></div>
    <div class="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>

    <!-- Navigation: Hybrid Style -->
    <nav :class="['fixed w-full z-50 transition-all duration-500', scrolled ? 'bg-black/90 h-16 border-b border-[#45F3FF]/20' : 'bg-transparent h-24']">
      <div class="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <div class="flex items-center gap-3 cursor-pointer group" @click="() => window.scrollTo(0,0)">
          <i class="fa-solid fa-crosshairs text-[#FF2A6D] text-2xl animate-pulse"></i>
          <span class="font-bold text-xl tracking-[0.2em] text-white font-tech uppercase">FUSION<span class="text-[#45F3FF]">.</span>CORE</span>
        </div>
        <div class="hidden md:flex space-x-10 font-mono text-[10px] tracking-[0.3em] uppercase">
          <a href="#about" class="hover:text-[#45F3FF] transition-colors">Combat_Specs</a>
          <a href="#projects" class="hover:text-[#45F3FF] transition-colors">Deployed_Ops</a>
          <a href="#contact" class="px-4 py-1 border border-[#FF2A6D] text-[#FF2A6D] hover:bg-[#FF2A6D] hover:text-black transition-all">Connect</a>
        </div>
      </div>
    </nav>

    <!-- [Crossfire Style] Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Split Background -->
      <div class="absolute inset-0 z-0 flex flex-col md:flex-row">
        <!-- Visual Side (Alert Red) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover sepia-[.5] brightness-[0.3] scale-105 group-hover:scale-110 transition-transform duration-[2s]" alt="Visual">
          <div class="absolute inset-0 bg-[#FF2A6D]/10 mix-blend-overlay"></div>
        </div>
        <!-- Logic Side (Cyan) -->
        <div class="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover hue-rotate-[180deg] brightness-[0.3] scale-105 group-hover:scale-110 transition-transform duration-[2s]" alt="Logic">
          <div class="absolute inset-0 bg-[#45F3FF]/10 mix-blend-overlay"></div>
        </div>
      </div>

      <div class="relative z-20 text-center px-4">
        <div class="inline-block border border-[#45F3FF]/30 px-4 py-1 bg-[#45F3FF]/5 mb-8 backdrop-blur-sm animate-on-scroll">
          <p class="text-[#45F3FF] font-mono tracking-[0.4em] text-[10px] uppercase">// Mission_ID: Anne_Jhan // Status: Ready</p>
        </div>
        
        <h1 class="text-6xl md:text-9xl font-black text-white mb-4 tracking-tighter font-tech italic glitch-text uppercase" data-text="ANNE JHAN">
          ANNE JHAN
        </h1>
        
        <h2 class="text-2xl md:text-5xl font-bold text-white mb-12 tracking-[0.5em] font-tech">
          CROSS<span class="text-[#FF2A6D]">FIRE</span><span class="text-[#45F3FF]">.LOG</span>
        </h2>

        <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 font-mono">
          <div class="text-right group cursor-default">
            <p class="text-[#FF2A6D] text-lg font-bold mb-1 tracking-widest underline decoration-2 underline-offset-8">VISUAL_CRAFT</p>
            <h3 class="text-3xl font-tech font-bold text-white/80 group-hover:text-white transition-colors">前端呈現</h3>
          </div>
          <div class="h-16 w-px bg-white/20 hidden md:block"></div>
          <div class="text-left group cursor-default">
            <p class="text-[#45F3FF] text-lg font-bold mb-1 tracking-widest underline decoration-2 underline-offset-8">DATA_CORE</p>
            <h3 class="text-3xl font-tech font-bold text-white/80 group-hover:text-white transition-colors">後端架構</h3>
          </div>
        </div>
      </div>

      <!-- Sleep 3 Decorative Ring -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
    </header>

    <!-- [Hybrid] About & Combat Stats Section -->
    <section id="about" class="py-32 relative bg-[#050505] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid lg:grid-cols-2 gap-20 items-center animate-on-scroll">
          <div class="space-y-10">
            <div class="space-y-4">
              <h3 class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase flex items-center gap-3">
                <span class="w-8 h-px bg-[#45F3FF]/30"></span> 01. Combat_Specifications
              </h3>
              <h2 class="text-4xl md:text-6xl font-tech font-bold text-white uppercase leading-tight italic">
                技術是武器，<br><span class="text-[#FF2A6D]">代碼是子彈。</span>
              </h2>
            </div>
            <p class="text-slate-400 text-lg leading-relaxed font-light font-mono italic">
              > 我致力於在虛擬世界中構建最精準的邏輯架構。無論是 0.1s 的效能優化，還是像素級的 UI 還原，都是這場全端戰役中的致勝關鍵。
            </p>
            <div class="flex gap-6">
               <div class="bg-white/5 border border-white/10 px-6 py-4 rounded-sm">
                  <div class="text-2xl font-bold text-white font-tech tracking-widest">4+</div>
                  <div class="text-[10px] text-slate-500 uppercase font-mono">Years_Exp</div>
               </div>
               <div class="bg-white/5 border border-white/10 px-6 py-4 rounded-sm">
                  <div class="text-2xl font-bold text-white font-tech tracking-widest">{{ featuredProjects.length }}+</div>
                  <div class="text-[10px] text-slate-500 uppercase font-mono">Operations</div>
               </div>
            </div>
          </div>

          <!-- Combat Stats (Crossfire style Bars inside Sleep 3 Grid) -->
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(cat, key) in skills" :key="key" class="bento-card p-8 group">
              <h4 class="text-white font-tech font-bold mb-8 uppercase text-sm tracking-[0.2em] flex justify-between">
                <span>{{ key }}</span>
                <i class="ph ph-activity text-[#45F3FF] opacity-50"></i>
              </h4>
              <div class="space-y-6">
                <div v-for="(tag, idx) in cat.tags.slice(0, 3)" :key="tag" class="space-y-2">
                  <div class="flex justify-between font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    <span>{{ tag }}</span>
                    <span :class="idx === 0 ? 'text-[#FF2A6D]' : 'text-[#45F3FF]'">{{ 95 - (idx * 5) }}%</span>
                  </div>
                  <div class="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div :class="['h-full transition-all duration-[2s] group-hover:w-full', idx === 0 ? 'bg-[#FF2A6D]' : 'bg-[#45F3FF]']" 
                      :style="{ width: (95 - (idx * 5)) + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [Sleep 3 Bento Style] Deployed Modules -->
    <section id="projects" class="py-32 bg-void relative overflow-hidden">
      <div class="absolute top-20 right-0 text-[15rem] font-tech font-black text-white/5 select-none -translate-y-1/2 translate-x-1/4 italic uppercase">MISSION</div>
      
      <div class="max-w-7xl mx-auto px-8 relative z-10 animate-on-scroll">
        <h3 class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase mb-16 flex items-center gap-3">
          <span class="w-8 h-px bg-[#45F3FF]/30"></span> 02. Deployed_Modules
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, idx) in featuredProjects" :key="project.title" class="group relative cursor-pointer">
            <div class="aspect-[4/3] overflow-hidden bg-[#050505] border-b-4 border-[#45F3FF] relative group-hover:border-[#FF2A6D] transition-colors duration-500">
              <div class="w-full h-full bg-[#111] flex items-center justify-center text-slate-800 font-tech text-6xl italic uppercase opacity-20 group-hover:opacity-40 transition-opacity">
                #0{{ idx + 1 }}
              </div>
              <div class="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors"></div>

              <!-- Content Overlay -->
              <div class="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                <div class="text-[10px] font-mono text-[#FF2A6D] mb-2 uppercase tracking-widest flex items-center gap-2">
                  <span class="w-2 h-2 bg-[#FF2A6D] rounded-full animate-pulse"></span>
                  Operation_Active
                </div>
                <h4 class="text-2xl font-tech font-bold text-white mb-2 uppercase italic tracking-tighter">{{ project.title }}</h4>
                <div class="flex gap-3">
                  <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="text-[9px] font-mono text-slate-500 uppercase">{{ tag }}</span>
                </div>
              </div>

              <!-- Reveal on Hover -->
              <div class="absolute inset-0 bg-[#050505]/95 p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md">
                <p class="text-slate-400 text-sm font-mono leading-relaxed mb-8 italic">"{{ project.description }}"</p>
                <div class="flex gap-6">
                  <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank" class="text-xs font-tech text-[#45F3FF] hover:text-white transition-colors uppercase tracking-[0.2em]">
                    {{ link.text }} <i class="ph ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [Sleep 3 Bento Style] Final Connection -->
    <section id="contact" class="py-32 bg-black">
      <div class="max-w-7xl mx-auto px-8 animate-on-scroll">
        <div class="flex justify-between items-end mb-16">
          <h2 class="text-4xl font-tech font-bold text-white uppercase italic tracking-tighter">Initiate_Handshake()</h2>
          <div class="hidden md:block font-mono text-[10px] text-slate-600 tracking-[0.3em] uppercase">
            Protocol: Encrypted // Response: 11ms
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          <div class="md:col-span-2 md:row-span-2 bento-card p-12 flex flex-col justify-center relative overflow-hidden group">
            <div class="absolute -top-20 -right-20 opacity-[0.02] rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <i class="fa-solid fa-crosshairs text-[30rem] text-[#FF2A6D]"></i>
            </div>
            <h4 class="text-4xl font-tech font-bold text-white mb-6 uppercase italic">Ready for deployment?</h4>
            <p class="text-slate-500 mb-12 max-w-sm font-light font-mono text-sm leading-relaxed">
              > 目前開放全端專案開發與架構諮詢。若有作戰需求，請點擊下方按鈕啟動通訊協議。
            </p>
            <a :href="'mailto:' + contact.email" class="inline-block bg-[#FF2A6D] text-black px-10 py-4 font-tech font-bold text-xs hover:bg-[#45F3FF] transition-all w-fit uppercase tracking-[0.3em]">
              Send_Signal()
            </a>
          </div>

          <a :href="contact.github" target="_blank" class="md:col-span-1 bento-card p-8 group flex flex-col justify-between hover:border-[#45F3FF]/50 transition-colors">
            <div class="flex justify-between items-start">
              <i class="ph ph-github-logo text-4xl text-white group-hover:text-[#45F3FF] transition-colors"></i>
              <i class="ph ph-arrow-up-right text-slate-800"></i>
            </div>
            <div class="font-tech text-xl text-white uppercase tracking-[0.2em]">Github_Repo</div>
          </a>

          <div class="md:col-span-1 bg-[#1a0b2e]/30 border border-white/5 p-8 font-mono text-[10px] text-green-500/40 flex flex-col justify-center">
            <p>> STACK: VUE_NUXT</p>
            <p>> CORE: NODE_JS</p>
            <p>> DATABASE: MONGO</p>
            <p class="animate-pulse">> _</p>
          </div>

          <a :href="contact.linkedin" target="_blank" class="md:col-span-1 bento-card p-8 group flex flex-col justify-between hover:border-[#0077b5]/50 transition-colors">
            <div class="flex justify-between items-start">
              <i class="ph ph-linkedin-logo text-4xl text-[#0077b5]"></i>
              <i class="ph ph-arrow-up-right text-slate-800"></i>
            </div>
            <div class="font-tech text-xl text-white uppercase tracking-[0.2em]">Connect_In</div>
          </a>

          <div class="md:col-span-1 bento-card flex flex-col items-center justify-center opacity-30 hover:opacity-100 transition-all border-[#FF2A6D]/20">
             <i class="ph ph-target text-3xl text-[#FF2A6D] mb-2"></i>
             <span class="font-mono text-[10px] uppercase tracking-[0.4em]">Lock_Target</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-black border-t border-white/5 text-center">
      <p class="font-mono text-[10px] text-slate-700 tracking-[0.5em] uppercase">
        &copy; {{ new Date().getFullYear() }} ANNE JHAN // COMBAT_FUSION_V4 // TERMINATE_SESSION
      </p>
    </footer>
  </div>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.font-mono { font-family: 'Share Tech Mono', monospace; }

.bento-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.bento-card:hover {
  border-color: rgba(69, 243, 255, 0.3);
  background: rgba(69, 243, 255, 0.03);
  transform: translateY(-5px);
}

.grid-bg {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(69, 243, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(69, 243, 255, 0.03) 1px, transparent 1px);
}

.scanline {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px;
  z-index: 100;
  pointer-events: none;
  position: fixed;
  opacity: 0.05;
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

.glitch-text {
  position: relative;
  text-shadow: 2px 0 #FF2A6D, -2px 0 #45F3FF;
}

.animate-spin-slow { animation: spin 80s linear infinite; }
@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
