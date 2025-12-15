<template>
  <div class="projects-page">
    <section>
      <div class="section-title">PROJECTS</div>
      <h2 class="section-heading">所有專案 · All Projects</h2>
      <p class="projects-intro">
        以下是我的部分專案作品，涵蓋了團隊協作的大型產品以及從零到一的個人專案。
      </p>

      <h3 style="font-size: 1rem; margin-bottom: 1rem">
        主要專案 Featured Projects
      </h3>
      <div class="featured-list">
        <article
          v-for="(project, index) in data.projects.featured"
          :key="'featured-' + index"
          class="project-card"
        >
          <div class="project-header">
            <div>
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-type">{{ project.type }}</div>
            </div>
          </div>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-subtitle">主要特色</div>
          <ul class="project-list">
            <li v-for="(feature, i) in project.features" :key="i">
              {{ feature }}
            </li>
          </ul>
          <div class="project-subtitle">使用技術</div>
          <div class="project-tags">
            <span
              v-for="(tag, i) in project.tags"
              :key="i"
              class="project-tag"
              >{{ tag }}</span
            >
          </div>
          <div class="project-links">
            <a
              v-for="(link, i) in project.links"
              :key="i"
              class="project-link"
              :href="link.url"
              target="_blank"
              >{{ link.text }}</a
            >
          </div>
        </article>
      </div>

      <h3 style="font-size: 1rem; margin-bottom: 1rem; margin-top: 2.5rem">
        其他作品 Other Projects
      </h3>
      <div class="other-projects-grid">
        <article
          v-for="(project, index) in data.projects.other"
          :key="'other-' + index"
          class="other-card"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link.url" target="_blank">{{
            project.link.text
          }}</a>
        </article>
      </div>

      <div style="margin: 2.5rem auto">
        <NuxtLink to="/" class="btn-ghost"> &lt; 返回首頁</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import data from '~/assets/data/portfolio.json';

  useHead({
    title: '所有專案 | 詹琇安 Anne - 作品集'
  });
</script>

<style scoped>
  .projects-page section {
    padding-top: 4.5rem;
    padding-bottom: 4rem;
  }
</style>
