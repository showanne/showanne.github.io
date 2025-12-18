export type ProjectType = 'Dashboard' | 'Official Site' | 'Web App'
export type TechTag = 'Vue 3' | 'ECharts' | 'React' | 'GSAP' | 'Next.js' | 'Tailwind' | 'Nuxt.js' | 'TypeScript' | 'SCSS' | 'Node.js' | 'LINE API' | 'Firebase'

export type Project = {
  id: string
  title: string
  type: ProjectType
  subtitle: string
  description: string
  tags: TechTag[]
  cover: string
  links?: {
    demo?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: 'wistron-its-dashboard',
    type: 'Dashboard',
    subtitle: 'Dashboard / Nuxt.js',
    title: '緯創 ITSM 數據監控平台',
    description: '為緯創 ITSM 團隊打造的數據監控儀表板，整合多個內部系統的數據，提供即時的監控與分析功能。',
    tags: ['Nuxt.js', 'TypeScript', 'SCSS', 'ECharts'],
    cover: 'https://api.felo.ai/images/s/GEHR5zh3',
    links: {
      demo: '#', // 替換為實際連結
    },
  },
  {
    id: 'line-bot-app',
    type: 'Web App',
    subtitle: 'Web App / Node.js',
    title: 'LINE Bot 天氣/記帳/GPT 應用',
    description: '結合 LINE API、OpenAI GPT-3.5，以及 Firebase Realtime Database，打造具備天氣查詢、記帳、AI 對話等多功能的 LINE 聊天機器人。',
    tags: ['Node.js', 'LINE API', 'Firebase'],
    cover: 'https://api.felo.ai/images/s/2KDiWJMHwF',
    links: {
      github: 'https://github.com/annjhan/line-bot-chat',
    },
  },
  {
    id: 'portfolio-v1',
    type: 'Official Site',
    subtitle: 'Portfolio / Vue 3',
    title: '個人作品集網站',
    description: '從設計到開發一手包辦的個人作品集網站，採用 Vue 3 與 Vite，並透過 GSAP 實現精緻的互動動畫。',
    tags: ['Vue 3', 'GSAP'],
    cover: 'https://api.felo.ai/images/s/4D7nu7oyfU',
    links: {
      demo: 'https://annjhan.github.io/Portfolio-2022/',
      github: 'https://github.com/annjhan/Portfolio-2022',
    },
  },
  {
    id: 'react-todo-list',
    type: 'Web App',
    subtitle: 'Web App / React',
    title: 'React Todo List',
    description: '使用 React 搭配 TypeScript 和 SCSS 模組化開發的待辦事項應用。',
    tags: ['React', 'TypeScript', 'SCSS'],
    cover: 'https://via.placeholder.com/400x225.png/121212/8A2BE2?text=React+Todo', // 建議替換為實際截圖
    links: {
      demo: 'https://annjhan.github.io/react-todolist/',
    },
  },
  {
    id: 'hex-school-final',
    type: 'Official Site',
    subtitle: 'Official Site / Vue 3',
    title: '六角學院最終專案',
    description: '參與六角學院「Vue 3 實戰」課程的畢業專案，主題為藝術家電商平台。',
    tags: ['Vue 3'],
    cover: 'https://via.placeholder.com/400x225.png/121212/8A2BE2?text=HexSchool', // 建議替換為實際截圖
    links: {
      demo: 'https://annjhan.github.io/hexschool-vue-final/',
    },
  },
]

export const typeFilters: Array<{ key: 'all' | ProjectType; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'Dashboard', label: 'Dashboard' },
  { key: 'Official Site', label: 'Official Site' },
  { key: 'Web App', label: 'Web App' },
]

export const tagFilters: Array<{ key: 'all' | TechTag; label: string }> = [
  { key: 'all', label: 'All Tech' },
  { key: 'Vue 3', label: 'Vue 3' },
  { key: 'ECharts', label: 'ECharts' },
  { key: 'React', label: 'React' },
  { key: 'GSAP', label: 'GSAP' },
  { key: 'Next.js', label: 'Next.js' },
  { key: 'Tailwind', label: 'Tailwind' },
  { key: 'Nuxt.js', label: 'Nuxt.js' },
  { key: 'TypeScript', label: 'TypeScript' },
  { key: 'SCSS', label: 'SCSS' },
  { key: 'Node.js', label: 'Node.js' },
  { key: 'LINE API', label: 'LINE API' },
  { key: 'Firebase', label: 'Firebase' },
]
