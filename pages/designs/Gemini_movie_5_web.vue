<template>
  <body class="bg-dazzle text-slate-800 font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass shadow-sm transition-all duration-300" id="navbar"
      :class="{ 'shadow-md': scrolledNavbar, 'bg-opacity-95': scrolledNavbar }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="#" class="text-2xl font-serif font-bold text-primary-800 tracking-wider">
            ANNE<span class="text-dazzle-gold">.</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-slate-600 hover:text-primary-600 transition-colors font-medium">關於我</a>
            <a href="#skills" class="text-slate-600 hover:text-primary-600 transition-colors font-medium">專業技能</a>
            <a href="#experience" class="text-slate-600 hover:text-primary-600 transition-colors font-medium">經歷</a>
            <a href="#projects" class="text-slate-600 hover:text-primary-600 transition-colors font-medium">作品集</a>
            <a href="#contact"
              class="px-6 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30">
              聯繫我
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden text-slate-600 focus:outline-none" @click="toggleMobileMenu">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      <!-- Mobile Menu Dropdown -->
      <div id="mobile-menu" class="md:hidden glass absolute w-full border-t border-gray-100"
        :class="{ 'hidden': !mobileMenuOpen }">
        <div class="flex flex-col px-4 py-4 space-y-4">
          <a href="#about" class="text-slate-600 hover:text-primary-600 font-medium">關於我</a>
          <a href="#skills" class="text-slate-600 hover:text-primary-600 font-medium">專業技能</a>
          <a href="#experience" class="text-slate-600 hover:text-primary-600 font-medium">經歷</a>
          <a href="#projects" class="text-slate-600 hover:text-primary-600 font-medium">作品集</a>
          <a href="#contact" class="text-primary-600 font-medium">聯繫我</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <!-- Decorative Background Blobs -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float">
      </div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
        style="animation-delay: 2s"></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow">
      </div>

      <div class="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div
            class="inline-block px-4 py-1 mb-4 rounded-full bg-white/50 border border-primary-200 text-primary-700 text-sm font-medium shadow-sm backdrop-blur-sm">
            ✨ 勇於嘗試 · 積極學習 · 斜槓發展
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-slate-900">
            我是 <span class="text-gradient">詹琇安</span><br>
            <span class="text-3xl md:text-4xl text-slate-500 font-sans font-light mt-2 block">Front-end Developer</span>
          </h1>
          <p class="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            擁有四年前端實戰經驗，具備獨立開發與跨部門協作能力。致力於從使用者角度優化體驗，將創意轉化為實際可行的技術方案，正邁向全端工程師之路。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects"
              class="group relative px-8 py-3 bg-primary-700 text-white rounded-full overflow-hidden shadow-lg hover:shadow-primary-600/40 transition-all">
              <div
                class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine">
              </div>
              <span class="relative font-medium">查看作品</span>
            </a>
            <a href="https://github.com/showanne" target="_blank"
              class="px-8 py-3 bg-white text-primary-700 border border-primary-200 rounded-full hover:bg-primary-50 transition-all font-medium flex items-center justify-center gap-2 shadow-sm">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center relative">
          <div class="relative w-72 h-72 md:w-96 md:h-96">
            <!-- Photo Frame/Placeholder simulating the 'Dazzling' vibe -->
            <div
              class="absolute inset-0 border-2 border-primary-200 rounded-[2rem] rotate-6 transform transition-transform duration-500 hover:rotate-3">
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-tr from-primary-600 to-dazzle-pink rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center rotate-0 transition-transform duration-500 hover:-rotate-2 group">
              <!-- Placeholder for User Image -->
              <div class="text-white text-center p-8">
                <i class="fas fa-laptop-code text-6xl mb-4 opacity-80"></i>
                <h3 class="text-2xl font-bold">Anne Chan</h3>
                <p class="opacity-80">Full Stack Engineer</p>
              </div>
            </div>
            <!-- Decorative Elements -->
            <div
              class="absolute -top-4 -right-4 w-12 h-12 bg-dazzle-gold rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <i class="fas fa-star text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 relative bg-white/40">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">專業技能</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-400 to-dazzle-pink mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600">持續精進的技術棧，連結設計與程式的橋樑</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Frontend -->
          <div
            class="glass p-6 rounded-2xl border-t-4 border-primary-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
              <i class="fas fa-code text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">前端開發</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-primary-400 mr-2"></i>Vue.js
                (v2/v3) / Nuxt.js</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-primary-400 mr-2"></i>Pinia
                / Vuex</li>
              <li class="flex items-center text-slate-600"><i
                  class="fas fa-check-circle text-primary-400 mr-2"></i>Tailwind CSS / Bootstrap</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-primary-400 mr-2"></i>Sass /
                CSS3 / HTML5</li>
              <li class="flex items-center text-slate-600"><i
                  class="fas fa-check-circle text-primary-400 mr-2"></i>JavaScript (ES6+) / jQuery</li>
            </ul>
          </div>

          <!-- Backend -->
          <div
            class="glass p-6 rounded-2xl border-t-4 border-purple-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <i class="fas fa-server text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">後端與架構</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-purple-400 mr-2"></i>Node.js
                / Express</li>
              <li class="flex items-center text-slate-600"><i
                  class="fas fa-check-circle text-purple-400 mr-2"></i>TypeScript</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-purple-400 mr-2"></i>MongoDB
                / Mongoose</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-purple-400 mr-2"></i>PHP +
                Laravel (Basic)</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-purple-400 mr-2"></i>RESTful
                API 設計</li>
            </ul>
          </div>

          <!-- Tools & DevOps -->
          <div
            class="glass p-6 rounded-2xl border-t-4 border-fuchsia-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-6 text-fuchsia-600">
              <i class="fas fa-tools text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">工具與 DevOps</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-fuchsia-400 mr-2"></i>Git /
                GitHub / GitLab</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-fuchsia-400 mr-2"></i>Docker
                環境建置</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-fuchsia-400 mr-2"></i>AWS
                EC2 部署</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-fuchsia-400 mr-2"></i>Chrome
                DevTools</li>
            </ul>
          </div>

          <!-- Design -->
          <div
            class="glass p-6 rounded-2xl border-t-4 border-pink-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
              <i class="fas fa-pen-nib text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">設計與溝通</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-pink-400 mr-2"></i>UI/UX 觀念
              </li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-pink-400 mr-2"></i>Figma /
                Adobe XD</li>
              <li class="flex items-center text-slate-600"><i
                  class="fas fa-check-circle text-pink-400 mr-2"></i>Illustrator / Photoshop</li>
              <li class="flex items-center text-slate-600"><i class="fas fa-check-circle text-pink-400 mr-2"></i>Notion /
                ClickUp 專案管理</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-primary-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">工作經歷</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-400 to-dazzle-pink mx-auto rounded-full"></div>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary-200"></div>

          <!-- Job 1 -->
          <div class="relative mb-12 md:mb-16 group">
            <div class="flex flex-col md:flex-row items-center w-full">
              <div class="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
                <h3 class="text-xl font-bold text-slate-800">國泰金融控股 (緯創軟體)</h3>
                <h4 class="text-primary-600 font-medium mb-2">前端工程師</h4>
                <p class="text-sm text-slate-500 mb-4">2025.02 - 至今</p>
                <div
                  class="bg-white p-5 rounded-lg shadow-sm border border-primary-100 text-left md:text-right group-hover:shadow-md transition-shadow">
                  <p class="text-slate-600 text-sm leading-relaxed">
                    負責請假管理系統開發，與SA密切合作。實作動態篩選、多語系(Vue-i18n)架構，並優化員工搜尋元件，使用Quasar框架確保視覺一致性。
                  </p>
                </div>
              </div>
              <div
                class="absolute left-0 md:left-1/2 transform -translate-x-[10px] md:-translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 order-1 md:order-2">
              </div>
              <div class="w-full md:w-1/2 order-3"></div>
            </div>
          </div>

          <!-- Job 2 -->
          <div class="relative mb-12 md:mb-16 group">
            <div class="flex flex-col md:flex-row items-center w-full">
              <div class="w-full md:w-1/2 order-3 md:order-1"></div>
              <div
                class="absolute left-0 md:left-1/2 transform -translate-x-[10px] md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-400 rounded-full shadow-lg z-10 order-1 md:order-2">
              </div>
              <div class="w-full md:w-1/2 pl-8 md:pl-12 order-2 md:order-3">
                <h3 class="text-xl font-bold text-slate-800">城邦媒體控股集團</h3>
                <h4 class="text-primary-600 font-medium mb-2">前端工程師</h4>
                <p class="text-sm text-slate-500 mb-4">2024.05 - 2025.02</p>
                <div
                  class="bg-white p-5 rounded-lg shadow-sm border border-primary-100 group-hover:shadow-md transition-shadow">
                  <p class="text-slate-600 text-sm leading-relaxed">
                    主導ERP系統重構與前端架構優化。導入TypeScript降低錯誤率，規劃API文件，與後端(C#/Java)緊密協作提升響應速度。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Job 3 -->
          <div class="relative group">
            <div class="flex flex-col md:flex-row items-center w-full">
              <div class="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
                <h3 class="text-xl font-bold text-slate-800">眾策群集 & 凱斯整合行銷</h3>
                <h4 class="text-primary-600 font-medium mb-2">前端工程師</h4>
                <p class="text-sm text-slate-500 mb-4">2021.09 - 2024.07</p>
                <div
                  class="bg-white p-5 rounded-lg shadow-sm border border-primary-100 text-left md:text-right group-hover:shadow-md transition-shadow">
                  <p class="text-slate-600 text-sm leading-relaxed">
                    負責多語系平台開發與RWD切版。解決跨瀏覽器相容性問題，與後端設計資料流，優化CMS系統提升編輯效率。
                  </p>
                </div>
              </div>
              <div
                class="absolute left-0 md:left-1/2 transform -translate-x-[10px] md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-300 rounded-full shadow-lg z-10 order-1 md:order-2">
              </div>
              <div class="w-full md:w-1/2 order-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 relative overflow-hidden">
      <!-- Background Decor -->
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-purple-50 to-white -z-10"></div>
      <div
        class="absolute -right-20 top-40 w-80 h-80 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20">
      </div>

      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">精選作品</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-400 to-dazzle-pink mx-auto rounded-full"></div>
          <p class="mt-4 text-slate-600">從概念到實踐，每一個專案都是技術與創意的結晶</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1: Bear Two -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div
              class="h-48 bg-gradient-to-r from-primary-200 to-pink-200 flex items-center justify-center overflow-hidden relative">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <i class="fas fa-hand-holding-heart text-6xl text-white drop-shadow-md"></i>
              <!-- Tag -->
              <div
                class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                團隊協作</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-2">倍而兔募資平台</h3>
              <p class="text-sm text-slate-500 mb-4">Vue3, Nuxt.js, Pinia, Node.js, MongoDB</p>
              <p class="text-slate-600 text-sm mb-6 line-clamp-3">
                擔任技術負責人，涵蓋資料庫設計與全端開發。實現JWT驗證、第三方登入與藍新金流串接。使用Tailwind CSS打造響應式介面。
              </p>
              <div class="flex gap-2 text-primary-600">
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">TypeScript</span>
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">Swagger</span>
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">Vercel</span>
              </div>
            </div>
          </div>

          <!-- Project 2: DTNS -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div
              class="h-48 bg-gradient-to-r from-slate-200 to-purple-200 flex items-center justify-center overflow-hidden relative">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <i class="fas fa-book-open text-6xl text-white drop-shadow-md"></i>
              <!-- Tag -->
              <div
                class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-purple-700 shadow-sm">
                獨立開發</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-2">DTNS - 文字的溫度</h3>
              <p class="text-sm text-slate-500 mb-4">Vue2, Node.js, Express, MongoDB</p>
              <p class="text-slate-600 text-sm mb-6 line-clamp-3">
                紀錄心動語句的概念網站。包含會員系統、文章分享牆與權限管理。實現夜間模式切換與PWA離線瀏覽功能。
              </p>
              <div class="flex gap-2 text-purple-600">
                <span class="px-2 py-1 bg-purple-50 rounded text-xs">PWA</span>
                <span class="px-2 py-1 bg-purple-50 rounded text-xs">Line Login</span>
                <span class="px-2 py-1 bg-purple-50 rounded text-xs">RWD</span>
              </div>
            </div>
          </div>

          <!-- Project 3: Stock Find -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div
              class="h-48 bg-gradient-to-r from-green-100 to-primary-200 flex items-center justify-center overflow-hidden relative">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <i class="fab fa-line text-6xl text-white drop-shadow-md"></i>
              <!-- Tag -->
              <div
                class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-green-600 shadow-sm">
                Line Bot</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-2">Stock. Find 股票機器人</h3>
              <p class="text-sm text-slate-500 mb-4">Node.js, Line Messaging API, Axios</p>
              <p class="text-slate-600 text-sm mb-6 line-clamp-3">
                串接第三方財經API的Line機器人。提供即時股價、新聞與歷史走勢查詢。使用Flex Message呈現豐富的視覺化資訊。
              </p>
              <div class="flex gap-2 text-primary-600">
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">Line Flex</span>
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">Render</span>
                <span class="px-2 py-1 bg-primary-50 rounded text-xs">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="https://github.com/showanne" target="_blank"
            class="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors">
            查看更多 GitHub 專案 <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 relative">
      <div class="absolute inset-0 bg-primary-900 -z-20"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-800 to-purple-900 opacity-90 -z-10"></div>

      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">準備好開始新的專案了嗎？</h2>
        <p class="text-primary-200 mb-10 max-w-2xl mx-auto text-lg">
          我正在尋找全端工程師或前端開發的機會。如果您有任何想法或合作需求，歡迎隨時與我聯繫。
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a href="mailto:anne@example.com"
            class="glass-dark px-8 py-4 rounded-full text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-3">
            <i class="fas fa-envelope"></i> 發送郵件
          </a>
          <a href="https://cake.me/showanne" target="_blank"
            class="bg-dazzle-gold text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/20">
            <i class="fas fa-file-alt"></i> 查看完整履歷
          </a>
        </div>

        <div class="flex justify-center space-x-8 text-primary-200">
          <a href="https://github.com/showanne" target="_blank" class="hover:text-white hover:scale-110 transition-all">
            <i class="fab fa-github text-3xl"></i>
          </a>
          <a href="#" class="hover:text-white hover:scale-110 transition-all">
            <i class="fab fa-linkedin text-3xl"></i>
          </a>
          <a href="#" class="hover:text-white hover:scale-110 transition-all">
            <i class="fas fa-globe text-3xl"></i>
          </a>
        </div>

        <footer class="mt-20 border-t border-white/10 pt-8 text-primary-300 text-sm">
          <p>&copy; 2025 Anne Chan. All rights reserved. Designed with Tailwind CSS.</p>
        </footer>
      </div>
    </section>
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
}

