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
    /* OUTER WRAPPER: Sesuai aturan 1440px Main Canvas Container */
    <div className="min-h-screen text-slate-900 font-sans antialiased relative selection:bg-slate-900 selection:text-white bg-[#E2E8F0] overflow-x-auto w-full flex justify-center">
      {/* AMBIENT LIGHTING BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(147, 197, 253, 0.6) 0%, rgba(199, 210, 254, 0.35) 45%, #E2E8F0 80%)',
        }}
      />
      <div
        className="fixed -top-32 -left-32 w-[650px] h-[650px] pointer-events-none z-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.55) 0%, rgba(226, 232, 240, 0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* MAIN CONTAINER: 1440px dengan min-h-[1920px] dan padding T/B: 50px, L/R: 95px */}
      <div className="relative z-10 w-[1440px] min-h-[1920px] px-[95px] py-[50px] flex flex-col items-center shrink-0">
        
        {/* VIEW 1: BERANDA UTAMA */}
        {currentView === 'main' && (
          <div className="flex flex-col items-center w-full">
            
            {/* 1. HEADER CARD - w-[1250px], h-[370px], rounded-[28px] */}
            <section
              id="home"
              className="relative overflow-hidden flex flex-col justify-start px-12 py-10 text-slate-900 liquid-glass-3d w-[1250px] h-[370px] rounded-[28px] shrink-0"
            >
              <div className="flex flex-row items-start justify-between relative z-20 h-full">
                <div className="flex flex-col justify-start text-left w-[65%] shrink-0 pt-2">
                  <div className="text-slate-800 font-black text-[12px] tracking-wider uppercase mb-1">
                    MARKETING COMMUNICATION SPECIALIST
                  </div>
                  
                  {/* Typography: Teks tidak turun / whitespace-nowrap */}
                  <h1 className="text-[52px] font-black text-slate-900 tracking-tight leading-none uppercase whitespace-nowrap truncate mb-7">
                    ANDHIKA RIEVALDY
                  </h1>

                  {/* Contact Card: Grid 2x2 Layout */}
                  <div className="grid grid-cols-2 gap-[16px] max-w-[650px]">
                    <a href="mailto:andhikarievaldy@gmail.com" className="h-[48px] rounded-full text-[12px] font-bold text-slate-800 bg-white/80 hover:bg-white border border-white shadow-sm transition-all flex items-center px-5 gap-3 whitespace-nowrap truncate">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <span className="truncate">andhikarievaldy@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/rievaldyandhika/" target="_blank" rel="noopener noreferrer" className="h-[48px] rounded-full text-[12px] font-bold text-slate-800 bg-white/80 hover:bg-white border border-white shadow-sm transition-all flex items-center px-5 gap-3 whitespace-nowrap truncate">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      <span className="truncate">linkedin.com/in/rievaldyandhika</span>
                    </a>
                    <a href="https://wa.me/6285179770217" target="_blank" rel="noopener noreferrer" className="h-[48px] rounded-full text-[12px] font-bold text-slate-800 bg-white/80 hover:bg-white border border-white shadow-sm transition-all flex items-center px-5 gap-3 whitespace-nowrap truncate">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span className="truncate">+62 851-7977-0217</span>
                    </a>
                    <div className="h-[48px] rounded-full text-[12px] font-bold text-slate-800 bg-white/80 border border-white shadow-sm flex items-center px-5 gap-3 cursor-default whitespace-nowrap truncate">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span className="truncate">Tangerang, Indonesia</span>
                    </div>
                  </div>

                  {/* Navigasi Menu Header: Di bawah Card Kontak, posisi center teks */}
                  <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/60 border border-white shadow-sm w-fit mt-10 relative z-30">
                    <a href="#home" className="px-6 py-2 rounded-full bg-slate-900 text-white text-[12px] font-bold shadow-sm transition-all">Home</a>
                    <a href="#about" className="px-5 py-2 rounded-full text-slate-700 hover:bg-white text-[12px] font-bold transition-all">About</a>
                    <a href="#services" className="px-5 py-2 rounded-full text-slate-700 hover:bg-white text-[12px] font-bold transition-all">Services</a>
                    <a href="#work" className="px-5 py-2 rounded-full text-slate-700 hover:bg-white text-[12px] font-bold transition-all">Work</a>
                    <a href="#tools" className="px-5 py-2 rounded-full text-slate-700 hover:bg-white text-[12px] font-bold transition-all">Software</a>
                    <a href="#contact" className="px-5 py-2 rounded-full text-slate-700 hover:bg-white text-[12px] font-bold transition-all">Links</a>
                  </nav>
                </div>

                {/* Profile Photo: w-[320px], h-[370px] diletakkan di sebelah kanan bawah */}
                {!profileImgError && (
                  <div className="absolute right-0 bottom-0 h-[370px] w-[320px] flex justify-center items-end pointer-events-none">
                    <img
                      src="/profile.png"
                      alt="Andhika Rievaldy"
                      className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                      onError={() => setProfileImgError(true)}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* 2. ABOUT ME CARD - mt-[30px], w-[1250px], h-[150px], rounded-[28px] */}
            <section id="about" className="mt-[30px] px-[40px] text-slate-900 liquid-glass-3d w-[1250px] h-[150px] rounded-[28px] overflow-hidden flex flex-row items-center gap-[50px] shrink-0">
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[10px] font-black text-slate-800 tracking-wider uppercase block mb-1">
                  ABOUT ME
                </span>
                <h2 className="text-[26px] font-black text-slate-900 leading-none whitespace-nowrap truncate mb-[8px]">
                  Rievaldy Andhika Koswara, S.I.Kom
                </h2>
                <p className="text-[13px] font-medium text-slate-700 leading-relaxed text-justify line-clamp-2">
                  Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital. Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                </p>
              </div>

              {/* Kolom Sertifikat dengan margin/pembatas agar lega */}
              <div className="w-[380px] shrink-0 flex flex-col justify-center border-l border-slate-900/10 pl-[40px] h-full py-4">
                <span className="text-[10px] font-extrabold text-slate-700 tracking-wider uppercase block mb-2">
                  Certifications &amp; Licenses
                </span>
                <div className="flex flex-col gap-[8px]">
                  <button type="button" onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')} className="w-full h-[36px] rounded-[10px] px-4 flex items-center justify-between text-[11px] font-bold text-slate-900 bg-white/70 hover:bg-white border border-white shadow-sm transition-all cursor-pointer group">
                    <span className="truncate">Sertifikat LSP BNSP</span>
                    <span className="text-slate-500 group-hover:text-slate-900 transition-colors">&rarr;</span>
                  </button>
                  <button type="button" onClick={() => openCert('Sertifikat Digital Marketing RevoU', '/certificates/sertifikat-revou.pdf', 'pdf')} className="w-full h-[36px] rounded-[10px] px-4 flex items-center justify-between text-[11px] font-bold text-slate-900 bg-white/70 hover:bg-white border border-white shadow-sm transition-all cursor-pointer group">
                    <span className="truncate">Sertifikat Digital Marketing RevoU</span>
                    <span className="text-slate-500 group-hover:text-slate-900 transition-colors">&rarr;</span>
                  </button>
                  {/* Sertifikat ketiga disembunyikan dalam wujud scroll/klik atau dibuat muat jika diperlukan. Disini dipertahankan untuk fungsionalitas */}
                  <button type="button" onClick={() => openCert('Sertifikat Workshop Copywriter', '/certificates/sertifikat-copywriter.jpg', 'image')} className="w-full h-[36px] rounded-[10px] px-4 flex items-center justify-between text-[11px] font-bold text-slate-900 bg-white/70 hover:bg-white border border-white shadow-sm transition-all cursor-pointer group">
                    <span className="truncate">Sertifikat Workshop Copywriter</span>
                    <span className="text-slate-500 group-hover:text-slate-900 transition-colors">&rarr;</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 3. SERVICES & EXPERTISE SECTION - mt-[40px] */}
            <section id="services" className="mt-[40px] w-[1250px] flex flex-col shrink-0">
              
              {/* Card Judul: w-[1250px], h-[58px], rounded-[18px] */}
              <div className="w-[1250px] h-[58px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0">
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight mb-0.5">What I Do</span>
                  <h2 className="text-[17px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap truncate">SERVICES &amp; EXPERTISE</h2>
                </div>
              </div>

              {/* Items: justify-between menggantikan gap agar pas pixel perfect tanpa meluap */}
              <div className="flex flex-row justify-between w-full">
                {[
                  {
                    title: 'Social Media Management',
                    desc: 'Penyusunan content planner, pengelolaan kanal media sosial harian, penulisan copywriting yang persuasif, dan strategi peningkatan interaksi audiens.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                  },
                  {
                    title: 'Graphic Design & Visual Content',
                    desc: 'Perancangan graphic design untuk kebutuhan konten media sosial, materi promosi digital, dan penguatan identitas visual produk.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                  },
                  {
                    title: 'Commercial Photography',
                    desc: 'Pengambilan foto produk komersial dan penyuntingan warna (photo editing) secara mendetail menggunakan Adobe Lightroom untuk estetika visual merek.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                  },
                  {
                    title: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari tahap pengambilan gambar (videography) hingga penyuntingan akhir (video editing) menggunakan CapCut dan Adobe Premiere Pro.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                  }
                ].map((item, idx) => (
                  /* Masing-masing w-[291px], h-[213px], rounded-[28px] */
                  <div
                    key={idx}
                    className="w-[291px] h-[213px] p-6 transition-all duration-300 flex flex-col justify-start liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0"
                  >
                    <div className="w-9 h-9 mb-4 rounded-full text-slate-800 bg-white/80 border border-white flex items-center justify-center shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    {/* Judul: 1 Baris truncate */}
                    <h3 className="text-[14px] font-bold text-slate-900 leading-snug whitespace-nowrap truncate mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-justify line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FEATURED PROJECTS SECTION - mt-[20px] */}
            <section id="work" className="mt-[20px] w-[1250px] flex flex-col shrink-0">
              
              {/* Card Judul: w-[1250px], h-[58px], rounded-[18px] */}
              <div className="w-[1250px] h-[58px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0">
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight mb-0.5">Case Studies</span>
                  <h2 className="text-[17px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap truncate">FEATURED PROJECTS</h2>
                </div>
              </div>

              {/* Items Layout */}
              <div className="flex flex-row justify-between w-full">
                {[
                  {
                    name: 'Social Media Management',
                    desc: 'Menyusun content planner, penulisan copywriting persuasif, serta pengelolaan kanal media sosial harian.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
                    action: goToSocialMedia
                  },
                  {
                    name: 'Graphic Design & Visual Content',
                    desc: 'Perancangan elemen grafis dan materi promosi visual yang konsisten untuk kebutuhan konten media sosial.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
                    action: goToGraphicDesign
                  },
                  {
                    name: 'Commercial Photography',
                    desc: 'Pengarahan estetika visual dan pengambilan foto produk komersial dengan teknik retouching Adobe Lightroom.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>,
                    action: goToPhotography
                  },
                  {
                    name: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari proses pengambilan gambar hingga penyuntingan akhir menggunakan Adobe Premiere Pro dan CapCut.',
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
                    action: goToVideography
                  }
                ].map((proj, idx) => (
                  <div
                    key={idx}
                    className="w-[291px] h-[213px] p-6 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0"
                  >
                    <div>
                      <div className="w-9 h-9 mb-4 rounded-full text-slate-800 bg-white/80 border border-white flex items-center justify-center shrink-0 shadow-sm">
                        {proj.icon}
                      </div>
                      <h3 className="text-[14px] font-extrabold text-slate-900 leading-snug whitespace-nowrap truncate mb-2">
                        {proj.name}
                      </h3>
                      <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-justify line-clamp-3">
                        {proj.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={proj.action}
                      className="w-full inline-flex items-center justify-center h-[34px] rounded-[12px] text-[11px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. TOOLS & SOFTWARE SECTION - mt-[40px] */}
            <section id="tools" className="mt-[40px] w-[1250px] flex flex-col shrink-0">
              
              {/* Card Judul: w-[1250px], h-[58px], rounded-[18px] */}
              <div className="w-[1250px] h-[58px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0">
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight mb-0.5">Technical Stack</span>
                  <h2 className="text-[17px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap truncate">TOOLS &amp; SOFTWARE PROFICIENCY</h2>
                </div>
              </div>

              {/* Grid Layout - Gap 20px (Horizontal & Vertikal) */}
              <div className="grid grid-cols-3 gap-[20px] w-full">
                {[
                  { name: 'Adobe Photoshop', category: 'VISUAL & RETOUCHING', desc: 'Pengolahan dan retouching foto komersial, manipulasi gambar terdistribusi, serta penyempurnaan estetika materi promosi digital.' },
                  { name: 'Adobe Illustrator', category: 'VECTOR & GRAPHIC', desc: 'Perancangan aset vektor, desain logo utama, tata letak konten grafik, dan pembuatan komponen identitas visual merek.' },
                  { name: 'Adobe Premiere Pro', category: 'VIDEO PRODUCTION', desc: 'Penyuntingan video komersial lanskap, perangkaian alur cerita sinematik, penyelarasan audio, dan teknik color grading.' },
                  { name: 'Canva Pro', category: 'FAST VISUAL DESIGN', desc: 'Penyusunan materi desain cepat untuk konten harian media sosial, infografis presentasi, dan kolaborasi tata letak promosi.' },
                  { name: 'CapCut Pro', category: 'SHORT-FORM VIDEO', desc: 'Produksi dan penyuntingan konten video pendek (Reels, TikTok, & Short) dengan alur transisi dinamis, efek teks, dan tren audio.' },
                  { name: 'Meta Spark Studio', category: 'AUGMENTED REALITY', desc: 'Pengembangan filter AR interaktif untuk kebutuhan liputan acara secara langsung (live report) guna meningkatkan engagement audiens.' },
                  { name: 'Meta Business Suite', category: 'SOCIAL OPERATIONS', desc: 'Manajemen penjadwalan publikasi konten Instagram & Facebook, pemantauan matriks performa, serta manajemen interaksi audiens.' },
                  { name: 'Google Docs', category: 'COPYWRITING & PLAN', desc: 'Penyusunan naskah copywriting, pembuatan kalender konten terstruktur, pengerjaan creative brief, serta dokumentasi strategi narasi.' },
                  { name: 'Google Sheets', category: 'ANALYTICS & REPORT', desc: 'Pengolahan dan analisis data Key Performance Indicator (KPI) kampanye digital, pemetaaan basis data, serta pelaporan performa media.' }
                ].map((tool, idx) => (
                  /* Masing-masing item: w-[403px], h-[114px], rounded-[18px] */
                  <div
                    key={idx}
                    className="w-[403px] h-[114px] p-5 transition-all duration-300 flex flex-col justify-start liquid-glass-3d rounded-[18px] hover:scale-[1.015] overflow-hidden shrink-0"
                  >
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <h3 className="text-[14px] font-bold text-slate-900 leading-snug whitespace-nowrap truncate flex-1">
                        {tool.name}
                      </h3>
                      <span className="text-[8px] font-extrabold text-slate-600 uppercase tracking-wider bg-white/70 px-2 py-1 rounded-full border border-white/80 shrink-0">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-[11.5px] font-normal text-slate-600 leading-relaxed text-justify line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. FOOTER SECTION - mt-[40px] */}
            <footer
              id="contact"
              className="mt-[40px] px-10 h-[79px] w-[1250px] text-slate-900 liquid-glass-3d rounded-[18px] overflow-hidden flex flex-row items-center justify-between shrink-0 mb-[50px]"
            >
              <div className="flex flex-col text-left justify-center pt-1">
                <span className="text-[9px] font-extrabold text-slate-700 tracking-wider uppercase block mb-0.5">Let&apos;s Connect</span>
                <h2 className="text-[18px] font-black text-slate-900 uppercase whitespace-nowrap truncate">INTERESTED IN WORKING TOGETHER?</h2>
              </div>
              <div className="flex gap-4 shrink-0">
                <a href="mailto:andhikarievaldy@gmail.com" className="text-white font-bold text-[12px] px-8 py-2.5 rounded-full shadow-md bg-slate-900 hover:bg-slate-800 transition-all">
                  Send Email Direct
                </a>
                <a href="https://www.linkedin.com/in/rievaldyandhika/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold text-[12px] px-8 py-2.5 rounded-full bg-white/80 border border-white hover:bg-white transition-all shadow-sm">
                  LinkedIn Profile
                </a>
              </div>
            </footer>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW LAINNYA (Disesuaikan agar muat di 1250px grid layout) */}
        {/* ========================================================= */}
        
        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="w-[1250px] flex flex-col gap-[20px] shrink-0">
            <div className="p-10 text-slate-900 space-y-4 liquid-glass-3d rounded-[28px] overflow-hidden w-full h-[245px] flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <div className="space-y-1">
                <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap truncate">
                  Social Media Management
                </h1>
                <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify max-w-[800px]">
                  Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between w-[1250px]">
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
                      posts: [{ url: 'https://www.instagram.com/p/C7qLDlSpypd/?img_index=1', embedUrl: 'https://www.instagram.com/p/C7qLDlSpypd/embed' }]
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
                      posts: [{ url: 'https://www.instagram.com/p/DJnWHO7tVf6/', embedUrl: 'https://www.instagram.com/p/DJnWHO7tVf6/embed' }]
                    })
                }
              ].map((item, idx) => (
                <div key={idx} className="w-[610px] min-h-[229px] p-8 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0">
                  <div className="space-y-2 mb-4">
                    <h2 className="text-[20px] font-extrabold text-slate-900 leading-tight whitespace-nowrap truncate">{item.name}</h2>
                    <p className="text-[14px] font-normal text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full inline-flex items-center justify-center h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm mt-auto">
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: COMMERCIAL PHOTOGRAPHY */}
        {currentView === 'photography' && (
          <div className="w-[1250px] flex flex-col gap-[20px] shrink-0">
            <div className="p-10 text-slate-900 space-y-4 liquid-glass-3d rounded-[28px] overflow-hidden w-full h-[245px] flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <div className="space-y-1">
                <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap truncate">Commercial Photography</h1>
                <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify max-w-[800px]">
                  Pengarahan visual, konsep tata cahaya, dan pengambilan foto komersial produk yang disempurnakan dengan teknik retouching profesional serta color grading Adobe Lightroom.
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-[31px] w-[1250px]">
              {[
                {
                  name: 'Product Photography – Glovecare',
                  desc: 'Pengambilan foto komersial produk perawatan kendaraan Glovecare dengan pengarahan estetika visual, penataan lighting studio, serta retouching dan color grading mendetail menggunakan Adobe Lightroom.',
                  action: () =>
                    openPreview({
                      title: 'Product Photography – Glovecare',
                      mediaList: ['/portofolio/produk-1.jpg', '/portofolio/produk-3.jpg', '/portofolio/produk-4.jpg']
                    })
                }
              ].map((item, idx) => (
                <div key={idx} className="w-[396px] min-h-[229px] p-8 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0">
                  <div className="space-y-2 mb-4">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight truncate">{item.name}</h2>
                    <p className="text-[13px] font-normal text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full inline-flex items-center justify-center h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm mt-auto">
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: VIDEOGRAPHY & VIDEO EDITING */}
        {currentView === 'videography' && (
          <div className="w-[1250px] flex flex-col gap-[20px] shrink-0">
            <div className="p-10 text-slate-900 space-y-4 liquid-glass-3d rounded-[28px] overflow-hidden w-full h-[245px] flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <div className="space-y-1">
                <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap truncate">Videography &amp; Video Editing</h1>
                <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify max-w-[800px]">
                  Produksi dan penyuntingan video komersial, proyek kreatif, serta konten vlogging berbasis penceritaan visual yang dinamis.
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-between w-[1250px]">
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
                <div key={idx} className="w-[396px] min-h-[229px] p-8 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0">
                  <div className="space-y-2 mb-4">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight truncate">{item.name}</h2>
                    <p className="text-[13px] font-normal text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full inline-flex items-center justify-center h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm mt-auto">
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: GRAPHIC DESIGN & VISUAL CONTENT */}
        {currentView === 'graphic-design' && (
          <div className="w-[1250px] flex flex-col gap-[20px] shrink-0">
            <div className="p-10 text-slate-900 space-y-4 liquid-glass-3d rounded-[28px] overflow-hidden w-full h-[245px] flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white/80 border border-white hover:bg-white transition-all cursor-pointer shadow-sm">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <div className="space-y-1">
                <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap truncate">Graphic Design &amp; Visual Content</h1>
                <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify max-w-[800px]">
                  Perancangan identitas visual, media promosi seminar, materi e-commerce, filter AR interaktif, serta desain merchandise operasional merek.
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-[31px] w-[1250px]">
              {[
                { name: 'Banner Seminar – Esa Unggul', desc: 'Perancangan banner promosi seminar terpadu untuk kebutuhan publikasi visual dan media informasi acara.', action: () => openPreview({ title: 'Banner Seminar – Esa Unggul University', mediaList: ['/portofolio/flyer-esa-unggul-1.jpg', '/portofolio/flyer-esa-unggul-2.jpg'] }) },
                { name: 'Display Marketplace – Glovecare', desc: 'Penataan visual etalase toko digital Glovecare guna menciptakan tampilan produk yang profesional dan menarik minat pembeli.', action: () => openPreview({ title: 'Display Marketplace – Glovecare', mediaList: ['/portofolio/display-glovecare-1.jpg'] }) },
                { name: 'E-Invitation - Digisite Tech', desc: 'Perancangan aset display marketplace serta undangan digital (e-invitation) interaktif untuk kebutuhan pemasaran Digisite Tech.', action: () => openPreview({ title: 'E-Invitation Display', mediaList: ['/portofolio/e-invitation-birthday-digisite-1.jpg'] }) },
                { name: 'Filter AR – Meta Spark Studio', desc: 'Pembuatan filter AR interaktif untuk liputan acara secara langsung (live report) guna meningkatkan keterlibatan audiens di Instagram.', action: () => openPreview({ title: 'Filter Live Report', mediaList: ['/portofolio/filter-meta-spark-1.mp4'] }) },
                { name: 'Flyer Seminar – Esa Unggul', desc: 'Perancangan flyer promosi seminar terpadu untuk kebutuhan publikasi cetak maupun media digital.', action: () => openPreview({ title: 'Flyer Seminar – Esa Unggul University', mediaList: ['/portofolio/flyer-esa-unggul-1.jpg'] }) },
                { name: 'Lanyard & ID Card', desc: 'Penerapan identitas visual merek pada media operasional profesional seperti lanyard dan ID Card.', action: () => openPreview({ title: 'Lanyard & ID Card', mediaList: ['/portofolio/lanyard-1.jpg'] }) },
                { name: 'Logo Design', desc: 'Pengembangan desain logo utama sebagai fondasi identitas visual merek yang kuat dan konsisten.', action: () => openPreview({ title: 'Logo Design', mediaList: ['/portofolio/logo-design-1.jpg'] }) },
                { name: 'Story Content – OnTheGoods', desc: 'Perancangan desain story harian dan penawaran promosi yang dinamis untuk menguatkan branding serta engagement OnTheGoods.', action: () => openPreview({ title: 'Story Content – OnTheGoods', mediaList: ['/portofolio/story-onthegoods-1.mp4'] }) }
              ].map((item, idx) => (
                <div key={idx} className="w-[396px] min-h-[229px] p-8 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0">
                  <div className="space-y-2 mb-4">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight truncate">{item.name}</h2>
                    <p className="text-[13px] font-normal text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full inline-flex items-center justify-center h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm mt-auto">
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================= MODALS (Fungsionalitas & State Dipertahankan) ======================= */}
      {/* MODAL SERTIFIKAT */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(20px)' }} onClick={closeCert}>
          <div className="relative w-full max-w-[1200px] rounded-3xl p-4 sm:p-6 flex flex-col overflow-hidden text-slate-900 liquid-glass-3d max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-900/10 shrink-0 mb-3 gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-slate-800 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0">Credential Viewer</span>
                <span className="text-slate-400 shrink-0">&bull;</span>
                <h3 className="text-[14px] sm:text-[18px] font-black text-slate-900 truncate">{activeCert.title}</h3>
              </div>
              <button type="button" onClick={closeCert} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-colors bg-white/80 hover:bg-white border border-white cursor-pointer shadow-sm font-bold shrink-0">&times;</button>
            </div>
            <div className="relative z-10 w-full aspect-[1.414/1] max-h-[75vh] overflow-hidden rounded-2xl bg-white/50 border border-white flex items-center justify-center shadow-inner">
              {activeCert.type === 'pdf' ? (
                <iframe src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full border-0 rounded-2xl bg-white" title={activeCert.title} />
              ) : (
                <img src={activeCert.src} alt={activeCert.title} className="w-full h-full object-contain rounded-2xl bg-white" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL HASIL PORTOFOLIO */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(20px)' }} onClick={closePreview}>
          <div className="relative w-full max-w-[1200px] rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-hidden text-slate-900 flex flex-col justify-between liquid-glass-3d max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-900/10 gap-2">
              <h3 className="text-[16px] sm:text-[20px] font-black text-slate-900 tracking-tight truncate">Portofolio - {activePreview.title}</h3>
              <button type="button" onClick={closePreview} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-slate-950 transition-all bg-white/80 hover:bg-white border border-white shadow-sm font-bold cursor-pointer shrink-0">&times;</button>
            </div>
            <div className="relative z-10 overflow-y-auto space-y-6 pr-1 max-h-[76vh]">
              {activePreview.username ? (
                <div className="space-y-6 sm:space-y-8">
                  <div className="p-4 sm:p-8 rounded-3xl space-y-6 liquid-glass-3d">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-10">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-slate-900 p-[2px] shrink-0 flex items-center justify-center shadow-lg overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                          {activePreview.avatarImg ? (
                            <img src={activePreview.avatarImg} alt={activePreview.displayName || activePreview.username || 'Avatar'} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white font-bold text-sm uppercase rounded-full">{activePreview.username ? activePreview.username.substring(0, 2) : 'IG'}</div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3 sm:space-y-4 flex-1 w-full">
                        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3">
                          <h2 className="text-[18px] sm:text-[22px] font-black text-slate-900 tracking-tight">{activePreview.username}</h2>
                          {activePreview.instagramUrl && (
                            <a href={activePreview.instagramUrl} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-2xl text-[11px] md:text-[12px] font-bold text-white shadow-sm transition-all bg-slate-900 hover:bg-slate-800 backdrop-blur-sm">Kunjungi Profile Instagram</a>
                          )}
                        </div>
                        <div className="flex items-center gap-4 sm:gap-8 text-[12px] sm:text-[13px] border-y border-slate-900/10 py-2 sm:py-2.5 font-normal">
                          <div><span className="font-extrabold text-slate-900">{activePreview.postsCount}</span> <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">posts</span></div>
                          <div><span className="font-extrabold text-slate-900">{activePreview.followersCount}</span> <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">followers</span></div>
                          <div><span className="font-extrabold text-slate-900">{activePreview.followingCount}</span> <span className="text-slate-700 text-[11px] sm:text-[12px] font-medium">following</span></div>
                        </div>
                        <div className="space-y-1 text-[12px] sm:text-[13px] font-normal text-slate-800">
                          <div className="font-bold text-slate-900 text-[15px] sm:text-[17px]">{activePreview.displayName}</div>
                          {activePreview.category && <div className="text-slate-600 font-semibold text-[10px] sm:text-[11px] pb-1">{activePreview.category}</div>}
                          {activePreview.bio?.map((line, idx) => <p key={idx} className="leading-relaxed text-justify">{line}</p>)}
                          {activePreview.website && (
                            <a href={`https://${activePreview.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 pt-1.5 text-[12px] sm:text-[13px]">
                              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
                              <span>{activePreview.website}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-900/10 pb-3">
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800 tracking-wider uppercase flex items-center gap-2">
                          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                          <span>LIVE DISPLAY DESIGN &amp; FEATURED POSTS</span>
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {activePreview.posts?.map((post, index) => (
                          <div key={index} className="rounded-3xl overflow-hidden flex flex-col justify-between liquid-glass-3d min-h-[440px]">
                            <iframe src={post.embedUrl} className="w-full h-full min-h-[440px] border-0 rounded-3xl" scrolling="no" allow="autoplay" title={`Instagram Post ${index + 1}`} />
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
                        <div key={i} onClick={() => setZoomedMedia(file)} className="aspect-square rounded-3xl p-2 sm:p-3 liquid-glass-3d flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-white/60 group">
                          {file.endsWith('.mp4') ? (
                            <video src={file} muted loop autoPlay playsInline className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none" />
                          ) : (
                            <img src={file} alt={`${activePreview.title} #${i + 1}`} className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none drop-shadow-md" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : activePreview.img ? (
                    <div className="w-full flex items-center justify-center rounded-3xl p-4 text-center">
                      <div onClick={() => { if (activePreview.img) { setZoomedMedia(activePreview.img); } }} className="max-w-md w-full aspect-square cursor-pointer transition-all hover:scale-[1.03] rounded-3xl p-4 liquid-glass-3d flex items-center justify-center">
                        {activePreview.img.endsWith('.mp4') ? (
                          <video src={activePreview.img} muted loop autoPlay playsInline className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none" />
                        ) : (
                          <img src={activePreview.img} alt={activePreview.title} className="w-full h-full aspect-square object-contain rounded-2xl pointer-events-none drop-shadow-md" />
                        )}
                      </div>
                    </div>
                  ) : null}
                  <div className="text-center pt-1 space-y-1">
                    <p className="font-extrabold text-slate-900 text-[14px] sm:text-[16px] tracking-tight">Dokumentasi Karya {activePreview.title}</p>
                    <p className="text-[11px] sm:text-[12px] text-slate-700 font-semibold">Klik gambar atau video untuk melihat pratinjau diperbesar</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL LIGHTBOX OVERLAY */}
      {zoomedMedia && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-8 transition-all" style={{ backgroundColor: 'rgba(15, 23, 42, 0.88)', backdropFilter: 'blur(20px)' }} onClick={() => setZoomedMedia(null)}>
          <div className="relative max-w-[1200px] max-h-[90vh] w-full flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setZoomedMedia(null)} className="absolute -top-12 right-0 sm:right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg transition-all cursor-pointer border border-white/30 shadow-xl font-bold">&times;</button>
            {zoomedMedia.endsWith('.mp4') ? (
              <video src={zoomedMedia} controls autoPlay playsInline className="max-h-[80vh] sm:max-h-[85vh] max-w-full rounded-3xl shadow-2xl border border-slate-700 bg-black" />
            ) : (
              <img src={zoomedMedia} alt="Preview diperbesar" className="max-h-[80vh] sm:max-h-[85vh] max-w-full object-contain rounded-3xl shadow-2xl border border-slate-200 bg-white" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
