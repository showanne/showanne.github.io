<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Gemini Fusion 3 | Advanced Dev Log',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Share+Tech+Mono&family=Playfair+Display:ital,wght@0,700;1,700&display=swap'
    }
  ],
  script: [{ src: 'https://unpkg.com/@phosphor-icons/web', defer: true }]
});

// Data Mapping
const featuredProjects = computed(() => portfolioData.projects.featured);
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

// Mock Experience Data (as it's not in portfolio.json, I'll use static derived from common patterns)
const experiences = [
  {
    role: 'Senior Front-End Developer',
    company: 'Wistron ITS (Cathay Financial Client)',
    period: '2025.02 - Present',
    desc: 'Leading system architecture for enterprise leave management systems using Vue 3 & Quasar.'
  },
  {
    role: 'Full Stack Engineer',
    company: 'Cite Media Holding Group',
    period: '2024.05 - 2025.02',
    desc: 'Optimized API structures and integrated TypeScript for robust media platform services.'
  }
];

const scrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });

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
  <div class="antialiased selection:bg-[#45F3FF] selection:text-black bg-[#050505] text-[#C5C6C7] font-sans overflow-x-hidden">
    
    <div class="scanline"></div>

    <!-- [Base: Sleep 3] Navigation -->
    <nav :class="['fixed w-full z-50 glass transition-all duration-300', scrolled ? 'h-16' : 'h-20']">
      <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer group" @click="() => window.scrollTo(0,0)">
          <i class="ph ph-terminal-window text-[#45F3FF] text-2xl"></i>
          <span class="font-bold text-xl tracking-widest text-white font-mono uppercase">FUSION<span class="text-[#45F3FF]">.</span>V3</span>
        </div>
        <div class="hidden md:flex space-x-10 font-mono text-xs tracking-widest uppercase">
          <a href="#about" class="hover:text-[#45F3FF] transition-colors">About</a>
          <a href="#experience" class="hover:text-[#45F3FF] transition-colors">Timeline</a>
          <a href="#projects" class="hover:text-[#45F3FF] transition-colors">Deployed</a>
          <a href="#contact" class="hover:text-[#45F3FF] transition-colors">Exec</a>
        </div>
      </div>
    </nav>

    <!-- [Base: Sleep 3] Hero -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-noise opacity-20 z-0"></div>
      <div class="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div class="inline-block border border-[#45F3FF]/30 px-3 py-1 bg-[#45F3FF]/5 mb-6 backdrop-blur-sm">
          <p class="text-[#45F3FF] font-mono tracking-widest text-[10px] animate-pulse uppercase">// Kernel Loaded // Override: Purple_Bento</p>
        </div>
        <h1 class="text-6xl md:text-9xl font-black text-white mb-2 tracking-tighter glitch-text uppercase" data-text="ANNE JHAN">
          ANNE JHAN
        </h1>
        <h2 class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500 font-mono tracking-wider opacity-80 mb-8 cursor-blink">
          HYBRID_FULLSTACK_DEV
        </h2>
        <div class="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <a href="#projects" class="px-10 py-4 bg-[#45F3FF] text-black font-bold tracking-widest font-mono text-sm uppercase">Access_Deployments</a>
          <a href="#experience" class="px-10 py-4 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-all uppercase tracking-widest">Trace_Career</a>
        </div>
      </div>
    </header>

    <!-- [Base: Sleep 3] About Code Block -->
    <section id="about" class="py-24 bg-abyss relative border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 animate-on-scroll">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <h3 class="text-[#45F3FF] font-mono tracking-widest flex items-center gap-2 uppercase text-sm">
              <i class="ph ph-cpu"></i> Profile_Definition
            </h3>
            <div class="code-block p-8 text-sm text-slate-400 leading-relaxed rounded-sm border-l-2 border-[#FF2A6D]">
              <p><span class="text-[#FF2A6D]">class</span> Developer {</p>
              <p class="pl-4">constructor() {</p>
              <p class="pl-8">this.name = <span class="text-[#45F3FF]">'Anne Jhan'</span>;</p>
              <p class="pl-8">this.role = <span class="text-[#45F3FF]">'Full Stack Engineer'</span>;</p>
              <p class="pl-8">this.motto = <span class="text-[#45F3FF]">'Code with Logic & Elegance'</span>;</p>
              <p class="pl-4">}</p>
              <p>}</p>
            </div>
            <p class="text-slate-400 leading-loose text-lg font-light">
              致力於打造高併發與極致體驗的數位產品。將複雜的技術挑戰轉化為模組化的清晰解決方案。
            </p>
          </div>
          <!-- Tech Stack Grid -->
          <div class="grid grid-cols-2 gap-4 h-full">
            <div v-for="(cat, key) in skills" :key="key" class="bg-[#0a0a0a] p-6 border border-white/5 hover:border-[#45F3FF]/30 transition-all">
              <h4 class="text-white font-bold mb-4 uppercase font-mono text-xs text-[#FF2A6D]">{{ key }}</h4>
              <ul class="text-[10px] text-slate-500 font-mono space-y-1">
                <li v-for="tag in cat.tags.slice(0, 4)" :key="tag">> {{ tag }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [Ref: Movie 4] Experience Timeline -->
    <section id="experience" class="py-32 bg-[#08010a] relative overflow-hidden">
      <div class="container mx-auto px-6 animate-on-scroll">
        <div class="mb-20 text-center">
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4">職涯軌跡 <span class="text-[#A855F7] italic">Timeline</span></h2>
          <div class="w-20 h-px bg-[#A855F7]/50 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#A855F7]/30 before:to-transparent">
          <div v-for="(exp, idx) in experiences" :key="idx" 
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-on-scroll">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#A855F7]/50 bg-[#050505] shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
              <i class="ph ph-briefcase text-[#A855F7]"></i>
            </div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1a0b2e]/40 backdrop-blur-xl p-8 rounded-xl border border-white/5 group-hover:border-[#A855F7]/30 transition-all">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-xl text-white">{{ exp.role }}</h3>
                <span class="text-[10px] font-mono text-[#A855F7] bg-[#A855F7]/10 px-2 py-1">{{ exp.period }}</span>
              </div>
              <h4 class="text-slate-400 mb-4 text-sm font-mono tracking-tighter">{{ exp.company }}</h4>
              <p class="text-slate-500 text-sm leading-relaxed">{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [Replacement: Sleep 3 V2 Section 2] Bento Projects -->
    <section id="projects" class="py-32 bg-[#030005]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-24 animate-on-scroll">
          <h3 class="text-[#A855F7] font-mono tracking-widest mb-4 flex items-center gap-2 uppercase text-sm">
            <span class="w-10 h-px bg-[#A855F7]/30"></span> 01. 精選作品 DEPLOYED_CASES
          </h3>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">架構與實作對位。</h2>
        </div>

        <div class="grid gap-32">
          <div v-for="(project, index) in featuredProjects" :key="project.title" 
            :class="['grid md:grid-cols-12 gap-8 items-center group animate-on-scroll', index % 2 !== 0 ? 'md:flex-row-reverse' : '']">
            
            <div :class="['md:col-span-7 relative overflow-hidden rounded-sm bg-[#1a0b2e]/40 border border-white/5 aspect-video hover:border-[#A855F7]/30 transition-all duration-500', index % 2 !== 0 ? 'md:order-2' : '']">
              <div class="w-full h-full flex items-center justify-center text-[#A855F7]/10 font-mono text-3xl group-hover:scale-105 transition-transform duration-700 uppercase tracking-tighter italic">
                [ Module_{{ index + 1 }} ]
              </div>
              <div class="absolute inset-0 bg-[#A855F7]/5 group-hover:bg-transparent transition-colors"></div>
              <div :class="['absolute top-4 flex gap-2', index % 2 !== 0 ? 'right-4' : 'left-4']">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="text-[9px] px-2 py-0.5 bg-black/80 border border-[#A855F7]/30 text-[#A855F7] font-mono uppercase">{{ tag }}</span>
              </div>
            </div>

            <div :class="['md:col-span-5 z-10', index % 2 !== 0 ? 'md:order-1 md:-mr-12' : 'md:-ml-12']">
              <h4 class="text-[#A855F7] font-mono text-xs mb-2 uppercase tracking-[0.2em] italic">{{ project.type.split(' · ')[0] }}</h4>
              <h3 class="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">{{ project.title }}</h3>
              <div class="bg-[#1a0b2e]/80 backdrop-blur-xl p-8 rounded-sm border border-white/5 mb-6 shadow-2xl">
                <p class="text-slate-400 text-sm leading-relaxed font-light">
                  {{ project.description }}
                </p>
              </div>
              <div :class="['flex gap-6 mt-8', index % 2 !== 0 ? 'justify-end md:justify-start' : '']">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank"
                  class="text-white hover:text-[#A855F7] transition-colors flex items-center gap-2 uppercase font-mono text-[10px] tracking-widest border-b border-transparent hover:border-[#A855F7]">
                  <i :class="link.text.includes('GitHub') ? 'ph ph-github-logo' : 'ph ph-browser'"></i> {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [Base: Sleep 3] Final Bento Contact -->
    <section id="contact" class="py-32 bg-black border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16 animate-on-scroll">
          <h2 class="text-4xl font-bold tracking-tighter uppercase font-mono italic text-white">System_Connection</h2>
          <div class="hidden md:block font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase">
            Status: Available // Ping: 24ms
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[500px] animate-on-scroll">
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm border border-white/5 bg-[#0a0a0a] p-10 flex flex-col justify-center transition-all hover:border-[#45F3FF]/20">
            <h4 class="text-3xl font-bold mb-6 text-white uppercase italic tracking-tighter">Ready to Deploy?</h4>
            <p class="text-slate-500 mb-10 max-w-md font-light leading-relaxed text-sm">
              我正在尋找具挑戰性的全端開發機會。無論是新創產品開發，或是系統重構優化，都歡迎啟動連結。
            </p>
            <a :href="'mailto:' + contact.email" class="inline-block border border-[#45F3FF] text-[#45F3FF] px-8 py-4 font-mono text-sm hover:bg-[#45F3FF] hover:text-black transition-all w-fit uppercase tracking-widest">
              SAY_HELLO()
            </a>
          </div>

          <a :href="contact.github" target="_blank" class="md:col-span-1 md:row-span-1 bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#45F3FF]/50 transition-colors block group">
            <div class="flex justify-between items-start mb-8">
              <i class="ph ph-github-logo text-4xl text-white group-hover:text-[#45F3FF] transition-colors"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-xl font-bold font-mono text-white">GITHUB</div>
          </a>

          <div class="md:col-span-1 md:row-span-1 bg-[#1F2833]/30 border border-white/5 p-6 font-mono text-[10px] text-green-500/60 flex flex-col justify-center">
            <p>> uptime: 99.9%</p>
            <p>> status: online</p>
            <p class="animate-pulse">> _</p>
          </div>

          <a :href="contact.linkedin" target="_blank" class="md:col-span-1 md:row-span-1 bg-[#0077b5]/5 border border-[#0077b5]/20 p-8 hover:bg-[#0077b5]/10 transition-all block group">
            <div class="flex justify-between items-start mb-8">
              <i class="ph ph-linkedin-logo text-4xl text-[#0077b5]"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-xl font-bold font-mono text-white tracking-tighter">LINKEDIN</div>
          </a>

          <div class="md:col-span-1 md:row-span-1 relative overflow-hidden border border-white/5 bg-[#0a0a0a] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
             <i class="ph ph-planet text-4xl text-[#A855F7] opacity-50"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-black border-t border-white/5 text-center font-mono text-[9px] text-slate-700 tracking-[0.5em] uppercase">
      &copy; {{ new Date().getFullYear() }} ANNE JHAN // FUSION_CORE_V3 // PROTOCOL_ESTABLISHED
    </footer>
  </div>
</template>

<style scoped>
.font-mono { font-family: 'Share Tech Mono', monospace; }
.font-serif { font-family: 'Playfair Display', serif; }

.glass {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(69, 243, 255, 0.1);
}

.grid-bg {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

.scanline {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px;
  z-index: 100;
  pointer-events: none;
  position: fixed;
  opacity: 0.1;
}

.glitch-text {
  position: relative;
  text-shadow: 2px 0 #FF2A6D, -2px 0 #45F3FF;
}

.code-block {
  background: #111;
  border-left: 3px solid #45F3FF;
}

.cursor-blink::after {
  content: '_';
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}
.animate-on-scroll.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
