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
              <li>採用 SSR（Nuxt）提升網站效能與 SEO 表現</li>
              <li>整合 Google 登入，提供便捷且安全的登入體驗</li>
              <li>串接藍新金流 NewebPay，確保交易流程安全順暢</li>
              <li>團隊協作開發，具備良好的溝通、分工與協作能力</li>
            </ul>
            <div class="project-subtitle">使用技術</div>
            <div class="project-tags">
              <span class="project-tag">Vue3</span>
              <span class="project-tag">Nuxt.js</span>
              <span class="project-tag">TypeScript</span>
              <span class="project-tag">Node.js</span>
              <span class="project-tag">Express</span>
              <span class="project-tag">MongoDB</span>
              <span class="project-tag">Google Login API</span>
              <span class="project-tag">NewebPay</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="#" target="_blank">查看專案 Demo</a>
              <a class="project-link" href="#" target="_blank">GitHub Repo</a>
              <a class="project-link" href="#" target="_blank">技術說明文件</a>
            </div>
          </article>

          <!-- DTNS -->
          <article class="project-card">
            <div class="project-header">
              <div>
                <h3 class="project-title">DTNS – 每字美句</h3>
                <div class="project-type">個人化每日筆記／靈感管理工具 · 個人專案</div>
              </div>
            </div>
            <p class="project-desc">
              一款幫助使用者記錄每日想法與靈感的應用程式，兼具筆記、反思與日常管理功能。
            </p>
            <div class="project-subtitle">主要特色</div>
            <ul class="project-list">
              <li>支援 PWA，可安裝至桌面並支援離線使用</li>
              <li>整合 Line 登入，降低註冊門檻、加快登入流程</li>
              <li>提供深色模式（Dark Mode），在不同環境下維持良好閱讀體驗</li>
              <li>自行完成從規劃、UI 設計到前後端開發，展現完整產品開發能力</li>
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
              <a class="project-link" href="#" target="_blank">查看專案 Demo</a>
              <a class="project-link" href="#" target="_blank">GitHub Repo</a>
              <a class="project-link" href="#" target="_blank">功能與架構說明</a>
            </div>
          </article>
        </div>

        <h3 style="font-size:1rem;margin-bottom:1rem;">其他作品 Other Projects</h3>
        <div class="other-projects-grid">
          <article class="other-card">
            <h3>Stock.Find 股價查詢機器人</h3>
            <p>能查詢即時股價資訊的聊天機器人應用。</p>
            <a href="#" target="_blank">專案連結／GitHub</a>
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

<script setup lang="ts">
// No interactive JavaScript found in the original HTML beyond basic link navigation.
// Vue reactivity and lifecycle hooks can be added here if dynamic behavior is introduced later.
</script>

<style scoped>
/*
  The original <head> content including <style> tags and <link> for fonts
  should be managed at the Nuxt.js level (e.g., nuxt.config.ts or useHead).
  For this conversion, we're placing styles here for direct correspondence,
  but in a real Nuxt app, these would be externalized or handled by Nuxt.
*/
:root {
  --bg: #050509;
  --bg-alt: #0e0e16;
  --purple: #8a2be2;
  --purple-soft: #6a0dad;
  --gold: #ffc107;
  --gold-soft: #e0b000;
  --text-main: #f5f5f5;
  --text-muted: #b3b3c2;
  --card-bg: #14141f;
  --border-soft: rgba(255, 255, 255, 0.06);
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.7);
  --radius-lg: 18px;
  --radius-md: 12px;
  --transition-fast: 0.2s ease-out;
  --max-width: 1080px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Noto Sans TC", sans-serif;
  background: radial-gradient(circle at top, #191624 0, #050509 45%, #000 100%);
  color: var(--text-main);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--gold);
  text-decoration: none;
}

a:hover {
  color: #ffe082;
}

/* Layout */

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: linear-gradient(to bottom,
      rgba(5, 5, 9, 0.92),
      rgba(5, 5, 9, 0.7),
      transparent);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.nav {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 0.95rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nav-logo span {
  color: var(--gold);
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 1.4rem;
  font-size: 0.9rem;
}

.nav-links a {
  color: var(--text-muted);
  position: relative;
  padding-bottom: 2px;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--gold));
  transition: width var(--transition-fast);
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a:hover::after {
  width: 100%;
}

main {
  flex: 1;
}

section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3.5rem 1.5rem;
}

section+section {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.section-title {
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.section-heading {
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
}

/* Hero */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.3fr);
  gap: 2.5rem;
  align-items: center;
  padding-top: 4.5rem;
  padding-bottom: 4rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: radial-gradient(circle at left, rgba(255, 193, 7, 0.18), transparent 55%);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 1.4rem;
}

.hero-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: radial-gradient(circle, #ffeb3b, #ff9800);
  box-shadow: 0 0 8px rgba(255, 193, 7, 0.8);
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 0.8rem;
}

