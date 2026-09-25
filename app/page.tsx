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
      <div className="w-full h-full aspect-square rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center p-2 text-xs text-slate-500 break-all">
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
        className="w-full h-full aspect-square object-contain rounded-xl shadow-sm border border-slate-200 bg-slate-900 pointer-events-none"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || title}
      className="w-full h-full aspect-square object-contain rounded-xl shadow-sm border border-slate-200/80 bg-white/90 hover:scale-[1.03] transition-transform duration-200 pointer-events-none"
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
    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white font-bold text-sm uppercase">
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
    <div
      className="min-h-screen text-slate-900 font-sans antialiased relative selection:bg-slate-900 selection:text-white"
      style={{ backgroundColor: '#E2E8F0', overflowX: 'hidden' }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="w-[1440px] h-[2355px] mx-auto py-[130px] px-[100px] flex flex-col relative z-10"
      >
        {/* VIEW 1: BERANDA UTAMA */}
        {currentView === 'main' && (
          <>
            {/* SECTION: HEADER - TELAH DIPERBAIKI */}
            <section
              id="home"
              className="w-[1239px] h-[430px] rounded-[28px] relative bg-white/40 shadow-sm border border-white overflow-hidden shrink-0"
            >
              {/* FOTO HERO PROFILE */}
              {!profileImgError && (
                <img
                  src="/profile.png"
                  alt="Andhika Rievaldy"
                  className="absolute bottom-0 right-[40px] w-[318px] h-[380px] object-contain object-bottom drop-shadow-xl pointer-events-none z-10"
                  onError={() => setProfileImgError(true)}
                />
              )}

              {/* AREA KIRI: TEKS JUDUL & KONTAK INFO */}
              <div className="absolute top-[50px] left-[50px] flex flex-col gap-8 z-20">
                
                {/* Teks Judul */}
                <div className="flex flex-col">
                  <div className="text-slate-700 font-extrabold text-[12px] tracking-widest uppercase mb-2">
                    MARKETING COMMUNICATION
                  </div>
                  <h1 className="text-[64px] leading-[1.1] font-black text-slate-900 tracking-tight whitespace-nowrap">
                    ANDHIKA <br />
                    RIEVALDY
                  </h1>
                </div>

                {/* Grid Info Kontak */}
                <div className="grid grid-cols-2 gap-4 w-fit">
                  <a
                    href="mailto:andhikarievaldy07@gmail.com"
                    className="px-6 py-3 bg-white rounded-[14px] flex items-center gap-3 hover:bg-slate-50 border border-slate-100 shadow-sm transition-all"
                  >
                    <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-900 font-bold text-[13px] truncate">andhikarievaldy07@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rievaldyandhika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white rounded-[14px] flex items-center gap-3 hover:bg-slate-50 border border-slate-100 shadow-sm transition-all"
                  >
                    <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="text-slate-900 font-bold text-[13px] truncate">linkedin.com/in/rievaldyandhika</span>
                  </a>

                  <a
                    href="https://wa.me/6285179770217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white rounded-[14px] flex items-center gap-3 hover:bg-slate-50 border border-slate-100 shadow-sm transition-all"
                  >
                    <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-900 font-bold text-[13px] truncate">+62 851-7977-0217</span>
                  </a>

                  <div className="px-6 py-3 bg-white rounded-[14px] flex items-center gap-3 border border-slate-100 shadow-sm select-none">
                    <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-slate-900 font-bold text-[13px] truncate">Tangerang, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* NAVIGASI BAWAH */}
              <div className="absolute bottom-[30px] left-[45%] -translate-x-1/2 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 z-20">
                <a href="#home" className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-[12px]">
                  Home
                </a>
                <a href="#about" className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-950 font-bold text-[12px] transition-colors">
                  About
                </a>
                <a href="#services" className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-950 font-bold text-[12px] transition-colors">
                  Services
                </a>
                <a href="#work" className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-950 font-bold text-[12px] transition-colors">
                  Work
                </a>
                <a href="#tools" className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-950 font-bold text-[12px] transition-colors">
                  Software
                </a>
                <a href="#contact" className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-950 font-bold text-[12px] transition-colors">
                  Links
                </a>
              </div>
            </section>

            {/* SECTION: ABOUT ME */}
            <section
              id="about"
              className="mt-[20px] w-[1239px] h-[205px] rounded-[28px] bg-white/40 shadow-sm border border-white p-8 flex items-center shrink-0"
            >
              <div className="flex w-full justify-between items-start gap-12">
                <div className="flex-1 space-y-2">
                  <span className="text-[12px] font-extrabold text-slate-700 tracking-widest uppercase whitespace-nowrap block">
                    ABOUT ME
                  </span>
                  <h2 className="text-[28px] font-black text-slate-900 leading-tight whitespace-nowrap">
                    Rievaldy Andhika Koswara, S.I.Kom
                  </h2>
                  <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify mt-2">
                    Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital.
                    Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                  </p>
                </div>

                <div className="w-[350px] shrink-0 flex flex-col gap-3">
                  <span className="text-[12px] font-extrabold text-slate-700 tracking-widest uppercase whitespace-nowrap block">
                    CERTIFICATIONS & LICENSES
                  </span>

                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-white/90 border border-slate-100 shadow-sm cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 15l-2 5l2-1.5l2 1.5l-2-5" />
                        <circle cx="12" cy="9" r="6" />
                      </svg>
                      <span className="font-bold text-[13px] text-slate-900 whitespace-nowrap">Sertifikat LSP BNSP</span>
                    </div>
                    <svg width="16" height="16" className="text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing RevoU', '/certificates/sertifikat-revou.pdf', 'pdf')}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-white/90 border border-slate-100 shadow-sm cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" className="text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                      <span className="font-bold text-[13px] text-slate-900 whitespace-nowrap">Sertifikat Digital Marketing RevoU</span>
                    </div>
                    <svg width="16" height="16" className="text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION: SERVICES & EXPERTISE */}
            <section id="services" className="mt-[60px] flex flex-col shrink-0 w-[1239px]">
              <div className="w-[1239px] h-[74px] rounded-[18px] bg-white/40 shadow-sm border border-white px-8 flex items-center mb-[20px]">
                <h2 className="text-[20px] font-black text-slate-900 whitespace-nowrap tracking-wide uppercase">SERVICES & EXPERTISE</h2>
              </div>
              <div className="grid grid-cols-4 gap-[20px]">
                {[
                  {
                    title: 'Social Media Management',
                    desc: 'Penyusunan content planner, pengelolaan kanal media sosial harian, penulisan copywriting yang persuasif, dan strategi peningkatan interaksi audiens.'
                  },
                  {
                    title: 'Graphic Design & Visual Content',
                    desc: 'Perancangan graphic design untuk kebutuhan konten media sosial, materi promosi digital, dan penguatan identitas visual produk.'
                  },
                  {
                    title: 'Commercial Photography',
                    desc: 'Pengambilan foto produk komersial dan penyuntingan warna (photo editing) secara mendetail menggunakan Adobe Lightroom untuk estetika visual merek.'
                  },
                  {
                    title: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari tahap pengambilan gambar (videography) hingga penyuntingan akhir (video editing) menggunakan CapCut dan Adobe Premiere Pro.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[295px] h-[257px] rounded-[28px] p-6 bg-white/40 shadow-sm border border-white flex flex-col justify-center gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-normal text-slate-700 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: FEATURED PROJECTS */}
            <section id="work" className="mt-[20px] flex flex-col shrink-0 w-[1239px]">
              <div className="w-[1239px] h-[74px] rounded-[18px] bg-white/40 shadow-sm border border-white px-8 flex items-center mb-[20px]">
                <h2 className="text-[20px] font-black text-slate-900 whitespace-nowrap tracking-wide uppercase">SERVICES & EXPERTISE</h2>
              </div>

              <div className="grid grid-cols-2 gap-[20px]">
                {[
                  {
                    tag: 'STRATEGY & CONTENT',
                    name: 'Social Media Management',
                    desc: 'Menyusun content planner, penulisan copywriting persuasif, serta pengelolaan kanal media sosial harian untuk membangun interaksi dan pertumbuhan engagement audiens.',
                    action: goToSocialMedia
                  },
                  {
                    tag: 'GRAPHIC & BRANDING',
                    name: 'Graphic Design & Visual Content',
                    desc: 'Perancangan elemen grafis dan materi promosi visual yang konsisten untuk kebutuhan konten media sosial, publikasi digital, serta penguatan identitas produk.',
                    action: goToGraphicDesign
                  },
                  {
                    tag: 'VISUAL & RETOUCHING',
                    name: 'Commercial Photography',
                    desc: 'Pengarahan estetika visual dan pengambilan foto produk komersial, disempurnakan dengan teknik retouching serta color grading menggunakan Adobe Lightroom.',
                    action: goToPhotography
                  },
                  {
                    tag: 'VIDEO PRODUCTION',
                    name: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari proses pengambilan gambar hingga penyuntingan akhir (video editing) menggunakan Adobe Premiere Pro dan CapCut untuk hasil yang dinamis.',
                    action: goToVideography
                  }
                ].map((proj, idx) => (
                  <div
                    key={idx}
                    className="w-[610px] h-[118px] rounded-[28px] p-5 bg-white/40 shadow-sm border border-white flex flex-col justify-between hover:scale-[1.01] transition-transform"
                  >
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-700 uppercase tracking-widest block mb-1 whitespace-nowrap">
                        {proj.tag}
                      </span>
                      <h3 className="text-[18px] font-black text-slate-900 whitespace-nowrap truncate">{proj.name}</h3>
                    </div>
                    <div className="flex justify-between items-end gap-4">
                       <p className="text-[12px] font-normal text-slate-700 leading-tight text-justify line-clamp-2">
                        {proj.desc}
                      </p>
                      <button
                        type="button"
                        onClick={proj.action}
                        className="shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold text-white bg-slate-800 hover:bg-slate-900 transition-all shadow-sm whitespace-nowrap"
                      >
                        See Portfolio
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: TOOLS & SOFTWARE PROFICIENCY */}
            <section id="tools" className="mt-[60px] flex flex-col shrink-0 w-[1239px]">
               <div className="w-[1239px] h-[58px] rounded-[18px] bg-white/40 shadow-sm border border-white px-8 flex items-center mb-[20px]">
                <h2 className="text-[20px] font-black text-slate-900 whitespace-nowrap tracking-wide uppercase">TOOLS & SOFTWARE PROFICIENCY</h2>
              </div>
              <div className="grid grid-cols-3 gap-[20px]">
                {[
                  {
                    name: 'Adobe Photoshop',
                    category: 'Visual & Retouching',
                    desc: 'Pengolahan dan retouching foto komersial, manipulasi gambar terdistribusi, serta penyempurnaan estetika materi promosi digital.'
                  },
                  {
                    name: 'Adobe Illustrator',
                    category: 'Vector & Graphic Design',
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
                    category: 'Short-Form Video Editing',
                    desc: 'Produksi dan penyuntingan konten video pendek (Reels, TikTok, & Short) dengan alur transisi dinamis, efek teks, dan tren audio.'
                  },
                  {
                    name: 'Meta Spark Studio',
                    category: 'Augmented Reality (AR)',
                    desc: 'Pengembangan filter AR interaktif untuk kebutuhan liputan acara secara langsung (live report) guna meningkatkan engagement audiens.'
                  },
                  {
                    name: 'Meta Business Suite',
                    category: 'Social Media Operations',
                    desc: 'Manajemen penjadwalan publikasi konten Instagram & Facebook, pemantauan matriks performa, serta manajemen interaksi audiens.'
                  },
                  {
                    name: 'Google Docs',
                    category: 'Copywriting & Planning',
                    desc: 'Penyusunan naskah copywriting, pembuatan kalender konten terstruktur, pengerjaan creative brief, serta dokumentasi strategi narasi.'
                  },
                  {
                    name: 'Google Sheets',
                    category: 'Analytics & Reporting',
                    desc: 'Pengolahan dan analisis data Key Performance Indicator (KPI) kampanye digital, pemetaaan basis data, serta pelaporan performa media.'
                  }
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="w-[398px] h-[128px] rounded-[18px] p-5 bg-white/40 shadow-sm border border-white flex flex-col justify-center hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-[16px] font-bold text-slate-900 whitespace-nowrap truncate">
                        {tool.name}
                      </h3>
                      <span className="text-[9px] font-extrabold text-slate-700 uppercase tracking-widest whitespace-nowrap">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-[12px] font-normal text-slate-700 leading-snug text-justify">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: FOOTER / LET'S CONNECT */}
            <section id="contact" className="mt-[20px] flex shrink-0 w-[1239px]">
              <div className="w-[1239px] h-[115px] rounded-[18px] bg-white/40 shadow-sm border border-white px-8 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-extrabold text-slate-700 tracking-widest uppercase block whitespace-nowrap mb-1">
                    LET'S CONNECT
                  </span>
                  <h2 className="text-[24px] font-black text-slate-900 whitespace-nowrap tracking-tight">
                    INTERESTED IN WORKING TOGETHER?
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:andhikarievaldy07@gmail.com"
                    className="px-6 py-2.5 rounded-full text-white font-bold text-[13px] bg-slate-800 hover:bg-slate-900 transition-all shadow-sm whitespace-nowrap"
                  >
                    Send Email Direct
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rievaldyandhika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-slate-900 font-bold text-[13px] bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm whitespace-nowrap"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="space-y-10 w-full mx-auto" style={{ maxWidth: '1500px' }}>
            <div
              className="p-8 md:p-12 text-slate-900 mx-auto space-y-6 liquid-glass-3d overflow-hidden"
              style={{ width: '100%', maxWidth: '1500px' }}
            >
              <div className="relative z-10 space-y-6">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-slate-900 leading-tight">
                    Social Media Management
                  </h1>

                  <p className="text-[15px] md:text-[16px] font-normal text-slate-700 leading-relaxed text-justify">
                    Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ width: '100%' }}>
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
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-all duration-300 space-y-5 flex flex-col justify-between liquid-glass-3d hover:scale-[1.015] overflow-hidden"
                  style={{ width: '100%' }}
                >
                  <div className="space-y-3 relative z-10">
                    <h2 className="text-[24px] md:text-[32px] font-black text-slate-900 leading-tight">{item.name}</h2>
                    <p className="text-[15px] md:text-[16px] font-normal text-slate-700 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[12px] md:text-[14px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
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
          <div className="space-y-10 w-full mx-auto" style={{ maxWidth: '1500px' }}>
            <div
              className="p-8 md:p-12 text-slate-900 mx-auto space-y-6 liquid-glass-3d overflow-hidden"
              style={{ width: '100%', maxWidth: '1500px' }}
            >
              <div className="relative z-10 space-y-6">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-slate-900 leading-tight">
                    Commercial Photography
                  </h1>

                  <p className="text-[15px] md:text-[16px] font-normal text-slate-700 leading-relaxed text-justify">
                    Pengarahan visual, konsep tata cahaya, dan pengambilan foto komersial produk yang disempurnakan dengan teknik retouching profesional serta color grading Adobe Lightroom.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6" style={{ width: '100%' }}>
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
                        '/portofolio/produk-4.jpg',
                        '/portofolio/produk-5.jpg',
                        '/portofolio/produk-6.jpg',
                        '/portofolio/produk-7.jpg',
                        '/portofolio/produk-8.jpg',
                        '/portofolio/produk-9.jpg',
                        '/portofolio/produk-10.jpg'
                      ]
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 transition-all duration-300 space-y-4 flex flex-col justify-between liquid-glass-3d hover:scale-[1.015] overflow-hidden"
                  style={{ width: '100%' }}
                >
                  <div className="space-y-2.5 relative z-10">
                    <h2 className="text-[18px] md:text-[22px] font-black text-slate-900 leading-snug">{item.name}</h2>
                    <p className="text-[13px] md:text-[14px] font-normal text-slate-700 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[12px] md:text-[14px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
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
          <div className="space-y-10 w-full mx-auto" style={{ maxWidth: '1500px' }}>
            <div
              className="p-8 md:p-12 text-slate-900 mx-auto space-y-6 liquid-glass-3d overflow-hidden"
              style={{ width: '100%', maxWidth: '1500px' }}
            >
              <div className="relative z-10 space-y-6">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-slate-900 leading-tight">
                    Videography & Video Editing
                  </h1>

                  <p className="text-[15px] md:text-[16px] font-normal text-slate-700 leading-relaxed text-justify">
                    Produksi dan penyuntingan video komersial, proyek kreatif, serta konten vlogging berbasis penceritaan visual yang dinamis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6" style={{ width: '100%' }}>
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
                  className="p-6 sm:p-7 transition-all duration-300 space-y-4 flex flex-col justify-between liquid-glass-3d hover:scale-[1.015] overflow-hidden"
                  style={{ width: '100%' }}
                >
                  <div className="space-y-2.5 relative z-10">
                    <h2 className="text-[18px] md:text-[22px] font-black text-slate-900 leading-snug">{item.name}</h2>
                    <p className="text-[13px] md:text-[14px] font-normal text-slate-700 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[12px] md:text-[14px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
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
          <div className="space-y-10 w-full mx-auto" style={{ maxWidth: '1500px' }}>
            <div
              className="p-8 md:p-12 text-slate-900 mx-auto space-y-6 liquid-glass-3d overflow-hidden"
              style={{ width: '100%', maxWidth: '1500px' }}
            >
              <div className="relative z-10 space-y-6">
                <div>
                  <button
                    type="button"
                    onClick={goToMain}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-slate-900 leading-tight">
                    Graphic Design & Visual Content
                  </h1>

                  <p className="text-[15px] md:text-[16px] font-normal text-slate-700 leading-relaxed text-justify">
                    Perancangan identitas visual, media promosi seminar, materi e-commerce, filter AR interaktif, serta desain merchandise operasional merek.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6" style={{ width: '100%' }}>
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
                      mediaList: [
                        '/portofolio/e-invitation-birthday-digisite-1.jpg',
                        '/portofolio/e-invitation-birthday-digisite-2.jpg',
                        '/portofolio/e-invitation-birthday-digisite-3.jpg',
                        '/portofolio/e-invitation-seminar-digisite-1.jpg',
                        '/portofolio/e-invitation-seminar-digisite-2.jpg',
                        '/portofolio/e-invitation-seminar-digisite-3.jpg',
                        '/portofolio/e-invitation-seminar-digisite-4.jpg',
                        '/portofolio/e-invitation-wedding-digisite-1.jpg',
                        '/portofolio/e-invitation-wedding-digisite-2.jpg',
                        '/portofolio/e-invitation-wedding-digisite-3.jpg',
                        '/portofolio/e-invitation-wedding-digisite-4.jpg'
                      ]
                    })
                },
                {
                  name: 'Filter Live Report – Meta Spark Studio',
                  desc: 'Pembuatan filter AR interaktif untuk liputan acara secara langsung (live report) guna meningkatkan keterlibatan audiens di Instagram.',
                  action: () =>
                    openPreview({
                      title: 'Filter Live Report – Meta Spark Studio',
                      mediaList: [
                        '/portofolio/filter-meta-spark-1.mp4',
                        '/portofolio/filter-meta-spark-2.mp4',
                        '/portofolio/filter-meta-spark-3.mp4',
                        '/portofolio/filter-meta-spark-4.mp4',
                        '/portofolio/filter-meta-spark-5.mp4',
                        '/portofolio/filter-meta-spark-6.mp4'
                      ]
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
                      mediaList: [
                        '/portofolio/lanyard-1.jpg',
                        '/portofolio/lanyard-2.jpg',
                        '/portofolio/lanyard-idcard-1.jpg',
                        '/portofolio/lanyard-idcard-2.jpg'
                      ]
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
                      mediaList: [
                        '/portofolio/story-onthegoods-1.mp4',
                        '/portofolio/story-onthegoods-1.jpg',
                        '/portofolio/story-onthegoods-2.jpg',
                        '/portofolio/story-onthegoods-3.jpg',
                        '/portofolio/story-onthegoods-4.jpg',
                        '/portofolio/story-onthegoods-5.jpg',
                        '/portofolio/story-onthegoods-6.jpg'
                      ]
                    })
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 transition-all duration-300 space-y-4 flex flex-col justify-between liquid-glass-3d hover:scale-[1.015] overflow-hidden"
                  style={{ width: '100%' }}
                >
                  <div className="space-y-2.5 relative z-10">
                    <h2 className="text-[18px] md:text-[22px] font-black text-slate-900 leading-snug">{item.name}</h2>
                    <p className="text-[13px] md:text-[14px] font-normal text-slate-700 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 relative z-10">
                    <button
                      type="button"
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[12px] md:text-[14px] font-bold text-white bg-slate-900/90 hover:bg-slate-900 transition-all cursor-pointer shadow-sm backdrop-blur-sm"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={closeCert}
        >
          <div
            className="relative w-full max-w-[1500px] rounded-3xl p-4 sm:p-6 flex flex-col overflow-hidden text-slate-900 liquid-glass-3d"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-900/10 shrink-0 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-800 font-extrabold text-[12px] md:text-[14px] uppercase tracking-wider">
                  Credential Viewer
                </span>
                <span className="text-slate-400">•</span>
                <h3 className="text-[18px] md:text-[24px] font-black text-slate-900">{activeCert.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeCert}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-colors bg-white/80 hover:bg-white border border-white cursor-pointer shadow-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="relative z-10 w-full aspect-[1.414/1] max-h-[78vh] overflow-hidden rounded-2xl bg-white/50 border border-white flex items-center justify-center shadow-inner">
              {activeCert.type === 'pdf' ? (
                <iframe
                  src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 rounded-2xl bg-white"
                  title={activeCert.title}
                />
              ) : (
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-[1500px] rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden text-slate-900 flex flex-col justify-between liquid-glass-3d"
            style={{
              maxHeight: '92vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER MODAL */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-900/10">
              <h3 className="text-[20px] md:text-[26px] font-black text-slate-900 tracking-tight">
                Portofolio - {activePreview.title}
              </h3>
              <button
                type="button"
                onClick={closePreview}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-all bg-white/80 hover:bg-white border border-white shadow-sm backdrop-blur-md font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative z-10 overflow-y-auto space-y-6 pr-1" style={{ maxHeight: '76vh' }}>
              {activePreview.username ? (
                <div className="space-y-8">
                  <div className="p-6 sm:p-8 rounded-3xl space-y-6 bg-white/50 backdrop-blur-xl border border-white/80 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 p-[2px] shrink-0 flex items-center justify-center shadow-lg overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                          <InstagramAvatar
                            username={activePreview.username}
                            displayName={activePreview.displayName}
                            avatarImg={activePreview.avatarImg}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex-1">
                        <div className="flex flex-wrap items-center gap-4">
                          <h2 className="text-[24px] md:text-[32px] font-black text-slate-900 tracking-tight">
                            {activePreview.username}
                          </h2>
                          <a
                            href={activePreview.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-xl text-[12px] md:text-[14px] font-bold text-white shadow-sm transition-all bg-slate-900 hover:bg-slate-800 backdrop-blur-sm"
                          >
                            Kunjungi Profile Instagram
                          </a>
                        </div>

                        <div className="flex items-center gap-6 sm:gap-8 text-[15px] md:text-[17px] border-y border-slate-900/10 py-2.5 font-normal">
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.postsCount}</span>{' '}
                            <span className="text-slate-700 text-[13px] md:text-[15px] font-medium">posts</span>
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.followersCount}</span>{' '}
                            <span className="text-slate-700 text-[13px] md:text-[15px] font-medium">followers</span>
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-900">{activePreview.followingCount}</span>{' '}
                            <span className="text-slate-700 text-[13px] md:text-[15px] font-medium">following</span>
                          </div>
                        </div>

                        <div className="space-y-1 text-[15px] md:text-[17px] font-normal text-slate-800">
                          <div className="font-bold text-slate-900 text-[18px] md:text-[22px]">
                            {activePreview.displayName}
                          </div>
                          {activePreview.category && (
                            <div className="text-slate-600 font-semibold text-[12px] md:text-[14px] pb-1">
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
                              className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 pt-1.5 text-[15px] md:text-[16px]"
                            >
                              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        <span className="text-[12px] md:text-[14px] font-extrabold text-slate-800 tracking-wider uppercase flex items-center gap-2">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                          <span>LIVE DISPLAY DESIGN & FEATURED POSTS</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {activePreview.posts?.map((post, index) => (
                          <div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between border border-white/80 bg-white/70 backdrop-blur-lg"
                            style={{
                              minHeight: '440px',
                            }}
                          >
                            <iframe
                              src={post.embedUrl}
                              className="w-full h-full min-h-[440px] border-0"
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[65vh] overflow-y-auto p-4 bg-white/30 backdrop-blur-xl rounded-3xl border border-white/60 shadow-inner">
                      {activePreview.mediaList.map((file, i) => (
                        <div
                          key={i}
                          onClick={() => setZoomedMedia(file)}
                          className="aspect-square rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center p-2 shadow-[0_4px_20px_0_rgba(31,38,135,0.08)] cursor-pointer transition-all duration-300 hover:bg-white hover:border-white hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.15)] hover:scale-[1.02] group"
                        >
                          <SmartMediaDisplay src={file} title={`${activePreview.title} #${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  ) : activePreview.img ? (
                    <div className="w-full flex items-center justify-center rounded-3xl p-4 text-center bg-white/30 backdrop-blur-xl border border-white/60">
                      <div
                        onClick={() => setZoomedMedia(activePreview.img!)}
                        className="max-w-md w-full aspect-square cursor-pointer transition-all hover:scale-[1.02]"
                      >
                        <SmartMediaDisplay src={activePreview.img} title={activePreview.title} />
                      </div>
                    </div>
                  ) : null}

                  <div className="text-center pt-1 space-y-1">
                    <p className="font-extrabold text-slate-900 text-[18px] md:text-[22px] tracking-tight">
                      Dokumentasi Karya {activePreview.title}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-slate-700 font-semibold">
                      Klik gambar atau video untuk melihat pratinjau diperbesar
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL LIGHTBOX OVERLAY */}
      {zoomedMedia && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 transition-all"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={() => setZoomedMedia(null)}
        >
          <div
            className="relative max-w-[1500px] max-h-[90vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedMedia(null)}
              className="absolute -top-12 right-0 sm:right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg transition-all cursor-pointer border border-white/30 shadow-xl font-bold"
            >
              ✕
            </button>

            {zoomedMedia.endsWith('.mp4') ? (
              <video
                src={zoomedMedia}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-slate-700 bg-black"
              />
            ) : (
              <img
                src={zoomedMedia}
                alt="Preview diperbesar"
                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-200 bg-white"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
