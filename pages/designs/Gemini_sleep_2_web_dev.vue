<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'Dev.Anne | Full-Stack Developer Portfolio',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&family=Noto+Sans+TC:wght@300;400;700&family=Orbitron:wght@400;700&display=swap'
    }
  ]
});

// Data Mapping
const skills = computed(() => portfolioData.skills);
const featuredProjects = computed(() => portfolioData.projects.featured);
const contact = computed(() => portfolioData.contact);

// Terminal Logic
const terminalInput = ref('');
const terminalHistory = ref<{ type: 'cmd' | 'res' | 'info', text: string }[]>([
  { type: 'info', text: '// Welcome to the Anne-server terminal.' },
  { type: 'info', text: 'Type "help" to see available commands.' }
]);

const handleCommand = () => {
  const cmd = terminalInput.value.toLowerCase().trim();
  if (!cmd) return;

  terminalHistory.value.push({ type: 'cmd', text: cmd });

  let response = '';
  switch (cmd) {
    case 'help':
      response = 'Available commands: [about, projects, contact, skills, clear, status]';
      break;
    case 'about':
      response = '> A full-stack engineer obsessed with performance, logic, and elegant loops.';
      break;
    case 'projects':
      response = `> Found ${featuredProjects.value.length} featured projects. Visit the "Repos" section for details.`;
      break;
    case 'contact':
      response = `> Primary contact: ${contact.value.email}. Social: GitHub / LinkedIn.`;
      break;
    case 'skills':
      response = `> Expertise in ${skills.value.frontend.highlight.join(', ')} and ${skills.value.backend.highlight.join(', ')}.`;
      break;
    case 'status':
      response = '> System: Operational | Energy: Optimal | Focus: High';
      break;
    case 'clear':
      terminalHistory.value = [];
      terminalInput.value = '';
      return;
    default:
      response = `> Command not found: ${cmd}. Type "help" for options.`;
  }

  terminalHistory.value.push({ type: 'res', text: response });
  terminalInput.value = '';
  
  // Auto scroll to bottom of terminal
  setTimeout(() => {
    const el = document.querySelector('.terminal-body');
    if (el) el.scrollTop = el.scrollHeight;
  }, 10);
};

// Intersection Observer for animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section, .animate-on-scroll').forEach(el => observer.observe(el));
});

</script>

