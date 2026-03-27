<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'DEV.LOG | Anne Jhan | Full Stack Developer',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Share+Tech+Mono&display=swap'
    }
  ],
  script: [
    {
      src: 'https://unpkg.com/@phosphor-icons/web',
      defer: true
    }
  ]
});

// Data Mapping
const skills = computed(() => portfolioData.skills);
const featuredProjects = computed(() => portfolioData.projects.featured);
const otherProjects = computed(() => portfolioData.projects.other);
const contact = computed(() => portfolioData.contact);

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
  });
});

const menuItems = [
  { name: '關於 ABOUT', href: '#about', id: '01.' },
  { name: '專案 PROJECTS', href: '#projects', id: '02.' },
  { name: '技術 STACK', href: '#stack', id: '03.' },
];

</script>

<template>
  <div class="antialiased selection:bg-[#45F3FF] selection:text-black bg-[#050505] text-[#C5C6C7] font-sans">
    
    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 glass transition-all duration-300', scrolled ? 'h-16' : 'h-20']" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer group" @click="() => window.scrollTo(0,0)">
          <i class="ph ph-terminal-window text-[#45F3FF] text-2xl group-hover:text-[#FF2A6D] transition-colors"></i>
          <span class="font-bold text-xl tracking-widest text-white group-hover:text-[#45F3FF] transition-colors font-mono uppercase">
            ANNE<span class="text-[#45F3FF]">.</span>LOG
          </span>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8 font-mono text-sm">
            <a v-for="item in menuItems" :key="item.name" :href="item.href" class="hover:text-[#45F3FF] transition-colors duration-300 tracking-wider">
              <span class="text-[#45F3FF]">{{ item.id }}</span> {{ item.name }}
            </a>
            <a href="#" class="px-4 py-1 border border-[#45F3FF] text-[#45F3FF] hover:bg-[#45F3FF] hover:text-black transition-all duration-300 text-xs">RESUME.PDF</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-noise z-0 opacity-20"></div>
      <div class="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-10"></div>

      <!-- Abstract Tech Visual -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-white/5 rounded-full animate-spin-slow z-0"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#45F3FF]/20 rounded-full animate-spin-reverse z-0"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#FF2A6D]/20 rounded-full animate-spin-fast z-0"></div>

      <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div class="inline-block border border-[#45F3FF]/30 px-3 py-1 bg-[#45F3FF]/5 mb-6 backdrop-blur-sm">
          <p class="text-[#45F3FF] font-mono tracking-widest text-xs md:text-sm animate-pulse flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            SYSTEM ONLINE // READY TO DEPLOY
          </p>
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter glitch-text uppercase" data-text="ANNE JHAN">
          ANNE JHAN
        </h1>
        <h2 class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8892b0] via-white to-[#8892b0] font-mono tracking-wider opacity-80 mb-8 cursor-blink uppercase">
          FULL_STACK_DEVELOPER
        </h2>

        <p class="text-[#8892b0] md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-mono">
          <span class="text-[#45F3FF]">&lt;Tagline&gt;</span><br>
          構建強韌的後端架構，打造流暢的前端體驗。<br>
          致力於將複雜的邏輯轉化為優雅的代碼。
          <br><span class="text-[#45F3FF]">&lt;/Tagline&gt;</span>
        </p>

        <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a :href="contact.github" target="_blank"
            class="group relative px-8 py-3 bg-[#45F3FF] text-[#050505] font-bold tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300">
            <span class="relative z-10 flex items-center gap-2">
              <i class="ph ph-github-logo-bold"></i> GITHUB
            </span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
          <a href="#stack"
            class="px-8 py-3 border border-white/30 text-white hover:border-[#FF2A6D] hover:text-[#FF2A6D] transition-colors duration-300 tracking-widest font-mono text-sm flex items-center gap-2">
            <i class="ph ph-envelope-simple-bold"></i> CONTACT_ME
          </a>
        </div>
      </div>

      <div class="absolute bottom-10 left-10 font-mono text-xs text-white/20 hidden md:block">
        <div class="flex flex-col gap-1">
          <span>LATENCY: 22ms</span>
          <span>MEM: OPTIMAL</span>
          <span>NET: CONNECTED</span>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-24 bg-[#050505] relative border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 relative">
            <div class="absolute -left-10 -top-10 text-9xl font-black text-white/5 select-none font-mono">01</div>
            <h3 class="text-[#45F3FF] font-mono tracking-widest flex items-center gap-2">
              <i class="ph ph-cpu"></i> 核心能力 CORE_SPECS
            </h3>
            <h2 class="text-3xl md:text-4xl font-bold text-white leading-tight">
              不僅是編碼，更是<span class="text-[#FF2A6D]">解決問題</span>的藝術
            </h2>

            <div class="code-block p-6 text-sm text-[#8892b0] leading-relaxed rounded-sm shadow-[0_0_15px_rgba(69,243,255,0.1)]">
              <p><span class="text-[#FF2A6D]">const</span> developer = {</p>
              <p class="pl-4">name: <span class="text-[#45F3FF]">'Anne Jhan'</span>,</p>
              <p class="pl-4">focus: [<span class="text-[#45F3FF]">'Scalability'</span>, <span class="text-[#45F3FF]">'Elegance'</span>, <span class="text-[#45F3FF]">'UX'</span>],</p>
              <p class="pl-4">mission: <span class="text-[#45F3FF]">'To debug reality.'</span></p>
              <p>};</p>
            </div>

            <p class="text-[#8892b0] leading-relaxed text-lg">
              專注於全端開發領域，擅長從零到一構建複雜的網頁應用程式。習慣在混亂的需求中梳理出清晰的架構，並對代碼品質有著極高的追求。
            </p>

            <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8">
              <div class="group cursor-default text-center">
                <div class="text-2xl font-bold text-white font-mono group-hover:text-[#45F3FF] transition-colors">VUE/NUXT</div>
                <div class="text-xs text-gray-500 mt-1 uppercase">Frontend</div>
              </div>
              <div class="group cursor-default text-center">
                <div class="text-2xl font-bold text-white font-mono group-hover:text-[#45F3FF] transition-colors">NODE.JS</div>
                <div class="text-xs text-gray-500 mt-1 uppercase">Backend</div>
              </div>
              <div class="group cursor-default text-center">
                <div class="text-2xl font-bold text-white font-mono group-hover:text-[#45F3FF] transition-colors">∞</div>
                <div class="text-xs text-gray-500 mt-1">LEARNING</div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-tr from-[#45F3FF] to-[#FF2A6D] opacity-10 blur-3xl"></div>
            <div class="relative aspect-square border border-white/10 bg-[#0a0a0a] p-6 overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-[#45F3FF]/50 shadow-[0_0_15px_#45F3FF] z-20 animate-scan"></div>

              <div class="grid grid-cols-2 gap-4 h-full">
                <div class="bg-white/5 p-4 flex flex-col justify-between border border-white/5 hover:border-[#45F3FF]/50 transition-colors duration-300">
                  <i class="ph ph-globe text-3xl text-[#45F3FF]"></i>
                  <div>
                    <div class="font-bold text-white">Frontend</div>
                    <div class="text-xs text-gray-400 mt-2 font-mono">{{ skills.frontend.highlight.join(', ') }}</div>
                  </div>
                </div>
                <div class="bg-white/5 p-4 flex flex-col justify-between border border-white/5 hover:border-[#45F3FF]/50 transition-colors duration-300">
                  <i class="ph ph-database text-3xl text-[#FF2A6D]"></i>
                  <div>
                    <div class="font-bold text-white">Backend</div>
                    <div class="text-xs text-gray-400 mt-2 font-mono">{{ skills.backend.highlight.join(', ') }}</div>
                  </div>
                </div>
                <div class="bg-white/5 p-4 flex flex-col justify-between border border-white/5 hover:border-[#45F3FF]/50 transition-colors duration-300">
                  <i class="ph ph-cloud text-3xl text-green-400"></i>
                  <div>
                    <div class="font-bold text-white">Logic</div>
                    <div class="text-xs text-gray-400 mt-2 font-mono">{{ skills.frontend.tags.slice(0, 3).join(', ') }}</div>
                  </div>
                </div>
                <div class="bg-white/5 p-4 flex flex-col justify-between border border-white/5 hover:border-[#45F3FF]/50 transition-colors duration-300">
                  <i class="ph ph-wrench text-3xl text-purple-400"></i>
                  <div>
                    <div class="font-bold text-white">Tools</div>
                    <div class="text-xs text-gray-400 mt-2 font-mono">{{ skills.tools.tags.slice(0, 3).join(', ') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div class="absolute top-20 right-0 text-[8rem] md:text-[15rem] font-black text-white/5 select-none leading-none -translate-y-1/2 translate-x-1/4 truncate font-mono">
        WORK
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-on-scroll">
        <h3 class="text-[#45F3FF] font-mono tracking-widest mb-12 flex items-center gap-2 uppercase">
          <i class="ph ph-folder-open"></i> 精選專案 DEPLOYED_MODULES
        </h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in featuredProjects" :key="project.title" class="group relative cursor-pointer">
            <div class="aspect-[4/3] overflow-hidden bg-[#050505] border-b-2 border-[#45F3FF] relative">
              <div class="w-full h-full bg-[#111] flex items-center justify-center text-slate-700 font-mono italic group-hover:scale-105 transition-all duration-500">
                [ {{ project.title.substring(0, 15) }}... ]
              </div>
              <div class="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors"></div>

              <div class="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                <div class="text-xs font-mono text-[#45F3FF] mb-1 flex items-center gap-2">
                  <span class="w-2 h-2 bg-[#45F3FF] rounded-full animate-pulse"></span>
                  {{ project.type.split(' · ')[0] }}
                </div>
                <h4 class="text-xl font-bold text-white mb-2">{{ project.title }}</h4>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="text-[10px] border border-white/20 px-2 py-1 text-gray-300">{{ tag }}</span>
                </div>
              </div>

              <div class="absolute inset-0 bg-[#050505]/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <p class="text-gray-300 text-sm text-center mb-4">
                  {{ project.description }}
                </p>
                <div class="flex gap-4">
                   <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank" class="text-[#45F3FF] font-mono text-xs hover:underline flex items-center gap-1">
                    {{ link.text.toUpperCase() }} <i class="ph ph-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack / Contact Bento Grid -->
    <section id="stack" class="py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h3 class="text-[#45F3FF] font-mono tracking-widest mb-2 uppercase">聯絡方式 COMMUNICATION</h3>
            <h2 class="text-3xl font-bold text-white">啟動合作連結</h2>
          </div>
          <div class="hidden md:block text-right font-mono text-xs text-gray-500 uppercase">
            <div>STATUS: AVAILABLE FOR COLLAB</div>
            <div>LATENCY: 24ms</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          <!-- Contact Main Block -->
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-center">
            <div class="absolute top-0 right-0 p-4 opacity-20">
              <i class="ph ph-paper-plane-tilt text-9xl"></i>
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">有有趣的專案嗎？</h4>
            <p class="text-[#8892b0] mb-8 max-w-md">
              我正在尋找具挑戰性的開發機會。無論是新創產品開發，或是系統架構優化，都歡迎來信討論。
            </p>
            <a :href="'mailto:' + contact.email"
              class="inline-block border border-[#45F3FF] text-[#45F3FF] px-6 py-3 font-mono hover:bg-[#45F3FF] hover:text-black transition-all w-fit">
              INITIATE_HANDSHAKE()
            </a>
          </div>

          <!-- GitHub Block -->
          <a :href="contact.github" target="_blank"
            class="md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-sm border border-white/10 bg-[#0a0a0a] p-6 hover:border-white/30 transition-colors block">
            <div class="flex justify-between items-start">
              <i class="ph ph-github-logo-bold text-3xl text-white"></i>
              <i class="ph ph-arrow-up-right text-gray-500"></i>
            </div>
            <div class="mt-8">
              <div class="text-2xl font-bold text-white font-mono uppercase">Github</div>
              <div class="text-xs text-gray-500">VIEW SOURCE CODE</div>
            </div>
          </a>

          <!-- Terminal Block -->
          <div class="md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-sm border border-white/10 bg-[#1F2833] p-4 font-mono text-xs text-green-400">
            <div class="mb-2 border-b border-green-400/20 pb-2">TERMINAL</div>
            <p>> git add .</p>
            <p>> git commit -m "feat: init"</p>
            <p>> git push origin main</p>
            <p class="animate-pulse">> _</p>
          </div>

          <!-- LinkedIn Block -->
          <a :href="contact.linkedin" target="_blank"
            class="md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-sm border border-white/10 bg-[#0077b5] p-6 hover:opacity-90 transition-opacity block">
            <div class="flex justify-between items-start text-white">
              <i class="ph ph-linkedin-logo-bold text-3xl"></i>
              <i class="ph ph-arrow-up-right"></i>
            </div>
            <div class="mt-8 text-white">
              <div class="font-bold uppercase">LinkedIn</div>
              <div class="text-xs opacity-80">Professional Network</div>
            </div>
          </a>

          <!-- Location Block -->
          <div class="md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-sm border border-white/10 bg-[#0a0a0a] p-0">
            <div class="w-full h-full bg-[#111] flex items-center justify-center">
              <i class="ph ph-map-pin text-4xl text-[#FF2A6D] opacity-40"></i>
            </div>
            <div class="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-xs text-[#45F3FF] font-mono border border-[#45F3FF]/30 uppercase">
              TAIPEI, TW
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-white/10 py-12 font-mono">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-600 text-sm mb-4">
          &copy; {{ new Date().getFullYear() }} Anne Jhan. Built with <span class="text-[#45F3FF]">Nuxt 3</span> & <span class="text-[#45F3FF]">Tailwind</span>.
        </p>
        <div class="text-xs text-gray-800">
          01000001 01001110 01001110 01000101
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: 'Share Tech Mono', monospace;
}

.glass {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(69, 243, 255, 0.1);
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

.grid-bg {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

.code-block {
  font-family: 'Share Tech Mono', monospace;
  background: #111;
  border-left: 3px solid #45F3FF;
}

/* Glitch Text Effect */
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
  background: #050505;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 #FF2A6D;
  clip: rect(24px, 9999px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -1px 0 #45F3FF;
  clip: rect(85px, 9999px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(14px, 9999px, 127px, 0); }
  20% { clip: rect(98px, 9999px, 10px, 0); }
  40% { clip: rect(6px, 9999px, 86px, 0); }
  60% { clip: rect(66px, 9999px, 18px, 0); }
  80% { clip: rect(109px, 9999px, 47px, 0); }
  100% { clip: rect(38px, 9999px, 137px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(110px, 9999px, 20px, 0); }
  20% { clip: rect(19px, 9999px, 129px, 0); }
  40% { clip: rect(44px, 9999px, 42px, 0); }
  60% { clip: rect(87px, 9999px, 115px, 0); }
  80% { clip: rect(2px, 9999px, 15px, 0); }
  100% { clip: rect(72px, 9999px, 122px, 0); }
}

.cursor-blink::after {
  content: '_';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-scan {
  animation: scan 4s linear infinite;
}

.animate-spin-slow {
  animation: spin 60s linear infinite;
}

.animate-spin-reverse {
  animation: spin 40s linear infinite reverse;
}

.animate-spin-fast {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
