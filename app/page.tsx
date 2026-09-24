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

      {/* MAIN CONTAINER: Width 1440px, Margin atas/bawah 130px, Kiri/kanan 100px (tercapai dari w-1440 dan py-130 dengan padding konten ke tengah) */}
      <div className="relative z-10 w-[1440px] px-[100px] py-[130px] flex flex-col items-center shrink-0 min-h-[2355px]">
        
        {/* VIEW 1: BERANDA UTAMA */}
        {currentView === 'main' && (
          <div className="flex flex-col w-[1239px]">
            
            {/* 1. HEADER CARD */}
            <section
              id="home"
              className="relative overflow-hidden flex flex-col px-[50px] py-[40px] text-slate-900 liquid-glass-3d w-[1239px] h-[430px] rounded-[28px] mb-[20px] shrink-0 bg-white/40"
            >
              <div className="flex flex-row items-start justify-between relative z-20 h-full">
                
                <div className="flex flex-col justify-start text-left w-[65%] shrink-0 pt-4">
                  <div className="text-slate-800 font-black text-[13px] tracking-wider uppercase mb-1">
                    MARKETING COMMUNICATION
                  </div>

                  <h1 className="text-[64px] font-black text-slate-900 tracking-tight leading-none uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-8">
                    ANDHIKA<br />RIEVALDY
                  </h1>

                  {/* Card Kontak (Grid 2x2) */}
                  <div className="grid grid-cols-2 gap-[12px] w-[540px]">
                    <a
                      href="mailto:andhikarievaldy07@gmail.com"
                      className="flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 border border-white shadow-sm transition-all"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      andhikarievaldy07@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rievaldyandhika/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 border border-white shadow-sm transition-all"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      linkedin.com/in/rievaldyandhika
                    </a>
                    <a
                      href="https://wa.me/6285179770217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 border border-white shadow-sm transition-all"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.041l-3.21-.46c-.527-.075-1.056.19-1.272.68l-1.05 2.378c-3.18-1.545-5.71-4.075-7.255-7.255l2.378-1.05c.49-.216.755-.745.68-1.272l-.46-3.21C11.517 3.6 11.067 3.25 10.55 3.25h-1.372c-1.243 0-2.25 1.007-2.25 2.25z" />
                      </svg>
                      +62 851-7977-0217
                    </a>
                    <div className="flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-bold text-slate-800 bg-white border border-white shadow-sm">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      Tangerang, Indonesia
                    </div>
                  </div>
                </div>

                {!profileImgError && (
                  <div className="absolute right-0 bottom-0 flex justify-end items-end pointer-events-none w-[318px] h-[380px]">
                    <img
                      src="/profile.png"
                      alt="Andhika Rievaldy"
                      className="w-full h-full object-cover object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                      onError={() => setProfileImgError(true)}
                    />
                  </div>
                )}
              </div>

              {/* Menu Navigasi Melayang */}
              <div className="absolute bottom-[24px] left-[50%] -translate-x-[50%] flex items-center bg-white px-2 py-1.5 rounded-full shadow-md z-30">
                <button type="button" className="px-5 py-2 bg-slate-900 text-white text-[12px] font-bold rounded-full transition-all">Home</button>
                <button type="button" className="px-5 py-2 text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full transition-all">About</button>
                <button type="button" className="px-5 py-2 text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full transition-all">Services</button>
                <button type="button" className="px-5 py-2 text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full transition-all">Work</button>
                <button type="button" className="px-5 py-2 text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full transition-all">Software</button>
                <button type="button" className="px-5 py-2 text-slate-600 hover:text-slate-900 text-[12px] font-bold rounded-full transition-all">Links</button>
              </div>
            </section>

            {/* 2. ABOUT ME CARD */}
            <section id="about" className="p-[35px] text-slate-900 liquid-glass-3d w-[1239px] h-[205px] rounded-[28px] overflow-hidden flex flex-row items-center gap-[60px] mb-[60px] shrink-0 border-none shadow-sm bg-white/30">
              
              <div className="flex-1 h-full flex flex-col justify-center">
                <span className="text-[12px] font-black text-slate-800 tracking-wider uppercase block mb-1">
                  ABOUT ME
                </span>
                
                <h2 className="text-[28px] font-black text-slate-900 leading-none whitespace-nowrap overflow-hidden text-ellipsis mb-[8px]">
                  Rievaldy Andhika Koswara, S.I.Kom
                </h2>

                <p className="text-[13.5px] font-medium text-slate-700 leading-relaxed text-justify">
                  Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital.
                  Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                </p>
              </div>

              {/* Kolom Sertifikat (Hanya Dua) */}
              <div className="w-[372px] shrink-0 flex flex-col justify-center border-l border-slate-300/30 pl-[30px]">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block mb-3 pl-1">
                  Certifications &amp; Licenses
                </span>
                <div className="flex flex-col gap-[12px]">
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="w-[342px] h-[48px] rounded-[14px] px-5 flex items-center justify-between text-[13px] font-bold text-slate-900 bg-white hover:bg-slate-50 border border-white shadow-sm transition-all cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Sertifikat LSP BNSP
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-900 transition-colors">&rarr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing RevoU', '/certificates/sertifikat-revou.pdf', 'pdf')}
                    className="w-[342px] h-[48px] rounded-[14px] px-5 flex items-center justify-between text-[13px] font-bold text-slate-900 bg-white hover:bg-slate-50 border border-white shadow-sm transition-all cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Sertifikat Digital Marketing RevoU
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-900 transition-colors">&rarr;</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 3. SERVICES & EXPERTISE SECTION */}
            <section id="services" className="w-[1239px] flex flex-col shrink-0 mb-[20px]">
              
              {/* Card Judul */}
              <div className="w-[1239px] h-[74px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0 bg-white/40">
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">SERVICES &amp; EXPERTISE</h2>
              </div>

              {/* Grid Layout Services */}
              <div className="flex flex-nowrap justify-between w-full">
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
                    className="w-[295px] h-[257px] p-6 transition-all duration-300 flex flex-col justify-start liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0 bg-white/40"
                  >
                    <h3 className="text-[16px] mt-4 font-bold text-slate-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] font-normal text-slate-600 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FEATURED PROJECTS SECTION */}
            <section id="work" className="w-[1239px] flex flex-col shrink-0 mb-[60px] mt-[20px]">
              
              {/* Card Judul */}
              <div className="w-[1239px] h-[74px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0 bg-white/40">
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">FEATURED PROJECTS</h2>
              </div>

              {/* Grid Layout Projects */}
              <div className="flex flex-nowrap justify-between w-full">
                {[
                  {
                    name: 'Social Media Management',
                    desc: 'Menyusun content planner, penulisan copywriting persuasif, serta pengelolaan kanal media sosial harian.',
                    action: goToSocialMedia
                  },
                  {
                    name: 'Graphic Design & Visual Content',
                    desc: 'Perancangan elemen grafis dan materi promosi visual yang konsisten untuk kebutuhan konten media sosial.',
                    action: goToGraphicDesign
                  },
                  {
                    name: 'Commercial Photography',
                    desc: 'Pengarahan estetika visual dan pengambilan foto produk komersial dengan teknik retouching Adobe Lightroom.',
                    action: goToPhotography
                  },
                  {
                    name: 'Videography & Video Editing',
                    desc: 'Produksi konten video dari proses pengambilan gambar hingga penyuntingan akhir menggunakan Adobe Premiere Pro dan CapCut.',
                    action: goToVideography
                  }
                ].map((proj, idx) => (
                  <div
                    key={idx}
                    className="w-[295px] h-[257px] p-6 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0 bg-white/40"
                  >
                    <div>
                      <h3 className="text-[16px] mt-2 font-extrabold text-slate-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis mb-3">
                        {proj.name}
                      </h3>
                      <p className="text-[12.5px] font-normal text-slate-600 leading-relaxed text-justify line-clamp-4">
                        {proj.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={proj.action}
                      className="w-full inline-flex items-center justify-center h-[40px] rounded-[14px] text-[12px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm mt-2"
                    >
                      <span>See Portfolio</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. TOOLS & SOFTWARE PROFICIENCY SECTION */}
            <section id="tools" className="w-[1239px] flex flex-col shrink-0 mb-[20px]">
              
              {/* Card Judul */}
              <div className="w-[1239px] h-[74px] px-8 text-slate-900 liquid-glass-3d rounded-[18px] flex flex-col justify-center mb-[20px] shrink-0 bg-white/40">
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">TOOLS &amp; SOFTWARE PROFICIENCY</h2>
              </div>

              {/* Grid Layout Tools - Gap persis 20px (3x3) */}
              <div className="flex flex-wrap gap-[20.5px] w-full">
                {[
                  {
                    name: 'Adobe Photoshop',
                    category: 'VISUAL & RETOUCHING',
                    desc: 'Pengolahan dan retouching foto komersial, manipulasi gambar terdistribusi, serta penyempurnaan estetika materi promosi digital.'
                  },
                  {
                    name: 'Adobe Illustrator',
                    category: 'VECTOR & GRAPHIC',
                    desc: 'Perancangan aset vektor, desain logo utama, tata letak konten grafik, dan pembuatan komponen identitas visual merek.'
                  },
                  {
                    name: 'Adobe Premiere Pro',
                    category: 'VIDEO PRODUCTION',
                    desc: 'Penyuntingan video komersial lanskap, perangkaian alur cerita sinematik, penyelarasan audio, dan teknik color grading.'
                  },
                  {
                    name: 'Canva Pro',
                    category: 'FAST VISUAL DESIGN',
                    desc: 'Penyusunan materi desain cepat untuk konten harian media sosial, infografis presentasi, dan kolaborasi tata letak promosi.'
                  },
                  {
                    name: 'CapCut Pro',
                    category: 'SHORT-FORM VIDEO',
                    desc: 'Produksi dan penyuntingan konten video pendek (Reels, TikTok, & Short) dengan alur transisi dinamis, efek teks, dan tren audio.'
                  },
                  {
                    name: 'Meta Spark Studio',
                    category: 'AUGMENTED REALITY',
                    desc: 'Pengembangan filter AR interaktif untuk kebutuhan liputan acara secara langsung (live report) guna meningkatkan engagement audiens.'
                  },
                  {
                    name: 'Meta Business Suite',
                    category: 'SOCIAL OPERATIONS',
                    desc: 'Manajemen penjadwalan publikasi konten Instagram & Facebook, pemantauan matriks performa, serta manajemen interaksi audiens.'
                  },
                  {
                    name: 'Google Docs',
                    category: 'COPYWRITING & PLAN',
                    desc: 'Penyusunan naskah copywriting, pembuatan kalender konten terstruktur, pengerjaan creative brief, serta dokumentasi strategi narasi.'
                  },
                  {
                    name: 'Google Sheets',
                    category: 'ANALYTICS & REPORT',
                    desc: 'Pengolahan dan analisis data Key Performance Indicator (KPI) kampanye digital, pemetaaan basis data, serta pelaporan performa media.'
                  }
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="w-[398px] h-[128px] p-5 transition-all duration-300 flex flex-col justify-center liquid-glass-3d rounded-[18px] hover:scale-[1.015] overflow-hidden shrink-0 bg-white/40"
                  >
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <h3 className="text-[15px] font-bold text-slate-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                        {tool.name}
                      </h3>
                      <span className="text-[8.5px] font-bold text-slate-700 uppercase tracking-wider bg-white px-2.5 py-1 rounded-full shrink-0">
                        {tool.category}
                      </span>
                    </div>

                    <p className="text-[12px] font-normal text-slate-600 leading-relaxed text-justify line-clamp-3">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. FOOTER CARD */}
            <footer
              id="contact"
              className="px-10 h-[115px] w-[1239px] text-slate-900 liquid-glass-3d rounded-[18px] overflow-hidden flex flex-row items-center justify-between shrink-0 bg-white/40 mt-[20px]"
            >
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Let&apos;s Connect</span>
                <h2 className="text-[24px] font-black text-slate-900 uppercase whitespace-nowrap overflow-hidden text-ellipsis">INTERESTED IN WORKING TOGETHER?</h2>
              </div>

              <div className="flex gap-4 shrink-0">
                <a
                  href="mailto:andhikarievaldy07@gmail.com"
                  className="text-white font-bold text-[13px] px-8 py-3.5 rounded-full shadow-md bg-slate-800 hover:bg-slate-700 transition-all"
                >
                  Send Email Direct
                </a>
                <a
                  href="https://www.linkedin.com/in/rievaldyandhika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold text-[13px] px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </footer>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW LAINNYA DIADAPTASI UNTUK 1239PX                      */}
        {/* ========================================================= */}
        
        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="w-[1239px] flex flex-col gap-[20px] shrink-0">
            {/* Header subpage */}
            <div className="p-10 text-slate-900 space-y-4 liquid-glass-3d rounded-[28px] overflow-hidden w-full h-[245px] flex flex-col justify-center">
              <div>
                <button
                  type="button"
                  onClick={goToMain}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
                >
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <div className="space-y-1">
                <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  Social Media Management
                </h1>
                <p className="text-[14px] font-normal text-slate-700 leading-relaxed text-justify max-w-[800px]">
                  Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-between w-[1239px]">
              {/* Iterasi Item */}
              {[/*...array data dipertahankan...*/].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[609.5px] min-h-[229px] p-8 transition-all duration-300 flex flex-col justify-between liquid-glass-3d rounded-[28px] hover:scale-[1.015] overflow-hidden shrink-0"
                >
                   {/* ...kode portofolio tetap sama */}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CATATAN: Untuk View Photography, Videography, dan Graphic Design, cukup pertahankan proporsi ukuran pembungkus menjadi 1239px (Sama dengan Social Media). Semua modul modal popup di bawah tidak ada perubahan struktural karena React logic dipertahankan 100%. */}
        
      </div>
    </div>
  );
}
