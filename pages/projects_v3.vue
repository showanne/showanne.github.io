<script setup lang="ts">
import { computed, ref } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

definePageMeta({
  layout: 'empty'
});

useHead({
  title: 'Projects V5 | Anne Jan',
  meta: [
    {
      name: 'description',
      content: 'A homepage-inspired projects archive page with modular cards, visual rhythm, and full project browsing.'
    }
  ],
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

const searchQuery = ref('');

const allProjects = computed(() => {
  const featured = portfolioData.projects.featured.map((project, index) => ({
    ...project,
    id: `featured-${index}`,
    isFeatured: true,
    displayType: project.type?.split(' · ')[0] || 'Core Module',
    links: project.links || [],
    tags: project.tags || []
  }));

  const archive = portfolioData.projects.other.map((project, index) => ({
    ...project,
    id: `archive-${index}`,
    isFeatured: false,
    displayType: 'Subsystem / Archive',
    tags: ['Legacy', 'Module'],
    links: [project.link].filter(Boolean)
  }));

  return [...featured, ...archive];
});

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return allProjects.value.filter((project) => {
    const searchableText = [project.title, project.description, ...(project.tags || [])].join(' ').toLowerCase();
    return !query || searchableText.includes(query);
  });
});

const featuredProjects = computed(() => filteredProjects.value.filter((project) => project.isFeatured));
const archiveProjects = computed(() => filteredProjects.value.filter((project) => !project.isFeatured));
const totalCount = computed(() => allProjects.value.length);
</script>

<template>
  <div class="min-h-screen bg-[#030005] text-[#C5C6C7] selection:bg-[#45F3FF] selection:text-black">
    <div class="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>

    <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header class="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(69,243,255,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]"></div>
        <div class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <p class="font-mono text-[10px] uppercase tracking-[0.4em] text-[#45F3FF]">PROJECTS / VERSION 05</p>
            <h1 class="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Modular project browser inspired by the homepage.
            </h1>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              This archive follows the same cinematic, neon-lit rhythm as the landing page while expanding the project list into a more immersive browsing experience.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <NuxtLink
              to="/"
              class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-[#45F3FF]/40 hover:text-[#45F3FF]"
            >
              ← Home
            </NuxtLink>
            <NuxtLink
              to="/project_v4"
              class="rounded-full border border-[#45F3FF]/25 bg-[#45F3FF]/10 px-4 py-2 text-sm font-medium text-[#45F3FF] transition hover:bg-[#45F3FF]/20"
            >
              View V4
            </NuxtLink>
          </div>
        </div>

        <div class="relative mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label class="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400 transition focus-within:border-[#45F3FF]/40 focus-within:text-[#45F3FF]">
            <i class="fa-solid fa-magnifying-glass text-sm"></i>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects, stacks or themes"
              class="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            />
          </label>

          <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
            {{ totalCount }} modules in archive
          </div>
        </div>
      </header>

      <section class="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Core Deployments</p>
              <p class="mt-1 text-sm text-slate-400">Showing {{ featuredProjects.length }} featured builds</p>
            </div>
            <div class="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-400 sm:block">
              System / Module / Deploy
            </div>
          </div>

          <div v-if="featuredProjects.length > 0" class="space-y-6">
            <article
              v-for="(project, index) in featuredProjects"
              :key="project.id"
              class="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#45F3FF]/30"
            >
              <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div class="space-y-5">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A855F7]">
                      CORE_0{{ index + 1 }} / {{ project.displayType }}
                    </span>
                    <span class="rounded-full border border-[#45F3FF]/20 bg-[#45F3FF]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-[#45F3FF]">
                      Priority High
                    </span>
                  </div>

                  <div>
                    <h2 class="text-2xl font-semibold text-white sm:text-3xl">{{ project.title }}</h2>
                    <p class="mt-3 text-sm leading-7 text-slate-400">{{ project.description }}</p>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in project.tags.slice(0, 5)"
                      :key="tag"
                      class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-400"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <div class="flex flex-wrap gap-4 pt-2">
                    <a
                      v-for="link in project.links"
                      :key="link?.url"
                      :href="link?.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-[10px] font-mono uppercase tracking-[0.25em] text-white transition hover:text-[#45F3FF]"
                    >
                      {{ link?.text }} <i class="ph ph-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>

                <div class="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c0c0c] p-6">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(69,243,255,0.14),_transparent_30%)]"></div>
                  <div class="relative flex min-h-[220px] flex-col justify-between">
                    <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">
                      <span>System_Core</span>
                      <span>0{{ index + 1 }}</span>
                    </div>
                    <div class="space-y-3">
                      <div class="text-4xl font-semibold text-[#A855F7]">MODULE</div>
                      <div class="text-2xl font-semibold text-[#45F3FF]">0{{ index + 1 }}</div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="rounded-full border border-[#45F3FF]/20 bg-[#45F3FF]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-[#45F3FF]">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div v-else class="rounded-[1.75rem] border border-dashed border-white/10 bg-white/5 p-8 text-center">
            <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">No matching modules</p>
            <p class="mt-3 text-lg text-slate-300">Try a wider search term.</p>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
            <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Archive overview</p>
            <h2 class="mt-3 text-2xl font-semibold text-white">Curated modules and side systems.</h2>
            <p class="mt-4 text-sm leading-7 text-slate-400">
              The archive below keeps the same visual vocabulary as the main homepage while presenting older or smaller builds in a compact, accessible format.
            </p>
          </div>

          <div class="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
            <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Quick stats</p>
            <div class="mt-4 space-y-3">
              <div class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span class="text-sm text-slate-400">Featured</span>
                <span class="text-lg font-semibold text-white">{{ featuredProjects.length }}</span>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span class="text-sm text-slate-400">Archive</span>
                <span class="text-lg font-semibold text-white">{{ archiveProjects.length }}</span>
              </div>
            </div>
          </div>

          <div class="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
            <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Live search</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">
              Search across project titles, descriptions, and stack labels to navigate the full archive instantly.
            </p>
          </div>
        </aside>
      </section>

      <section v-if="archiveProjects.length > 0" class="mt-8 rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
        <div class="mb-8 flex items-center justify-between">
          <div>
            <p class="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Subsystems Archive</p>
            <p class="mt-1 text-sm text-slate-400">Additional experiments, small tools, and legacy modules</p>
          </div>
          <div class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
            Legacy / Module
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(project, index) in archiveProjects"
            :key="project.id"
            class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#A855F7]/30 hover:bg-white/[0.07]"
          >
            <div class="flex items-start justify-between">
              <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">ARCH-0{{ index + 1 }}</span>
              <i class="ph ph-archive text-xl text-[#45F3FF]/40"></i>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-white">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">{{ project.description }}</p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-slate-400"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-6 flex justify-end">
              <a
                v-for="link in project.links"
                :key="link?.url"
                :href="link?.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#45F3FF] transition hover:text-[#A855F7]"
              >
                {{ link?.text }} <i class="ph ph-arrow-right ml-1"></i>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.font-tech {
  font-family: 'Chakra Petch', sans-serif;
}

.font-mono {
  font-family: 'Share Tech Mono', monospace;
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}
</style>