.hero-title span {
  background: linear-gradient(120deg, var(--gold), #ffecb3);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 1.6rem;
}

.hero-highlight {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.8rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.hero-highlight-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.hero-highlight-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #7f7f96;
}

.hero-highlight-value {
  font-weight: 600;
  color: var(--gold);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.btn-primary,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
    }

.btn-primary {
  background: linear-gradient(135deg, var(--gold), var(--gold-soft));
  color: #151515;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.9);
  filter: brightness(1.04);
}

.btn-ghost {
  border-color: rgba(255, 255, 255, 0.18);
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.02);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-right {
  background: radial-gradient(circle at top, rgba(138, 43, 226, 0.25), transparent 60%),
    radial-gradient(circle at bottom, rgba(255, 193, 7, 0.24), transparent 60%),
    var(--bg-alt);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-soft);
  padding: 1.6rem 1.4rem;
  position: relative;
  overflow: hidden;
}

.hero-tag {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  background: radial-gradient(circle at 30% 0, #ffe082, #35234d 45%, #050509 100%);
  position: relative;
  overflow: hidden;
}

.hero-avatar-inner {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 55%);
}

.hero-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.hero-role {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.2rem;
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
  font-size: 0.78rem;
}

.pill {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
  white-space: nowrap;
}

.pill-gold {
  border-color: rgba(255, 193, 7, 0.7);
  color: var(--gold);
  background: rgba(0, 0, 0, 0.7);
}

.hero-metrics {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.hero-metric strong {
  display: block;
  font-size: 1.1rem;
  color: #ffffff;
}

/* About */

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 2fr);
  gap: 2.4rem;
}

.about-text p+p {
  margin-top: 0.9rem;
}

.about-note {
  font-size: 0.9rem;
  color: var(--text-muted);
  border-left: 2px solid var(--purple);
  padding-left: 1rem;
  margin-top: 1.2rem;
}

.about-card {
  background: radial-gradient(circle at top, rgba(138, 43, 226, 0.25), transparent 60%),
    var(--bg-alt);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  padding: 1.4rem 1.5rem;
  box-shadow: var(--shadow-soft);
  font-size: 0.9rem;
  color: var(--text-muted);
}

.about-card h3 {
  font-size: 0.98rem;
  margin-bottom: 0.7rem;
  color: #ffffff;
}

.about-list {
  list-style: none;
}

.about-list li+li {
  margin-top: 0.4rem;
}

/* Skills */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.7));
  border-radius: var(--radius-md);
  border: 1px solid var(--border-soft);
  padding: 1.1rem 1.2rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.skill-card h3 {
  font-size: 0.95rem;
  margin-bottom: 0.7rem;
  color: #ffffff;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.8rem;
  color: var(--text-muted);
  background: rgba(0, 0, 0, 0.5);
}

.skill-tag.highlight {
  border-color: rgba(138, 43, 226, 0.8);
  color: var(--purple);
  background: rgba(0, 0, 0, 0.7);
}

/* Projects */

.projects-intro {
  max-width: 620px;
  color: var(--text-muted);
  margin-bottom: 1.8rem;
  font-size: 0.95rem;
}

.featured-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.project-card {
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.25), rgba(5, 5, 9, 0.95));
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.4rem 1.6rem;
  box-shadow: var(--shadow-soft);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.6rem;
}

.project-title {
  font-size: 1.1rem;
}

.project-type {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.project-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.project-subtitle {
  font-size: 0.85rem;
  color: #d1c4e9;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}

.project-list {
  font-size: 0.9rem;
  color: var(--text-muted);
  padding-left: 1.1rem;
  margin-bottom: 0.4rem;
}

.project-list li+li {
  margin-top: 0.25rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.8rem;
}

.project-tag {
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.78rem;
  color: #ddd;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.9rem;
  font-size: 0.82rem;
}

.project-link {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--text-muted);
  background: rgba(0, 0, 0, 0.6);
}

.project-link:hover {
  border-color: var(--gold);
  color: #fff;
}

.other-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.2rem;
}

.other-card {
  background: var(--card-bg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-soft);
  padding: 1rem 1.1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.other-card h3 {
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
  color: #ffffff;
}

.other-card p {
  margin-bottom: 0.4rem;
}

.other-card a {
  font-size: 0.82rem;
}

/* Contact */

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 2fr);
  gap: 2.4rem;
  align-items: flex-start;
}

.contact-list {
  list-style: none;
  font-size: 0.95rem;
}

.contact-list li+li {
  margin-top: 0.7rem;
}

.contact-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-muted);
  display: block;
}

.contact-form {
  background: var(--bg-alt);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  padding: 1.4rem 1.5rem;
  box-shadow: var(--shadow-soft);
  font-size: 0.9rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.8rem;
}

label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

input,
textarea {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: var(--text-main);
  padding: 0.55rem 0.9rem;
  font: inherit;
  outline: none;
  transition: border-color var(--transition-fast),
    box-shadow var(--transition-fast), background var(--transition-fast);
}

textarea {
  border-radius: 14px;
  min-height: 130px;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 1px rgba(138, 43, 226, 0.6);
  background: rgba(0, 0, 0, 0.9);
}

.contact-tip {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

/* Footer */

footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.2rem 1.5rem 2rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
}

/* Responsive */

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-right {
    order: -1;
  }

  .about-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  header {
    position: static;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 640px) {
  section {
    padding-inline: 1.1rem;
  }

  .skills-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .form-row {
    flex-direction: column;
  }
}
</style>
