<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import portfolioData from '~/assets/data/portfolio.json';

const contact = portfolioData.contact;

// [Terminal Logic]
const terminalInput = ref('');
const terminalHistory = ref<{ type: 'cmd' | 'res' | 'info', text: string }[]>([
  { type: 'info', text: '// Welcome to Fusion_OS Terminal v3.0.1' },
  { type: 'info', text: '// Protocols established. Awaiting input.' }
]);

const handleCommand = () => {
  const cmd = terminalInput.value.toLowerCase().trim();
  if (!cmd) return;
  terminalHistory.value.push({ type: 'cmd', text: cmd });
  let response = '';
  switch (cmd) {
    case 'help': response = 'Available commands: [about, email, resume, skills, status, clear]'; break;
    case 'about': response = '> Hybrid Developer: Building bridges between data and design.'; break;
    case 'email': response = `> TRANSMISSION_KEY: ${contact.email}`; break;
    case 'resume': response = '> FILE_PATH: /assets/cv/anne_jan_2025.pdf (Encrypted)'; break;
    case 'status': response = '> SYSTEM: OPTIMAL | CORE: VUE_3 | ENERGY: 100%'; break;
    case 'skills': response = `> FRONT: ${portfolioData.skills.frontend.highlight[0]} | BACK: ${portfolioData.skills.backend.highlight[0]}`; break;
    case 'clear': terminalHistory.value = []; terminalInput.value = ''; return;
    default: response = `> Error: Protocol "${cmd}" not recognized. Type "help".`;
  }
  terminalHistory.value.push({ type: 'res', text: response });
  terminalInput.value = '';
  setTimeout(() => {
    const el = document.querySelector('.terminal-body');
    if (el) el.scrollTop = el.scrollHeight;
  }, 10);
};
</script>

<template>
  <section id="contact" class="py-32 bg-black border-t border-white/5 overflow-hidden relative animate-on-scroll">
    <div class="container mx-auto px-8">
      <div class="mb-20">
        <h3 class="text-[#45F3FF] font-mono tracking-[0.3em] text-xs uppercase mb-4 flex items-center gap-3">
          <span class="w-8 h-px bg-[#45F3FF]/30"></span> 04. Initiate_Handshake
        </h3>
        <h2 class="text-4xl md:text-5xl font-tech font-bold text-white uppercase italic">啟動連線。</h2>
      </div>

      <div class="grid lg:grid-cols-12 gap-12">
        <!-- Left: Bento Contact Info -->
        <div class="lg:col-span-5 grid grid-cols-1 gap-4">
          <div class="bento-card p-10 flex flex-col justify-center relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 opacity-[0.03] rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <i class="ph ph-paper-plane-tilt text-[15rem] text-[#45F3FF]"></i>
            </div>
            <h4 class="text-2xl font-tech font-bold text-white mb-4 uppercase italic">Ready to deploy?</h4>
            <p class="text-slate-500 mb-10 font-light text-sm font-mono italic">目前開放技術合作與專案開發。啟動下方按鈕進行通訊協議。</p>
            <a :href="'mailto:' + contact.email" class="inline-block bg-[#FF2A6D] text-black px-8 py-4 font-tech font-bold text-xs hover:bg-[#45F3FF] transition-all w-fit uppercase tracking-[0.3em]">
              Send_Signal()
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <a :href="contact.github" target="_blank" class="bento-card p-6 flex flex-col items-center justify-center gap-2 group border-white/5 hover:border-[#45F3FF]/30">
              <i class="ph ph-github-logo text-3xl text-white group-hover:text-[#45F3FF] transition-colors"></i>
              <span class="text-[10px] font-mono uppercase tracking-widest">GitHub</span>
            </a>
            <a :href="contact.linkedin" target="_blank" class="bento-card p-6 flex flex-col items-center justify-center gap-2 group border-white/5 hover:border-[#0077b5]/30">
              <i class="ph ph-linkedin-logo text-3xl text-[#0077b5] group-hover:text-white transition-colors"></i>
              <span class="text-[10px] font-mono uppercase tracking-widest">LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right: Interactive Terminal -->
        <div class="lg:col-span-7">
          <div class="bento-card rounded-sm overflow-hidden border-white/5 shadow-2xl flex flex-col h-full min-h-[400px]">
            <div class="bg-white/5 px-6 py-3 flex gap-2 border-b border-white/5">
              <div class="w-3 h-3 rounded-full bg-[#FF2A6D]/60"></div>
              <div class="w-3 h-3 rounded-full bg-[#A855F7]/60"></div>
              <div class="w-3 h-3 rounded-full bg-[#45F3FF]/60"></div>
              <span class="ml-4 font-mono text-[10px] text-slate-600 tracking-widest lowercase italic">guest@anne-os: ~</span>
            </div>
            <div class="p-8 font-mono text-sm flex-1 bg-[#050505]/40 backdrop-blur-xl flex flex-col">
              <div class="terminal-body flex-1 overflow-y-auto space-y-3 mb-6 scrollbar-thin">
                <div v-for="(log, i) in terminalHistory" :key="i"
                  :class="{'text-[#39FF14]': log.type === 'info', 'text-slate-500': log.type === 'res', 'text-[#45F3FF]': log.type === 'cmd'}">
                  <span v-if="log.type === 'cmd'">$ </span>{{ log.text }}
                </div>
              </div>
              <div class="flex gap-3 border-t border-white/5 pt-4">
                <span class="text-[#45F3FF] animate-pulse font-bold">$</span>
                <input v-model="terminalInput" @keyup.enter="handleCommand" type="text" class="bg-transparent border-none outline-none flex-1 text-white font-mono placeholder:opacity-20" placeholder="enter_protocol..." autofocus>
              </div>
            </div>
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
.scrollbar-thin::-webkit-scrollbar { width: 4px; }
.scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(69, 243, 255, 0.2); }
</style>
