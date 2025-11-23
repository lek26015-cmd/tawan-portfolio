import React, { useState, useEffect } from 'react';
import { Play, X, Mail, Phone, MapPin, Download, ChevronRight, Facebook, Linkedin, Video, Layers, PenTool, Monitor, Instagram, Smartphone, ExternalLink, AlertCircle } from 'lucide-react';
import profileImage from './assets/profile.jpg'; 



const portfolioItems = [
  {
    id: 1,
    title: "ทดลองขับ ISUZU 2.2 Ddi MAXFORCE",
    category: "Commercial",
    description: "ถ่ายทำวิดีโอ ตัดต่อ และสร้างโมชั่นกราฟิก",
    thumbnail: "https://i.ytimg.com/vi/eTqerMGfGvA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLByWS7NLhoN6aIn6cNCMj1JgW28Jw", 
    videoUrl: "https://www.youtube.com/embed/eTqerMGfGvA?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eTqerMGfGvA",
    isVertical: false
  },
  {
    id: 2,
    title: "สเปคใหม่ ขุมพลังใหม่ 𝗜𝗦𝗨𝗭𝗨 𝟮.𝟮 𝗗𝗱𝗶 𝗠𝗔𝗫𝗙𝗢𝗥𝗖𝗘",
    category: "Event / Review",
    description: "วางสคริปต์และสตอรี่บอร์ด ถ่ายทำวิดีโอ ตัดต่อ และสร้างโมชั่นกราฟิก",
    thumbnail: "https://i.ytimg.com/vi/41bCE7XCqyE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYw0NqlOVOJDHbqHhMdXWEcESv3w",
    videoUrl: "https://www.youtube.com/embed/41bCE7XCqyE?playsinline=1&rel=0",
    originalLink: "https://youtu.be/41bCE7XCqyE?si=2fcY7mJH6bn-jdXZ",
    isVertical: false
  },
  {
    id: 3,
    title: "MV อีซูซุคู่ไทย Ver. ISUZU EASTERN",
    category: "Music Video",
    description: "MV เพลงอีซูซุคู่ไทย - วางสคริปต์, Storyboard, ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://img.youtube.com/vi/3TSVHyMHIGk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/3TSVHyMHIGk?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=3TSVHyMHIGk",
    isVertical: false
  },
  {
    id: 4,
    title: "อีซูซุเกียร์ออโต้ใครๆก็ขับได้",
    category: "Interview",
    description: "สัมภาษณ์ผู้ใช้งานจริง - วางสคริปต์, ถ่ายทำ, ตัดต่อ, Motion Graphic",
    thumbnail: "https://i.ytimg.com/vi/mI1O-gnSeAw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mI1O-gnSeAw?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=mI1O-gnSeAw",
    isVertical: false
  },
  {
    id: 5,
    title: "Chatpetch Park Condo",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ, Motion Graphic",
    thumbnail: "src/assets/Chatpetch Park Condo.jpg",
    videoUrl: "https://www.youtube.com/embed/HQWp9cOmqyk?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=HQWp9cOmqyk",
    isVertical: false
  },
  {
    id: 6,
    title: "𝟴 เคล็ดลับง่ายๆ ที่ช่วยเสริมโหงวเฮ้งตรุษจีน",
    category: "Interview",
    description: "ถ่ายทำ, ตัดต่อ, Motion Graphic",
    thumbnail: "src/assets/ตรุษจีน.png",
    videoUrl: "https://www.youtube.com/embed/VMIbI6bOE7M?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=VMIbI6bOE7M",
    isVertical: false
  },
  {
    id: 7,
    title: "C Cash",
    category: "Commercial",
    description: "วางสคริปต์, ถ่ายทำ, ตัดต่อ, Motion Graphic",
    thumbnail: "src/assets/ ซีแคช-C CASH.jpg",
    videoUrl: "https://www.youtube.com/embed/3R2wfMKuFsE?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=3R2wfMKuFsE",
    isVertical: false
  },
  {
    id: 8,
    title: "KTV Presentation",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ, Motion Graphic",
    thumbnail: "src/assets/KTV Presentation.jpg",
    videoUrl: "https://www.youtube.com/embed/N56Tqwr9WpU?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=N56Tqwr9WpU",
    isVertical: false
  },
   {
    id: 9,
    title: "มัวชิมริมทาง Special EP.1 - เฌอ (Chr.dining)",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://i.ytimg.com/vi/eKqgkr9aytY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/eKqgkr9aytY?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eKqgkr9aytY",
    isVertical: false
  },
   {
    id: 10,
    title: "มัวชิมริมทาง Special EP.1 - เฌอ (Chr.dining)",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://i.ytimg.com/vi/eKqgkr9aytY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/eKqgkr9aytY?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eKqgkr9aytY",
    isVertical: false
  },
   {
    id: 11,
    title: "มัวชิมริมทาง Special EP.1 - เฌอ (Chr.dining)",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://i.ytimg.com/vi/eKqgkr9aytY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/eKqgkr9aytY?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eKqgkr9aytY",
    isVertical: false
  },
   {
    id: 12,
    title: "มัวชิมริมทาง Special EP.1 - เฌอ (Chr.dining)",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://i.ytimg.com/vi/eKqgkr9aytY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/eKqgkr9aytY?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eKqgkr9aytY",
    isVertical: false
  },
   {
    id: 13,
    title: "มัวชิมริมทาง Special EP.1 - เฌอ (Chr.dining)",
    category: "Commercial",
    description: "ถ่ายทำ, ตัดต่อ",
    thumbnail: "https://i.ytimg.com/vi/eKqgkr9aytY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/eKqgkr9aytY?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/watch?v=eKqgkr9aytY",
    isVertical: false
  }
];

