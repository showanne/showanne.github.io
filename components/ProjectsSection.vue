<template>
  <section id="projects">
    <div class="section-title">PROJECTS</div>
    <h2 class="section-heading">專案作品集 · Projects</h2>
    <p class="projects-intro">
      以下作品包含團隊協作的大型產品，也有從零開始獨立開發的專案，
      展現我在前後端開發、系統整合與產品思維上的實戰經驗。
    </p>

    <h3 style="font-size: 1rem; margin-bottom: 1rem">
      主要專案 Featured Projects
    </h3>
    <div class="featured-list">
      <article
        v-for="(project, index) in data.projects.featured"
        :key="index"
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
          <span v-for="(tag, i) in project.tags" :key="i" class="project-tag">{{
            tag
          }}</span>
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

    <h3 style="font-size: 1rem; margin-bottom: 1rem">
      其他作品 Other Projects
    </h3>
    <div class="other-projects-grid">
      <article
        v-for="(project, index) in data.projects.other"
        :key="index"
        class="other-card"
      >
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link.url" target="_blank">{{ project.link.text }}</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
  import data from '~/assets/data/portfolio.json';
</script>
