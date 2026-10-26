'use client';

import React, { useState } from 'react';

type PostItem = {
  url: string;
  embedUrl: string; // Menggunakan URL embed berformat /embed/captioned/
};

type VideoProject = {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  thumbnail?: string;
  description: string;
  orientation?: 'horizontal' | 'vertical'; // Opsional agar kompatibel dengan data lama
  aspectRatio?: 'portrait' | 'landscape'; // Opsional
};

type PreviewData = {
  title: string;
  instagramUrl?: string;
  username?: string;
  displayName?: string;
  category?: string;
  postsCount?: string;
  followersCount?: string;
  followingCount?: string;
  bio?: string[];
  website?: string;
  avatarImg?: string;
  posts?: PostItem[];
  img?: string;
  mediaList?: string[];
  videoProjects?: VideoProject[];
};

// --- DATA VIDEO EDITING --- //
const videoEditingProjects: VideoProject[] = [
  {
    id: 1,
    title: "Commercial & Brand Campaign",
    category: "Short-form Content / Reels",
    videoUrl: "/portofolio/video-editing-1.mp4",
    description: "Penyuntingan video kreatif untuk meningkatkan engagement merek dengan ritme yang dinamis."
  },
  {
    id: 2,
    title: "Social Media Promotional Reel",
    category: "Promotional Content",
    videoUrl: "/portofolio/video-editing-2.mp4",
    description: "Eksekusi pemotongan video bertempo cepat, transisi halus, dan penyelarasan audio."
  }
];

// --- KOMPONEN PENDUKUNG --- //
function SmartMediaDisplay({ src, title, alt }: { src: string; title: string; alt?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full aspect-square rounded-xl border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center p-2 text-xs text-stone-600 break-all font-sans text-center">
        Image/Video not found:<br/>{src}
      </div>
    );
  }

  if (src.endsWith('.mp4')) {
    return (
      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-full aspect-square object-cover rounded-xl shadow-sm border border-stone-200 bg-stone-900 pointer-events-none"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || title}
      className="w-full h-full aspect-square object-cover rounded-xl shadow-sm border border-stone-100 hover:scale-[1.03] transition-transform duration-200 pointer-events-none"
      onError={() => setHasError(true)}
    />
  );
}

