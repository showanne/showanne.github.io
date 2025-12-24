<template>
  <body>
    <!-- 導覽列 -->
    <header>
      <div class="container nav">
        <div class="brand">
          詹琇安 <span>(Anne)</span> | Full Stack Developer
        </div>
        <nav>
          <ul>
            <li><a href="#about">關於我</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#projects">專案作品</a></li>
            <li><a href="#contact">聯絡我</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero / 關於我 -->
    <section class="hero" id="about">
      <div class="hero-inner">
        <div>
          <h1 class="hero-title">詹琇安 (Anne)</h1>
          <div class="hero-subtitle">Full Stack Developer</div>
          <p class="hero-text">
            您好，我是詹琇安 (Anne)，一位熱衷於打造卓越網路應用程式的 Full Stack Developer。
            我擅長將創新的想法轉化為實際可用的產品，從使用者友善的介面設計到穩健可靠的後端架構，都能一手包辦。<br /><br />
            我對技術充滿好奇心，樂於學習新工具與框架，並致力於開發高效能、可擴展且維護性高的解決方案。
            我的作品集展示了我從前端到後端，獨立開發與團隊協作的多元能力。期待能與您交流，共同探索更多可能性！
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">查看我的作品</a>
            <a href="#contact" class="btn btn-outline">聯絡我</a>
          </div>
        </div>
        <div>
          <!-- 若有個人照片，可換成 &lt;img&gt; -->
          <div class="hero-photo">
            個人照片區<br />Anne
          </div>
        </div>
      </div>
    </section>

    <!-- 技能 Skills -->
    <section id="skills">
      <div class="section-inner">
        <h2 class="section-title">我的技能樹</h2>
        <p class="section-subtitle">從前端到後端，涵蓋設計與開發流程的完整能力</p>

        <div class="skills-grid">
          <!-- 前端 -->
          <div class="card">
            <div class="card-title">前端開發 Frontend</div>
            <div class="card-subtitle">打造直覺且具一致性的使用者介面</div>
            <div>
              <strong>框架 / 函式庫</strong>
              <div class="tag-list">
                <span class="tag">Vue.js</span>
                <span class="tag">Vue Router</span>
                <span class="tag">Vue CLI</span>
                <span class="tag">Nuxt.js</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>語言</strong>
              <div class="tag-list">
                <span class="tag">JavaScript</span>
                <span class="tag">TypeScript</span>
                <span class="tag">jQuery</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>標記與樣式</strong>
              <div class="tag-list">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">Scss</span>
                <span class="tag">Bootstrap</span>
                <span class="tag">Axios</span>
              </div>
            </div>
          </div>

          <!-- 後端 -->
          <div class="card">
            <div class="card-title">後端開發 Backend</div>
            <div class="card-subtitle">建立穩定且安全的系統核心</div>
            <div>
              <strong>語言 / 框架</strong>
              <div class="tag-list">
                <span class="tag">Node.js</span>
                <span class="tag">Express</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>資料庫</strong>
              <div class="tag-list">
                <span class="tag">MongoDB</span>
                <span class="tag">Mongoose</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>認證與安全</strong>
              <div class="tag-list">
                <span class="tag">JWT 驗證</span>
              </div>
            </div>
          </div>

          <!-- 工具 / 設計 -->
          <div class="card">
            <div class="card-title">開發工具與設計</div>
            <div class="card-subtitle">從設計稿到程式碼的完整流程</div>
            <div>
              <strong>版本控制</strong>
              <div class="tag-list">
                <span class="tag">Git</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>設計工具</strong>
              <div class="tag-list">
                <span class="tag">Figma</span>
                <span class="tag">Adobe Illustrator</span>
                <span class="tag">Adobe Photoshop</span>
              </div>
            </div>
            <div style="margin-top:10px;">
              <strong>除錯工具</strong>
              <div class="tag-list">
                <span class="tag">Chrome DevTool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 專案作品 Projects -->
    <section id="projects">
      <div class="section-inner">
        <h2 class="section-title">專案作品集</h2>
        <p class="section-subtitle">從團隊協作到個人專案，展現多元開發實戰經驗</p>

        <!-- 主要專案 -->
        <div class="projects-grid">
          <!-- 倍而兔募資平台 -->
          <div class="card">
            <div class="project-title">倍而兔募資平台 (Rabbit Funding Platform)</div>
            <div class="project-meta">群眾募資平台｜團隊協作專案</div>
            <p class="project-desc">
              一個功能完善的群眾募資平台，連結專案發起人與支持者，協助創意與夢想得以實現。
            </p>
            <ul class="project-list">
              <li>導入 SSR (Server-Side Rendering)，提升網站效能與 SEO 表現。</li>
              <li>整合 Google 登入功能，提供便捷的使用者體驗。</li>
              <li>串接藍新金流 (NewebPay) 支付系統，確保交易安全與流暢。</li>
              <li>跨職能團隊協作，展現良好溝通與協作能力。</li>
            </ul>
            <div class="project-tech">
              <strong>使用技術：</strong>Vue3、Nuxt.js、TypeScript、Node.js、Express、MongoDB、Google Login API、藍新金流 NewebPay
            </div>
            <div class="project-links">
              <!-- TODO: 替換實際連結 -->
              <a href="#" target="_blank">查看專案</a>
              <span>·</span>
              <a href="#" target="_blank">GitHub Repo</a>
            </div>
          </div>

          <!-- DTNS 每字美句 -->
          <div class="card">
            <div class="project-title">DTNS - 每字美句 (Daily Thought &amp; Note System)</div>
            <div class="project-meta">個人化筆記應用｜個人獨立專案</div>
            <p class="project-desc">
              一款個人化的每日思緒與筆記應用程式，協助使用者記錄靈感、管理日常、整理思緒。
            </p>
            <ul class="project-list">
              <li>支援 PWA，提供近似原生 App 的體驗，可離線使用。</li>
              <li>整合 Line 登入，降低註冊門檻，提升使用者轉換率。</li>
              <li>提供深色模式 (Dark Mode)，在不同環境下維持舒適閱讀體驗。</li>
              <li>從需求規劃、介面設計到前後端實作皆獨立完成。</li>
            </ul>
            <div class="project-tech">
              <strong>使用技術：</strong>Vue、VueMaterial UI、Node.js、MongoDB、PWA、Line Login API
            </div>
            <div class="project-links">
              <!-- TODO: 替換實際連結 -->
              <a href="#" target="_blank">查看專案</a>
              <span>·</span>
              <a href="#" target="_blank">GitHub Repo</a>
            </div>
          </div>
        </div>

        <!-- 其他作品 -->
        <h3 style="font-size:18px;font-weight:700;margin-bottom:10px;">其他作品</h3>
        <p class="section-subtitle" style="margin-top:-6px;margin-bottom:18px;">
          更多練習與產品雛形，展現對前端互動與使用者體驗的關注
        </p>

        <div class="other-projects">
          <div class="other-project">
            <div class="other-project-name">Stock.Find 股價查詢機器人</div>
            <div class="other-project-desc">
              能查詢即時股價資訊的機器人應用。
            </div>
            <!-- TODO: 替換實際連結 -->
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
          <div class="other-project">
            <div class="other-project-name">木門咖啡 (Wooden Door Coffee)</div>
            <div class="other-project-desc">
              模擬咖啡店網站，呈現菜單與店面資訊的品牌形象頁面。
            </div>
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
          <div class="other-project">
            <div class="other-project-name">番茄鐘 (Pomodoro Timer)</div>
            <div class="other-project-desc">
              經典番茄工作法計時器，協助提升專注力與工作節奏。
            </div>
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
          <div class="other-project">
            <div class="other-project-name">To Do List</div>
            <div class="other-project-desc">
              簡單實用的待辦清單工具，協助管理日常任務。
            </div>
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
          <div class="other-project">
            <div class="other-project-name">射氣球遊戲 (Balloon Shooting Game)</div>
            <div class="other-project-desc">
              互動式網頁小遊戲，考驗反應速度與操作手感。
            </div>
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
          <div class="other-project">
            <div class="other-project-name">打字練習遊戲 (Typing Practice Game)</div>
            <div class="other-project-desc">
              透過遊戲化方式提升打字速度與準確度。
            </div>
            <div style="margin-top:6px;"><a href="#" target="_blank">專案連結 / GitHub</a></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡我 Contact -->
    <section id="contact">
      <div class="section-inner">
        <h2 class="section-title">聯絡我</h2>
        <p class="section-subtitle">
          如果您對我的作品感興趣，或有任何合作機會，歡迎隨時與我聯繫。
        </p>

        <div class="card contact-card">
          <p style="font-size:14px;margin-bottom:10px;">
            我樂於參與具有挑戰性的專案，也期待在團隊中持續成長、分享與學習。
          </p>
          <ul class="contact-list">
            <!-- TODO: 將以下換成實際資訊 -->
            <li>
              <span class="contact-label">電子郵件：</span>
              <a href="mailto:anne.developer@email.com">
                anne.developer@email.com
              </a>
            </li>
            <li>
              <span class="contact-label">LinkedIn：</span>
              <a href="https://www.linkedin.com/">linkedin.com/in/anne</a>
            </li>
            <li>
              <span class="contact-label">GitHub：</span>
              <a href="">git</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      &copy; 2024 詹琇安 (Anne). 版權所有.
    </footer>
  </body>
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
  --primary: #4a90e2;
  --primary-dark: #2f6bb5;
  --bg: #f5f7fb;
  --text: #222;
  --muted: #666;
  --card-bg: #ffffff;
  --border: #e0e4ef;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: var(--primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Layout */