/* Tailwind CSS config from original HTML */
:root {
  --primary-50: #f5f3ff;
  --primary-100: #ede9fe;
  --primary-200: #ddd6fe;
  --primary-300: #c4b5fd;
  --primary-400: #a78bfa;
  --primary-500: #8b5cf6;
  --primary-600: #7c3aed;
  --primary-700: #6d28d9;
  --primary-800: #5b21b6;
  --primary-900: #4c1d95;

  --dazzle-gold: #fbbf24;
  --dazzle-pink: #f472b6;
}

.bg-dazzle {
  background: linear-gradient(135deg, var(--primary-50) 0%, #e0e7ff 50%, #fae8ff 100%);
}

.text-slate-800 {
  color: #1e293b;
}

.font-sans {
  font-family: '"Noto Sans TC"', sans-serif;
}

.font-serif {
  font-family: '"Noto Serif TC"', serif;
}

.selection\:bg-primary-200::selection {
  background-color: var(--primary-200);
}

.selection\:text-primary-900::selection {
  color: var(--primary-900);
}

/* Glassmorphism Utilities */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.glass-dark {
  background: rgba(76, 29, 149, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-700) 0%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.group-hover\:animate-shine:hover .animate-shine {
  animation: shine 2s infinite;
}


/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f5f3ff;
}

::-webkit-scrollbar-thumb {
  background: #8b5cf6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6d28d9;
}
</style>
