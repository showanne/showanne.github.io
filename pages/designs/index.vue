<template>
  <div class="container mx-auto p-8 bg-slate-50 min-h-screen">
    <h1 class="text-4xl font-bold mb-2 text-slate-800">設計頁面索引</h1>
    <p class="text-slate-600 mb-8 border-b pb-4">點擊以下連結以預覽從 HTML 轉換而來的 Nuxt/Vue 設計版型：</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="design in designs" :key="design.path" class="group">
        <NuxtLink :to="design.path" class="block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{{ design.name }}</h2>
            <i class="fas fa-chevron-right text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>
          </div>
          <p class="text-xs font-mono text-slate-400">{{ design.file }}</p>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
      <h3 class="text-sm font-bold text-blue-800 mb-2 uppercase tracking-widest">開發備註</h3>
      <ul class="text-sm text-blue-700 space-y-1 list-disc pl-5 font-light">
        <li>所有版型皆已與 <code>assets/data/portfolio.json</code> 資料綁定。</li>
        <li>部分版型使用了外部 CDN 字體與圖標 (FontAwesome, Lucide, Phosphor)。</li>
        <li><code>Gemini_movie_2.html</code> 因其為 React 結構已被跳過。</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const designs = [
  { name: '設計總覽入口', path: '/designs/design_index', file: 'design_index.vue' },
  { name: 'Mobius 不眠日風格', path: '/designs/Gemini_mobius_1_web', file: 'Gemini_mobius_1_web.vue' },
  { name: 'Dual 邏輯美學風格', path: '/designs/Gemini_love_1_web_dev', file: 'Gemini_love_1_web_dev.vue' },
  { name: 'Cross Fire 穿越火線風格', path: '/designs/Gemini_crossfire_1_web', file: 'Gemini_crossfire_1_web.vue' },
  { name: 'Cyberpunk 賽博開發者風格', path: '/designs/Gemini_sleep_2_web_dev', file: 'Gemini_sleep_2_web_dev.vue' },
  { name: 'Hacker 黑客紀錄風格', path: '/designs/Gemini_sleep_3_web_dev', file: 'Gemini_sleep_3_web_dev.vue' },
  { name: 'Vivid Purple 極簡科技風格', path: '/designs/Gemini_sleep_3_web_dev_2', file: 'Gemini_sleep_3_web_dev_2.vue' },
  { name: '電影版型 1 (Web)', path: '/designs/Gemini_movie_1_web', file: 'Gemini_movie_1_web.vue' },
  { name: '電影版型 1 (Static)', path: '/designs/Gemini_movie_1', file: 'Gemini_movie_1.vue' },
  { name: '電影版型 2 (Web)', path: '/designs/Gemini_movie_2_web', file: 'Gemini_movie_2_web.vue' },
  { name: '電影版型 3 (Web)', path: '/designs/Gemini_movie_3_web', file: 'Gemini_movie_3_web.vue' },
  { name: '電影版型 4 (Web)', path: '/designs/Gemini_movie_4_web', file: 'Gemini_movie_4_web.vue' },
  { name: '電影版型 5 (Web)', path: '/designs/Gemini_movie_5_web', file: 'Gemini_movie_5_web.vue' },
  { name: '電影版型 6 (Web)', path: '/designs/Gemini_movie_6_web', file: 'Gemini_movie_6_web.vue' },
  { name: '電影版型 7 (Web)', path: '/designs/Gemini_movie_7_web', file: 'Gemini_movie_7_web.vue' },
  { name: '電影版型 8 (Web)', path: '/designs/Gemini_movie_8_web', file: 'Gemini_movie_8_web.vue' },
  { name: '測試版型 A', path: '/designs/TEST_ANNE_PORTFOLIO-1', file: 'TEST_ANNE_PORTFOLIO-1.vue' },
  { name: '測試版型 B', path: '/designs/TEST_ANNE_PORTFOLIO-2', file: 'TEST_ANNE_PORTFOLIO-2.vue' },
  { name: '超級融合版 1', path: '/designs/TEST_ANNE_PORTFOLIO-3', file: 'TEST_ANNE_PORTFOLIO-3.vue' },
  { name: '硬核黑客版 2', path: '/designs/TEST_ANNE_PORTFOLIO-4', file: 'TEST_ANNE_PORTFOLIO-4.vue' },
  { name: '旗艦融合版 3', path: '/designs/TEST_ANNE_PORTFOLIO-5', file: 'TEST_ANNE_PORTFOLIO-5.vue' },
  { name: '戰鬥融合版 4', path: '/designs/TEST_ANNE_PORTFOLIO-6', file: 'TEST_ANNE_PORTFOLIO-6.vue' },
];

useHead({
  title: '設計頁面索引 | Anne Portfolio Designs',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ]
});
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
