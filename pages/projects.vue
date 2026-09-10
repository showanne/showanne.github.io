<script setup lang="ts">
import { onMounted } from 'vue';

definePageMeta({
  layout: 'empty'
});

useHead({
  title: 'All Projects | Anne Jhan Full-Stack Deployed',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&family=Share+Tech+Mono&family=Chakra+Petch:wght@400;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ],
  script: [{ src: 'https://unpkg.com/@phosphor-icons/web', defer: true }]
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="antialiased selection:bg-[#45F3FF] selection:text-black bg-[#050505] text-[#C5C6C7] font-sans min-h-screen relative overflow-x-hidden">
    <div class="scanline"></div>
    <div class="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>

    <FusionNavbar @scrollToTop="scrollToTop" />

    <main class="pt-20 relative z-10">
      <section class="py-20 border-b border-white/5 animate-on-scroll">
        <div class="max-w-7xl mx-auto px-8">
          <div class="mb-10">
            <p class="text-[#45F3FF] font-mono tracking-[0.4em] text-[10px] uppercase mb-4">03. Core_Deployments</p>
            <h1 class="text-4xl md:text-6xl font-tech font-bold text-white uppercase tracking-tight">Project_Repository</h1>
          </div>
          <div class="max-w-4xl space-y-6">
            <p class="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              這裡是工程與產品落地的索引，從全端架構、可視化互動到企業內部系統，都有完整的設計與實作脈絡。
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/experience" class="text-[10px] font-mono uppercase tracking-[0.4em] border border-[#45F3FF]/30 px-5 py-3 text-[#45F3FF] hover:bg-[#45F3FF] hover:text-black transition-all">System_Logs</NuxtLink>
              <NuxtLink to="/contact" class="text-[10px] font-mono uppercase tracking-[0.4em] border border-white/10 px-5 py-3 text-white hover:border-[#FF2A6D] hover:text-[#FF2A6D] transition-all">Initiate_Handshake</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <FusionProjectsGrid :expand-details="true" />
    </main>

    <FusionFooter />
  </div>
</template>

<style>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.font-mono { font-family: 'Share Tech Mono', monospace; }

html, body {
  overflow-x: hidden;
  background-color: #050505;
}

.scanline {
  width: 100%; height: 100vh;
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
