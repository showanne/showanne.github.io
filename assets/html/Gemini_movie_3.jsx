import React, { useState, useEffect } from 'react';
import {
Github,
ExternalLink,
Code2,
Terminal,
Palette,
Cpu,
ChevronRight,
Menu,
X,
Smartphone,
Globe,
Database
} from 'lucide-react';

// 設定核心顏色主題
const colors = {
purple: '#2D0E4B', // 深邃紫
gold: '#C5A059', // 香檳金
pearl: '#F8F5F1', // 珍珠白
};

const App = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

// 滾動監聽，改變導航欄狀態
useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
{ name: '關於我', href: '#about' },
{ name: '技術棧', href: '#skills' },
{ name: '作品專案', href: '#projects' },
{ name: '影響力', href: '#impact' },
];

const projects = [
{
title: '倍而兔 Antty 募資平台',
desc: '技術負責人，主導從資料庫規劃到 CI/CD 部署的全流程。',
tech: ['Nuxt 3', 'TypeScript', 'Node.js', 'MongoDB', '藍新金流'],
image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
link: '#'
},
{
title: 'DTNS 文字分享平台',
desc: '紀錄文字的溫度，支援 PWA 離線瀏覽與多種社群登入。',
tech: ['Vue 3', 'Vue Material', 'Express', 'Line Login'],
image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
link: '#'
},
{
title: 'Stock Find 股票機器人',
desc: '即時串接證交所 API，運用 Line Flex Message 視覺化股市數據。',
tech: ['Python', 'Line Bot SDK', 'Heroku', 'Financial API'],
image: 'https://images.unsplash.com/photo-1611974714024-46202e006c2a?auto=format&fit=crop&q=80&w=800',
link: '#'
}
];

