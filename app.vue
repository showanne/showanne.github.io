<script setup lang="ts">
import { onMounted } from 'vue';

useHead({
  title: '詹琇安 Anne — Full Stack Developer 作品集',
  htmlAttrs: {
    lang: 'zh-Hant'
  },
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
  ]
});

onMounted(() => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>

<template>
  <div class="page">
    <!-- Nav -->
    <header>
      <nav class="nav">
        <div class="nav-logo">
          <span>ANNE</span> · FULL STACK DEV
        </div>
        <div class="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section class="hero" id="top">
        <div>
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Full Stack Developer · Vue / Nuxt / Node.js
          </div>
          <h1 class="hero-title">
            詹琇安 Anne<br />
            <span>Full Stack Developer 作品集</span>
          </h1>
          <p class="hero-subtitle">
            從使用者體驗到後端架構，專注打造高效能、可擴展且維護性高的網路應用程式。
          </p>
          <div class="hero-highlight">
            <div class="hero-highlight-item">
              <span class="hero-highlight-label">專長</span>
              <span class="hero-highlight-value">Vue / Nuxt · Node.js · MongoDB</span>
            </div>
            <div class="hero-highlight-item">
              <span class="hero-highlight-label">關注</span>
              <span>使用者體驗、穩健架構、團隊協作</span>
            </div>
          </div>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">瀏覽作品</a>
            <a href="#contact" class="btn-ghost">聯絡我</a>
          </div>
        </div>

        <aside class="hero-right">
          <div class="hero-tag">PORTFOLIO · 2025</div>
          <div class="hero-avatar">
            <div class="hero-avatar-inner"></div>
          </div>
          <div class="hero-name">詹琇安 Anne</div>
          <div class="hero-role">Full Stack Developer · Web Application</div>
          <div class="hero-stack">
            <span class="pill pill-gold">Vue / Nuxt</span>
            <span class="pill">TypeScript</span>
            <span class="pill">Node.js · Express</span>
            <span class="pill">MongoDB · Mongoose</span>
            <span class="pill">JWT Auth</span>
          </div>
          <div class="hero-metrics">
            <div class="hero-metric">
              <strong>Team & Solo</strong>
              團隊協作與獨立開發並行
            </div>
            <div class="hero-metric">
              <strong>End-to-End</strong>
              前端體驗到後端部署完整掌握
            </div>
          </div>
        </aside>
      </section>

      <!-- About -->
      <section id="about">
        <div class="section-title">ABOUT</div>
        <h2 class="section-heading">關於我 · About Me</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>
              您好，我是 <strong>詹琇安（Anne）</strong>，一位熱衷於打造卓越網路應用程式的
              <strong>Full Stack Developer</strong>。
              我擅長將創新的想法轉化為實際可用的產品，從使用者友善的介面設計，到穩健可靠的後端架構，都能一手包辦。
            </p>
            <p>
              我對技術充滿好奇心，樂於學習新工具與框架，並致力於開發高效能、可擴展且維護性高的解決方案。
              我的作品集中，包含了以團隊協作完成的產品，也有從零開始獨立開發的專案，完整展現我在前後端與產品流程上的實戰經驗。
            </p>
            <p class="about-note">
              期待能與您交流，並在未來的專案中，共同探索更多可能性。
            </p>
          </div>
          <aside class="about-card">
            <h3>我在專案中的角色</h3>
            <ul class="about-list">
              <li>· 前端介面設計與元件化架構規劃</li>
              <li>· RESTful API 串接與資料流程設計</li>
              <li>· 使用者登入、權限與驗證機制實作</li>
              <li>· 資料庫 Schema 規劃與效能考量</li>
              <li>· 與設計、產品與後端工程師跨部門協作</li>
            </ul>
          </aside>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills">
        <div class="section-title">SKILLS</div>
        <h2 class="section-heading">我的技能樹 · Skills</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <h3>前端技能 Frontend</h3>
            <div class="skill-tags">
              <span class="skill-tag highlight">Vue.js</span>
              <span class="skill-tag highlight">Nuxt.js</span>
              <span class="skill-tag">Vue Router</span>
              <span class="skill-tag">Vue CLI</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">jQuery</span>
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS / SCSS</span>
              <span class="skill-tag">Bootstrap</span>
              <span class="skill-tag">Axios</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>後端技能 Backend</h3>
            <div class="skill-tags">
              <span class="skill-tag highlight">Node.js</span>
              <span class="skill-tag highlight">Express</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Mongoose</span>
              <span class="skill-tag">JWT Authentication</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>工具與設計 Tools & Design</h3>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Figma</span>
              <span class="skill-tag">Adobe Illustrator</span>
              <span class="skill-tag">Adobe Photoshop</span>
              <span class="skill-tag">Chrome DevTools</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects">
        <div class="section-title">PROJECTS</div>
        <h2 class="section-heading">專案作品集 · Projects</h2>
        <p class="projects-intro">
          以下作品包含團隊協作的大型產品，也有從零開始獨立開發的專案，
          展現我在前後端開發、系統整合與產品思維上的實戰經驗。
        </p>

        <h3 style="font-size:1rem;margin-bottom:1rem;">主要專案 Featured Projects</h3>
        <div class="featured-list">
          <!-- Rabbit Funding -->
          <article class="project-card">
            <div class="project-header">
              <div>
                <h3 class="project-title">倍而兔募資平台（Rabbit Funding Platform）</h3>
                <div class="project-type">群眾募資平台 · 團隊協作專案</div>
              </div>
            </div>
            <p class="project-desc">
              一個功能完善的群眾募資平台，串連專案發起人與支持者，協助創意與夢想得以實現。
            </p>
            <div class="project-subtitle">主要特色</div>
            <ul class="project-list">
              <li>使用 Vue3 Composition API 與 Nuxt.js 開發，提供快速且優化的網站體驗。</li>
              <li>整合 Pinia 進行狀態管理，確保前端數據流的一致性。</li>
              <li>實施 TypeScript 和 ESLint，提高程式碼品質和可維護性。</li>
              <li>實現 JWT 驗證和 Google 第三方登入，保證安全便利的註冊登入過程。</li>
              <li>整合藍新金流服務，確保贊助結帳的順暢處理。</li>
              <li>透過 GitHub Actions、Vercel、Zeabur/Render 實現 CI/CD 自動化部署。</li>
            </ul>
            <div class="project-subtitle">使用技術</div>
            <div class="project-tags">
              <span class="project-tag">Vue3 / Nuxt.js</span>
              <span class="project-tag">Pinia</span>
              <span class="project-tag">TypeScript</span>
              <span class="project-tag">Node.js / Express</span>
              <span class="project-tag">MongoDB</span>
              <span class="project-tag">Tailwind CSS</span>
              <span class="project-tag">Google Login API</span>
              <span class="project-tag">NewebPay</span>
              <span class="project-tag">Swagger</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="https://rabbitfund-frontend.vercel.app/" target="_blank">查看專案 Demo</a>
              <a class="project-link" href="#" target="_blank">GitHub Repo</a>
              <a class="project-link" href="#" target="_blank">技術說明文件</a>
            </div>
          </article>

          <!-- DTNS -->
          <article class="project-card">
            <div class="project-header">
              <div>
                <h3 class="project-title">DTNS – 每字美句每個你喜歡的瞬間</h3>
                <div class="project-type">個人化每日筆記／靈感管理工具 · 個人專案</div>
              </div>
            </div>
            <p class="project-desc">
              一款幫助使用者記錄每日想法與靈感的應用程式，兼具筆記、反思與日常管理功能。自行完成從規劃、UI 設計到前後端開發，展現完整產品開發能力。
            </p>
            <div class="project-subtitle">主要特色</div>
            <ul class="project-list">
              <li>使用 Vue-CLI 快速搭建項目，並以 Vue-Router 管理路由。</li>
              <li>整合 VueMaterial UI 框架，建立美觀且一致的用戶界面。</li>
              <li>支援 PWA（Progressive Web App），提供優化的離線和安裝體驗。</li>
              <li>引入 JWT 驗證機制，並整合 Line Login API 實現快速註冊登入。</li>
            </ul>
            <div class="project-subtitle">使用技術</div>
            <div class="project-tags">
              <span class="project-tag">Vue</span>
              <span class="project-tag">VueMaterial UI</span>
              <span class="project-tag">Node.js</span>
              <span class="project-tag">MongoDB</span>
              <span class="project-tag">PWA</span>
              <span class="project-tag">Line Login API</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="https://showanne.github.io/DTNS/#/" target="_blank">查看專案 Demo</a>
              <a class="project-link" href="#" target="_blank">GitHub Repo</a>
              <a class="project-link" href="#" target="_blank">功能與架構說明</a>
            </div>
          </article>
        </div>

        <h3 style="font-size:1rem;margin-bottom:1rem;">其他作品 Other Projects</h3>
        <div class="other-projects-grid">
          <article class="other-card">
            <h3>Stock.Find 股價查詢 LINE Bot</h3>
            <p>提供即時股價、五檔、走勢圖與新聞的 LINE 機器人。</p>
            <a href="https://github.com/showanne/line-robot-stock" target="_blank">查看 GitHub</a>
          </article>
          <article class="other-card">
            <h3>木門咖啡（Wooden Door Coffee）</h3>
            <p>模擬咖啡店品牌網站，呈現菜單、店面資訊與品牌形象。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
          </article>
          <article class="other-card">
            <h3>番茄鐘（Pomodoro Timer）</h3>
            <p>基於番茄工作法的計時器工具，幫助使用者安排專注與休息節奏。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
          </article>
          <article class="other-card">
            <h3>To Do List</h3>
            <p>簡單實用的待辦清單管理工具，支援新增、完成與刪除。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
          </article>
          <article class="other-card">
            <h3>射氣球遊戲（Balloon Shooting Game）</h3>
            <p>互動式網頁小遊戲，透過射擊氣球考驗反應速度與操作手感。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
          </article>
          <article class="other-card">
            <h3>打字練習遊戲（Typing Practice Game）</h3>
            <p>遊戲化的打字練習工具，提升打字速度與準確度。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact">
        <div class="section-title">CONTACT</div>
        <h2 class="section-heading">聯絡方式 · Contact</h2>
        <div class="contact-grid">
          <div>
            <ul class="contact-list">
              <li>
                <span class="contact-label">Email</span>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
              </li>
              <li>
                <span class="contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/your-link" target="_blank">
                  https://www.linkedin.com/in/your-link
                </a>
              </li>
              <li>
                <span class="contact-label">GitHub</span>
                <a href="https://github.com/your-github" target="_blank">
                  https://github.com/your-github
                </a>
              </li>
              <li>
                <span class="contact-label">履歷下載</span>
                <a href="#" target="_blank">下載我的履歷（PDF）</a>
              </li>
            </ul>
          </div>
          <form class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">您的名字</label>
                <input id="name" type="text" placeholder="請輸入您的稱呼" />
              </div>
              <div class="form-group">
                <label for="email">聯絡 Email</label>
                <input id="email" type="email" placeholder="name@example.com" />
              </div>
            </div>
            <div class="form-group">
              <label for="message">想對我說的話</label>
              <textarea id="message" placeholder="歡迎洽談合作、面談或專案需求…"></textarea>
            </div>
            <button type="submit" class="btn-primary">送出訊息（Demo）</button>
            <p class="contact-tip">
              此表單為展示用途，如需正式聯繫，請直接寄信至上方 Email。
            </p>
          </form>
        </div>
      </section>
    </main>

    <footer>
      © 2025 詹琇安 Anne · Full Stack Developer. All rights reserved.
    </footer>
  </div>
</template>
