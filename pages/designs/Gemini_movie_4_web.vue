<template>
  <body class="bg-dark-bg text-gray-200 font-sans selection:bg-glam-purple selection:text-white">

    <!-- 導航列 -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass-card border-b-0"
      :class="{ 'shadow-md': scrolledNavbar }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="text-2xl font-serif italic font-bold gradient-text tracking-wide">Anne.Dev</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#about" class="hover:text-chic-pink transition-colors px-3 py-2 text-sm font-medium">關於我</a>
              <a href="#skills" class="hover:text-chic-pink transition-colors px-3 py-2 text-sm font-medium">專業技能</a>
              <a href="#experience" class="hover:text-chic-pink transition-colors px-3 py-2 text-sm font-medium">工作經歷</a>
              <a href="#projects" class="hover:text-chic-pink transition-colors px-3 py-2 text-sm font-medium">精選作品</a>
              <a href="#contact"
                class="px-5 py-2 rounded-full bg-glam-purple hover:bg-violet-600 transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] text-white text-sm font-medium">聯繫我</a>
            </div>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-300 hover:text-white focus:outline-none">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden glass-card absolute w-full" :class="{ 'hidden': !mobileMenuOpen }">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" class="block hover:bg-royal-purple/50 px-3 py-2 rounded-md text-base font-medium">關於我</a>
          <a href="#skills" class="block hover:bg-royal-purple/50 px-3 py-2 rounded-md text-base font-medium">專業技能</a>
          <a href="#experience" class="block hover:bg-royal-purple/50 px-3 py-2 rounded-md text-base font-medium">工作經歷</a>
          <a href="#projects" class="block hover:bg-royal-purple/50 px-3 py-2 rounded-md text-base font-medium">精選作品</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- 背景光暈 -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px]"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        <div class="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <div
            class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-chic-pink uppercase bg-purple-900/30 rounded-full border border-purple-500/30">
            Front-end & Full-stack Developer
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            你好，我是 <br>
            <span class="gradient-text font-serif italic pr-2">詹琇安 Anne</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            以「勇於嘗試、積極學習、斜槓發展」為核心。憑藉敏銳的設計美感與同理心，致力於從使用者角度優化體驗，將創意轉化為實際可行的技術方案。
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects"
              class="px-8 py-3 rounded-full bg-gradient-to-r from-glam-purple to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300">
              查看作品
            </a>
            <a href="https://github.com/showanne" target="_blank"
              class="px-8 py-3 rounded-full border border-purple-500/50 hover:bg-purple-900/30 text-white font-semibold transition-all duration-300 flex items-center gap-2">
              <i class="fab fa-github"></i> Github
            </a>
          </div>

          <!-- 社交連結 -->
          <div class="mt-8 flex justify-center lg:justify-start space-x-6">
            <a href="https://cake.me/showanne" target="_blank"
              class="text-gray-400 hover:text-chic-pink transition-colors text-2xl" title="CakeResume">
              <i class="fas fa-file-alt"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-chic-pink transition-colors text-2xl" title="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:contact@example.com" class="text-gray-400 hover:text-chic-pink transition-colors text-2xl"
              title="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex justify-center relative">
          <div class="relative w-72 h-72 lg:w-[500px] lg:h-[500px]">
            <!-- 裝飾圓環 -->
            <div class="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]">
            </div>
            <div
              class="absolute inset-4 border border-chic-pink/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
            </div>

            <!-- 頭像/形象圖 placeholder -->
            <div
              class="absolute inset-8 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_50px_rgba(124,58,237,0.3)] bg-gradient-to-br from-purple-900 to-black flex items-center justify-center group">
              <!-- 這裡使用 FontAwesome 圖標代替真實照片，實際使用時可替換 img -->
              <div class="text-center group-hover:scale-110 transition-transform duration-500">
                <i class="fas fa-user-astronaut text-9xl text-soft-lilac opacity-80 mb-4"></i>
              </div>
            </div>

            <!-- 浮動標籤 -->
            <div class="absolute top-10 right-0 glass-card px-4 py-2 rounded-xl animate-bounce shadow-lg">
              <span class="text-chic-pink text-sm font-bold"><i class="fas fa-bolt mr-1"></i> 4年+ 經驗</span>
            </div>
            <div class="absolute bottom-20 left-0 glass-card px-4 py-2 rounded-xl animate-bounce shadow-lg delay-700">
              <span class="text-blue-300 text-sm font-bold"><i class="fas fa-code mr-1"></i> Vue & React</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">專業技能 <span class="text-purple-500">.</span></h2>
          <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Frontend -->
          <div
            class="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-purple-500">
            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
              <i class="fas fa-laptop-code text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">前端開發</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Vue.js (v2/v3), Nuxt.js
              </li>
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>React.js (Learning)</li>
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>TypeScript, JavaScript
              </li>
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Tailwind CSS, Bootstrap
              </li>
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>Pinia, Vuex</li>
              <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i>HTML5 / CSS3 / Sass</li>
            </ul>
          </div>

          <!-- Backend -->
          <div
            class="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-pink-500">
            <div class="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 text-pink-400">
              <i class="fas fa-server text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">後端技術</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>Node.js, Express</li>
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>MongoDB (Mongoose)</li>
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>RESTful API Design</li>
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>PHP + Laravel (Basic)</li>
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>Docker</li>
              <li class="flex items-center"><i class="fas fa-check text-pink-500 mr-2"></i>AWS EC2 Deployment</li>
            </ul>
          </div>

          <!-- Design -->
          <div
            class="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-blue-500">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
              <i class="fas fa-paint-brush text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">設計能力</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>UI/UX 觀念</li>
              <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Figma, Adobe XD</li>
              <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>Photoshop, Illustrator</li>
              <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>RWD 響應式設計</li>
              <li class="flex items-center"><i class="fas fa-check text-blue-500 mr-2"></i>跨瀏覽器相容性</li>
            </ul>
          </div>

          <!-- Tools -->
          <div
            class="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-yellow-500">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400">
              <i class="fas fa-tools text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">工具與協作</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-center"><i class="fas fa-check text-yellow-500 mr-2"></i>Git / GitHub / GitLab
              </li>
              <li class="flex items-center"><i class="fas fa-check text-yellow-500 mr-2"></i>Chrome Dev Tools</li>
              <li class="flex items-center"><i class="fas fa-check text-yellow-500 mr-2"></i>Notion / ClickUp</li>
              <li class="flex items-center"><i class="fas fa-check text-yellow-500 mr-2"></i>Xmind / Draw.io</li>
              <li class="flex items-center"><i class="fas fa-check text-yellow-500 mr-2"></i>Jenkins CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-black/20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">工作經歷 <span class="text-chic-pink">.</span></h2>
          <div class="w-20 h-1 bg-gradient-to-r from-chic-pink to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div
          class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">

          <!-- Experience Item 1 -->
          <div
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500 bg-dark-bg shadow-[0_0_10px_rgba(124,58,237,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <i class="fas fa-briefcase text-sm text-white"></i>
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all duration-300">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-lg text-white">前端工程師</h3>
                <span class="text-xs font-semibold text-chic-pink bg-purple-900/50 px-2 py-1 rounded">2025.02 - 至今</span>
              </div>
              <h4 class="text-purple-300 mb-3 text-sm">國泰金融控股股份有限公司 (緯創軟體駐點)</h4>
              <ul class="text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>與SA溝通，制定技術方案，開發請假管理系統。</li>
                <li>使用 Vue-i18n 架構多語系網站，優化元件架構。</li>
                <li>使用 Quasar 元件庫，確保視覺風格一致。</li>
                <li>實作動態篩選、Debounce、Lazy Loading 優化效能。</li>
              </ul>
            </div>
          </div>

          <!-- Experience Item 2 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500 bg-dark-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <i class="fas fa-briefcase text-sm text-gray-400"></i>
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all duration-300">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-lg text-white">前端工程師</h3>
                <span class="text-xs font-semibold text-gray-400 bg-white/5 px-2 py-1 rounded">2024.05 - 2025.02</span>
              </div>
              <h4 class="text-purple-300 mb-3 text-sm">城邦媒體控股集團</h4>
              <ul class="text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>整合 TypeScript 建立靜態型別檢查。</li>
                <li>與 C#、Java 後端團隊合作重構 API 與架構。</li>
                <li>主導前端專案架構改版，設計 API 規格文件。</li>
                <li>優化 ERP 系統 App WebView 畫面。</li>
              </ul>
            </div>
          </div>

          <!-- Experience Item 3 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500 bg-dark-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <i class="fas fa-briefcase text-sm text-gray-400"></i>
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all duration-300">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-lg text-white">前端工程師</h3>
                <span class="text-xs font-semibold text-gray-400 bg-white/5 px-2 py-1 rounded">2021.09 - 2024.07</span>
              </div>
              <h4 class="text-purple-300 mb-3 text-sm">眾策群集股份有限公司</h4>
              <ul class="text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>參與多語系平台開發，優化網站效能。</li>
                <li>與 PHP 後端協作，串接 RESTful API。</li>
                <li>優化內容管理系統，提升編輯效率。</li>
                <li>使用 Docker 構建測試環境。</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">精選作品 <span class="text-glam-purple">.</span></h2>
          <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          <p class="mt-4 text-gray-400">將創意與技術結合的實際成果</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Project 1 -->
          <div
            class="group relative rounded-2xl overflow-hidden glass-card hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-500">
            <div class="h-48 bg-gray-800 overflow-hidden relative">
              <!-- 模擬專案封面 -->
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-900/40 z-10"></div>
              <div
                class="w-full h-full flex items-center justify-center bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                <i class="fas fa-hand-holding-heart text-6xl text-pink-400 opacity-50"></i>
              </div>
              <div class="absolute top-2 right-2 z-20">
                <span class="bg-pink-600 text-white text-xs px-2 py-1 rounded">團隊協作</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-chic-pink transition-colors">倍而兔募資平台
              </h3>
              <p class="text-gray-400 text-sm mb-4 h-10 overflow-hidden">
                提供會員提案、贊助、管理的完整募資平台。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded">Nuxt.js</span>
                <span class="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded">Node.js</span>
                <span class="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded">MongoDB</span>
                <span class="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded">Pinia</span>
              </div>
              <div class="flex justify-between items-center border-t border-white/10 pt-4">
                <a href="#" class="text-gray-300 hover:text-white text-sm flex items-center"><i
                    class="fas fa-info-circle mr-1"></i> 詳情</a>
                <a href="#" class="text-chic-pink hover:text-white transition-colors"><i
                    class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div
            class="group relative rounded-2xl overflow-hidden glass-card hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-500">
            <div class="h-48 bg-gray-800 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-900/40 z-10"></div>
              <div
                class="w-full h-full flex items-center justify-center bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                <i class="fas fa-book-open text-6xl text-blue-400 opacity-50"></i>
              </div>
              <div class="absolute top-2 right-2 z-20">
                <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded">個人專案</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">DTNS - 每個喜歡的瞬間
              </h3>
              <p class="text-gray-400 text-sm mb-4 h-10 overflow-hidden">
                紀錄書中金句與感動瞬間的文字分享平台。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">Vue.js</span>
                <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">Express</span>
                <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">PWA</span>
                <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">JWT</span>
              </div>
              <div class="flex justify-between items-center border-t border-white/10 pt-4">
                <a href="#" class="text-gray-300 hover:text-white text-sm flex items-center"><i
                    class="fas fa-info-circle mr-1"></i> 詳情</a>
                <a href="#" class="text-blue-400 hover:text-white transition-colors"><i
                    class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div
            class="group relative rounded-2xl overflow-hidden glass-card hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-500">
            <div class="h-48 bg-gray-800 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-purple-900/40 z-10"></div>
              <div
                class="w-full h-full flex items-center justify-center bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                <i class="fas fa-chart-line text-6xl text-green-400 opacity-50"></i>
              </div>
              <div class="absolute top-2 right-2 z-20">
                <span class="bg-green-600 text-white text-xs px-2 py-1 rounded">Line Bot</span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Stock Find 股票機器人
              </h3>
              <p class="text-gray-400 text-sm mb-4 h-10 overflow-hidden">
                即時查詢股票交易資訊、新聞與走勢圖的 Line Bot。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded">Node.js</span>
                <span class="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded">Line Bot API</span>
                <span class="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded">Axios</span>
                <span class="text-xs bg-green-900/50 text-green-200 px-2 py-1 rounded">Render</span>
              </div>
              <div class="flex justify-between items-center border-t border-white/10 pt-4">
                <a href="#" class="text-gray-300 hover:text-white text-sm flex items-center"><i
                    class="fas fa-info-circle mr-1"></i> 詳情</a>
                <a href="#" class="text-green-400 hover:text-white transition-colors"><i
                    class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Footer / Contact -->
    <footer id="contact" class="bg-black/50 pt-20 pb-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">Let's work together!</h2>
        <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          如果您對我的作品感興趣，或有任何合作機會，歡迎隨時與我聯繫。<br>
          期待能與您碰撞出不同的火花！
        </p>

        <div class="flex justify-center space-x-8 mb-12">
          <a href="mailto:contact@example.com" class="flex flex-col items-center group">
            <div
              class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300 shadow-lg">
              <i class="fas fa-envelope text-xl text-white"></i>
            </div>
            <span class="mt-2 text-sm text-gray-500 group-hover:text-purple-400">Email</span>
          </a>
          <a href="https://github.com/showanne" target="_blank" class="flex flex-col items-center group">
            <div
              class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 shadow-lg">
              <i class="fab fa-github text-xl text-white"></i>
            </div>
            <span class="mt-2 text-sm text-gray-500 group-hover:text-gray-300">GitHub</span>
          </a>
          <a href="https://cake.me/showanne" target="_blank" class="flex flex-col items-center group">
            <div
              class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 shadow-lg">
              <i class="fas fa-file-invoice text-xl text-white"></i>
            </div>
            <span class="mt-2 text-sm text-gray-500 group-hover:text-green-400">Resume</span>
          </a>
        </div>

        <div class="border-t border-white/10 pt-8">
          <p class="text-gray-600 text-sm">
            &copy; 2025 Anne Chan. All rights reserved. <br>
            <span class="text-xs mt-1 block opacity-50">Inspired by the visual aesthetics of "Love's Ambition"
              (許我耀眼).</span>
          </p>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <a href="#"
      class="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:bg-purple-500 transition-all z-50 animate-bounce">
      <i class="fas fa-arrow-up"></i>
    </a>

  </body>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolledNavbar = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  scrolledNavbar.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/*
  The original <head> content including <style> tags and <link> for fonts
  should be managed at the Nuxt.js level (e.g., nuxt.config.ts or useHead).
  For this conversion, we're placing styles here for direct correspondence,
  but in a real Nuxt app, these would be externalized or handled by Nuxt.
*/
html {
  scroll-behavior: smooth;
}

body {
  font-family: '"Noto Sans TC"', sans-serif;
  background-color: #0F0518;
}

/* Tailwind CSS config from original HTML */
.bg-dark-bg {
  background-color: #0F0518;
}

.text-gray-200 {
  color: #e2e8f0;
}

.font-sans {
  font-family: '"Noto Sans TC"', sans-serif;
}

.selection\:bg-glam-purple::selection {
  background-color: #7C3AED;
}

.selection\:text-white::selection {
  color: #fff;
}

.glass-card {
  background: rgba(46, 16, 101, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glow-text {
  text-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
}

.gradient-text {
  background: linear-gradient(to right, #C084FC, #E879F9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0F0518;
}

::-webkit-scrollbar-thumb {
  background: #7C3AED;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #A78BFA;
}
</style>
