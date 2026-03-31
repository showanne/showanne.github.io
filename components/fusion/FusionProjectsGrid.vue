<script setup lang="ts">
import { ref, computed } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

const props = defineProps<{
  expandDetails?: boolean;
}>();

// --- 1. 資料大融合與標準化 (全庫模式) ---
const processData = () => {
  const featured = (portfolioData.projects.featured || []).map(p => ({
    ...p,
    id: `grid-feat-${p.title}`,
    isFeatured: true,
    categoryLabel: 'CORE_MODULE',
    displayType: p.type?.split(' · ')[0] || 'Core Module',
    tags: p.tags || []
  }));

  const other = (portfolioData.projects.other || []).map((p, idx) => ({
    ...p,
    id: `grid-other-${idx}`,
    displayType: 'SUBSYSTEM',
    tags: ['ARCHIVE', 'LEGACY'],
    links: [p.link],
    isFeatured: false,
    features: [],
    categoryLabel: 'ARCHIVE_DATA'
  }));

  return [...featured, ...other];
};

const MASTER_PROJECTS = processData();

// --- 2. 標籤與篩選邏輯 ---
const selectedTag = ref('ALL');

const allUniqueTags = computed(() => {
  const tags = new Set<string>();
  MASTER_PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t.trim())));
  return ['ALL', ...Array.from(tags).sort()];
});

const displayProjects = computed(() => {
  let list = [...MASTER_PROJECTS];
  if (selectedTag.value !== 'ALL') {
    list = list.filter(p => p.tags.some(t => t.trim() === selectedTag.value));
  }
  return list;
});

const totalFound = computed(() => displayProjects.value.length);

const toggleFilter = (tag: string) => {
  selectedTag.value = tag;
};
</script>

<template>
  <section id="projects" class="py-32 bg-[#030005]">
    <div class="max-w-7xl mx-auto px-8">
      
      <!-- Filter Bar -->
      <div class="sticky top-16 md:top-20 z-30 py-6 mb-20 bg-[#030005]/95 backdrop-blur-md border-y border-white/5 -mx-8 px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span class="font-mono text-[10px] text-[#45F3FF] uppercase tracking-[0.4em] whitespace-nowrap flex items-center gap-2">
            <i class="ph ph-intersect"></i> Global_Filter
          </span>
          <div class="flex gap-2">
            <button v-for="tag in allUniqueTags" :key="tag" @click="toggleFilter(tag)"
              :class="['px-4 py-1 text-[10px] uppercase tracking-tighter border transition-all duration-300 whitespace-nowrap', selectedTag === tag ? 'bg-[#45F3FF] border-[#45F3FF] text-black shadow-[0_0_15px_rgba(69,243,255,0.3)]' : 'border-white/5 text-slate-500 hover:border-[#45F3FF]/30 hover:text-[#45F3FF]']">
              {{ tag }}
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest text-slate-600 uppercase">
          <span>Result: {{ totalFound }} Unit(s)</span>
        </div>
      </div>

      <!-- Unified 2-Column Grid -->
      <div v-if="displayProjects.length > 0">
        <TransitionGroup name="project-list" tag="div" class="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
          <div v-for="(project, index) in displayProjects" :key="project.id" 
            class="project-card group border border-white/5 transition-all duration-500 flex flex-col relative overflow-hidden bg-[#0a0a0a]/40 backdrop-blur-sm"
            :class="project.isFeatured ? 'hover:border-[#A855F7]/40' : 'hover:border-[#45F3FF]/40'"
          >
            <!-- Visual Header -->
            <div class="h-48 overflow-hidden relative border-b border-white/5 bg-[#050505]">
              <div class="w-full h-full flex items-center justify-center text-white/5 font-tech text-4xl uppercase tracking-[0.2em] italic group-hover:scale-110 transition-transform duration-700">
                MODULE_{{ index + 1 }}
              </div>
              <div :class="['absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity', project.isFeatured ? 'bg-[#A855F7]' : 'bg-[#45F3FF]']"></div>
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="font-mono text-[9px] px-2 py-0.5 bg-black/80 border border-white/10 text-slate-500 uppercase tracking-widest italic">{{ project.categoryLabel }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 flex-1 flex flex-col justify-between">
              <div class="space-y-6">
                <div>
                  <h4 :class="['font-mono text-[10px] mb-2 uppercase tracking-[0.4em] italic', project.isFeatured ? 'text-[#A855F7]' : 'text-[#45F3FF]']">// {{ project.displayType }}</h4>
                  <h3 class="text-2xl font-tech font-bold text-white mb-4 group-hover:text-white transition-colors uppercase tracking-tighter">{{ project.title }}</h3>
                  <p class="text-slate-500 text-sm leading-relaxed font-light line-clamp-3 italic">{{ project.description }}</p>
                </div>
                <!-- Extended Features -->
                <ul v-if="expandDetails && project.features && project.features.length > 0" class="space-y-2 border-t border-white/5 pt-6">
                  <li v-for="feat in project.features" :key="feat" class="text-[10px] font-mono text-slate-400 flex items-start gap-2">
                    <span :class="project.isFeatured ? 'text-[#A855F7]' : 'text-[#45F3FF]'">></span><span>{{ feat }}</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-6 mt-10">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in project.tags" :key="tag" 
                    :class="['text-[9px] font-mono px-2 py-0.5 border transition-colors uppercase', selectedTag === tag ? 'text-[#45F3FF] border-[#45F3FF]/50 bg-[#45F3FF]/5' : 'text-slate-500 border-white/10 bg-white/5']">{{ tag }}</span>
                </div>
                <div class="pt-4 border-t border-white/5 flex justify-end gap-6">
                  <a v-for="link in project.links" :key="link?.url" :href="link?.url" target="_blank" class="text-[10px] font-mono text-white hover:text-[#45F3FF] transition-all uppercase tracking-[0.2em] flex items-center gap-2">{{ link?.text }} <i class="ph ph-arrow-up-right text-xs"></i></a>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Empty State -->
      <div v-else class="py-40 text-center font-mono">
        <div class="mb-6 inline-block p-6 border border-[#FF2A6D]/20 bg-[#FF2A6D]/5"><p class="text-[#FF2A6D] uppercase tracking-[0.5em] text-sm">> System_Error: Zero modules matched</p></div><br />
        <button @click="toggleFilter('ALL')" class="text-[#45F3FF] underline underline-offset-8 text-xs uppercase tracking-widest hover:text-white transition-colors">Force_Reset_Protocol()</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.project-card { background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(10px); }
.no-scrollbar::-webkit-scrollbar { display: none; }
.project-list-enter-from, .project-list-leave-to { opacity: 0; transform: translateY(30px) scale(0.95); }
.project-list-leave-active { position: absolute; width: calc(50% - 1.5rem); }
.project-list-move, .project-list-enter-active, .project-list-leave-active { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
</style>