header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-weight: 700;
  font-size: 18px;
}

.brand span {
  color: var(--primary);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: 14px;
}

nav a {
  color: var(--muted);
  font-weight: 500;
}

nav a:hover {
  color: var(--primary);
}

/* Hero */
.hero {
  padding: 80px 16px 60px;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 40px;
  align-items: center;
}

.hero-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 8px;
}

.hero-subtitle {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.hero-text {
  color: var(--muted);
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.btn-outline {
  background: transparent;
  color: var(--primary-dark);
  border-color: var(--primary);
}

.btn-outline:hover {
  background: rgba(74, 144, 226, 0.08);
}

.hero-photo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #d9e2ff;
  border: 6px solid #fff;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 20px;
}

/* Sections */
section {
  padding: 60px 16px;
}

section:nth-of-type(even) {
  background: #ffffff;
}

.section-inner {
  max-width: 960px;
  margin: 0 auto;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.section-subtitle {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 24px;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card {
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 18px 16px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}

.card-subtitle {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 10px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tag {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #f2f5ff;
  color: #364160;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.project-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.project-meta {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 10px;
}

.project-desc {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 10px;
}

.project-list {
  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 10px;
}

.project-list li {
  margin-bottom: 4px;
}

.project-tech {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 10px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
}

.other-projects {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  font-size: 13px;
}

.other-project {
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px dashed var(--border);
  padding: 10px 10px 12px;
}

.other-project-name {
  font-weight: 600;
  margin-bottom: 4px;
}

.other-project-desc {
  color: var(--muted);
  font-size: 12px;
}

/* Contact */
.contact-card {
  max-width: 520px;
}

.contact-list {
  list-style: none;
  margin-top: 12px;
  font-size: 14px;
}

.contact-list li {
  margin-bottom: 6px;
}

.contact-label {
  font-weight: 600;
  margin-right: 4px;
}

footer {
  border-top: 1px solid var(--border);
  padding: 16px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
  background: #fff;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .other-projects {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  nav ul {
    gap: 12px;
    font-size: 13px;
  }
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .other-projects {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 70px;
  }

  .hero-title {
    font-size: 30px;
  }
}
</style>
