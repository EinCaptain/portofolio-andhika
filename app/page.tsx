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
    <div className="min-h-screen text-slate-900 font-sans antialiased relative selection:bg-slate-900 selection:text-white bg-[#DDE6F0] pb-10">
      
      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 py-6 md:py-10 w-full max-w-6xl space-y-6 sm:space-y-8">
        
        {/* VIEW 1: BERANDA UTAMA */}
        {currentView === 'main' && (
          <div className="space-y-6 sm:space-y-8">
            {/* HERO CARD - NEW LAYOUT */}
            <section
              id="home"
              className="relative overflow-hidden bg-[#EFF4FA] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 flex flex-col justify-center min-h-[420px] shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between relative z-20 h-full w-full">
                
                {/* Left Content */}
                <div className="flex-1 w-full md:w-[60%] flex flex-col justify-center text-left space-y-6 pt-2">
                  <div className="space-y-2">
                    <div className="text-slate-800 font-black text-[12px] sm:text-[13px] tracking-wider uppercase">
                      MARKETING COMMUNICATION SPECIALIST
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
                      ANDHIKA RIEVALDY
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[550px] w-full pt-1">
                    <a
                      href="mailto:andhikarievaldy@gmail.com"
                      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      andhikarievaldy@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rievaldyandhika/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      linkedin.com/in/rievaldyandhika
                    </a>
                    <a
                      href="https://wa.me/6285179770217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      +62 851-7977-0217
                    </a>
                    <span
                      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[12px] font-bold text-slate-700 bg-white shadow-sm cursor-default"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Tangerang, Indonesia
                    </span>
                  </div>

                  {/* NAV PILL NEW LAYOUT */}
                  <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-sm mt-3 overflow-x-auto hide-scrollbar max-w-full lg:max-w-max">
                    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[12px] font-bold shrink-0">Home</button>
                    <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shrink-0">About</button>
                    <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shrink-0">Services</button>
                    <button onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shrink-0">Work</button>
                    <button onClick={() => document.getElementById('tools')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shrink-0">Software</button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shrink-0">Links</button>
                  </div>
                </div>

                {/* Right Image */}
                {!profileImgError && (
                  <div className="hidden md:flex absolute right-0 bottom-0 h-full w-[45%] lg:w-[40%] justify-end items-end pointer-events-none">
                    <img
                      src="/profile.png"
                      alt="Andhika Rievaldy"
                      className="w-full h-[115%] lg:h-[120%] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                      onError={() => setProfileImgError(true)}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* ABOUT ME CARD - NEW LAYOUT (Flex Row) */}
            <section id="about" className="bg-[#EFF4FA] p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm flex flex-col lg:flex-row gap-10 lg:gap-20">
              {/* Kolom Teks Kiri */}
              <div className="flex-1 space-y-4">
                <span className="text-[12px] font-black text-slate-800 tracking-wider uppercase block">
                  ABOUT ME
                </span>
                <h2 className="text-[28px] sm:text-[34px] font-black text-slate-900 leading-tight">
                  Rievaldy Andhika Koswara, S.I.Kom
                </h2>
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-2xl">
                  Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital.
                  Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                </p>
              </div>

              {/* Kolom Sertifikat Kanan */}
              <div className="w-full lg:w-[420px] shrink-0 space-y-4 flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">
                  CERTIFICATIONS &amp; LICENSES
                </span>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-[13px] font-bold text-slate-800 bg-white hover:shadow-md border border-white transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-3">
                       <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-slate-400 group-hover:text-slate-800 transition-colors"><path d="M12 2l3 6 7 1-5 5 1.5 7L12 18l-6.5 3L7 14l-5-5 7-1 3-6z"></path></svg>
                       Sertifikat LSP BNSP
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-800 transition-colors">&rarr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Digital Marketing RevoU', '/certificates/sertifikat-revou.pdf', 'pdf')}
                    className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-[13px] font-bold text-slate-800 bg-white hover:shadow-md border border-white transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-slate-400 group-hover:text-slate-800 transition-colors"><path d="M12 2l3 6 7 1-5 5 1.5 7L12 18l-6.5 3L7 14l-5-5 7-1 3-6z"></path></svg>
                      Sertifikat Digital Marketing RevoU
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-800 transition-colors">&rarr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat Workshop Copywriter', '/certificates/sertifikat-copywriter.jpg', 'image')}
                    className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-[13px] font-bold text-slate-800 bg-white hover:shadow-md border border-white transition-all cursor-pointer text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-slate-400 group-hover:text-slate-800 transition-colors"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                      Sertifikat Workshop Copywriter
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-800 transition-colors">&rarr;</span>
                  </button>
                </div>
              </div>
            </section>

            {/* SERVICES & EXPERTISE SECTION - NEW LAYOUT */}
            <section id="services" className="space-y-4 w-full">
              <div className="bg-[#EFF4FA] p-6 rounded-full px-10 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">What I Do</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 uppercase mt-0.5">SERVICES &amp; EXPERTISE</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-start hover:shadow-md transition-all space-y-4"
                  >
                    <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-600">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{item.title}</h3>
                      <p className="text-[13px] font-medium text-slate-600 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURED PROJECTS SECTION - NEW LAYOUT */}
            <section id="work" className="space-y-4 w-full">
              <div className="bg-[#EFF4FA] p-6 rounded-full px-10 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Case Studies</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 uppercase mt-0.5">FEATURED PROJECTS</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
                    className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-600">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{proj.name}</h3>
                        <p className="text-[13px] font-medium text-slate-600 mt-2 leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={proj.action}
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full text-[12px] font-bold text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      See Portfolio
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* TOOLS & SOFTWARE PROFICIENCY SECTION - NEW LAYOUT */}
            <section id="tools" className="space-y-4 w-full">
              <div className="bg-[#EFF4FA] p-6 rounded-full px-10 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Technical Stack</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 uppercase mt-0.5">TOOLS &amp; SOFTWARE PROFICIENCY</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                    className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-start hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[16px] font-bold text-slate-900 leading-snug">
                        {tool.name}
                      </h3>
                      <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm shrink-0">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER CARD - NEW LAYOUT */}
            <footer
              id="contact"
              className="bg-[#EFF4FA] p-8 sm:px-12 rounded-[2rem] sm:rounded-full shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Let&apos;s Connect</span>
                <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 uppercase">INTERESTED IN WORKING TOGETHER?</h2>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <a
                  href="mailto:andhikarievaldy@gmail.com"
                  className="text-white font-bold text-[13px] px-8 py-3.5 rounded-full shadow-md bg-slate-800 hover:bg-slate-900 transition-colors"
                >
                  Send Email Direct
                </a>
                <a
                  href="https://www.linkedin.com/in/rievaldyandhika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold text-[13px] px-8 py-3.5 rounded-full bg-white shadow-sm border border-slate-200 hover:shadow-md transition-all"
                >
                  LinkedIn Profile
                </a>
              </div>
            </footer>
          </div>
        )}

        {/* VIEW 2: SOCIAL MEDIA MANAGEMENT */}
        {currentView === 'social-media' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="bg-[#EFF4FA] p-8 rounded-[2rem] sm:rounded-[3rem] shadow-sm space-y-4 w-full">
              <div>
                <button
                  type="button"
                  onClick={goToMain}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  &larr; Kembali ke Beranda
                </button>
              </div>

              <div className="space-y-2">
                <h1 className="text-[28px] sm:text-[34px] font-black text-slate-900 leading-tight">
                  Social Media Management
                </h1>
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-3xl">
                  Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
                </p>
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
                  className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all w-full"
                >
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: COMMERCIAL PHOTOGRAPHY */}
        {currentView === 'photography' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="bg-[#EFF4FA] p-8 rounded-[2rem] sm:rounded-[3rem] shadow-sm space-y-4 w-full">
              <div>
                <button
                  type="button"
                  onClick={goToMain}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  &larr; Kembali ke Beranda
                </button>
              </div>

              <div className="space-y-2">
                <h1 className="text-[28px] sm:text-[34px] font-black text-slate-900 leading-tight">
                  Commercial Photography
                </h1>
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-3xl">
                  Pengarahan visual, konsep tata cahaya, dan pengambilan foto komersial produk yang disempurnakan dengan teknik retouching profesional serta color grading Adobe Lightroom.
                </p>
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
                  className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all w-full"
                >
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: VIDEOGRAPHY & VIDEO EDITING */}
        {currentView === 'videography' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="bg-[#EFF4FA] p-8 rounded-[2rem] sm:rounded-[3rem] shadow-sm space-y-4 w-full">
              <div>
                <button
                  type="button"
                  onClick={goToMain}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  &larr; Kembali ke Beranda
                </button>
              </div>

              <div className="space-y-2">
                <h1 className="text-[28px] sm:text-[34px] font-black text-slate-900 leading-tight">
                  Videography &amp; Video Editing
                </h1>
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-3xl">
                  Produksi dan penyuntingan video komersial, proyek kreatif, serta konten vlogging berbasis penceritaan visual yang dinamis.
                </p>
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
                  className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all w-full"
                >
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: GRAPHIC DESIGN & VISUAL CONTENT */}
        {currentView === 'graphic-design' && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="bg-[#EFF4FA] p-8 rounded-[2rem] sm:rounded-[3rem] shadow-sm space-y-4 w-full">
              <div>
                <button
                  type="button"
                  onClick={goToMain}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  &larr; Kembali ke Beranda
                </button>
              </div>

              <div className="space-y-2">
                <h1 className="text-[28px] sm:text-[34px] font-black text-slate-900 leading-tight">
                  Graphic Design &amp; Visual Content
                </h1>
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-3xl">
                  Perancangan identitas visual, media promosi seminar, materi e-commerce, filter AR interaktif, serta desain merchandise operasional merek.
                </p>
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
                      mediaList: [
                        '/portofolio/flyer-esa-unggul-1.jpg',
                        '/portofolio/flyer-esa-unggul-2.jpg',
                        '/portofolio/flyer-esa-unggul-3.jpg',
                        '/portofolio/flyer-esa-unggul-4.jpg',
                        '/portofolio/flyer-esa-unggul-5.jpg',
                        '/portofolio/flyer-esa-unggul-6.jpg',
                        '/portofolio/flyer-esa-unggul-7.jpg'
                      ]
                    })
                },
                {
                  name: 'Display Marketplace – Glovecare',
                  desc: 'Penataan visual etalase toko digital Glovecare guna menciptakan tampilan produk yang profesional dan menarik minat pembeli.',
                  action: () =>
                    openPreview({
                      title: 'Display Marketplace – Glovecare',
                      mediaList: [
                        '/portofolio/display-glovecare-1.jpg',
                        '/portofolio/display-glovecare-2.jpg',
                        '/portofolio/display-glovecare-3.jpg',
                        '/portofolio/display-glovecare-4.jpg',
                        '/portofolio/display-glovecare-5.jpg'
                      ]
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
                      mediaList: [
                        '/portofolio/flyer-esa-unggul-1.jpg',
                        '/portofolio/flyer-esa-unggul-2.jpg',
                        '/portofolio/flyer-esa-unggul-3.jpg',
                        '/portofolio/flyer-esa-unggul-4.jpg',
                        '/portofolio/flyer-esa-unggul-5.jpg',
                        '/portofolio/flyer-esa-unggul-6.jpg',
                        '/portofolio/flyer-esa-unggul-7.jpg'
                      ]
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
                      mediaList: [
                        '/portofolio/logo-design-1.jpg',
                        '/portofolio/logo-design-2.jpg',
                        '/portofolio/logo-design-3.jpg',
                        '/portofolio/logo-design-4.jpg',
                        '/portofolio/logo-design-5.jpg',
                        '/portofolio/logo-design-6.jpg',
                        '/portofolio/logo-design-7.jpg'
                      ]
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
                  className="bg-[#EFF4FA] p-8 rounded-[2rem] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all w-full"
                >
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>See Portfolio</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================= MODALS ======================= */}
      {/* MODAL SERTIFIKAT */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(10px)' }}
          onClick={closeCert}
        >
          <div
            className="relative w-full max-w-[1000px] rounded-[2rem] p-4 sm:p-6 flex flex-col overflow-hidden text-slate-900 bg-white max-h-[92vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4 shrink-0">
              <h3 className="text-[16px] sm:text-[18px] font-black text-slate-900 truncate">
                {activeCert.title}
              </h3>
              <button
                type="button"
                onClick={closeCert}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors font-bold shrink-0"
              >
                &times;
              </button>
            </div>
            <div className="relative w-full aspect-[1.414/1] max-h-[75vh] overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
              {activeCert.type === 'pdf' ? (
                <iframe
                  src={`${activeCert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 rounded-xl"
                  title={activeCert.title}
                />
              ) : (
                <img
                  src={activeCert.src}
                  alt={activeCert.title}
                  className="w-full h-full object-contain rounded-xl"
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
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(10px)' }}
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-[1200px] rounded-[2.5rem] p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-hidden text-slate-900 flex flex-col justify-between bg-white max-h-[92vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 shrink-0">
              <h3 className="text-[18px] sm:text-[22px] font-black text-slate-900 tracking-tight truncate">
                Portofolio - {activePreview.title}
              </h3>
              <button
                type="button"
                onClick={closePreview}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors font-bold shrink-0"
              >
                &times;
              </button>
            </div>

            <div className="overflow-y-auto space-y-6 pr-1 max-h-[76vh]">
              {activePreview.username ? (
                <div className="space-y-6">
                  <div className="p-6 sm:p-8 rounded-[2rem] bg-[#EFF4FA] space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shrink-0 flex items-center justify-center shadow-sm">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                          {activePreview.avatarImg ? (
                            <img src={activePreview.avatarImg} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <span className="font-bold text-slate-500">IG</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3 flex-1 w-full">
                        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3">
                          <h2 className="text-[20px] sm:text-[24px] font-black text-slate-900 tracking-tight">
                            {activePreview.username}
                          </h2>
                          {activePreview.instagramUrl && (
                            <a href={activePreview.instagramUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl text-[12px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                              Visit Instagram
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-6 text-[13px] border-y border-slate-200 py-2.5 font-medium text-slate-700">
                          <div><span className="font-extrabold text-slate-900">{activePreview.postsCount}</span> posts</div>
                          <div><span className="font-extrabold text-slate-900">{activePreview.followersCount}</span> followers</div>
                          <div><span className="font-extrabold text-slate-900">{activePreview.followingCount}</span> following</div>
                        </div>
                        <div className="text-[13px] font-medium text-slate-700 leading-relaxed">
                          <div className="font-bold text-slate-900 text-[15px]">{activePreview.displayName}</div>
                          {activePreview.category && <div className="text-slate-500 text-[11px] pb-1 font-semibold">{activePreview.category}</div>}
                          {activePreview.bio?.map((line, idx) => <p key={idx}>{line}</p>)}
                          {activePreview.website && (
                            <a href={`https://${activePreview.website}`} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 block mt-1">
                              {activePreview.website}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* INSTAGRAM EMBEDS */}
                    <div className="space-y-4 mt-6 border-t border-slate-200 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activePreview.posts?.map((post, index) => (
                          <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-sm min-h-[440px]">
                            <iframe src={post.embedUrl} className="w-full h-full min-h-[440px] border-0" scrolling="no" allow="autoplay" title={`IG Post ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {activePreview.mediaList && activePreview.mediaList.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-[2rem] bg-[#EFF4FA]">
                      {activePreview.mediaList.map((file, i) => (
                        <div key={i} onClick={() => setZoomedMedia(file)} className="aspect-square rounded-2xl bg-white p-2 sm:p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center group overflow-hidden">
                          {file.endsWith('.mp4') ? (
                            <video src={file} muted loop autoPlay playsInline className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                          ) : (
                            <img src={file} alt={`Preview ${i}`} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : activePreview.img && (
                    <div className="flex items-center justify-center p-4 sm:p-6 bg-[#EFF4FA] rounded-[2rem]">
                      <div onClick={() => setZoomedMedia(activePreview.img!)} className="max-w-md w-full aspect-square rounded-2xl bg-white p-3 sm:p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center overflow-hidden">
                        {activePreview.img.endsWith('.mp4') ? (
                          <video src={activePreview.img} muted loop autoPlay playsInline className="w-full h-full object-cover rounded-xl" />
                        ) : (
                          <img src={activePreview.img} alt={activePreview.title} className="w-full h-full object-cover rounded-xl" />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="text-center pt-2">
                    <p className="text-[12px] text-slate-500 font-medium">Klik media untuk melihat ukuran penuh</p>
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
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
          onClick={() => setZoomedMedia(null)}
        >
          <div className="relative max-w-[1200px] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setZoomedMedia(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 font-bold"
            >
              &times;
            </button>
            {zoomedMedia.endsWith('.mp4') ? (
              <video src={zoomedMedia} controls autoPlay playsInline className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-slate-700 bg-black" />
            ) : (
              <img src={zoomedMedia} alt="Zoomed Preview" className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl bg-black" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
