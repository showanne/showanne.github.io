<script setup lang="ts">
  import { computed } from 'vue';
  import portfolioData from '~/assets/data/portfolio.json';

  const props = defineProps<{
    limit?: number;
    showMoreButton?: boolean;
    expandDetails?: boolean;
  }>();

  // 1. 處理精選專案 (Core Modules)
  const featuredProjects = computed(() => {
    const data = portfolioData.projects.featured.map(p => ({
      ...p,
      isFeatured: true,
      displayType: p.type.split(' · ')[0] || 'Core Module',
      features: p.features || []
    }));
    return props.limit ? data.slice(0, props.limit) : data;
  });

  // 2. 處理其他專案 (Subsystems / Archive)
  // 只有在非 limit 模式（即完整專案頁）下才顯示
  const otherProjects = computed(() => {
    if (props.limit) return []; // 首頁簡潔版不顯示 other

    return portfolioData.projects.other.map(p => ({
      title: p.title,
      description: p.description,
      displayType: 'Subsystem / Archive',
      tags: ['Legacy', 'Module'],
      links: [p.link],
      isFeatured: false
    }));
  });

  const hasMore = computed(() => {
    return (
      props.limit &&
      (portfolioData.projects.featured.length > props.limit ||
        portfolioData.projects.other.length > 0)
    );
  });
</script>