// --- ข้อมูล Shorts / TikTok ---
const shortItems = [
  {
    id: 101,
    title: "NEW! ISUZU X-Series 2.2 Ddi",
    category: "Shorts",
    description: "หัวใจเต้นคร่อมจังหวะ… 2 HOT 2 HANDLE",
    thumbnail: "https://img.youtube.com/vi/obkonHpJ20U/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/obkonHpJ20U?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/obkonHpJ20U",
    isVertical: true
  },
  {
    id: 102,
    title: "EURO 5 MAX รุ่น FRR (ตัวอย่าง)",
    category: "Shorts",
    description: "นำเสนอจุดเด่นรถบรรทุก ISUZU",
    thumbnail: "https://img.youtube.com/vi/P94MaAVSuRA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/P94MaAVSuRA?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/P94MaAVSuRA",
    isVertical: true
  },
  {
    id: 103,
    title: "เคลมด่วน! ซ่อมไว! รอรับได้เลย",
    category: "Shorts",
    description: "แคมเปญเคลมประกันภัยเสร็จใน 1 วัน",
    thumbnail: "https://img.youtube.com/vi/KxO_S86iQDE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KxO_S86iQDE?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/KxO_S86iQDE",
    isVertical: true
  },
  {
    id: 104,
    title: "ลองแล้วต้องบอกต่อ V-Cross 4x4",
    category: "Shorts",
    description: "สัมภาษณ์ประสบการณ์จริงในการขับขี่",
    thumbnail: "https://img.youtube.com/vi/9Nrejfa8a4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9Nrejfa8a4I?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/9Nrejfa8a4I",
    isVertical: true
  },
  {
    id: 105,
    title: "ลองแล้วต้องบอกต่อ V-Cross 4x4",
    category: "Shorts",
    description: "สัมภาษณ์ประสบการณ์จริงในการขับขี่",
    thumbnail: "https://img.youtube.com/vi/9Nrejfa8a4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9Nrejfa8a4I?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/9Nrejfa8a4I",
    isVertical: true
  },
  {
    id: 106,
    title: "ลองแล้วต้องบอกต่อ V-Cross 4x4",
    category: "Shorts",
    description: "สัมภาษณ์ประสบการณ์จริงในการขับขี่",
    thumbnail: "https://img.youtube.com/vi/9Nrejfa8a4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9Nrejfa8a4I?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/9Nrejfa8a4I",
    isVertical: true
  },
  {
    id: 107,
    title: "ลองแล้วต้องบอกต่อ V-Cross 4x4",
    category: "Shorts",
    description: "สัมภาษณ์ประสบการณ์จริงในการขับขี่",
    thumbnail: "https://img.youtube.com/vi/9Nrejfa8a4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9Nrejfa8a4I?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/9Nrejfa8a4I",
    isVertical: true
  },
  {
    id: 108,
    title: "ลองแล้วต้องบอกต่อ V-Cross 4x4",
    category: "Shorts",
    description: "สัมภาษณ์ประสบการณ์จริงในการขับขี่",
    thumbnail: "https://img.youtube.com/vi/9Nrejfa8a4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9Nrejfa8a4I?playsinline=1&rel=0",
    originalLink: "https://www.youtube.com/shorts/9Nrejfa8a4I",
    isVertical: true
  },
];

