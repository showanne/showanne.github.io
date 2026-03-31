<script setup lang="ts">
import { onMounted } from 'vue';

// Set page layout to empty to avoid global header/footer
definePageMeta({
  layout: 'empty'
});

// Use standard Head metadata
useHead({
  title: 'Anne Jhan | Full-Stack Developer V2',
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
    
    <!-- 全域掃描線與噪點 -->
    <div class="scanline"></div>
    <div class="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>

    <!-- 獨立於原版的組件 -->
    <FusionNavbar @scrollToTop="scrollToTop" />
    
    <main>
      <FusionHero id="home" />
      <FusionAbout id="about" />
      <FusionExperience id="experience" />
      <FusionProjects id="projects" :limit="2" :show-more-button="true" />
      <FusionContact id="contact" />
    </main>

    <FusionFooter />
  </div>
</template>

<style>
/* 這些是 Fusion 版專用的特效樣式 */
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.font-mono { font-family: 'Share Tech Mono', monospace; }

.scanline {
  width: 100%; height: 100vh;
  background: linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px; z-index: 100; pointer-events: none; position: fixed; opacity: 0.05;
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

.animate-on-scroll {
  opacity: 0; transform: translateY(30px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

.glitch-text { position: relative; text-shadow: 2px 0 #FF2A6D, -2px 0 #45F3FF; }
</style>
