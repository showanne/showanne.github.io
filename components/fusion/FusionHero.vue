<template>
  <header class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-20 z-0"></div>
    <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
      <div class="inline-block border border-[#45F3FF]/20 px-4 py-1.5 bg-[#45F3FF]/5 mb-8 backdrop-blur-sm">
        <p class="text-[#45F3FF] font-mono tracking-[0.4em] text-[10px] animate-pulse uppercase">// System Fusion Established // Build: 2025.03</p>
      </div>
      <h1 class="text-6xl md:text-9xl font-black text-white mb-4 tracking-tighter font-tech italic glitch-text uppercase" data-text="ANNE JAN">ANNE JAN</h1>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-400 font-mono tracking-[0.2em] mb-12">&lt; FULLSTACK_ENGINEER /&gt;</h2>
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono">
        <a href="#projects" class="px-10 py-4 bg-gradient-to-r from-[#45F3FF] to-[#A855F7] text-black font-bold tracking-widest text-xs uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(69,243,255,0.2)]">Access_Repository</a>
        <a href="#experience" class="px-10 py-4 border border-white/10 text-white font-bold tracking-widest text-xs uppercase hover:bg-white/5 transition-all">System_Logs</a>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
  </header>
</template>

<style scoped>
.font-tech { font-family: 'Chakra Petch', sans-serif; }
.grid-bg { background-size: 50px 50px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px); }
.glitch-text { position: relative; text-shadow: 2px 0 #FF2A6D, -2px 0 #45F3FF; }
.animate-spin-slow { animation: spin 80s linear infinite; }
@keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
</style>
