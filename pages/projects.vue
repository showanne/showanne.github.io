<script setup lang="ts">
  import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import {
    projects,
    typeFilters,
    tagFilters,
    type Project,
    type ProjectType,
    type TechTag
  } from '~/assets/data/projects-data';

  const activeType = ref<'all' | ProjectType>('all');
  const activeTag = ref<'all' | TechTag>('all');

  const filteredProjects = computed(() => {
    return projects.filter(p => {
      const okType =
        activeType.value === 'all' ? true : p.type === activeType.value;
      const okTag =
        activeTag.value === 'all' ? true : p.tags.includes(activeTag.value);
      return okType && okTag;
    });
  });

  // Modal Logic
  const isModalOpen = ref(false);
  const selectedProject = ref<Project | null>(null);

  function openProject(p: Project) {
    selectedProject.value = p;
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
    // Optional: Reset selected project after transition
    // setTimeout(() => { selectedProject.value = null }, 300)
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }

  watch(isModalOpen, isOpen => {
    const htmlEl = document.documentElement;
    if (isOpen) {
      htmlEl.classList.add('overflow-hidden');
    } else {
      htmlEl.classList.remove('overflow-hidden');
    }
  });

  onMounted(() => window.addEventListener('keydown', onKeydown));
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
    // Ensure style is removed when component unmounts
    document.documentElement.classList.remove('overflow-hidden');
  });

  useHead({
    title: '精選專案',
    bodyAttrs: {
      // Apply dark theme and background styles to the body for this page
      class: 'dark bg-gray-950 text-white'
    }
  });
</script>