<template>
  <section id="projects" class="py-32 bg-[#030005] animate-on-scroll">
    <div class="max-w-7xl mx-auto px-8">
      <!-- [Part 1] Featured Projects: 單列規格書風格 -->
      <div class="mb-24">
        <h3
          class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-3"
        >
          <span class="w-8 h-px bg-[#45F3FF]/30"></span> 03. Core_Modules
        </h3>
        <h2
          class="text-4xl md:text-5xl font-tech font-bold text-white uppercase italic"
        >
          精選專案<span class="text-[#A855F7]">.</span>
        </h2>
      </div>

      <div class="space-y-40">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="animate-on-scroll group"
        >
          <div class="grid lg:grid-cols-12 gap-12">
            <!-- Left Info -->
            <div class="lg:col-span-5 space-y-6">
              <div
                class="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span
                  class="font-mono text-[10px] text-[#A855F7] tracking-[0.2em] uppercase"
                  >Core_ID: 0{{ index + 1 }}</span
                >
                <span
                  class="font-mono text-[10px] px-2 py-0.5 border border-[#A855F7] text-[#A855F7] uppercase tracking-widest"
                  >Priority_High</span
                >
              </div>
              <div>
                <h4
                  class="font-mono text-[10px] mb-2 uppercase tracking-[0.4em] italic text-[#A855F7]"
                >
                  // {{ project.displayType }}
                </h4>
                <h3
                  class="text-3xl md:text-4xl font-tech font-bold text-white mb-6 uppercase tracking-tighter"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-slate-400 text-sm leading-relaxed font-light mb-8"
                >
                  {{ project.description }}
                </p>
              </div>
              <div class="space-y-3">
                <h5
                  class="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-600"
                >
                  Tech_Matrix
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-slate-300 uppercase tracking-tighter"
                    >{{ tag }}</span
                  >
                </div>
              </div>
              <div class="flex flex-wrap gap-6 pt-6">
                <a
                  v-for="link in project.links"
                  :key="link?.url"
                  :href="link?.url"
                  target="_blank"
                  class="text-white hover:text-[#45F3FF] transition-all flex items-center gap-3 uppercase font-mono text-[10px] tracking-[0.2em] border-b border-white/10 pb-1 hover:border-[#45F3FF]"
                >
                  <i
                    :class="
                      link?.text.includes('GitHub')
                        ? 'ph ph-github-logo'
                        : 'ph ph-browser'
                    "
                  ></i>
                  {{ link?.text }}
                </a>
              </div>
            </div>
            <!-- Right Visual & Features -->
            <div class="lg:col-span-7 space-y-8">
              <div
                class="relative overflow-hidden bento-card aspect-video border border-white/5 group-hover:border-[#A855F7]/30 transition-all duration-700"
              >
                <div
                  class="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-[#A855F7]/10 font-tech text-5xl uppercase tracking-[0.2em] italic"
                >
                  SYSTEM_CORE
                </div>
                <div
                  class="absolute inset-0 group-hover:bg-transparent transition-colors bg-[#A855F7]/5"
                ></div>
              </div>
              <div
                v-if="expandDetails && project.features.length > 0"
                class="bg-[#0a0a0a]/40 border border-white/5 p-8 backdrop-blur-xl relative"
              >
                <div
                  class="absolute top-0 left-0 w-1 h-full bg-[#A855F7]/30"
                ></div>
                <h5
                  class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#A855F7] mb-8 flex items-center gap-3"
                >
                  <i class="ph ph-terminal-window"></i>
                  Functional_Specifications
                </h5>
                <ul class="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  <li
                    v-for="feat in project.features"
                    :key="feat"
                    class="text-[11px] font-mono text-slate-400 leading-relaxed flex items-start gap-3"
                  >
                    <span class="text-[#A855F7] mt-0.5 font-bold">></span
                    ><span>{{ feat }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- [Part 2] Other Projects: 寬螢幕雙欄佈局 -->
      <div v-if="otherProjects.length > 0" class="mt-60">
        <div class="mb-16">
          <h3
            class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-3"
          >
            <span class="w-8 h-px bg-[#45F3FF]/30"></span> 04.
            Subsystems_Archive
          </h3>
          <h2
            class="text-3xl md:text-4xl font-tech font-bold text-white uppercase italic"
          >
            其他作品<span class="text-[#45F3FF]">.</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            v-for="(project, idx) in otherProjects"
            :key="project.title"
            class="bento-card p-8 group border-white/5 hover:border-[#45F3FF]/30 transition-all duration-500 flex flex-col justify-between min-h-[300px] animate-on-scroll"
          >
            <div>
              <div class="flex justify-between items-start mb-6">
                <span
                  class="font-mono text-[10px] text-slate-600 uppercase tracking-widest"
                  >ID: ARCH-0{{ idx + 1 }}</span
                >
                <i
                  class="ph ph-archive text-[#45F3FF]/30 text-xl group-hover:text-[#45F3FF] transition-colors"
                ></i>
              </div>
              <h4
                class="text-[#45F3FF] font-mono text-[10px] mb-2 uppercase tracking-widest italic"
              >
                // Legacy_Module
              </h4>
              <h3
                class="text-2xl font-tech font-bold text-white mb-4 group-hover:text-[#45F3FF] transition-colors"
              >
                {{ project.title }}
              </h3>
              <p
                class="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-2 italic"
              >
                "{{ project.description }}"
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-slate-500 uppercase tracking-widest"
                  >{{ tag }}</span
                >
              </div>
              <div class="pt-4 border-t border-white/5 flex justify-end">
                <a
                  :href="project.links[0]?.url"
                  target="_blank"
                  class="text-[10px] font-mono text-white hover:text-[#45F3FF] transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
                >
                  Initialize_Access <i class="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More Button (Only for index_v2) -->
      <div v-if="showMoreButton && hasMore" class="mt-40 text-center">
        <NuxtLink
          to="/projects_v2"
          class="relative inline-flex items-center gap-6 px-16 py-6 bg-transparent border border-[#45F3FF]/30 text-[#45F3FF] font-mono text-xs tracking-[0.4em] uppercase hover:bg-[#45F3FF] hover:text-black transition-all group overflow-hidden"
        >
          <span class="relative z-10">Synchronize All Systems</span>
          <i
            class="ph ph-arrow-right relative z-10 group-hover:translate-x-2 transition-transform"
          ></i>
          <div
            class="absolute inset-0 bg-[#45F3FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .font-tech {
    font-family: 'Chakra Petch', sans-serif;
  }
  .bento-card {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .bento-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.02);
  }
</style>
