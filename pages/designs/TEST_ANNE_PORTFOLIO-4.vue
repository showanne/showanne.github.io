<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Gemini Fusion 2 | Hardcore Dev Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Share+Tech+Mono&family=Orbitron:wght@400;700&family=Fira+Code:wght@300;500&display=swap'
    }
  ],
  script: [{ src: 'https://unpkg.com/@phosphor-icons/web', defer: true }]
});

// Data Mapping
const featuredProjects = computed(() => portfolioData.projects.featured);
const skills = computed(() => portfolioData.skills);
const contact = computed(() => portfolioData.contact);

// [Terminal Logic - from Sleep 2]
const terminalInput = ref('');
const terminalHistory = ref<{ type: 'cmd' | 'res' | 'info', text: string }[]>([
  { type: 'info', text: '// Booting Anne-OS v2.4.0...' },
  { type: 'info', text: 'Type "help" to list available protocols.' }
]);

const handleCommand = () => {
  const cmd = terminalInput.value.toLowerCase().trim();
  if (!cmd) return;
  terminalHistory.value.push({ type: 'cmd', text: cmd });
  let response = '';
  switch (cmd) {
    case 'help': response = 'Available: [about, projects, contact, clear, status, neofetch]'; break;
    case 'about': response = '> Full-stack architect specializing in high-performance Web Apps.'; break;
    case 'status': response = '> CPU: Stable | Energy: High | Mood: Coding'; break;
    case 'neofetch': response = '> OS: NuxtOS | Kernel: 3.12.2 | Shell: zsh | UI: Tailwind'; break;
    case 'clear': terminalHistory.value = []; terminalInput.value = ''; return;
    default: response = `> Protocol error: ${cmd} not recognized.`;
  }
  terminalHistory.value.push({ type: 'res', text: response });
  terminalInput.value = '';
  setTimeout(() => {
    const el = document.querySelector('.terminal-body');
    if (el) el.scrollTop = el.scrollHeight;
  }, 10);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="bg-[#050505] text-[#C5C6C7] font-sans overflow-x-hidden selection:bg-[#45F3FF] selection:text-black">
    
    <div class="scanline"></div>

    <!-- [1] Hero Section - Sleep 3 Style -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-noise opacity-20 z-0"></div>
      <div class="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      <!-- Abstract Rings -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#45F3FF]/10 rounded-full animate-spin-slow z-0"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#FF2A6D]/10 rounded-full animate-spin-reverse z-0"></div>

      <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div class="inline-block border border-[#45F3FF]/30 px-3 py-1 bg-[#45F3FF]/5 mb-6 backdrop-blur-sm">
          <p class="text-[#45F3FF] font-mono tracking-widest text-[10px] animate-pulse uppercase">
            // Init Sequence Complete // User: Anne_Jhan
          </p>
        </div>
        <h1 class="text-6xl md:text-9xl font-black text-white mb-2 tracking-tighter glitch-text uppercase" data-text="ANNE JHAN">
          ANNE JHAN
        </h1>
        <h2 class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500 font-mono tracking-wider opacity-80 mb-8 cursor-blink uppercase">
          Full_Stack_Developer
        </h2>
        <p class="text-slate-500 md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-mono italic">
          "Building seamless loops between UI & Backend Database."
        </p>
        <div class="flex gap-6 justify-center">
          <a href="#projects" class="px-8 py-3 bg-[#45F3FF] text-black font-bold tracking-widest hover:scale-105 transition-all font-mono text-sm uppercase">Explore_Works</a>
          <a href="#terminal" class="px-8 py-3 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-all uppercase">Run_Terminal</a>
        </div>
      </div>
    </header>

    <!-- [2] Projects Section - Movie 4 Style -->
    <section id="projects" class="py-32 bg-[#0a0a0a]">
      <div class="container mx-auto px-6">
        <div class="text-center mb-24 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">精選作品 DEPLOYED_MODULES</h2>
          <div class="w-20 h-px bg-[#45F3FF]/50 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(project, index) in featuredProjects" :key="project.title" 
            class="group relative rounded-xl overflow-hidden glass-card border border-white/5 hover:border-[#45F3FF]/30 transition-all duration-500 animate-on-scroll">
            <div class="h-56 bg-[#111] overflow-hidden relative">
              <div class="w-full h-full flex items-center justify-center text-[#45F3FF]/10 font-mono text-4xl group-hover:scale-110 transition-transform duration-700">
                MODULE_{{ index + 1 }}
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-white group-hover:text-[#45F3FF] transition-colors uppercase">{{ project.title }}</h3>
                <span class="text-[10px] font-mono text-[#FF2A6D] border border-[#FF2A6D]/30 px-2 py-0.5">{{ project.tags[0] }}</span>
              </div>
              <p class="text-slate-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{{ project.description }}</p>
              <div class="flex justify-between items-center border-t border-white/5 pt-6">
                <a :href="project.links[0]?.url" target="_blank" class="text-xs font-mono text-[#45F3FF] flex items-center gap-2 hover:underline uppercase">
                  View_Case <i class="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [3] Terminal Section - Sleep 2 Style -->
    <section id="terminal" class="py-32 bg-[#050505] animate-on-scroll">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="mb-12 flex items-center gap-4">
          <div class="h-px flex-1 bg-white/10"></div>
          <h2 class="font-mono text-xl text-slate-500 uppercase tracking-[0.3em]">Interactive Protocols</h2>
          <div class="h-px flex-1 bg-white/10"></div>
        </div>
        <div class="terminal-frame rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <div class="bg-white/5 px-4 py-2 flex gap-2 border-b border-white/10">
            <div class="w-3 h-3 rounded-full bg-[#FF2A6D]/50"></div>
            <div class="w-3 h-3 rounded-full bg-[#F59E0B]/50"></div>
            <div class="w-3 h-3 rounded-full bg-[#39FF14]/50"></div>
            <span class="ml-4 font-mono text-[10px] text-slate-500">guest@anne-os: ~</span>
          </div>
          <div class="p-8 font-mono text-sm min-h-[350px] bg-black/60 backdrop-blur-xl flex flex-col">
            <div class="terminal-body flex-1 overflow-y-auto space-y-3 mb-6">
              <div v-for="(log, i) in terminalHistory" :key="i" 
                :class="{'text-[#39FF14]': log.type === 'info', 'text-slate-400': log.type === 'res', 'text-[#45F3FF]': log.type === 'cmd'}">
                <span v-if="log.type === 'cmd'">$ </span>{{ log.text }}
              </div>
            </div>
            <div class="flex gap-2">
              <span class="text-[#45F3FF] animate-pulse">$</span>
              <input v-model="terminalInput" @keyup.enter="handleCommand" type="text" class="bg-transparent border-none outline-none flex-1 text-white font-mono" placeholder="..." autofocus>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- [4] Contact Bento Section - Sleep 3 Style -->
    <section id="contact" class="py-32 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16 animate-on-scroll">
          <h2 class="text-4xl font-bold tracking-tighter uppercase font-mono italic text-white underline decoration-[#FF2A6D]">Initiate_Handshake()</h2>
          <div class="hidden md:block font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            LATENCY: 14ms // STATUS: OPEN
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[500px] animate-on-scroll">
          <!-- Main Block -->
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm border border-white/5 bg-[#0a0a0a] p-10 flex flex-col justify-center transition-all hover:border-[#45F3FF]/20">
            <div class="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
              <i class="ph ph-paper-plane-tilt text-[20rem]"></i>
            </div>
            <h4 class="text-3xl font-bold mb-6 text-white uppercase italic tracking-tighter">Ready to Deploy?</h4>
            <p class="text-slate-500 mb-10 max-w-md font-light leading-relaxed">
              目前開放技術合作與專案開發。無論是系統架構、效能優化或是產品實作，歡迎透過下方按鈕啟動連結。
            </p>
            <a :href="'mailto:' + contact.email" class="inline-block border border-[#45F3FF] text-[#45F3FF] px-8 py-4 font-mono text-sm hover:bg-[#45F3FF] hover:text-black transition-all w-fit uppercase">
              Send_Message()
            </a>
          </div>

          <!-- Socials -->
          <a :href="contact.github" target="_blank" class="md:col-span-1 md:row-span-1 glass-card border border-white/5 p-8 hover:border-[#45F3FF]/50 transition-colors block group">
            <div class="flex justify-between items-start mb-8">
              <i class="ph ph-github-logo text-4xl text-white group-hover:text-[#45F3FF] transition-colors"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-2xl font-bold font-mono text-white">GITHUB</div>
            <div class="text-[10px] text-slate-600 mt-1 uppercase tracking-widest">Source_Repo</div>
          </a>

          <div class="md:col-span-1 md:row-span-1 bg-[#1F2833]/30 border border-white/5 p-6 font-mono text-[10px] text-[#39FF14]/60 flex flex-col justify-center">
            <p>> uptime: 99.9%</p>
            <p>> stacks: vue, node, mongo</p>
            <p>> focus: scalability</p>
            <p class="animate-pulse">> _</p>
          </div>

          <a :href="contact.linkedin" target="_blank" class="md:col-span-1 md:row-span-1 bg-[#0077b5]/5 border border-[#0077b5]/20 p-8 hover:bg-[#0077b5]/10 transition-all block group">
            <div class="flex justify-between items-start mb-8">
              <i class="ph ph-linkedin-logo text-4xl text-[#0077b5]"></i>
              <i class="ph ph-arrow-up-right text-slate-600"></i>
            </div>
            <div class="text-2xl font-bold font-mono text-white">LINKEDIN</div>
            <div class="text-[10px] text-slate-600 mt-1 uppercase tracking-widest">Connection</div>
          </a>

          <div class="md:col-span-1 md:row-span-1 relative overflow-hidden border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center p-0 opacity-40 hover:opacity-100 transition-opacity">
             <i class="ph ph-fingerprint text-4xl text-[#45F3FF] mb-2"></i>
             <span class="text-[10px] font-mono uppercase tracking-[0.2em]">Verified_Dev</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-black border-t border-white/5 text-center font-mono text-[9px] text-slate-700 tracking-[0.5em] uppercase">
      &copy; {{ new Date().getFullYear() }} ANNE JHAN // FUSION_CORE_V2 // NO_SLEEP_PROTOCOL
    </footer>
  </div>
</template>

<style scoped>
.font-mono { font-family: 'Fira Code', 'Share Tech Mono', monospace; }
.font-serif { font-family: 'Playfair Display', serif; }

.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
}

.grid-bg {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(69, 243, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(69, 243, 255, 0.05) 1px, transparent 1px);
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.07'/%3E%3C/svg%3E");
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

.cursor-blink::after {
  content: '_';
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.animate-spin-slow { animation: spin 60s linear infinite; }
.animate-spin-reverse { animation: spin 40s linear infinite reverse; }

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.terminal-body::-webkit-scrollbar { width: 4px; }
.terminal-body::-webkit-scrollbar-thumb { background: rgba(69, 243, 255, 0.2); }
</style>
