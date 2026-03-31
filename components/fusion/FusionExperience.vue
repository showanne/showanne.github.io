<script setup lang="ts">
const experiences = [
  {
    role: 'Senior Front-End Developer',
    company: 'Wistron ITS (Cathay Financial Client)',
    period: '2025.02 - Present',
    desc: '主導企業級差勤管理系統架構，使用 Vue 3 & Quasar 提升元件複用率與系統效能。'
  },
  {
    role: 'Full Stack Engineer',
    company: '城邦媒體控股集團',
    period: '2024.05 - 2025.02',
    desc: '重構媒體平台 API，整合 TypeScript 建立靜態型別檢查，優化大規模數據渲染。'
  }
];
</script>

<template>
  <section id="experience" class="py-32 bg-[#08010a] relative overflow-hidden animate-on-scroll">
    <div class="max-w-7xl mx-auto px-8">
      <div class="mb-24">
        <h3 class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-3">
          <span class="w-8 h-px bg-[#45F3FF]/30"></span> 02. System_Log_Trace
        </h3>
        <h2 class="text-4xl md:text-5xl font-tech font-bold text-white uppercase">職涯軌跡。</h2>
      </div>

      <div class="max-w-4xl mx-auto space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#A855F7]/30 before:to-transparent">
        <div v-for="(exp, idx) in experiences" :key="idx" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-on-scroll">
          <div class="flex items-center justify-center w-12 h-12 rounded-full border border-[#A855F7]/50 bg-[#050505] shadow-[0_0_20px_rgba(168,85,247,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all group-hover:border-[#45F3FF]">
            <i class="ph ph-briefcase text-[#A855F7]"></i>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bento-card p-8 rounded-sm">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 font-tech">
              <h3 class="font-bold text-xl text-white uppercase">{{ exp.role }}</h3>
              <span class="text-[10px] font-mono text-[#A855F7] bg-[#A855F7]/10 px-3 py-1 border border-[#A855F7]/20">{{ exp.period }}</span>
            </div>
            <h4 class="text-slate-400 mb-6 text-xs font-mono uppercase tracking-widest">{{ exp.company }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed font-light">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.bento-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.bento-card:hover { border-color: rgba(69, 243, 255, 0.3); background: rgba(69, 243, 255, 0.03); transform: translateY(-5px); }
</style>