<template>
  <div class="selection:bg-purple-500 selection:text-white bg-[#05070A] text-[#E2E8F0] font-sans overflow-x-hidden">
    
    <div class="scanline"></div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div class="text-xl font-bold orbitron tracking-widest flex items-center gap-2">
        <div class="w-6 h-6 border-2 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
        DEV.<span class="text-cyan-400">ANNE</span>
      </div>
      <div class="hidden md:flex space-x-10 text-[10px] orbitron uppercase tracking-[0.4em]">
        <a href="#home" class="hover:text-cyan-400 transition">Base</a>
        <a href="#skills" class="hover:text-cyan-400 transition">Stack</a>
        <a href="#projects" class="hover:text-cyan-400 transition">Repos</a>
        <a href="#contact" class="hover:text-cyan-400 transition">Execute</a>
      </div>
    </nav>

    <!-- Hero -->
    <main id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-mono text-cyan-500 text-sm mb-4">system.init("Anne_Portfolio")</p>
          <h1 class="text-5xl md:text-8xl font-bold mb-8 tracking-tighter orbitron uppercase">
            CODE <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">NEVER SLEEPS</span>
          </h1>
          <div class="h-8 mb-12 flex justify-center">
            <p class="typewriter font-mono text-slate-400 text-lg md:text-xl">Building seamless loops between UI & Backend.</p>
          </div>
          <div class="flex justify-center gap-6">
            <a href="#projects" class="group relative px-8 py-3 overflow-hidden border border-cyan-500/50 block">
              <div class="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span class="relative z-10 orbitron text-xs group-hover:text-black transition-colors">View Repos</span>
            </a>
            <button class="px-8 py-3 border border-white/10 hover:bg-white/5 transition-all orbitron text-xs">
              DOWNLOAD_CV
            </button>
          </div>
        </div>
      </div>

      <!-- Rotating Code Ring Background -->
      <div class="absolute opacity-[0.03] infinite-loop pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 200 200">
          <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="transparent" />
          <text class="text-[5px] font-mono fill-white">
            <textPath xlink:href="#curve">
              VUE NUXT TYPESCRIPT NODEJS MONGODB TAILWIND JAVASCRIPT CSS HTML EXPRESS PINIA GSAP
            </textPath>
          </text>
        </svg>
      </div>
    </main>

    <!-- Skills Section -->
    <section id="skills" class="py-32 container mx-auto px-6 animate-on-scroll">
      <h2 class="orbitron text-3xl font-bold mb-16 flex items-center gap-4">
        <span class="text-cyan-500 underline">01</span> TECH STACK
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Frontend -->
        <div class="p-8 glass-panel">
          <div class="text-cyan-400 mb-6">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <h3 class="orbitron text-xl mb-4">Frontend</h3>
          <ul class="font-mono text-sm text-slate-400 space-y-2">
            <li v-for="tag in skills.frontend.highlight" :key="tag">> {{ tag }}</li>
            <li v-for="tag in skills.frontend.tags.slice(0, 4)" :key="tag">> {{ tag }}</li>
          </ul>
        </div>
        <!-- Backend -->
        <div class="p-8 glass-panel border-purple-500/20">
          <div class="text-purple-400 mb-6">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H5v-4h10v4zm0-5H5V9h10v4zm5 5h-4V9h4v9z" /></svg>
          </div>
          <h3 class="orbitron text-xl mb-4">Backend</h3>
          <ul class="font-mono text-sm text-slate-400 space-y-2">
            <li v-for="tag in skills.backend.highlight" :key="tag">> {{ tag }}</li>
            <li v-for="tag in skills.backend.tags" :key="tag">> {{ tag }}</li>
          </ul>
        </div>
        <!-- Tools -->
        <div class="p-8 glass-panel border-white/5">
          <div class="text-white mb-6">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
          </div>
          <h3 class="orbitron text-xl mb-4">Infrastructure</h3>
          <ul class="font-mono text-sm text-slate-400 space-y-2">
            <li v-for="tag in skills.tools.tags" :key="tag">> {{ tag }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 bg-white/[0.02] animate-on-scroll">
      <div class="container mx-auto px-6">
        <h2 class="orbitron text-3xl font-bold mb-16 text-right uppercase">
          SELECTED REPOS <span class="text-cyan-500 underline">02</span>
        </h2>

        <div class="space-y-24">
          <div v-for="(project, idx) in featuredProjects" :key="project.title" 
            :class="['flex flex-col gap-12 items-center', idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
            <div class="w-full md:w-3/5 group relative overflow-hidden">
              <div class="aspect-video bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center">
                <div class="text-slate-700 font-mono italic group-hover:text-cyan-400/50 transition-colors uppercase tracking-widest">
                  [ {{ project.title.substring(0, 15) }}... ]
                </div>
              </div>
              <div class="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="w-full md:w-2/5">
              <p class="font-mono text-cyan-400 text-xs mb-2">{{ project.tags.slice(0, 3).join(' + ') }}</p>
              <h3 class="text-3xl font-bold mb-4 orbitron">{{ project.title }}</h3>
              <p class="text-slate-400 mb-6 leading-loose">
                {{ project.description }}
              </p>
              <div class="flex gap-4">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank"
                  class="text-[10px] orbitron tracking-[0.2em] text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition uppercase">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Terminal -->
    <section id="contact" class="py-32 container mx-auto px-6 max-w-4xl animate-on-scroll">
      <div class="glass-panel p-1 rounded-t-lg flex gap-2 px-4 py-2 border-b-0">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="ml-4 font-mono text-[10px] text-slate-500 lowercase">guest@anne-server: ~</span>
      </div>
      <div class="glass-panel p-6 rounded-b-lg font-mono text-sm min-h-[300px] border-t-0 flex flex-col">
        <div class="terminal-body flex-1 overflow-y-auto space-y-2 mb-4">
          <div v-for="(log, i) in terminalHistory" :key="i" 
            :class="{'text-green-400': log.type === 'info', 'text-slate-400': log.type === 'res', 'text-cyan-400': log.type === 'cmd'}">
            <span v-if="log.type === 'cmd'">$ </span>{{ log.text }}
          </div>
        </div>
        <div class="flex gap-2">
          <span class="text-cyan-400">$</span>
          <input 
            v-model="terminalInput" 
            @keyup.enter="handleCommand"
            type="text" 
            class="bg-transparent border-none outline-none flex-1 text-white font-mono" 
            placeholder="enter command..."
            autofocus>
        </div>
      </div>
    </section>

    <footer class="py-20 border-t border-white/5 text-center">
      <div class="orbitron text-lg font-bold mb-2">DEV.<span class="text-cyan-400">ANNE</span></div>
      <p class="font-mono text-[10px] text-slate-600 uppercase tracking-widest">Built in the infinite loop of {{ new Date().getFullYear() }}</p>
      <div class="flex justify-center gap-6 mt-6">
        <a :href="contact.github" target="_blank" class="text-slate-500 hover:text-cyan-400 transition"><i class="fab fa-github"></i></a>
        <a :href="contact.linkedin" target="_blank" class="text-slate-500 hover:text-cyan-400 transition"><i class="fab fa-linkedin"></i></a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: 'Fira Code', monospace;
}

.orbitron {
  font-family: 'Orbitron', sans-serif;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.15);
  transition: all 0.3s ease;
}

.glass-panel:hover {
  border-color: #00F2FF;
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.1);
}

.scanline {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom,
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px;
  z-index: 100;
  pointer-events: none;
  position: fixed;
  opacity: 0.1;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.typewriter {
  overflow: hidden;
  border-right: .15em solid #00F2FF;
  white-space: nowrap;
  letter-spacing: .15em;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #00F2FF; }
}

.infinite-loop {
  animation: rotate 25s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

section, .animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

section.visible, .animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.terminal-body::-webkit-scrollbar {
  width: 4px;
}
.terminal-body::-webkit-scrollbar-thumb {
  background: rgba(0, 242, 255, 0.2);
}
</style>