const experience = [
  {
    id: 1,
    role: "Video Editor & Videographer",
    company: "บริษัท อีซูซุตะวันออกชลบุรี จำกัด",
    period: "พ.ค. 2566 - ปัจจุบัน",
    details: "ถ่ายทำและจัดแสงวิดีโอ, ตัดต่อ, สร้าง Motion Graphic, จัดทำ Content Marketing บนแพลตฟอร์มออนไลน์"
  },
  {
    id: 2,
    role: "Senior Graphic Designer",
    company: "ห้างหุ้นส่วนจำกัด ขอนแก่นอุปกรณ์การแพทย์",
    period: "ก.ค. 2565 - มิ.ย. 2566",
    details: "ถ่ายภาพสินค้า, ตัดต่อและตกแต่งภาพเพื่อการโปรโมทสินค้าผ่านช่องทาง E-Commerce"
  },
  {
    id: 3,
    role: "Video Editor & Videographer",
    company: "บริษัท เคทีวีออนไลน์ จำกัด (Production House)",
    period: "ม.ค. 2564 - มิ.ย. 2565",
    details: "เขียนสคริปต์, ถ่ายทำ, ตัดต่อรายการโฆษณาเพื่อออกอากาศผ่านเคเบิลทีวี"
  },
  {
    id: 4,
    role: "Graphic Designer",
    company: "บริษัท โตโยต้าขอนแก่น จำกัด",
    period: "ต.ค. 2563 - ธ.ค. 2563",
    details: "ออกแบบกราฟิกเพื่อใช้ในการโฆษณาออนไลน์"
  }
];