function InstagramAvatar({ username, displayName, avatarImg }: { username?: string; displayName?: string; avatarImg?: string }) {
  const [imgError, setImgError] = useState(false);

  if (avatarImg && !imgError) {
    return (
      <img
        src={avatarImg}
        alt={displayName || username || 'Avatar'}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#2b2624] text-white font-bold text-sm uppercase font-sans">
      {username ? username.substring(0, 2) : 'IG'}
    </div>
  );
}

// --- KOMPONEN UTAMA --- //
export default function Home() {
  const [currentView, setCurrentView] = useState<'main' | 'social-media' | 'photography' | 'videography' | 'graphic-design'>('main');
  const [activeCert, setActiveCert] = useState<{ title: string; src: string; type: 'pdf' | 'image' } | null>(null);
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);
  const [zoomedMedia, setZoomedMedia] = useState<string | null>(null);
  const [profileImgError, setProfileImgError] = useState(false);

  // --- STATE DETEKSI ORIENTASI VIDEO OTOMATIS --- //
  const [videoOrientations, setVideoOrientations] = useState<Record<number, 'portrait' | 'landscape'>>({});

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>, id: number) => {
    const { videoWidth, videoHeight } = e.currentTarget;
    const isPortrait = videoHeight > videoWidth;
    setVideoOrientations(prev => ({
      ...prev,
      [id]: isPortrait ? 'portrait' : 'landscape'
    }));
  };

  // --- STATE & LOGIC NAVIGASI SLIDING PILL --- //
  const [activeMenu, setActiveMenu] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  const navMenus = React.useMemo(() => [
    { id: 'home', label: 'Home', target: 'bento-grid' },
    { id: 'about', label: 'About', target: 'card-profile' },
    { id: 'services', label: 'Services', target: 'card-services' },
    { id: 'work', label: 'Work', target: 'card-projects' },
    { id: 'tools', label: 'Software', target: 'card-skills' },
  ], []);

  React.useEffect(() => {
    const updatePill = () => {
      const activeIndex = navMenus.findIndex(m => m.id === activeMenu);
      const activeEl = navRefs.current[activeIndex];
      if (activeEl) {
        setPillStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth
        });
      }
    };

    setTimeout(updatePill, 50);
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeMenu, navMenus]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const openCert = (title: string, src: string, type: 'pdf' | 'image') => setActiveCert({ title, src, type });
  const closeCert = () => setActiveCert(null);
  const openPreview = (data: PreviewData) => setActivePreview(data);
  const closePreview = () => setActivePreview(null);

  const goToSocialMedia = () => { setCurrentView('social-media'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goToPhotography = () => { setCurrentView('photography'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goToVideography = () => { setCurrentView('videography'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goToGraphicDesign = () => { setCurrentView('graphic-design'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goToMain = () => { setCurrentView('main'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d0c2bb] to-[#ede6e3] text-stone-900 font-sans antialiased selection:bg-[#2b2624] selection:text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      
      {/* FLOATING NAVBAR */}
      {currentView === 'main' && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 bg-white/70 backdrop-blur-xl p-1.5 rounded-full shadow-lg border border-white/60">
          <div
            className="absolute top-1.5 bottom-1.5 bg-[#2b2624] rounded-full transition-all duration-300 ease-in-out shadow-sm"
            style={{ left: `${pillStyle.left}px`, width: `${pillStyle.width}px` }}
          />
          {navMenus.map((menu, index) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              ref={(el) => { navRefs.current[index] = el; }}
              onClick={(e) => {
                setActiveMenu(menu.id);
                handleScroll(e, menu.target);
              }}
              className={`relative z-10 px-4 py-1.5 rounded-full font-bold text-xs font-sans transition-colors duration-300 whitespace-nowrap ${
                activeMenu === menu.id ? 'text-white' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {menu.label}
            </a>
          ))}
        </div>
      )}

      {/* CONTAINER UTAMA BENTO GRID */}
      <div id="bento-grid" className="max-w-7xl mx-auto pt-10 sm:pt-12 space-y-6">
        
        {/* VIEW 1: BERANDA UTAMA (BENTO GRID LAYOUT) */}
        {currentView === 'main' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* CARD 1: HERO / PORTOFOLIO UTAMA (Col Span 2) */}
            <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 border border-white/50 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[420px] group">
              <div className="space-y-4 max-w-xs sm:max-w-xl lg:w-[65%] w-full z-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-stone-800 font-extrabold text-xs tracking-wider uppercase font-sans">
                  CREATIVE PROFESSIONAL
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight tracking-tight font-sans">
                  Portfolio<br />
                  <span className="text-stone-700 whitespace-nowrap">Andhika Rievaldy</span>
                </h1>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans text-justify pt-1">
                  Building a strong visual identity and executing digital media strategies. Experienced in crafting brand narratives, producing creative content, and optimizing digital channel performance.
                </p>
                <div className="pt-3 flex flex-wrap gap-3 z-20">
                  <a
                    href="#card-projects"
                    onClick={(e) => handleScroll(e, 'card-projects')}
                    className="inline-flex items-center justify-center bg-[#2b2624] hover:bg-[#3a3330] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md group-hover:scale-[1.02]"
                  >
                    <span>Explore Works</span>
                  </a>
                </div>
              </div>

              {/* FOTO HERO PROFILE UTAMA */}
              {!profileImgError && (
                <img
                  src="/hero-image.png"
                  alt="Andhika Rievaldy"
                  className="absolute bottom-0 right-0 lg:right-[-10px] z-0 pointer-events-none w-auto h-[85%] sm:h-[90%] lg:h-[95%] object-contain object-bottom drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                  onError={() => setProfileImgError(true)}
                />
              )}
            </div>

            {/* CARD 2: PROFILE, ABOUT, & CONTACT (Col Span 1) */}
            <div id="card-profile" className="lg:col-span-1 bg-white/60 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 border border-white/50 shadow-lg flex flex-col justify-between space-y-6">
              
              {/* Header Profile Avatar */}
              <div className="flex items-center gap-3 border-b border-white/40 pb-4">
                <div 
                  onClick={() => setZoomedMedia('/avatar.jpg')}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 overflow-hidden shadow-md cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-300 bg-stone-200"
                >
                  {!profileImgError ? (
                    <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover object-center rounded-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg bg-[#2b2624]">RK</div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[13px] sm:text-[14px] font-bold text-stone-900 leading-tight tracking-tight">
                    Rievaldy Andhika Koswara, S.I.Kom
                  </h2>
                  <p className="text-xs font-semibold text-stone-600 pt-1">
                    Marketing Communication Specialist
                  </p>
                </div>
              </div>

              {/* About Me */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-extrabold text-stone-500 tracking-widest uppercase">ABOUT ME</span>
                <p className="text-xs text-stone-700 leading-relaxed text-justify">
                  Marketing Communication graduate focusing on strengthening brand identity and executing digital media strategies. Experienced in crafting brand narratives, producing creative content, and optimizing digital channel performance.
                </p>
              </div>

              {/* Contact Info Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-extrabold text-stone-500 tracking-widest uppercase">CONTACT INFO</span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:andhikarievaldy07@gmail.com" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/50 hover:bg-white/70 border border-white/60 text-xs font-bold text-stone-800 transition-colors truncate shadow-sm">
                    <svg width="15" height="15" className="text-stone-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 0-2-2H5a2 2 0 0-2 2v10a2 2 0 002 2z"/></svg>
                    <span className="truncate">andhikarievaldy07@gmail.com</span>
                  </a>
                  <a href="https://wa.me/6285179770217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/50 hover:bg-white/70 border border-white/60 text-xs font-bold text-stone-800 transition-colors shadow-sm">
                    <svg width="15" height="15" className="text-stone-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span>+62 851-7977-0217</span>
                  </a>
                  <a href="https://www.linkedin.com/in/rievaldyandhika/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/50 hover:bg-white/70 border border-white/60 text-xs font-bold text-stone-800 transition-colors truncate shadow-sm">
                    <svg width="15" height="15" className="text-stone-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="truncate">linkedin.com/in/rievaldyandhika</span>
                  </a>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/50 border border-white/60 text-xs font-bold text-stone-800 shadow-sm">
                    <svg width="15" height="15" className="text-stone-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Tangerang, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* Sertifikat Buttons */}
              <div className="space-y-2 pt-2 border-t border-white/40">
                <span className="text-[11px] font-extrabold text-stone-500 tracking-widest uppercase">CERTIFICATIONS</span>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="w-full flex items-center justify-center p-2.5 rounded-xl bg-[#2b2624] text-white hover:bg-[#3a3330] text-xs font-bold transition-all cursor-pointer text-center shadow-sm"
                  >
                    <span>Sertifikat LSP BNSP</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing Revou', '/certificates/sertifikat-digital-marketing-revou.pdf', 'pdf')}
                    className="w-full flex items-center justify-center p-2.5 rounded-xl bg-white/60 text-stone-900 hover:bg-white/80 border border-white/70 text-xs font-bold transition-all cursor-pointer text-center shadow-sm"
                  >
                    <span>Sertifikat Digital Marketing Revou</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing Afaq Academy', '/certificates/sertifikat-digital-marketing-afaq-academy.pdf', 'pdf')}
                    className="w-full flex items-center justify-center p-2.5 rounded-xl bg-white/60 text-stone-900 hover:bg-white/80 border border-white/70 text-xs font-bold transition-all cursor-pointer text-center shadow-sm"
                  >
                    <span>Sertifikat Digital Marketing Afaq Academy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* CARD BARIS TENGAH: SERVICES (4 Card Berjejer) */}
            <div id="card-services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:col-span-3">
              {[
                {
                  title: 'Social Media Management',
                  desc: 'Developing interactive social media strategies, content, and channel management.',
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  )
                },
                {
                  title: 'Graphic Design',
                  desc: 'Creative visual designs for professional digital promotional needs.',
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.61 0-.43-.17-.83-.44-1.13-.27-.3-.43-.7-.43-1.13 0-.89.72-1.61 1.61-1.61h1.83c3.16 0 5.73-2.57 5.73-5.73 0-4.82-4.18-8.8-9-8.8z"/>
                    </svg>
                  )
                },
                {
                  title: 'Commercial Photography',
                  desc: 'High-quality commercial product photography and retouching.',
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                    </svg>
                  )
                },
                {
                  title: 'Video Production',
                  desc: 'Dynamic video production and editing for creative marketing campaigns.',
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                  )
                }
              ].map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/50 shadow-lg transition-all duration-300 hover:bg-[#2b2624] hover:text-white flex flex-col justify-start group cursor-default min-h-[200px]"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/50 group-hover:bg-[#3a3330] text-stone-900 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      {srv.icon}
                    </div>
                    <h3 className="text-lg font-bold leading-snug group-hover:text-white">{srv.title}</h3>
                    <p className="text-xs text-stone-700 group-hover:text-stone-300 leading-relaxed text-justify">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CARD KIRI BAWAH: FEATURED PROJECTS (Col Span 2) */}
            <div id="card-projects" className="lg:col-span-2 bg-white/60 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 border border-white/50 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-white/40 pb-4">
                <div>
                  <span className="text-[11px] font-extrabold text-stone-500 tracking-widest uppercase">PORTFOLIO</span>
                  <h2 className="text-2xl font-black text-stone-900">Featured Projects</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: 'STRATEGY & CONTENT',
                    name: 'Social Media Management',
                    desc: 'Managing social media channels to build audience interaction and engagement.',
                    action: goToSocialMedia
                  },
                  {
                    tag: 'GRAPHIC & BRANDING',
                    name: 'Graphic Design',
                    desc: 'Designing consistent visual promotional materials for brand identity strengthening.',
                    action: goToGraphicDesign
                  },
                  {
                    tag: 'VISUAL & RETOUCHING',
                    name: 'Commercial Photography',
                    desc: 'Commercial product photography with detailed retouching and color grading.',
                    action: goToPhotography
                  },
                  {
                    tag: 'VIDEO PRODUCTION',
                    name: 'Video Editing',
                    desc: 'Creative video editing tailored for social media marketing campaigns.',
                    action: goToVideography
                  }
                ].map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 hover:border-white/90 flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider block">
                        {proj.tag}
                      </span>
                      <h3 className="text-base font-black text-stone-900 group-hover:text-stone-700 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={proj.action}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] transition-all cursor-pointer text-center shadow-sm"
                    >
                      View Portfolio
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD KANAN BAWAH: SOFTWARE SKILLS (Col Span 1) */}
            <div id="card-skills" className="lg:col-span-1 bg-white/60 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 border border-white/50 shadow-lg flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-extrabold text-stone-500 tracking-widest uppercase">PROFICIENCY</span>
                <h2 className="text-2xl font-black text-stone-900 mb-4">Software Skills</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Photoshop', cat: 'Editing' },
                    { name: 'Illustrator', cat: 'Vector' },
                    { name: 'Premiere Pro', cat: 'Video' },
                    { name: 'Canva Pro', cat: 'Design' },
                    { name: 'CapCut Pro', cat: 'Shorts' },
                    { name: 'Meta Suite', cat: 'Social' }
                  ].map((tool, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/50 border border-white/60 flex flex-col hover:bg-white/80 transition-colors shadow-sm">
                      <span className="font-bold text-xs text-stone-900">{tool.name}</span>
                      <span className="text-[10px] text-stone-500 font-semibold">{tool.cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER CONNECT */}
              <div className="p-4 rounded-2xl bg-[#2b2624] text-white space-y-3 shadow-md">
                <span className="text-[10px] font-extrabold text-stone-400 tracking-wider uppercase block">LET'S CONNECT</span>
                <h3 className="text-sm font-bold leading-snug">Interested in collaborating on a creative project?</h3>
                <a
                  href="mailto:andhikarievaldy07@gmail.com"
                  className="inline-block w-full py-2 bg-white text-stone-900 text-xs font-bold text-center rounded-xl hover:bg-stone-100 transition-colors shadow-sm"
                >
                  Email Me Directly
                </a>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 shadow-lg space-y-4">
              <button
                type="button"
                onClick={goToMain}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white/60 hover:bg-white/80 border border-white/70 transition-all cursor-pointer shadow-sm"
              >
                ← Back to Home
              </button>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900">Social Media Management</h1>
              <p className="text-sm text-stone-700 leading-relaxed">
                A documentation collection of social media strategy execution, content calendar planning, copywriting narrative creation, and brand audience engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Diatera Technology',
                  desc: "Managed Diatera Technology's Instagram channel through structured content planning, educational copywriting on IT & tech solutions, and designing professional feed and story visuals.",
                  action: () => openPreview({
                    title: 'Diatera Technology',
                    instagramUrl: 'https://www.instagram.com/diatera.tech/',
                    username: 'diatera.tech',
                    displayName: 'Diatera Cipta Teknologi',
                    avatarImg: '/portofolio/diatera-avatar.jpg',
                    postsCount: '32', followersCount: '510', followingCount: '11',
                    bio: ['Smart Solutions, Seamless Integration, Embrace the IoT Advantage 🌐💡', '📩 : support@diatera.com', 'Learn More', '👇👇👇👇👇'],
                    website: 'www.diatera.com',
                    posts: [
                      { url: 'https://www.instagram.com/p/C7qLDlSpypd/', embedUrl: 'https://www.instagram.com/p/C7qLDlSpypd/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/C7SvsGjPA6i/', embedUrl: 'https://www.instagram.com/p/C7SvsGjPA6i/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/C7RqeQcJvmb/', embedUrl: 'https://www.instagram.com/p/C7RqeQcJvmb/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/C7RTunxJW2X/', embedUrl: 'https://www.instagram.com/p/C7RTunxJW2X/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/C7OsO0mpYIZ/', embedUrl: 'https://www.instagram.com/p/C7OsO0mpYIZ/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/C5e8-6pJ0hc/', embedUrl: 'https://www.instagram.com/p/C5e8-6pJ0hc/embed/captioned/' }
                    ]
                  })
                },
                {
                  name: 'Glovecare',
                  desc: "Managed Glovecare's Instagram activity focusing on product care education, special service promotional offers, daily content calendar planning, and creating clean visual aesthetics.",
                  action: () => openPreview({
                    title: 'Glovecare',
                    instagramUrl: 'https://www.instagram.com/glovecare.official/',
                    username: 'glovecare.official',
                    displayName: 'GLOVECARE OFFICIAL',
                    category: 'Shopping & retail',
                    avatarImg: '/portofolio/glovecare-avatar.jpg',
                    postsCount: '25', followersCount: '394', followingCount: '0',
                    bio: ['Smart Detailing Made Easy', '#CareYouCanSee', 'Bikin mobil glowing tanpa ribet.', '👇 Pilih produk favoritmu! 👇'],
                    website: 'linktr.ee/GlovecareOfficial',
                    posts: [
                      { url: 'https://www.instagram.com/reel/DLPA--khhxM/', embedUrl: 'https://www.instagram.com/reel/DLPA--khhxM/embed/captioned/' },
                      { url: 'https://www.instagram.com/reel/DLGsFF8hi1Q/', embedUrl: 'https://www.instagram.com/reel/DLGsFF8hi1Q/embed/captioned/' },
                      { url: 'https://www.instagram.com/reel/DK6d85chp0T/', embedUrl: 'https://www.instagram.com/reel/DK6d85chp0T/embed/captioned/' },
                      { url: 'https://www.instagram.com/reel/DKx-yHLOtZB/', embedUrl: 'https://www.instagram.com/reel/DKx-yHLOtZB/embed/captioned/' },
                      { url: 'https://www.instagram.com/reel/DKs7pifuCl0/', embedUrl: 'https://www.instagram.com/reel/DKs7pifuCl0/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DKoQT5hq95Y/', embedUrl: 'https://www.instagram.com/p/DKoQT5hq95Y/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DKga_IGJiVb/', embedUrl: 'https://www.instagram.com/p/DKga_IGJiVb/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DKeYmjgssWM/', embedUrl: 'https://www.instagram.com/p/DKeYmjgssWM/embed/captioned/' },
                      { url: 'https://www.instagram.com/reel/DKdWT8juNEj/', embedUrl: 'https://www.instagram.com/reel/DKdWT8juNEj/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJ0VJivtvPE/', embedUrl: 'https://www.instagram.com/p/DJ0VJivtvPE/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJynBKhyKZg/', embedUrl: 'https://www.instagram.com/p/DJynBKhyKZg/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJyLjfcqlwQ/', embedUrl: 'https://www.instagram.com/p/DJyLjfcqlwQ/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJx3JZGKcM-/', embedUrl: 'https://www.instagram.com/p/DJx3JZGKcM-/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJnWHO7tVf6/', embedUrl: 'https://www.instagram.com/p/DJnWHO7tVf6/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJlvOFltV4y/', embedUrl: 'https://www.instagram.com/p/DJlvOFltV4y/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJlTyGfKe8J/', embedUrl: 'https://www.instagram.com/p/DJlTyGfKe8J/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJk--3fSfbp/', embedUrl: 'https://www.instagram.com/p/DJk--3fSfbp/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJjKTPztGvR/', embedUrl: 'https://www.instagram.com/p/DJjKTPztGvR/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJin-SHK7ZD/', embedUrl: 'https://www.instagram.com/p/DJin-SHK7ZD/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJiMealtL_U/', embedUrl: 'https://www.instagram.com/p/DJiMealtL_U/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJgljxvS25F/', embedUrl: 'https://www.instagram.com/p/DJgljxvS25F/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJew0DvNL95/', embedUrl: 'https://www.instagram.com/p/DJew0DvNL95/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJbcCVkNMJR/', embedUrl: 'https://www.instagram.com/p/DJbcCVkNMJR/embed/captioned/' },
                      { url: 'https://www.instagram.com/p/DJaeEc8SnHW/', embedUrl: 'https://www.instagram.com/p/DJaeEc8SnHW/embed/captioned/' }
                    ]
                  })
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-lg flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-stone-900">{item.name}</h2>
                    <p className="text-xs text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] transition-all cursor-pointer shadow-sm"
                  >
                    View Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: COMMERCIAL PHOTOGRAPHY */}
        {currentView === 'photography' && (
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 shadow-lg space-y-4">
              <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white/60 hover:bg-white/80 border border-white/70 transition-all cursor-pointer shadow-sm">
                ← Back to Home
              </button>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900">Commercial Photography</h1>
              <p className="text-sm text-stone-700 leading-relaxed">
                Visual direction, studio lighting setup, and commercial product photography enhanced with professional retouching techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Product Photography – Glovecare',
                  desc: 'Commercial photo shoot for Glovecare vehicle care products featuring visual aesthetic direction, studio lighting setups, as well as detailed retouching and color grading.',
                  action: () => openPreview({
                    title: 'Product Photography – Glovecare',
                    mediaList: [
                      '/portofolio/produk-1.jpg', '/portofolio/produk-3.jpg', '/portofolio/produk-4.jpg',
                      '/portofolio/produk-5.jpg', '/portofolio/produk-6.jpg', '/portofolio/produk-7.jpg',
                      '/portofolio/produk-8.jpg', '/portofolio/produk-9.jpg', '/portofolio/produk-10.jpg'
                    ]
                  })
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-lg flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-stone-900">{item.name}</h2>
                    <p className="text-xs text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] transition-all cursor-pointer shadow-sm">
                    View Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: VIDEOGRAPHY & VIDEO EDITING */}
        {currentView === 'videography' && (
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 shadow-lg space-y-4">
              <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white/60 hover:bg-white/80 border border-white/70 transition-all cursor-pointer shadow-sm">
                ← Back to Home
              </button>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900">Videography & Video Editing</h1>
              <p className="text-sm text-stone-700 leading-relaxed">
                Production and editing of commercial videos, creative projects, and vlogging content driven by dynamic visual storytelling.
              </p>
            </div>

            {/* Menyatukan Koleksi Video Menjadi 1 Card Utama yang Membuka Modal */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/50 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <h2 className="text-2xl font-bold text-stone-900">Video Editing Portfolio</h2>
                  <p className="text-sm text-stone-700 leading-relaxed max-w-3xl">
                    An interactive curated collection of commercial brand videos, social media ad campaigns, and crisp product showcases. Showcasing dynamic cuts, professional color grading, and custom motion graphics.
                  </p>
                </div>
                <button 
                  type="button" 
                  onClick={() => openPreview({ title: 'Video Editing Collection', videoProjects: videoEditingProjects })} 
                  className="w-full md:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] transition-all cursor-pointer shadow-sm whitespace-nowrap text-center"
                >
                  Open Video Player
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: GRAPHIC DESIGN & VISUAL CONTENT */}
        {currentView === 'graphic-design' && (
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 shadow-lg space-y-4">
              <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white/60 hover:bg-white/80 border border-white/70 transition-all cursor-pointer shadow-sm">
                ← Back to Home
              </button>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900">Graphic Design & Visual Content</h1>
              <p className="text-sm text-stone-700 leading-relaxed">
                Designing visual identities, seminar promotional media, e-commerce assets, interactive AR filters, and operational brand merchandise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Banner Seminar – Esa Unggul University',
                  desc: 'Designing integrated seminar promotional banners for visual publication and event information media.',
                  action: () => openPreview({ title: 'Banner Seminar – Esa Unggul University', mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/flyer-esa-unggul-${i + 1}.jpg`) })
                },
                {
                  name: 'Display Marketplace – Glovecare',
                  desc: "Visual arrangement of Glovecare's digital storefront to create professional product displays and attract buyers.",
                  action: () => openPreview({ title: 'Display Marketplace – Glovecare', mediaList: Array.from({ length: 31 }, (_, i) => `/portofolio/display-glovecare-${i + 1}.jpg`) })
                },
                {
                  name: 'E-Invitation Display - Digisite Tech',
                  desc: "Designing marketplace display assets and interactive digital invitations (e-invitation) for Digisite Tech's marketing needs.",
                  action: () => openPreview({
                    title: 'E-Invitation Display - Digisite Tech',
                    mediaList: [
                      '/portofolio/e-invitation-birthday-digisite-1.jpg', '/portofolio/e-invitation-birthday-digisite-2.jpg', '/portofolio/e-invitation-birthday-digisite-3.jpg',
                      '/portofolio/e-invitation-seminar-digisite-1.jpg', '/portofolio/e-invitation-seminar-digisite-2.jpg', '/portofolio/e-invitation-seminar-digisite-3.jpg',
                      '/portofolio/e-invitation-seminar-digisite-4.jpg', '/portofolio/e-invitation-wedding-digisite-1.jpg', '/portofolio/e-invitation-wedding-digisite-2.jpg',
                      '/portofolio/e-invitation-wedding-digisite-3.jpg', '/portofolio/e-invitation-wedding-digisite-4.jpg'
                    ]
                  })
                },
                {
                  name: 'Filter Live Report – Meta Spark Studio',
                  desc: 'Developing interactive AR filters for live event coverage to increase audience engagement on Instagram.',
                  action: () => openPreview({
                    title: 'Filter Live Report – Meta Spark Studio',
                    mediaList: [
                      '/portofolio/filter-meta-spark-1.mp4', '/portofolio/filter-meta-spark-2.mp4', '/portofolio/filter-meta-spark-3.mp4',
                      '/portofolio/filter-meta-spark-4.mp4', '/portofolio/filter-meta-spark-5.mp4', '/portofolio/filter-meta-spark-6.mp4'
                    ]
                  })
                },
                {
                  name: 'Flyer Seminar – Esa Unggul University',
                  desc: 'Designing integrated seminar promotional flyers for print publication and digital media.',
                  action: () => openPreview({ title: 'Flyer Seminar – Esa Unggul University', mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/flyer-esa-unggul-${i + 1}.jpg`) })
                },
                {
                  name: 'Lanyard & ID Card',
                  desc: 'Applying brand visual identity to professional operational media such as lanyards and ID cards.',
                  action: () => openPreview({
                    title: 'Lanyard & ID Card',
                    mediaList: ['/portofolio/lanyard-1.jpg', '/portofolio/lanyard-2.jpg', '/portofolio/lanyard-idcard-1.jpg', '/portofolio/lanyard-idcard-2.jpg']
                  })
                },
                {
                  name: 'Logo Design',
                  desc: 'Developing main logo designs as the foundation for a strong and consistent brand visual identity.',
                  action: () => openPreview({ title: 'Logo Design', mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/logo-design-${i + 1}.jpg`) })
                },
                {
                  name: 'Story Content – OnTheGoods',
                  desc: "Designing dynamic daily stories and promotional offers to strengthen OnTheGoods' branding and engagement.",
                  action: () => openPreview({
                    title: 'Story Content – OnTheGoods',
                    mediaList: [
                      '/portofolio/story-onthegoods-1.mp4', '/portofolio/story-onthegoods-1.jpg', '/portofolio/story-onthegoods-2.jpg',
                      '/portofolio/story-onthegoods-3.jpg', '/portofolio/story-onthegoods-4.jpg', '/portofolio/story-onthegoods-5.jpg', '/portofolio/story-onthegoods-6.jpg'
                    ]
                  })
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-lg flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-stone-900">{item.name}</h2>
                    <p className="text-xs text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] transition-all cursor-pointer shadow-sm">
                    View Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MODAL SERTIFIKAT (CREDENTIAL VIEWER) */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm" onClick={closeCert}>
          <div 
            className={`relative bg-[#ede6e3] rounded-2xl p-3 sm:p-4 shadow-2xl transition-all w-full max-h-[88vh] flex flex-col ${
              activeCert?.title?.includes('BNSP') ? 'max-w-lg' : 'max-w-4xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-300/60">
              <h3 className="text-sm sm:text-base font-bold text-stone-900">{activeCert?.title}</h3>
              <button 
                type="button"
                onClick={closeCert}
                className="p-1 rounded-full hover:bg-stone-300/50 text-stone-700 transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Area Gambar dengan Scrollbar Otomatis Jika Layar Pendek */}
            <div className="flex-1 overflow-y-auto w-full flex justify-center items-start rounded-lg bg-white/40 p-1">
              {/* LOGIKA PERCABANGAN KHUSUS SERTIFIKAT BNSP */}
              {activeCert?.title?.includes('BNSP') ? (
                <div className="relative w-full max-w-md aspect-[1/1.414] max-h-[80vh] overflow-hidden rounded-lg border border-stone-200 bg-white mx-auto shadow-sm">
                  {activeCert?.type === 'pdf' ? (
                    <iframe
                      src={`${activeCert.src}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full border-0"
                      title={activeCert.title}
                    />
                  ) : (
                    <img 
                      src={activeCert?.src} 
                      alt={activeCert?.title} 
                      className="w-full h-auto object-cover object-top block"
                    />
                  )}
                </div>
              ) : (
                /* LOGIKA UNTUK SERTIFIKAT LAINNYA (LANDSCAPE) */
                activeCert?.type === 'pdf' ? (
                  <iframe
                    src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-[75vh] min-h-[550px] border-0 rounded-md bg-white"
                    title={activeCert.title}
                  />
                ) : (
                  <img 
                    src={activeCert?.src} 
                    alt={activeCert?.title} 
                    className="w-full h-auto object-contain block rounded-md"
                  />
                )
              )}
            </div>

          </div>
        </div>
      )}

      {/* MODAL HASIL PORTOFOLIO */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md" onClick={closePreview}>
          <div className="relative w-full max-w-5xl bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden max-h-[90vh] flex flex-col shadow-2xl border border-white/60" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h3 className="text-xl font-black text-stone-900">{activePreview.title}</h3>
              <button type="button" onClick={closePreview} className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center font-bold">✕</button>
            </div>

            <div className="w-full flex-1 overflow-hidden flex flex-col">
              {activePreview.username ? (
                <div className="flex flex-col space-y-6 h-full">
                  {/* HEADER PROFIL UTAMA */}
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm shrink-0">
                    <div className="w-20 h-20 rounded-full bg-[#2b2624] p-0.5 shrink-0 overflow-hidden">
                      <InstagramAvatar username={activePreview.username} displayName={activePreview.displayName} avatarImg={activePreview.avatarImg} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-stone-900">{activePreview.username}</h2>
                        <a href={activePreview.instagramUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#2b2624] hover:bg-[#3a3330] shadow-sm">
                          Visit Instagram
                        </a>
                      </div>
                      <div className="flex gap-4 text-xs font-medium text-stone-600">
                        <span><b>{activePreview.postsCount}</b> posts</span>
                        <span><b>{activePreview.followersCount}</b> followers</span>
                        <span><b>{activePreview.followingCount}</b> following</span>
                      </div>
                      <p className="text-xs text-stone-700 whitespace-pre-line">{activePreview.bio?.join('\n')}</p>
                    </div>
                  </div>

                  {/* GRID POSTINGAN IFRAME DENGAN CROPPING & KONTROL SCROLL */}
                  <div className="max-h-[70vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                    {activePreview.posts?.map((post, index) => (
                      <div key={index} className="w-full bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm relative">
                        {/* Pembungkus Cropping: Menarik iframe ke atas untuk menyembunyikan header */}
                        <div className="w-full overflow-hidden -mt-[54px]">
                          <iframe
                            src={post.embedUrl}
                            className="w-full h-[580px] border-0"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency={true}
                            title={`IG Post ${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activePreview.videoProjects ? (
                /* NEW VIEW: PORTOFOLIO VIDEO EDITING DENGAN FLEXBOX ALIH-ALIH GRID */
                <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4 max-h-[75vh] overflow-y-auto w-full">
                  {activePreview.videoProjects.map((video) => {
                    const isPortrait = videoOrientations[video.id] === 'portrait';

                    return (
                      <div 
                        key={video.id} 
                        className={`bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex flex-col transition-all duration-300 ${
                          isPortrait 
                            ? 'w-full max-w-[280px] shrink-0 mx-auto md:mx-0' 
                            : 'w-full max-w-md shrink-0'
                        }`}
                      >
                        {/* Frame Video */}
                        <div className={`w-full bg-stone-900 rounded-xl overflow-hidden mb-3 ${
                          isPortrait ? 'aspect-[9/16]' : 'aspect-video'
                        }`}>
                          <video 
                            controls 
                            playsInline 
                            preload="metadata"
                            onLoadedMetadata={(e) => handleLoadedMetadata(e, video.id)}
                            className="w-full h-full object-contain"
                          >
                            <source src={video.videoUrl} type="video/mp4" />
                            Browser Anda tidak mendukung pemutar video ini.
                          </video>
                        </div>

                        {/* Detail Deskripsi */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                              {video.category}
                            </span>
                            <h4 className="text-base font-bold text-stone-900 mt-0.5">
                              {video.title}
                            </h4>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                              {video.description}
                            </p>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                /* VIEW PORTOFOLIO LAINNYA */
                <div className="max-h-[80vh] overflow-y-auto pr-2 pb-4 space-y-4">
                  {activePreview.mediaList && activePreview.mediaList.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-white/50 rounded-2xl border border-white/60">
                      {activePreview.mediaList.map((file, i) => (
                        <div key={i} onClick={() => setZoomedMedia(file)} className="aspect-square rounded-xl overflow-hidden bg-white/80 border border-white/70 p-1 cursor-pointer hover:scale-[1.02] transition-transform">
                          <SmartMediaDisplay src={file} title={`${activePreview.title} #${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  ) : activePreview.img ? (
                    <div className="flex items-center justify-center p-4 bg-white/50 rounded-2xl border border-white/60">
                      <div onClick={() => setZoomedMedia(activePreview.img!)} className="max-w-md w-full aspect-square cursor-pointer hover:scale-[1.02] transition-transform">
                        <SmartMediaDisplay src={activePreview.img} title={activePreview.title} />
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX OVERLAY */}
      {zoomedMedia && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-md" onClick={() => setZoomedMedia(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setZoomedMedia(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-lg font-bold">✕</button>
            {zoomedMedia.endsWith('.mp4') ? (
              <video src={zoomedMedia} controls autoPlay playsInline className="max-h-[85vh] max-w-full rounded-2xl bg-black" />
            ) : (
              <img src={zoomedMedia} alt="Preview" className="max-h-[85vh] max-w-full object-contain rounded-2xl bg-white" />
            )}
          </div>
        </div>
      )}

    </div>
  );
}
