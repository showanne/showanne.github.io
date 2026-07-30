<script setup lang="ts">
import { computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

// 首頁固定只顯示前兩個精選專案
const featuredProjects = computed(() => {
  return portfolioData.projects.featured.slice(0, 2).map((p, idx) => ({
    ...p,
    id: `home-feat-${idx}`,
    displayType: p.type?.split(' · ')[0] || 'Core Module'
  }));
});

const totalCount = computed(() => portfolioData.projects.featured.length + portfolioData.projects.other.length);
</script>

<template>
  <section id="projects" class="py-32 bg-[#030005]">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Section Header -->
      <div class="mb-24 animate-on-scroll">
        <h3 class="text-[#A855F7] font-mono tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-3">
          <span class="w-10 h-px bg-[#A855F7]/30"></span> 03. Core_Deployments
        </h3>
        <h2 class="text-4xl md:text-5xl font-tech font-bold text-white uppercase italic tracking-tight">
          架構與實作對位<span class="text-[#A855F7]">.</span>
        </h2>
      </div>

      <!-- Overlapping Bento Layout (Inspired by TEST-5) -->
      <div class="space-y-48">
        <div v-for="(project, index) in featuredProjects" :key="project.id" 
          :class="['grid lg:grid-cols-12 gap-8 items-center group animate-on-scroll', index % 2 !== 0 ? 'lg:flex-row-reverse' : '']">
          
          <!-- Visual Side (md:col-span-7) -->
          <div :class="['lg:col-span-7 relative overflow-hidden bento-card aspect-video border border-white/5 transition-all duration-700', index % 2 !== 0 ? 'lg:order-2' : '']">
            <div class="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-[#A855F7]/10 font-tech text-6xl uppercase tracking-[0.2em] italic group-hover:scale-105 transition-transform duration-1000">
              MODULE_0{{ index + 1 }}
            </div>
            <div class="absolute inset-0 bg-[#A855F7]/5 group-hover:bg-transparent transition-colors"></div>
            <!-- Floating Tags on Image -->
            <div :class="['absolute top-6 flex gap-3', index % 2 !== 0 ? 'right-6' : 'left-6']">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="text-[9px] font-mono px-3 py-1 bg-black/80 border border-[#A855F7]/30 text-[#A855F7] uppercase tracking-widest">{{ tag }}</span>
            </div>
          </div>

          <!-- Content Side (lg:col-span-5) - Overlapping with Negative Margin on Large Screens -->
          <div :class="['lg:col-span-5 z-10 space-y-6', index % 2 !== 0 ? 'lg:order-1 lg:-mr-16' : 'lg:-ml-16']">
            <h4 class="text-[#A855F7] font-mono text-[10px] mb-2 uppercase tracking-[0.4em] italic">// {{ project.displayType }}</h4>
            <h3 class="text-3xl md:text-4xl font-tech font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-[#45F3FF] transition-colors">{{ project.title }}</h3>
            
            <!-- Description Box with Backdrop Blur -->
            <div class="bg-[#1a0b2e]/80 backdrop-blur-2xl p-8 rounded-sm border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <div class="absolute -top-px left-0 w-16 h-px bg-[#A855F7]"></div>
              <p class="text-slate-400 text-sm leading-relaxed font-light">
                {{ project.description }}
              </p>
            </div>

            <!-- Links -->
            <div :class="['flex gap-8 pt-4', index % 2 !== 0 ? 'lg:justify-end' : '']">
              <a v-for="link in project.links" :key="link?.url" :href="link?.url" target="_blank" 
                class="text-[10px] font-mono text-white hover:text-[#45F3FF] transition-all uppercase tracking-[0.2em] border-b border-white/10 pb-1 hover:border-[#45F3FF]">
                {{ link?.text }} <i class="ph ph-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- More Button -->
      <div class="mt-48 text-center animate-on-scroll">
        <NuxtLink to="/projects" class="relative inline-flex items-center gap-6 px-16 py-6 bg-transparent border border-[#45F3FF]/30 text-[#45F3FF] font-mono text-xs tracking-[0.4em] uppercase hover:bg-[#45F3FF] hover:text-black transition-all group overflow-hidden">
          <span class="relative z-10">Access_Full_Database ({{ totalCount }})</span>
          <i class="ph ph-arrow-right relative z-10 group-hover:translate-x-2 transition-transform"></i>
          <div class="absolute inset-0 bg-[#45F3FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.bento-card { 
  background: rgba(255, 255, 255, 0.01); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(10px); 
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1); 
}
.bento-card:hover { border-color: rgba(168, 85, 247, 0.3); }
</style>