const skills = [
  { name: "Premiere Pro", level: 95, icon: <Video size={20} /> },
  { name: "After Effects", level: 85, icon: <Layers size={20} /> },
  { name: "Photoshop", level: 90, icon: <PenTool size={20} /> },
  { name: "Illustrator", level: 80, icon: <PenTool size={20} /> },
  { name: "Canva", level: 90, icon: <Monitor size={20} /> },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          TAWAN<span className="text-red-600">.PROTFOLIO</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-300">
          {['About', 'Experience', 'Portfolio', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-red-500 transition-colors uppercase tracking-widest">
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Layers className="rotate-90" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col space-y-4 md:hidden">
          {['About', 'Experience', 'Portfolio', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-zinc-300 hover:text-red-500 uppercase tracking-widest">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-red-600/20 text-red-500 rounded-full text-xs font-bold tracking-widest uppercase border border-red-600/30">
            Video Editor & Graphic Designer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            TAWAN <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">UYE-LAR</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
            สวัสดีครับ ผมชื่อตะวัน (เล็ก) อายุ 28 ปี มีประสบการณ์กว่า 5 ปี ในด้านการตัดต่อวิดีโอ ถ่ายทำ และออกแบบกราฟิก เชี่ยวชาญโปรแกรมตระกูล Adobe และพร้อมสร้างสรรค์ผลงานคุณภาพ
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
             <button onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all flex items-center shadow-lg shadow-red-600/20">
              <Play size={18} className="mr-2 fill-current" /> ดูผลงาน
            </button>
            
          </div>

          <div className="pt-8 flex space-x-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-red-600 transition-all border border-zinc-800 group-hover:border-red-500">
                  {skill.icon}
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent rounded-[2rem] rotate-6 opacity-50"></div>
            <div className="absolute inset-0 bg-zinc-800 rounded-[2rem] -rotate-3 overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
             
              <img 
                src={profileImage} 
                alt="Tawan Uye-lar" 
                className="w-full h-full object-cover  transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ประสบการณ์ทำงาน</h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>
            <p className="text-zinc-400">
              เส้นทางอาชีพกว่า 5 ปี จาก Freelance สู่มืออาชีพในองค์กรชั้นนำ พัฒนาทักษะอย่างต่อเนื่องทั้งด้าน Production และ Graphic Design
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-8 pl-4 border-l-2 border-zinc-800">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:border-red-500 group-hover:bg-red-600 transition-colors"></div>
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all shadow-lg">
                  <span className="text-red-500 text-sm font-bold tracking-wider mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-zinc-400 mb-3 text-sm">{exp.company}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onVideoSelect }) => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Commercial", "Music Video", "Interview", "Vlog / Travel"];

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(filter) || (filter === "Graphic" && item.category === "Info Graphic"));

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">ผลงานที่ผ่านมา</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
             ผลงาน Video Production, Graphic Design และ Content Marketing
          </p>
        </div>

        {/* --- Main Portfolio (Horizontal) --- */}
        <div className="mb-24">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Video className="mr-2 text-red-500" /> Main Productions (แนวนอน)
            </h3>
            
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-red-600 text-white' 
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
                <div 
                key={item.id} 
                className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer shadow-lg"
                onClick={() => onVideoSelect(item)}
                >
                <div className="relative aspect-video overflow-hidden bg-zinc-800">
                    <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-red-600/20">
                        <Play fill="currentColor" className="ml-1" />
                    </div>
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-bold text-white">
                    {item.category}
                    </div>
                </div>
                
                <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* --- Shorts / TikTok Section (Vertical) --- */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Smartphone className="mr-2 text-red-500" /> Shorts & TikTok Style (แนวตั้ง)
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {shortItems.map((item) => (
                    <div 
                        key={item.id}
                        className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all cursor-pointer shadow-lg aspect-[9/16]"
                        onClick={() => onVideoSelect(item)}
                    >
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-600/40">
                                <Play fill="currentColor" size={24} className="ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="inline-block px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded mb-2">
                                {item.category}
                            </span>
                            <h4 className="text-white font-bold text-sm line-clamp-2 leading-tight drop-shadow-md">
                                {item.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-700/50 shadow-2xl relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">ร่วมงานกับผม</h2>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                        หากคุณกำลังมองหา Video Editor หรือ Graphic Designer ที่มีความรับผิดชอบ ส่งงานตรงเวลา และพร้อมเรียนรู้สิ่งใหม่ๆ ติดต่อผมได้ตามช่องทางด้านล่างนี้ครับ
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center text-zinc-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 bg-zinc-700/50 rounded-lg flex items-center justify-center mr-4 text-red-500">
                                <Mail size={20} />
                            </div>
                            tawan.l@windowslive.com
                        </div>
                        <div className="flex items-center text-zinc-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 bg-zinc-700/50 rounded-lg flex items-center justify-center mr-4 text-red-500">
                                <Phone size={20} />
                            </div>
                            097-227-5494 (ตะวัน)
                        </div>
                        <div className="flex items-center text-zinc-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 bg-zinc-700/50 rounded-lg flex items-center justify-center mr-4 text-red-500">
                                <div className="font-bold text-sm">LINE</div>
                            </div>
                            lektawan_work
                        </div>
                         
                    </div>
                </div>

                
            </div>
        </div>
      </div>
    </section>
  );
};

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className={`relative w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col max-h-[95vh] ${video.isVertical ? 'max-w-md' : 'max-w-5xl'}`} 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900">
            <h3 className="text-white font-medium truncate pr-4">{video.title}</h3>
            <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>
        </div>
        
        {/* Dynamic Aspect Ratio Container */}
        <div className={`relative bg-black ${video.isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
          <iframe 
            src={video.videoUrl} 
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-6 overflow-y-auto">
            {/* --- Fallback Button for Copyrighted Videos --- */}
            
                
                <a 
                    href={video.originalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded transition-colors shadow-lg"
                >
                    <ExternalLink size={18} className="mr-2" /> คลิกเพื่อดูคลิปต้นฉบับบน YouTube
                </a>
           

            <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-red-600/20 text-red-500 text-xs font-bold rounded uppercase">
                    {video.category}
                </span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
                {video.description}
            </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
    <footer className="bg-zinc-950 py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2025 Tawan Uye-lar. All rights reserved.</p>
    </footer>
)

// --- Main App Component ---

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedVideo]);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Portfolio onVideoSelect={setSelectedVideo} />
      <Contact />
      <Footer />
      
      {/* Video Modal Overlay */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
};

export default App;