<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// Use standard Head metadata
useHead({
  title: 'DEV.LOG | Anne Jan | Full Stack Engineer',
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

  // Intersection Observer for scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-12');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-12');
    observer.observe(el);
  });
});

const menuItems = [
  { name: 'WORKS', href: '#projects', id: '01.' },
  { name: 'SKILLS', href: '#about', id: '02.' },
  { name: 'CONNECT', href: '#contact', id: '03.' },
];

</script>

<template>
  <div class="antialiased selection:bg-purple-500 selection:text-white bg-[#030005] text-[#e2e8f0] font-sans">

    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'glass py-2' : 'bg-transparent py-4']">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer group" @click="() => window.scrollTo(0,0)">
          <div class="w-8 h-8 bg-[#A855F7] rounded-sm flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500">
            <i class="ph-fill ph-command text-[#030005] -rotate-45 group-hover:-rotate-180 transition-transform duration-500"></i>
          </div>
          <span class="font-bold text-xl tracking-tighter text-white font-mono ml-2">ANNE<span class="text-[#A855F7]">.</span>LOG</span>
        </div>
        <div class="hidden md:flex space-x-10 font-mono text-sm tracking-widest">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" class="hover:text-[#A855F7] transition-colors">
            <span class="text-[#A855F7]">{{ item.id }}</span> {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-noise opacity-30 z-0"></div>
      <!-- Background Glows -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] animate-pulse-slow" style="animation-delay: 2s"></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <p class="font-mono text-[#A855F7] tracking-[0.3em] text-xs mb-4 animate-bounce uppercase">READY TO DEPLOY // {{ new Date().getFullYear() }} PORTFOLIO</p>
        <h1 class="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter italic uppercase">
          ANNE JAN<br>
          <span class="purple-gradient-text">ENGINEER</span>
        </h1>
        <div class="h-1 w-24 bg-[#A855F7] mx-auto mb-8 shadow-[0_0_15px_#A855F7]"></div>
        <p class="text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed mb-10 md:text-lg">
          專注於構建高效後端架構與極致前端體驗。<br>
          從 <span class="text-[#A855F7] font-medium">Nuxt 3</span> 到 <span class="text-[#A855F7] font-medium">Node.js</span>，用代碼編織穩定的數位世界。
        </p>
        <div class="flex gap-4 justify-center">
          <a href="#projects"
            class="px-8 py-3 bg-[#A855F7] text-white font-bold tracking-widest hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">VIEW_PROJECTS</a>
          <a :href="'mailto:' + contact.email"
            class="px-8 py-3 border border-purple-500/50 text-purple-300 font-mono hover:bg-purple-500/10 transition-all">INIT_HANDSHAKE()</a>
        </div>
      </div>

      <div class="absolute bottom-10 w-full flex justify-center animate-bounce opacity-30">
        <i class="ph ph-caret-double-down text-2xl"></i>
      </div>
    </header>

    <!-- Projects Section -->
    <section id="projects" class="py-32 bg-[#030005] relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-20 animate-on-scroll">
          <h3 class="text-[#A855F7] font-mono tracking-widest mb-4 flex items-center gap-2 uppercase">
            <span class="w-10 h-px bg-[#A855F7]/30"></span> 01. 精選作品 DEPLOYED_CASES
          </h3>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight">架構與實作的對位。</h2>
        </div>

        <div class="grid gap-32">
          <!-- Featured Projects Loop -->
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            :class="['grid md:grid-cols-12 gap-8 items-center group animate-on-scroll', index % 2 !== 0 ? 'md:flex-row-reverse' : '']">

            <!-- Project Image -->
            <div :class="['md:col-span-7 relative overflow-hidden rounded-sm bento-card aspect-video', index % 2 !== 0 ? 'md:order-2' : '']">
              <div class="w-full h-full bg-[#1a0b2e] flex items-center justify-center text-[#A855F7]/30 font-mono text-2xl group-hover:scale-105 transition-transform duration-700 uppercase tracking-tighter">
                [ {{ project.title.substring(0, 15) }}... ]
              </div>
              <div class="absolute inset-0 bg-[#A855F7]/10 group-hover:bg-transparent transition-colors"></div>
              <div :class="['absolute top-4 flex gap-2', index % 2 !== 0 ? 'right-4' : 'left-4']">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag bg-black/80">{{ tag.toUpperCase() }}</span>
              </div>
            </div>

            <!-- Project Info -->
            <div :class="['md:col-span-5 z-10', index % 2 !== 0 ? 'md:order-1 md:-mr-12' : 'md:-ml-12']">
              <h4 class="text-[#A855F7] font-mono text-sm mb-2 uppercase tracking-widest">{{ project.type.split(' · ')[0] }}</h4>
              <h3 class="text-3xl font-bold text-white mb-6">{{ project.title }}</h3>
              <div class="bg-[#1a0b2e]/60 backdrop-blur-md p-6 rounded-sm border border-white/5 mb-6 shadow-xl">
                <p class="text-gray-300 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
              <ul :class="['flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-gray-500 mb-8 italic', index % 2 !== 0 ? 'justify-end md:justify-start' : '']">
                <li v-for="tag in project.tags.slice(0, 5)" :key="tag">#{{ tag.replace(/\s+/g, '') }}</li>
              </ul>
              <div :class="['flex gap-6', index % 2 !== 0 ? 'justify-end md:justify-start' : '']">
                <a v-for="link in project.links" :key="link.text" :href="link.url" target="_blank"
                  class="text-white hover:text-[#A855F7] transition-colors flex items-center gap-2 uppercase font-mono text-xs">
                  <i :class="link.text.includes('GitHub') ? 'ph ph-github-logo' : 'ph ph-browser'"></i> {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Tools Bento Section -->
    <section id="about" class="py-32 bg-[#08010a] relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 animate-on-scroll">
        <h3 class="text-[#A855F7] font-mono tracking-widest mb-12 flex items-center gap-2 uppercase">
          <span class="w-10 h-px bg-[#A855F7]/30"></span> 02. 技術棧 STACK_MONITOR
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Frontend -->
          <div class="bento-card p-8 md:col-span-2">
            <h4 class="text-white font-bold mb-6 flex items-center gap-2"><i class="ph ph-layout text-[#A855F7]"></i> 前端開發 Frontend</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tag in [...skills.frontend.highlight, ...skills.frontend.tags.slice(0, 3)]" :key="tag"
                class="px-4 py-1.5 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10 hover:border-[#A855F7]/50 transition-colors">
                {{ tag }}
              </span>
            </div>
            <div class="mt-8 font-mono text-[10px] text-[#A855F7]/40 leading-tight uppercase">
              &gt; RENDER_ENGINE: VUE_3<br>
              &gt; UI_FRAMEWORK: TAILWIND_CSS<br>
              &gt; STATUS: OPTIMIZED
            </div>
          </div>

          <!-- Backend -->
          <div class="bento-card p-8 md:col-span-2">
            <h4 class="text-white font-bold mb-6 flex items-center gap-2"><i class="ph ph-database text-[#FF2A6D]"></i> 後端架構 Backend</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tag in [...skills.backend.highlight, ...skills.backend.tags]" :key="tag"
                class="px-4 py-1.5 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10 hover:border-[#FF2A6D]/50 transition-colors">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Workflow Grid -->
          <div class="bento-card p-8 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 bg-purple-900/10 border-purple-500/20">
            <div class="text-center group">
              <i class="ph ph-sketch-logo text-4xl mb-3 text-[#A855F7] group-hover:scale-110 transition-transform"></i>
              <div class="text-[10px] text-gray-500 font-mono uppercase">Design</div>
              <div class="text-xs text-white font-medium">Figma / AI / PS</div>
            </div>
            <div class="text-center group">
              <i class="ph ph-git-branch text-4xl mb-3 text-[#F0ABFC] group-hover:scale-110 transition-transform"></i>
              <div class="text-[10px] text-gray-500 font-mono uppercase">DevOps</div>
              <div class="text-xs text-white font-medium">GitHub / Actions</div>
            </div>
            <div class="text-center group">
              <i class="ph ph-monitor text-4xl mb-3 text-[#FF2A6D] group-hover:scale-110 transition-transform"></i>
              <div class="text-[10px] text-gray-500 font-mono uppercase">Server</div>
              <div class="text-xs text-white font-medium">Vercel / Zeabur</div>
            </div>
            <div class="text-center group">
              <i class="ph ph-users-three text-4xl mb-3 text-blue-400 group-hover:scale-110 transition-transform"></i>
              <div class="text-[10px] text-gray-500 font-mono uppercase">Collab</div>
              <div class="text-xs text-white font-medium">Notion / Discord</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 bg-[#030005] text-center relative">
      <div class="max-w-3xl mx-auto px-6 animate-on-scroll">
        <h2 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">INIT_HANDSHAKE</h2>
        <p class="text-[#94a3b8] mb-12 font-mono italic text-sm">
          // 是否有有趣的專案想一起開發？<br>
          // 我的編譯器永遠為您的創意準備著。
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <a :href="'mailto:' + contact.email"
            class="group relative px-12 py-4 bg-[#A855F7] text-white font-bold tracking-widest overflow-hidden transition-all hover:scale-105">
            <span class="relative z-10 flex items-center justify-center gap-2 uppercase font-mono">
              <i class="ph ph-envelope-open-bold"></i> Send_Email
            </span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
          <a :href="contact.github" target="_blank"
            class="px-12 py-4 border border-white/20 text-white font-mono hover:bg-white/5 transition-all uppercase text-sm flex items-center justify-center gap-2">
            <i class="ph ph-github-logo-bold"></i> Github_Profile
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-black border-t border-purple-900/20 font-mono text-[10px] text-gray-700 uppercase tracking-[0.3em] text-center">
      <div class="mb-4">
        System: <span class="text-[#A855F7]">Operational</span> | Load: 0.12 | Env: Production
      </div>
      &copy; {{ new Date().getFullYear() }} ANNE JAN. ALL RIGHTS RESERVED.
    </footer>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: 'Share Tech Mono', monospace;
}

.glass {
  background: rgba(8, 1, 10, 0.75);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
}

.purple-gradient-text {
  background: linear-gradient(to right, #D8B4FE, #A855F7, #6366F1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bento-card {
  background: rgba(26, 11, 46, 0.4);
  border: 1px solid rgba(168, 85, 247, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.bento-card:hover {
  border-color: rgba(168, 85, 247, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(168, 85, 247, 0.3);
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.07'/%3E%3C/svg%3E");
}

.tag {
  @apply text-[10px] px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-sm font-mono;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-scan {
  animation: scan 6s linear infinite;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
