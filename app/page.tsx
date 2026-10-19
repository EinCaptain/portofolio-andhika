'use client';

import React, { useState } from 'react';

type PostItem = {
  url: string;
  embedUrl: string;
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
};

function SmartMediaDisplay({ src, title, alt }: { src: string; title: string; alt?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full aspect-square rounded-xl border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center p-2 text-xs text-stone-600 break-all font-sans">
        {src}
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
        className="w-full h-full aspect-square object-contain rounded-xl shadow-sm border border-stone-200 bg-stone-900 pointer-events-none"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || title}
      className="w-full h-full aspect-square object-contain rounded-xl shadow-sm border border-white/60 bg-white/80 hover:scale-[1.03] transition-transform duration-200 pointer-events-none"
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

export default function Home() {
  const [currentView, setCurrentView] = useState<'main' | 'social-media' | 'photography' | 'videography' | 'graphic-design'>('main');
  const [activeCert, setActiveCert] = useState<{ title: string; src: string; type: 'pdf' | 'image' } | null>(null);
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);
  const [zoomedMedia, setZoomedMedia] = useState<string | null>(null);
  const [profileImgError, setProfileImgError] = useState(false);

  // --- STATE & LOGIC NAVIGASI SLIDING PILL ---
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
                    <svg width="15" height="15" className="text-stone-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )
                },
                {
                  title: 'Graphic Design',
                  desc: 'Creative visual designs for professional digital promotional needs.',
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>
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
                    { name: 'Meta Spark', cat: 'AR Filter' },
                    { name: 'Meta Suite', cat: 'Social' },
                    { name: 'Google Docs', cat: 'Copywriting' },
                    { name: 'Google Sheets', cat: 'Analytics' }
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
                      { url: 'https://www.instagram.com/p/C7qLDlSpypd/?img_index=1', embedUrl: 'https://www.instagram.com/p/C7qLDlSpypd/embed' },
                      { url: 'https://www.instagram.com/p/C7SvsGjPA6i/', embedUrl: 'https://www.instagram.com/p/C7SvsGjPA6i/embed' },
                      { url: 'https://www.instagram.com/p/C7RqeQcJvmb/?img_index=1', embedUrl: 'https://www.instagram.com/p/C7RqeQcJvmb/embed' },
                      { url: 'https://www.instagram.com/p/C7RTunxJW2X/?img_index=1', embedUrl: 'https://www.instagram.com/p/C7RTunxJW2X/embed' },
                      { url: 'https://www.instagram.com/p/C7OsO0mpYIZ/?img_index=2', embedUrl: 'https://www.instagram.com/p/C7OsO0mpYIZ/embed' },
                      { url: 'https://www.instagram.com/p/C5e8-6pJ0hc/', embedUrl: 'https://www.instagram.com/p/C5e8-6pJ0hc/embed' }
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
                      { url: 'https://www.instagram.com/p/DJnWHO7tVf6/', embedUrl: 'https://www.instagram.com/p/DJnWHO7tVf6/embed' },
                      { url: 'https://www.instagram.com/p/DJx3JZGKcM-/?img_index=1', embedUrl: 'https://www.instagram.com/p/DJx3JZGKcM-/embed' },
                      { url: 'https://www.instagram.com/p/DJlvOFltV4y/', embedUrl: 'https://www.instagram.com/p/DJlvOFltV4y/embed' },
                      { url: 'https://www.instagram.com/p/DJlTyGfKe8J/?img_index=1', embedUrl: 'https://www.instagram.com/p/DJlTyGfKe8J/embed' },
                      { url: 'https://www.instagram.com/p/DJk--3fSfbp/', embedUrl: 'https://www.instagram.com/p/DJk--3fSfbp/embed' },
                      { url: 'https://www.instagram.com/p/DJbcCVkNMJR/', embedUrl: 'https://www.instagram.com/p/DJbcCVkNMJR/embed' },
                      { url: 'https://www.instagram.com/p/DKs7pifuCl0/', embedUrl: 'https://www.instagram.com/p/DKs7pifuCl0/embed' },
                      { url: 'https://www.instagram.com/p/DKx-yHLOtZB/', embedUrl: 'https://www.instagram.com/p/DKx-yHLOtZB/embed' },
                      { url: 'https://www.instagram.com/p/DK6d85chp0T/', embedUrl: 'https://www.instagram.com/p/DK6d85chp0T/embed' }
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Commercial & Brand Project',
                  desc: 'Landscape-format narrative concept video production focusing on brand messaging delivery and visual aesthetics.',
                  action: () => openPreview({ title: 'Commercial & Brand Project', mediaList: ['/portofolio/video-project-landscape.mp4'] })
                },
                {
                  name: 'Short-Form Campaign Video',
                  desc: 'Vertical-format creative video editing specifically designed for social media campaigns and audience engagement.',
                  action: () => openPreview({ title: 'Short-Form Campaign Video', mediaList: ['/portofolio/video-project-vertical.mp4'] })
                },
                {
                  name: 'Creative Vlog & Lifestyle',
                  desc: 'Vertical-format personal storytelling and daily journey documentation with a casual and aesthetic editing flow.',
                  action: () => openPreview({ title: 'Creative Vlog & Lifestyle', mediaList: ['/portofolio/video-vlog-vertical.mp4'] })
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

      {/* MODAL SERTIFIKAT */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md" onClick={closeCert}>
          <div className="relative w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl p-6 flex flex-col overflow-hidden shadow-2xl border border-white/60" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h3 className="text-lg font-bold text-stone-900">{activeCert.title}</h3>
              <button type="button" onClick={closeCert} className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-800 font-bold">✕</button>
            </div>
            <div className="w-full aspect-[1.414/1] max-h-[75vh] overflow-hidden rounded-xl bg-stone-100">
              {activeCert.type === 'pdf' ? (
                <iframe src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full border-0 rounded-xl" title={activeCert.title} />
              ) : (
                <img src={activeCert.src} alt={activeCert.title} className="w-full h-full object-contain" />
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
              <h3 className="text-xl font-black text-stone-900">Portfolio - {activePreview.title}</h3>
              <button type="button" onClick={closePreview} className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center font-bold">✕</button>
            </div>

            <div className="overflow-y-auto space-y-6 pr-1 max-h-[75vh]">
              {activePreview.username ? (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {activePreview.posts?.map((post, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden border border-stone-200 min-h-[400px]">
                        <iframe src={post.embedUrl} className="w-full h-full min-h-[400px] border-0" scrolling="no" allow="autoplay" title={`IG Post ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
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
