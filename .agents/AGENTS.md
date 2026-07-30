# Antigravity AGY Project Configuration — showanne.github.io

本專案為 **詹琇安 Anne 的個人作品集網站 (Anne's Portfolio)**。

---

## 🛠️ 技術棧概觀 (Tech Stack Overview)
- **框架 (Framework)**: Nuxt 3 (`nuxt ^3.12.2`) + Vue 3 (`vue ^3.4.27`)
- **語言 (Language)**: TypeScript (`typescript ^5.4.5`)
- **樣式 (Styling)**: Tailwind CSS (`@nuxtjs/tailwindcss ^6.12.0`) + FontAwesome Icons (via CDN)
- **後端 / API (Backend)**: Nuxt Nitro Server API (`server/api/contact.post.ts` 搭配 `nodemailer`)
- **部署目標 (Deployment)**: GitHub Pages (`showanne.github.io`)

---

## 📁 專案架構指南 (Project Structure)
- `app.vue`: 根應用組件，包覆 `<NuxtLayout>` 與 `<NuxtPage>`
- `pages/`: 頁面路由
  - `index.vue`: 首頁（整合 Hero, About, Projects, Skills, Contact 區塊）
  - `projects.vue`: 作品集專案展示頁面
  - `contact.vue`: 聯絡頁面
- `components/`: 可複用 UI 組件
  - `AppHeader.vue` / `AppFooter.vue`: 頂部導航與頁尾
  - `HeroSection.vue`, `AboutSection.vue`, `ProjectsSection.vue`, `SkillsSection.vue`, `ContactSection.vue`
- `server/api/`: Nitro 後端 API 路由
  - `contact.post.ts`: 聯絡表單電子郵件傳送 logic
- `nuxt.config.ts`: Nuxt 系統設定、SEO Meta 標籤與 Runtime 變數配置

---

## 🚀 常用命令 (Commands)
- **本地開發 (Dev Server)**: `npm run dev`
- **Nuxt 預備與型別生成 (Nuxt Prepare)**: `npx nuxt prepare` 或 `npm run postinstall`
- **生成靜態頁面 (Static Generation)**: `npm run generate`
- **正式構建 (Production Build)**: `npm run build`
- **構建預覽 (Preview)**: `npm run preview`

---

## 🔐 環境變數 (Environment Variables)
聯絡表單測試需於 `.env` 中設定（參考 `.env.sample`）：
- `GMAIL_USER`: Gmail 寄件者電子信箱
- `GMAIL_APP_PASSWORD`: Gmail 應用程式專用密碼

---

## 📐 AI Agent 開發規範 (Agent Guidelines)
1. **組件化結構**: 保持 UI 元件模組化，置於 `components/` 目錄。
2. **樣式一致性**: 使用 Tailwind CSS，支援響應式 (Mobile-first RWD) 並且符合個人品牌色調。
3. **SEO 與無障礙**: 保持 Meta 資訊與 HTML 語意化。
4. **型別安全**: 遵循 Vue 3 Composition API `<script setup lang="ts">` 與 TypeScript 型別定義。