<template>
  <main class="relative min-h-screen px-5 py-14 sm:py-20">
    <!-- Background Gradients & Grid -->
    <div class="fixed inset-0 -z-10 pointer-events-none">
      <div
        class="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"
      ></div>
      <div
        class="absolute top-0 left-[10%] w-[1200px] h-[600px] bg-radial-gradient from-purple-500/20 to-transparent to-55%"
      ></div>
      <div
        class="absolute top-[20%] left-[90%] w-[900px] h-[500px] bg-radial-gradient from-yellow-400/10 to-transparent to-55%"
      ></div>
      <div
        class="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(90deg,rgba(128,0,128,0.25)_0_1px,transparent_1px_56px),repeating-linear-gradient(0deg,rgba(128,0,128,0.2)_0_1px,transparent_1px_72px)]"
      ></div>
    </div>

    <!-- Header -->
    <header class="max-w-6xl mx-auto mb-7 py-2.5">
      <div
        class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-purple-500/30 bg-black/50 backdrop-blur-sm text-xs tracking-[0.14em] text-gray-300"
      >
        PROJECTS
      </div>
      <h1
        class="mt-3.5 mb-2.5 text-4xl font-bold tracking-wide text-shadow-[0_0_14px_rgba(255,215,0,0.18)]"
      >
        精選專案作品
      </h1>
      <p class="mb-4.5 max-w-prose text-gray-300">
        以下是我的部分專案作品，涵蓋了團隊協作的大型產品以及從零到一的個人專案。
      </p>

      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/" class="btn-ghost"> &lt; 返回首頁</NuxtLink>
      </div>
    </header>

    <!-- Filters -->
    <section
      class="max-w-6xl mx-auto mb-5 p-3.5 grid gap-3.5 rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-md"
      aria-label="Filters"
    >
      <div class="grid gap-2.5">
        <div class="text-xs tracking-widest text-gray-300">Type</div>
        <div class="flex flex-wrap gap-2.5">
          <button
            v-for="f in typeFilters"
            :key="f.key"
            class="px-3 py-2.5 rounded-full border cursor-pointer transition-all duration-200"
            :class="
              activeType === f.key
                ? 'bg-yellow-400/10 border-yellow-400/80 text-yellow-300 shadow-[0_0_10px_rgba(255,215,0,0.35)]'
                : 'border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:-translate-y-px'
            "
            type="button"
            @click="activeType = f.key"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <div class="grid gap-2.5">
        <div class="text-xs tracking-widest text-gray-300">Tech</div>
        <div class="flex flex-wrap gap-2.5">
          <button
            v-for="t in tagFilters"
            :key="t.key"
            class="px-3 py-2.5 rounded-full border cursor-pointer transition-all duration-200"
            :class="
              activeTag === t.key
                ? 'bg-yellow-400/10 border-yellow-400/80 text-yellow-300 shadow-[0_0_10px_rgba(255,215,0,0.35)]'
                : 'border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:-translate-y-px'
            "
            type="button"
            @click="activeTag = t.key"
          >
            {{ t.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section
      id="grid"
      class="max-w-6xl mx-auto grid grid-cols-12 gap-4"
      aria-label="Project grid"
    >
      <article
        v-for="p in filteredProjects"
        :key="p.id"
        class="col-span-12 md:col-span-6 lg:col-span-4 group/card card-glow"
        role="button"
        tabindex="0"
        @click="openProject(p)"
        @keydown.enter="openProject(p)"
      >
        <div class="relative aspect-video">
          <img
            class="w-full h-full object-cover"
            :src="p.cover"
            :alt="p.title"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          ></div>
        </div>

        <div class="p-3.5 grid gap-2.5">
          <div class="text-xs tracking-wider text-gray-400">
            {{ p.subtitle }}
          </div>
          <h3 class="text-lg font-semibold">{{ p.title }}</h3>
          <p class="text-sm text-gray-300 line-clamp-2 min-h-[40px]">
            {{ p.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in p.tags"
              :key="tag"
              class="inline-block px-2.5 py-1.5 text-xs rounded-full border border-purple-400/50 text-purple-300"
              >{{ tag }}</span
            >
          </div>

          <div class="flex justify-between items-center mt-1">
            <button class="btn-primary btn-sm" type="button">查看詳情</button>
            <span class="text-xs text-gray-500">Click to view</span>
          </div>
        </div>
      </article>

      <div
        v-if="filteredProjects.length === 0"
        class="col-span-12 p-5 rounded-lg border border-dashed border-purple-500/40 bg-black/40 text-gray-400"
      >
        沒有符合條件的作品，請調整篩選。
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="isModalOpen && selectedProject"
        class="fixed inset-0 z-50 grid place-items-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedProject.title"
      >
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          @click="closeModal"
        ></div>
        <div
          class="relative w-full max-w-4xl rounded-2xl border border-purple-500/30 bg-gray-950/80 overflow-hidden card-glow"
        >
          <div class="flex items-start justify-between gap-4 p-4">
            <div>
              <div class="text-xs tracking-widest text-gray-400">
                {{ selectedProject.subtitle }}
              </div>
              <h2 class="mt-1.5 text-2xl font-bold">
                {{ selectedProject.title }}
              </h2>
            </div>
            <button
              class="flex-shrink-0 w-9 h-9 rounded-lg border border-purple-500/40 bg-white/5 hover:bg-white/10 transition-colors icon-glow"
              type="button"
              aria-label="Close"
              @click="closeModal"
            >
              ✕
            </button>
          </div>

          <div class="p-4 pt-0 grid gap-4">
            <img
              class="w-full h-auto block rounded-lg border border-purple-500/20"
              :src="selectedProject.cover"
              :alt="selectedProject.title"
            />

            <p class="text-gray-300 leading-relaxed">
              {{ selectedProject.description }}
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="tag in selectedProject.tags"
                :key="tag"
                class="inline-block px-3 py-1.5 text-sm rounded-full border border-purple-400/50 text-purple-300"
                >{{ tag }}</span
              >
            </div>

            <div class="flex flex-wrap gap-3 pt-1">
              <a
                v-if="selectedProject.links?.demo"
                class="btn-primary"
                :href="selectedProject.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                >Demo</a
              >
              <a
                v-if="selectedProject.links?.github"
                class="btn-ghost"
                :href="selectedProject.links.github"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
