<template>
  <section id="skills">
    <div class="section-title">SKILLS</div>
    <h2 class="section-heading">我的技能樹 · Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <h3>前端技能 Frontend</h3>
        <div class="skill-tags">
          <span
            v-for="tag in data.skills.frontend.highlight"
            :key="tag"
            class="skill-tag highlight"
            >{{ tag }}</span
          >
          <span
            v-for="tag in data.skills.frontend.tags"
            :key="tag"
            class="skill-tag"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div class="skill-card">
        <h3>後端技能 Backend</h3>
        <div class="skill-tags">
          <span
            v-for="tag in data.skills.backend.highlight"
            :key="tag"
            class="skill-tag highlight"
            >{{ tag }}</span
          >
          <span
            v-for="tag in data.skills.backend.tags"
            :key="tag"
            class="skill-tag"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div class="skill-card">
        <h3>工具與設計 Tools & Design</h3>
        <div class="skill-tags">
          <span
            v-for="tag in data.skills.tools.tags"
            :key="tag"
            class="skill-tag"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import data from '~/assets/data/portfolio.json';
</script>
