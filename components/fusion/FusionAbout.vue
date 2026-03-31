<script setup lang="ts">
import portfolioData from '~/assets/data/portfolio.json';
const skills = portfolioData.skills;
</script>

<template>
  <section id="about" class="py-32 relative border-t border-white/5 animate-on-scroll">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-10">
          <div class="space-y-4">
            <h3 class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase flex items-center gap-3">
              <span class="w-8 h-px bg-[#45F3FF]/30"></span> 01. Profile_Specs
            </h3>
            <h2 class="text-4xl md:text-5xl font-tech font-bold text-white uppercase leading-tight">
              理性的架構，<br><span class="text-[#A855F7]">感性的呈現。</span>
            </h2>
          </div>

          <div class="code-block p-8 bg-[#0a0a0a] border-l-4 border-[#A855F7] font-mono text-sm leading-relaxed shadow-2xl">
            <p class="text-slate-500">// Object instance initialization</p>
            <p><span class="text-[#FF2A6D]">const</span> dev = {</p>
            <p class="pl-6">core: <span class="text-[#45F3FF]">'Scalability'</span>,</p>
            <p class="pl-6">vision: <span class="text-[#45F3FF]">'UX_Excellence'</span>,</p>
            <p class="pl-6">stack: [<span class="text-[#45F3FF]">'Vue3'</span>, <span class="text-[#45F3FF]">'Nuxt'</span>, <span class="text-[#45F3FF]">'Node'</span>]</p>
            <p>};</p>
          </div>

          <p class="text-slate-400 text-lg leading-relaxed font-light">
            我不僅構建功能，更在乎代碼的優雅度。致力於將複雜的後端邏輯轉化為極致的前端互動，在 0 與 1 之間尋找平衡。
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="(cat, key) in skills" :key="key" class="bento-card p-8 group transition-all">
            <h4 class="text-white font-tech font-bold mb-6 uppercase text-sm tracking-widest text-[#45F3FF] group-hover:text-white">{{ key }}</h4>
            <ul class="space-y-3 font-mono text-[11px] text-slate-500">
              <li v-for="tag in cat.tags.slice(0, 5)" :key="tag" class="flex items-center gap-2">
                <span class="w-1 h-1 bg-[#A855F7]/50 rounded-full"></span> {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.code-block { background: #111; border-left: 3px solid #45F3FF; }
.bento-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.bento-card:hover { border-color: rgba(69, 243, 255, 0.3); background: rgba(69, 243, 255, 0.03); transform: translateY(-5px); }
</style>
