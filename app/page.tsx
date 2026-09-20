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

export default function Home() {
  const [currentView, setCurrentView] = useState<'main' | 'social-media' | 'photography' | 'videography' | 'graphic-design'>('main');
  const [activeCert, setActiveCert] = useState<{ title: string; src: string; type: 'pdf' | 'image' } | null>(null);
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);
  const [zoomedMedia, setZoomedMedia] = useState<string | null>(null);
  const [profileImgError, setProfileImgError] = useState(false);

  const openCert = (title: string, src: string, type: 'pdf' | 'image') => {
    setActiveCert({ title, src, type });
  };

  const closeCert = () => {
    setActiveCert(null);
  };

  const openPreview = (data: PreviewData) => {
    setActivePreview(data);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  const goToSocialMedia = () => {
    setCurrentView('social-media');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPhotography = () => {
    setCurrentView('photography');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToVideography = () => {
    setCurrentView('videography');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToGraphicDesign = () => {
    setCurrentView('graphic-design');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToMain = () => {
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased relative selection:bg-slate-900 selection:text-white overflow-x-hidden bg-[#E2E8F0]">
      {/* AMBIENT LIGHTING BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(147, 197, 253, 0.6) 0%, rgba(199, 210, 254, 0.35) 45%, #E2E8F0 80%)',
        }}
      />

      <div
        className="fixed -top-32 -left-32 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] pointer-events-none z-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.55) 0%, rgba(226, 232, 240, 0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 py-6 md:py-10 w-full max-w-6xl space-y-6 sm:space-y-8">
        {currentView === 'main' && (
          <div className="space-y-6 sm:space-y-8">
            {/* 1. HERO HEADER CARD */}
            <section
              id="home"
              className="relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-slate-900 liquid-glass-3d rounded-3xl min-h-[500px] w-full"
            >
              <div className="flex items-center justify-between w-full relative z-20 gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] text-slate-800 bg-white/80 backdrop-blur-md border border-white/90 shadow-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Open to work</span>
                </div>

                <a
                  href="#about"
                  className="px-4 py-2 rounded-full text-white font-bold text-[11px] sm:text-[12px] transition-all shadow-md bg-slate-900/90 hover:bg-slate-900 border border-slate-700/50 backdrop-blur-md pointer-events-auto"
                >
                  View Credentials
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end my-auto pt-6 pb-4 relative z-20">
                <div className="sm:col-span-7 flex flex-col justify-center text-left">
                  <div className="text-slate-700 font-extrabold text-[11px] tracking-widest uppercase mb-1.5">
                    Marketing Communication Specialist
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[0.98]">
                    Andhika <br />
                    <span className="text-slate-800">Rievaldy</span>
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-5 text-[11.5px] text-slate-700 font-medium">
                    <a
                      href="mailto:andhikarievaldy@gmail.com"
                      className="flex items-center gap-2 p-2.5 rounded-2xl transition-all bg-white/70 backdrop-blur-md border border-white/90 hover:bg-white/90 shadow-sm group cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-slate-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 0-2-2H5a2 2 0 0-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate text-slate-900 font-bold">andhikarievaldy@gmail.com</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rievaldyandhika/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-2xl transition-all bg-white/70 backdrop-blur-md border border-white/90 hover:bg-white/90 shadow-sm group cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-slate-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="truncate text-slate-900 font-bold">linkedin.com/in/rievaldyandhika</span>
                    </a>

                    <a
                      href="https://wa.me/6285179770217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-2xl transition-all bg-white/70 backdrop-blur-md border border-white/90 hover:bg-white/90 shadow-sm group cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-slate-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-slate-900 font-bold">+62 851-7977-0217</span>
                    </a>

                    <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 select-none shadow-sm">
                      <svg className="w-4 h-4 text-slate-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-slate-900 font-bold">Tangerang, Indonesia</span>
                    </div>
                  </div>
                </div>

                {!profileImgError && (
                  <div className="sm:col-span-5 flex justify-center sm:justify-end items-end h-full mt-4 sm:mt-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile.png"
                      alt="Andhika Rievaldy"
                      className="w-48 sm:w-60 max-w-full h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                      onError={() => setProfileImgError(true)}
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-center relative z-20 pt-2">
                <div className="rounded-full p-1 flex items-center gap-1 text-[11px] bg-white/80 backdrop-blur-lg border border-white shadow-sm max-w-full overflow-x-auto scrollbar-none">
                  <a href="#home" className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white font-bold shadow-sm whitespace-nowrap">
                    Home
                  </a>
                  <a href="#about" className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 font-bold transition-colors whitespace-nowrap">
                    About
                  </a>
                  <a href="#services" className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 font-bold transition-colors whitespace-nowrap">
                    Services
                  </a>
                  <a href="#work" className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 font-bold transition-colors whitespace-nowrap">
                    Work
                  </a>
                  <a href="#tools" className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 font-bold transition-colors whitespace-nowrap">
                    Software
                  </a>
                  <a href="#contact" className="px-3 py-1.5 rounded-full text-slate-700 hover:text-slate-950 font-bold transition-colors whitespace-nowrap">
                    Links
                  </a>
                </div>
              </div>
            </section>

            {/* 2. CARD ABOUT ME */}
            <section id="about" className="p-6 sm:p-8 text-slate-900 liquid-glass-3d rounded-3xl overflow-hidden w-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative z-10">
                <div className="md:col-span-7 space-y-3">
                  <div>
                    <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">
                      About Me
                    </span>
                    <h2 className="text-[22px] sm:text-[26px] font-black text-slate-900 leading-tight mt-0.5">
                      Rievaldy Andhika Koswara, S.I.Kom
                    </h2>
                  </div>

                  <p className="text-[12.5px] font-normal text-slate-700 leading-relaxed text-justify">
                    Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital.
                    Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                  </p>
                </div>

                <div className="md:col-span-5 space-y-2.5">
                  <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block mb-1">
                    Certifications & Licenses
                  </span>

                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl text-[12px] font-bold text-slate-900 transition-all bg-white/70 backdrop-blur-md border border-white hover:bg-white/90 shadow-sm group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center text-slate-800 bg-white/90 shrink-0 border border-slate-200/80 shadow-sm">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 15l-2 5l2-1.5l2 1.5l-2-5" />
                          <circle cx="12" cy="9" r="6" />
                        </svg>
                      </div>
                      <span className="text-slate-900">Sertifikat LSP BNSP</span>
                    </div>
                    <svg width="14" height="14" className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing RevoU', '/certificates/sertifikat-revou.pdf', 'pdf')}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl text-[12px] font-bold text-slate-900 transition-all bg-white/70 backdrop-blur-md border border-white hover:bg-white/90 shadow-sm group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center text-slate-800 bg-white/90 shrink-0 border border-slate-200/80 shadow-sm">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <span className="text-slate-900">Sertifikat Digital Marketing RevoU</span>
                    </div>
                    <svg width="14" height="14" className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Workshop Copywriter', '/certificates/sertifikat-copywriter.jpg', 'image')}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl text-[12px] font-bold text-slate-900 transition-all bg-white/70 backdrop-blur-md border border-white hover:bg-white/90 shadow-sm group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center text-slate-800 bg-white/90 shrink-0 border border-slate-200/80 shadow-sm">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                      </div>
                      <span className="text-slate-900">Sertifikat Workshop Copywriter</span>
                    </div>
                    <svg width="14" height="14" className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* 3. SERVICES & EXPERTISE SECTION */}
            <section id="services" className="space-y-4 w-full">
              <div className="p-5 text-slate-900 liquid-glass-3d rounded-3xl">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">What I Do</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 mt-0.5">Services & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    ),
                    title: 'Social Media Management',
                    desc: 'Penyusunan content planner, pengelolaan kanal media sosial harian, penulisan copywriting yang persuasif, dan strategi peningkatan interaksi audiens.'
                  },
                  {
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <path d="M2 2l7.586 7.586" />
                        <circle cx="11" cy="11" r="2" />
                      </svg>
                    ),
                    title: 'Graphic Design & Visual Content',
                    desc: 'Perancangan graphic design untuk kebutuhan konten media sosial, materi promosi digital, dan penguatan identitas visual produk.'
                  },
                  {
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    ),
                    title: 'Commercial Photography',
                    desc: 'Pengambilan foto produk komersial dan penyuntingan warna (photo editing) secara mendetail menggunakan Adobe Lightroom untuk estetika visual merek.'
                  },
                  {
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polygon points="10,9 15,12 10,15" />
                      </svg>
                    ),
                    title: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari tahap pengambilan gambar (videography) hingga penyuntingan akhir (video editing) menggunakan CapCut dan Adobe Premiere Pro.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 transition-all duration-300 space-y-2.5 h-full flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden"
                  >
                    <div className="space-y-2 relative z-10">
                      <div className="w-8 h-8 rounded-2xl text-slate-800 bg-white/80 border border-white flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="text-[14px] font-bold text-slate-900 leading-snug text-left">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-normal text-slate-600 leading-relaxed text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FEATURED PROJECTS SECTION */}
            <section id="work" className="space-y-4 w-full">
              <div className="p-5 text-slate-900 liquid-glass-3d rounded-3xl">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Case Studies</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 mt-0.5">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {[
                  {
                    tag: 'STRATEGY & CONTENT',
                    name: 'Social Media Management',
                    desc: 'Menyusun content planner, penulisan copywriting persuasif, serta pengelolaan kanal media sosial harian.',
                    action: goToSocialMedia
                  },
                  {
                    tag: 'GRAPHIC & BRANDING',
                    name: 'Graphic Design & Visual Content',
                    desc: 'Perancangan elemen grafis dan materi promosi visual yang konsisten untuk kebutuhan konten media sosial.',
                    action: goToGraphicDesign
                  },
                  {
                    tag: 'VISUAL & RETOUCHING',
                    name: 'Commercial Photography',
                    desc: 'Pengarahan estetika visual dan pengambilan foto produk komersial dengan teknik retouching Adobe Lightroom.',
                    action: goToPhotography
                  },
                  {
                    tag: 'VIDEO PRODUCTION',
                    name: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari proses pengambilan gambar hingga penyuntingan akhir menggunakan Adobe Premiere Pro dan CapCut.',
                    action: goToVideography
                  }
                ].map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 transition-all duration-300 space-y-3 flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden w-full"
                  >
                    <div className="space-y-1 relative z-10">
                      <span className="text-[9px] font-extrabold text-slate-700 uppercase tracking-widest block">
                        {proj.tag}
                      </span>
                      <h3 className="text-[14px] font-extrabold text-slate-900 leading-snug">{proj.name}</h3>
                      <p className="text-[11px] font-normal text-slate-600 leading-relaxed text-left">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-2 relative z-10">
                      <button
                        type="button"
                        onClick={proj.action}
                        className="w-full inline-flex items-center justify-center px-3.5 py-2 rounded-2xl text-[11px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
                      >
                        <span>See Portfolio</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. TOOLS & SOFTWARE PROFICIENCY SECTION */}
            <section id="tools" className="space-y-4 w-full">
              <div className="p-5 text-slate-900 liquid-glass-3d rounded-3xl">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Technical Stack</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 mt-0.5">Tools & Software Proficiency</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Adobe Photoshop',
                    category: 'Visual & Retouching',
                    desc: 'Pengolahan dan retouching foto komersial, manipulasi gambar terdistribusi, serta penyempurnaan estetika materi promosi digital.'
                  },
                  {
                    name: 'Adobe Illustrator',
                    category: 'Vector & Graphic',
                    desc: 'Perancangan aset vektor, desain logo utama, tata letak konten grafik, dan pembuatan komponen identitas visual merek.'
                  },
                  {
                    name: 'Adobe Premiere Pro',
                    category: 'Video Production',
                    desc: 'Penyuntingan video komersial lanskap, perangkaian alur cerita sinematik, penyelarasan audio, dan teknik color grading.'
                  },
                  {
                    name: 'Canva Pro',
                    category: 'Fast Visual Design',
                    desc: 'Penyusunan materi desain cepat untuk konten harian media sosial, infografis presentasi, dan kolaborasi tata letak promosi.'
                  },
                  {
                    name: 'CapCut Pro',
                    category: 'Short-Form Video',
                    desc: 'Produksi dan penyuntingan konten video pendek (Reels, TikTok, & Short) dengan alur transisi dinamis, efek teks, dan tren audio.'
                  },
                  {
                    name: 'Meta Spark Studio',
                    category: 'Augmented Reality',
                    desc: 'Pengembangan filter AR interaktif untuk kebutuhan liputan acara secara langsung (live report) guna meningkatkan engagement audiens.'
                  },
                  {
                    name: 'Meta Business Suite',
                    category: 'Social Operations',
                    desc: 'Manajemen penjadwalan publikasi konten Instagram & Facebook, pemantauan matriks performa, serta manajemen interaksi audiens.'
                  },
                  {
                    name: 'Google Docs',
                    category: 'Copywriting & Plan',
                    desc: 'Penyusunan naskah copywriting, pembuatan kalender konten terstruktur, pengerjaan creative brief, serta dokumentasi strategi narasi.'
                  },
                  {
                    name: 'Google Sheets',
                    category: 'Analytics & Report',
                    desc: 'Pengolahan dan analisis data Key Performance Indicator (KPI) kampanye digital, pemetaaan basis data, serta pelaporan performa media.'
                  }
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 transition-all duration-300 h-full flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden"
                  >
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug text-left">
                          {tool.name}
                        </h3>
                        <span className="text-[8.5px] font-extrabold text-slate-600 uppercase tracking-wider bg-white/60 px-2 py-0.5 rounded-full border border-white/80 shrink-0">
                          {tool.category}
                        </span>
                      </div>

                      <p className="text-[11px] font-normal text-slate-600 leading-relaxed text-left">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. CONTACT / FOOTER CARD */}
            <footer
              id="contact"
              className="p-8 text-center space-y-4 text-slate-900 liquid-glass-3d rounded-3xl overflow-hidden w-full"
            >
              <div className="relative z-10 space-y-3">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Let&apos;s Connect</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900">Interested in Working Together?</h2>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href="mailto:andhikarievaldy@gmail.com"
                    className="text-white font-bold text-[12px] px-6 py-3 rounded-full shadow-md bg-slate-900/90 hover:bg-slate-900 transition-all backdrop-blur-sm"
                  >
                    Send Email Direct
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rievaldyandhika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-bold text-[12px] px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white hover:bg-white transition-all shadow-sm"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </footer>
          </div>
        )}

        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="p-5 sm:p-7 md:p-10 text-slate-900 space-y-5 liquid-glass-3d rounded-3xl overflow-hidden w-full">
              <div className="relative z-10 space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-black text-slate-900 leading-tight">
                    Social Media Management
                  </h1>
                  <p className="text-[12px] sm:text-[13px] font-normal text-slate-700 leading-relaxed text-justify">
                    Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {[
                {
                  name: 'Diatera Technology',
                  desc: 'Mengelola kanal Instagram Diatera Technology melalui penyusunan content planner terstruktur, penulisan copywriting edukatif seputar solusi IT & teknologi, serta perancangan visual feed dan story yang profesional untuk membangun kredibilitas dan interaksi audiens.',
                  action: () =>
                    openPreview({
                      title: 'Diatera Technology',
                      instagramUrl: 'https://www.instagram.com/diatera.tech/',
                      username: 'diatera.tech',
                      displayName: 'Diatera Cipta Teknologi',
                      avatarImg: '/portofolio/diatera-avatar.jpg',
                      postsCount: '32',
                      followersCount: '510',
                      followingCount: '11',
                      bio: [
                        'Smart Solutions, Seamless Integration, Embrace the IoT Advantage 🌐💡',
                        '📩 : support@diatera.com',
                        'Learn More',
                        '👇👇👇👇👇'
                      ],
                      website: 'www.diatera.com',
                      posts: [
                        { url: 'https://www.instagram.com/p/C7qLDlSpypd/?img_index=1', embedUrl: 'https://www.instagram.com/p/C7qLDlSpypd/embed' }
                      ]
                    })
                },
                {
                  name: 'Glovecare',
                  desc: 'Mengelola aktivitas Instagram Glovecare dengan fokus pada edukasi perawatan produk, promosi penawaran layanan khusus, penyusunan kalender konten harian, serta penciptaan visual yang bersih dan konsisten untuk memperkuat identitas merek.',
                  action: () =>
                    openPreview({
                      title: 'Glovecare',
                      instagramUrl: 'https://www.instagram.com/glovecare.official/',
                      username: 'glovecare.official',
                      displayName: 'GLOVECARE OFFICIAL',
                      category: 'Shopping & retail',
                      avatarImg: '/portofolio/glovecare-avatar.jpg',
                      postsCount: '25',
                      followersCount: '394',
                      followingCount: '0',
                      bio: [
                        'Smart Detailing Made Easy',
                        '#CareYouCanSee',
                        'Bikin mobil glowing tanpa ribet.',
                        '👇 Pilih produk favoritmu! 👇'
                      ],
                      website: 'linktr.ee/GlovecareOfficial',
                      posts: [
                        { url: 'https://www.instagram.com/p/DJnWHO7tVf6/', embedUrl: 'https://www.instagram.com/p/DJnWHO7tVf6/embed' }
                      ]
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 transition-all duration-300 space-y-3 flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden w-full"
                >
                  <div className="space-y-1 relative z-10">
                    <h2 className="text-[15px] font-extrabold text-slate-900 leading-tight tracking-tight">{item.name}</h2>
                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl text-[11px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: COMMERCIAL PHOTOGRAPHY */}
        {currentView === 'photography' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="p-5 sm:p-7 md:p-10 text-slate-900 space-y-5 liquid-glass-3d rounded-3xl overflow-hidden w-full">
              <div className="relative z-10 space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-black text-slate-900 leading-tight">
                    Commercial Photography
                  </h1>
                  <p className="text-[12px] sm:text-[13px] font-normal text-slate-700 leading-relaxed text-justify">
                    Pengarahan visual, konsep tata cahaya, dan pengambilan foto komersial produk yang disempurnakan dengan teknik retouching profesional serta color grading Adobe Lightroom.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {[
                {
                  name: 'Product Photography – Glovecare',
                  desc: 'Pengambilan foto komersial produk perawatan kendaraan Glovecare dengan pengarahan estetika visual, penataan lighting studio, serta retouching dan color grading mendetail menggunakan Adobe Lightroom.',
                  action: () =>
                    openPreview({
                      title: 'Product Photography – Glovecare',
                      mediaList: [
                        '/portofolio/produk-1.jpg',
                        '/portofolio/produk-3.jpg',
                        '/portofolio/produk-4.jpg'
                      ]
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 transition-all duration-300 space-y-3 flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden w-full"
                >
                  <div className="space-y-1 relative z-10">
                    <h2 className="text-[15px] font-extrabold text-slate-900 leading-tight tracking-tight">{item.name}</h2>
                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl text-[11px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: VIDEOGRAPHY & VIDEO EDITING */}
        {currentView === 'videography' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="p-5 sm:p-7 md:p-10 text-slate-900 space-y-5 liquid-glass-3d rounded-3xl overflow-hidden w-full">
              <div className="relative z-10 space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-black text-slate-900 leading-tight">
                    Videography & Video Editing
                  </h1>
                  <p className="text-[12px] sm:text-[13px] font-normal text-slate-700 leading-relaxed text-justify">
                    Produksi dan penyuntingan video komersial, proyek kreatif, serta konten vlogging berbasis penceritaan visual yang dinamis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {[
                {
                  name: 'Commercial & Brand Project',
                  desc: 'Produksi video berbasis konsep naratif berformat landscape dengan fokus pada penyampaian pesan merek dan estetika visual yang terstruktur.',
                  action: () =>
                    openPreview({
                      title: 'Commercial & Brand Project',
                      mediaList: ['/portofolio/video-project-landscape.mp4']
                    })
                },
                {
                  name: 'Short-Form Campaign Video',
                  desc: 'Penyuntingan video kreatif berformat vertikal yang dirancang khusus untuk kebutuhan kampanye media sosial dan engagement audiens.',
                  action: () =>
                    openPreview({
                      title: 'Short-Form Campaign Video',
                      mediaList: ['/portofolio/video-project-vertical.mp4']
                    })
                },
                {
                  name: 'Creative Vlog & Lifestyle',
                  desc: 'Dokumentasi penceritaan personal dan perjalanan harian berformat vertikal dengan alur penyuntingan yang kasual dan estetik.',
                  action: () =>
                    openPreview({
                      title: 'Creative Vlog & Lifestyle',
                      mediaList: ['/portofolio/video-vlog-vertical.mp4']
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 transition-all duration-300 space-y-3 flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden w-full"
                >
                  <div className="space-y-1 relative z-10">
                    <h2 className="text-[15px] font-extrabold text-slate-900 leading-tight tracking-tight">{item.name}</h2>
                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl text-[11px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: GRAPHIC DESIGN & VISUAL CONTENT */}
        {currentView === 'graphic-design' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="p-5 sm:p-7 md:p-10 text-slate-900 space-y-5 liquid-glass-3d rounded-3xl overflow-hidden w-full">
              <div className="relative z-10 space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-black text-slate-900 leading-tight">
                    Graphic Design & Visual Content
                  </h1>
                  <p className="text-[12px] sm:text-[13px] font-normal text-slate-700 leading-relaxed text-justify">
                    Perancangan identitas visual, media promosi seminar, materi e-commerce, filter AR interaktif, serta desain merchandise operasional merek.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {[
                {
                  name: 'Banner Seminar – Esa Unggul University',
                  desc: 'Perancangan banner promosi seminar terpadu untuk kebutuhan publikasi visual dan media informasi acara.',
                  action: () =>
                    openPreview({
                      title: 'Banner Seminar – Esa Unggul University',
                      mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/flyer-esa-unggul-${i + 1}.jpg`)
                    })
                },
                {
                  name: 'Display Marketplace – Glovecare',
                  desc: 'Penataan visual etalase toko digital Glovecare guna menciptakan tampilan produk yang profesional dan menarik minat pembeli.',
                  action: () =>
                    openPreview({
                      title: 'Display Marketplace – Glovecare',
                      mediaList: Array.from({ length: 31 }, (_, i) => `/portofolio/display-glovecare-${i + 1}.jpg`)
                    })
                },
                {
                  name: 'E-Invitation Display - Digisite Tech',
                  desc: 'Perancangan aset display marketplace serta undangan digital (e-invitation) interaktif untuk kebutuhan pemasaran Digisite Tech.',
                  action: () =>
                    openPreview({
                      title: 'E-Invitation Display - Digisite Tech',
                      mediaList: ['/portofolio/e-invitation-birthday-digisite-1.jpg']
                    })
                },
                {
                  name: 'Filter Live Report – Meta Spark Studio',
                  desc: 'Pembuatan filter AR interaktif untuk liputan acara secara langsung (live report) guna meningkatkan keterlibatan audiens di Instagram.',
                  action: () =>
                    openPreview({
                      title: 'Filter Live Report – Meta Spark Studio',
                      mediaList: ['/portofolio/filter-meta-spark-1.mp4']
                    })
                },
                {
                  name: 'Flyer Seminar – Esa Unggul University',
                  desc: 'Perancangan flyer promosi seminar terpadu untuk kebutuhan publikasi cetak maupun media digital.',
                  action: () =>
                    openPreview({
                      title: 'Flyer Seminar – Esa Unggul University',
                      mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/flyer-esa-unggul-${i + 1}.jpg`)
                    })
                },
                {
                  name: 'Lanyard & ID Card',
                  desc: 'Penerapan identitas visual merek pada media operasional profesional seperti lanyard dan ID Card.',
                  action: () =>
                    openPreview({
                      title: 'Lanyard & ID Card',
                      mediaList: ['/portofolio/lanyard-1.jpg']
                    })
                },
                {
                  name: 'Logo Design',
                  desc: 'Pengembangan desain logo utama sebagai fondasi identitas visual merek yang kuat dan konsisten.',
                  action: () =>
                    openPreview({
                      title: 'Logo Design',
                      mediaList: Array.from({ length: 7 }, (_, i) => `/portofolio/logo-design-${i + 1}.jpg`)
                    })
                },
                {
                  name: 'Story Content – OnTheGoods',
                  desc: 'Perancangan desain story harian dan penawaran promosi yang dinamis untuk menguatkan branding serta engagement OnTheGoods.',
                  action: () =>
                    openPreview({
                      title: 'Story Content – OnTheGoods',
                      mediaList: ['/portofolio/story-onthegoods-1.mp4']
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 transition-all duration-300 space-y-3 flex flex-col justify-between liquid-glass-3d rounded-3xl hover:scale-[1.015] overflow-hidden w-full"
                >
                  <div className="space-y-1 relative z-10">
                    <h2 className="text-[15px] font-extrabold text-slate-900 leading-tight tracking-tight">{item.name}</h2>
                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl text-[11px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL SERTIFIKAT */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={closeCert}
        >
          <div
            className="relative w-full max-w-[1200px] rounded-3xl p-4 sm:p-6 flex flex-col overflow-hidden text-slate-900 liquid-glass-3d max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-900/10 shrink-0 mb-3 gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-slate-800 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0">
                  Credential Viewer
                </span>
                <span className="text-slate-400 shrink-0">•</span>
                <h3 className="text-[14px] sm:text-[18px] font-black text-slate-900 truncate">{activeCert.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeCert}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-colors bg-white/80 hover:bg-white border border-white cursor-pointer shadow-sm font-bold shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="relative z-10 w-full aspect-[1.414/1] max-h-[75vh] overflow-hidden rounded-2xl bg-white/50 border border-white flex items-center justify-center shadow-inner">
              {activeCert.type === 'pdf' ? (
                <iframe
                  src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 rounded-2xl bg-white"
                  title={activeCert.title}
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeCert.src}
                  alt={activeCert.title}
                  className="w-full h-full object-contain rounded-2xl bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL HASIL PORTOFOLIO */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-[1200px] rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-hidden text-slate-900 flex flex-col justify-between liquid-glass-3d max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-900/10 gap-2">
              <h3 className="text-[16px] sm:text-[20px] font-black text-slate-900 tracking-tight truncate">
                Portofolio - {activePreview.title}
              </h3>
              <button
                type="button"
                onClick={closePreview}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-all bg-white/80 hover:bg-white border border-white shadow-sm backdrop-blur-md font-bold cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="relative z-10 overflow-y-auto space-y-6 pr-1 max-h-[76vh]">
              {activePreview.username ? (
                <div className="space-y-6 sm:space-y-8">
                  <div className="p-4 sm:p-8 rounded-3xl space-y-6 liquid-glass-3d">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-10">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-slate-900 p-[2px] shrink-0 flex items-center justify-center shadow-lg overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                          {activePreview.avatarImg ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={activePreview.avatarImg}
                              alt={activePreview.displayName || activePreview.username || 'Avatar'}
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white font-bold text-sm uppercase rounded-full">
                              {activePreview.username ? activePreview.username.substring(0, 2) : 'IG'}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 sm:space-y-4 flex-1 w-full">
                        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3">
                          <h2 className="text-[18px] sm:text-[22px] font-black text-slate-900 tracking-tight">
                            {activePreview.username}
                          </h2>
                          {activePreview.instagramUrl && (
                            <a
                              href={activePreview.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 sm:px-5 py-2 rounded-2xl text-[11px] md:text-[12px] font-bold text-white shadow-sm transition-all bg-slate-900 hover:bg-slate-800 backdrop-blur-sm"
                            >
                              Kunjungi Profile Instagram
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-4 sm:gap-8 text-[12px] sm:text-[13px] border-y border-slate-900/10 py-2 sm:py-2.5 font-normal">
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.postsCount}</span>{' '}
                            <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">posts</span>
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.followersCount}</span>{' '}
                            <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">followers</span>
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.followingCount}</span>{' '}
                            <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">following</span>
                          </div>
                        </div>

                        <div className="space-y-1 text-[12px] sm:text-[13px] font-normal text-slate-800">
                          <div className="font-bold text-slate-900 text-[15px] sm:text-[17px]">
                            {activePreview.displayName}
                          </div>
                          {activePreview.category && (
                            <div className="text-slate-600 font-semibold text-[10px] sm:text-[11px] pb-1">
                              {activePreview.category}
                            </div>
                          )}
                          {activePreview.bio?.map((line, idx) => (
                            <p key={idx} className="leading-relaxed text-justify">
                              {line}
                            </p>
                          ))}
                          {activePreview.website && (
                            <a
                              href={`https://${activePreview.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 pt-1.5 text-[12px] sm:text-[13px]"
                            >
                              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                              </svg>
                              <span>{activePreview.website}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-900/10 pb-3">
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800 tracking-wider uppercase flex items-center gap-2">
                          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                          <span>LIVE DISPLAY DESIGN & FEATURED POSTS</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {activePreview.posts?.map((post, index) => (
                          <div
                            key={index}
                            className="rounded-3xl overflow-hidden flex flex-col justify-between liquid-glass-3d min-h-[440px]"
                          >
                            <iframe
                              src={post.embedUrl}
                              className="w-full h-full min-h-[440px] border-0 rounded-3xl"
                              scrolling="no"
                              allow="autoplay"
                              title={`Instagram Post ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-5">
                  {activePreview.mediaList && activePreview.mediaList.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-h-[65vh] overflow-y-auto p-2 sm:p-4 rounded-3xl">
                      {activePreview.mediaList.map((file, i) => (
                        <div
                          key={i}
                          onClick={() => setZoomedMedia(file)}
                          className="aspect-square rounded-3xl p-2 sm:p-3 liquid-glass-3d flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-white/60 group"
                        >
                          {file.endsWith('.mp4') ? (
                            <video
                              src={file}
                              muted
                              loop
                              autoPlay
                              playsInline
                              className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none"
                            />
                          ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={file}
                              alt={`${activePreview.title} #${i + 1}`}
                              className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none drop-shadow-md"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : activePreview.img ? (
                    <div className="w-full flex items-center justify-center rounded-3xl p-4 text-center">
                      <div
                        onClick={() => setZoomedMedia(activePreview.img!)}
                        className="max-w-md w-full aspect-square cursor-pointer transition-all hover:scale-[1.03] rounded-3xl p-4 liquid-glass-3d flex items-center justify-center"
                      >
                        {activePreview.img.endsWith('.mp4') ? (
                          <video
                            src={activePreview.img}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none"
                          />
                        ) : (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={activePreview.img}
                            alt={activePreview.title}
                            className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none drop-shadow-md"
                          />
                        )}
                      </div>
                    </div>
                  ) : null}

                  <div className="text-center pt-1 space-y-1">
                    <p className="font-extrabold text-slate-900 text-[14px] sm:text-[16px] tracking-tight">
                      Dokumentasi Karya {activePreview.title}
                    </p>
                    <p className="text-[11px] sm:text-[12px] text-slate-700 font-semibold">
                      Klik gambar atau video untuk melihat pratinjau diperbesar
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      {/* MODAL LIGHTBOX OVERLAY */}
      {zoomedMedia && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-8 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={() => setZoomedMedia(null)}
        >
          <div
            className="relative max-w-[1200px] max-h-[90vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedMedia(null)}
              className="absolute -top-12 right-0 sm:right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg transition-all cursor-pointer border border-white/30 shadow-xl font-bold"
            >
              ✕
            </button>

            {zoomedMedia.endsWith('.mp4') ? (
              <video
                src={zoomedMedia}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] sm:max-h-[85vh] max-w-full rounded-3xl shadow-2xl border border-slate-700 bg-black"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={zoomedMedia}
                alt="Preview diperbesar"
                className="max-h-[80vh] sm:max-h-[85vh] max-w-full object-contain rounded-3xl shadow-2xl border border-slate-200 bg-white"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