return (
<div className="min-h-screen font-sans" style={{ backgroundColor: colors.pearl, color: '#1A1A1A' }}>

  {/* 導航欄 Navigation */}
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
    ? 'bg-white/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6' }`}>
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.purple
          }}>
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className={`font-bold tracking-tighter text-2xl ${scrolled ? 'text-[#2D0E4B]' : 'text-[#2D0E4B]' }`}
          style={{ fontFamily: 'Playfair Display, serif' }}>
          ANNE CHAN
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
        <a key={link.name} href={link.href} className="text-sm font-medium hover:scale-105 transition-transform"
          style={{ color: colors.purple }}>
          {link.name}
        </a>
        ))}
      </div>

      <button className="md:hidden text-[#2D0E4B]" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ?
        <X size={28} /> :
        <Menu size={28} />}
      </button>
    </div>
  </nav>

  {/* Hero Section */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ backgroundColor: colors.gold }}></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ backgroundColor: colors.purple }}></div>
    </div>

    <div className="relative z-10 text-center px-6">
      <h2 className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-70" style={{ color: colors.purple }}>
        Full-Stack Engineer</h2>
      <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' ,
        color: colors.purple }}>
        許我一個<br />
        <span style={{ color: colors.gold }}>耀眼</span>的未來
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        我是詹琇安。具備敏銳設計美感與技術實戰力，<br />
        致力於將複雜的需求轉化為優雅的數位體驗。
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a href="#projects"
          className="px-10 py-4 rounded-full text-white font-bold transition-all hover:shadow-2xl hover:-translate-y-1"
          style={{ backgroundColor: colors.purple }}>
          查看作品
        </a>
        <a href="https://github.com/showanne"
          className="flex items-center gap-2 px-10 py-4 rounded-full border-2 font-bold transition-all hover:bg-gray-100"
          style={{ borderColor: colors.gold, color: colors.purple }}>
          <Github size={20} /> GitHub
        </a>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-rows-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4" style={{
            borderColor: colors.gold }}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Anne Chan Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl -z-10" style={{ backgroundColor:
            colors.purple }}></div>
        </div>
        <div className="md:col-span-7">
          <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' , color: colors.purple
            }}>職涯積累與專業態度</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            擁有四年開發經驗，曾任職於城邦媒體與國泰金控。我不僅僅是一位撰寫代碼的工程師，更是一個具備產品思維的開發者。我擅長在前端性能優化與後端架構穩健性之間取得完美平衡。
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: colors.pearl, borderLeftColor:
              colors.gold }}>
              <h4 className="font-bold mb-1" style={{ color: colors.purple }}>跨團隊協作</h4>
              <p className="text-sm text-gray-500">串接 C#, Java, PHP 各類後端</p>
            </div>
            <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: colors.pearl, borderLeftColor:
              colors.gold }}>
              <h4 className="font-bold mb-1" style={{ color: colors.purple }}>優化專家</h4>
              <p className="text-sm text-gray-500">API 效能提升 75% 實績</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Skills Section */}
  <section id="skills" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: colors.purple }}>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif'
          }}>技術精華</h2>
        <div className="w-20 h-1 mx-auto" style={{ backgroundColor: colors.gold }}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
        { icon:
        <Terminal className="text-white" />, title: '前端開發', list: ['Vue 3 / Nuxt 3', 'TypeScript', 'Tailwind CSS',
        'Pinia'] },
        { icon:
        <Database className="text-white" />, title: '後端技術', list: ['Node.js / Express', 'MongoDB / Mongoose', 'RESTful
        API Design', 'JWT Auth'] },
        { icon:
        <Cpu className="text-white" />, title: '維運工具', list: ['Docker / AWS', 'CI/CD (GitHub Actions)', 'Git / GitLab',
        'Figma / Adobe XD'] },
        ].map((skill, idx) => (
        <div key={idx}
          className="group p-10 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner" style={{
            backgroundColor: 'rgba(197, 160, 89, 0.2)' }}>
            {skill.icon}
          </div>
          <h3 className="text-2xl font-bold mb-6 text-white">{skill.title}</h3>
          <ul className="space-y-3">
            {skill.list.map(item => (
            <li key={item} className="flex items-center text-gray-300">
              <ChevronRight size={16} className="mr-2" style={{ color: colors.gold }} /> {item}
            </li>
            ))}
          </ul>
        </div>
        ))}
      </div>
    </div>
  </section>

  {/* Projects Section */}
  <section id="projects" className="py-24 px-6 bg-[#FDFDFD]">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' , color:
            colors.purple }}>精選專案</h2>
          <p className="text-gray-500">實踐與創意的交匯點</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 font-bold hover:underline" style={{ color: colors.gold
          }}>
          查看更多作品
          <ChevronRight size={20} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
        <div key={idx}
          className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div className="relative overflow-hidden aspect-video">
            <img src={project.image} alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <button className="flex items-center gap-2 text-white font-bold bg-[#C5A059] px-4 py-2 rounded-lg">
                <ExternalLink size={16} /> 瀏覽網站
              </button>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#C5A059] transition-colors">{project.title}</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                {t}
              </span>
              ))}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>

  {/* Impact Section */}
  <section id="impact" className="py-24 px-6 bg-white border-y border-gray-100">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' , color: colors.purple }}>
        創造的產出價值</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center">
          <span className="text-7xl font-bold mb-2" style={{ color: colors.gold }}>75%</span>
          <p className="text-gray-500 uppercase tracking-widest text-sm">API 響應效能提升</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-7xl font-bold mb-2" style={{ color: colors.gold }}>0%</span>
          <p className="text-gray-500 uppercase tracking-widest text-sm">重構後重大錯誤率</p>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-16 px-6 text-center" style={{ backgroundColor: colors.pearl }}>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' , color: colors.purple }}>
        期待與您共同創造耀眼瞬間</h2>
      <div className="flex justify-center gap-8 mb-12">
        <a href="#"
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all"
          style={{ color: colors.purple }}>
          <Github size={20} />
        </a>
        <a href="#"
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all"
          style={{ color: colors.purple }}>
          <Globe size={20} />
        </a>
        <a href="#"
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all"
          style={{ color: colors.purple }}>
          <Smartphone size={20} />
        </a>
      </div>
      <p className="text-gray-400 text-sm">© 2025 ANNE CHAN. All Rights Reserved.</p>
    </div>
  </footer>

  {/* Mobile Menu */}
  <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ${isMenuOpen ? 'translate-x-0'
    : 'translate-x-full' }`}>
    <div className="flex justify-end p-6">
      <button onClick={()=> setIsMenuOpen(false)} style={{ color: colors.purple }}>
        <X size={32} />
      </button>
    </div>
    <div className="flex flex-col items-center justify-center space-y-8 h-full">
      {navLinks.map((link) => (
      <a key={link.name} href={link.href} onClick={()=> setIsMenuOpen(false)}
        className="text-3xl font-bold"
        style={{ color: colors.purple, fontFamily: 'Playfair Display, serif' }}
        >
        {link.name}
      </a>
      ))}
    </div>
  </div>
</div>
);
};

export default App;
