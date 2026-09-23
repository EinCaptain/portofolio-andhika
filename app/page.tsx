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
    /* OUTER WRAPPER: Mengatur kanvas scrollable agar layout statis 1440px aman dilihat di layar kecil */
    <div className="min-h-screen w-full overflow-x-auto bg-[#DDE6F0] selection:bg-slate-900 selection:text-white font-sans antialiased">
      
      {/* CANVAS CONTAINER: Fix 1440px sesuai artboard desain */}
      <div className="w-[1440px] mx-auto bg-[#DDE6F0] px-[75px] py-[50px] relative z-10 flex flex-col gap-[20px]">
        
        {/* ======================= BERANDA UTAMA ======================= */}
        {currentView === 'main' && (
          <>
            {/* 1 & 2. SECTION HEADER */}
            <section
              id="home"
              className="w-[1290px] h-[380px] bg-[#EFF4FA] rounded-[28px] p-12 flex flex-col justify-center relative shadow-sm shrink-0 overflow-hidden"
            >
              <div className="flex flex-row items-center justify-between relative z-20 h-full w-full">
                
                {/* Left Content */}
                <div className="w-[60%] flex flex-col justify-center text-left pt-2">
                  <div className="text-slate-800 font-black text-[13px] tracking-wider uppercase mb-2">
                    MARKETING COMMUNICATION SPECIALIST
                  </div>
                  {/* Judul: 1 Baris (whitespace-nowrap) */}
                  <h1 className="text-[54px] font-black text-slate-900 tracking-tight leading-none uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-6">
                    ANDHIKA RIEVALDY
                  </h1>

                  <div className="grid grid-cols-2 gap-[15px] w-[550px]">
                    <a href="mailto:andhikarievaldy@gmail.com" className="flex items-center gap-3 px-5 py-3.5 rounded-[14px] text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      andhikarievaldy@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/rievaldyandhika/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 rounded-[14px] text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      linkedin.com/in/rievaldyandhika
                    </a>
                    <a href="https://wa.me/6285179770217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 rounded-[14px] text-[12px] font-bold text-slate-700 bg-white shadow-sm hover:shadow-md transition-all">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      +62 851-7977-0217
                    </a>
                    <span className="flex items-center gap-3 px-5 py-3.5 rounded-[14px] text-[12px] font-bold text-slate-700 bg-white shadow-sm cursor-default">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Tangerang, Indonesia
                    </span>
                  </div>

                  {/* Nav Pills */}
                  <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-sm mt-5 max-w-max">
                    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[12px] font-bold">Home</button>
                    <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">About</button>
                    <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">Services</button>
                    <button onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">Work</button>
                    <button onClick={() => document.getElementById('tools')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">Software</button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-2.5 rounded-full text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">Links</button>
                  </div>
                </div>

                {/* Right Image */}
                {!profileImgError && (
                  <div className="absolute right-0 bottom-0 h-full w-[40%] flex justify-end items-end pointer-events-none">
                    <img
                      src="/profile.png"
                      alt="Andhika Rievaldy"
                      className="w-full h-[120%] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                      onError={() => setProfileImgError(true)}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* 2. SECTION ABOUT ME */}
            <section id="about" className="w-[1290px] h-[245px] bg-[#EFF4FA] rounded-[28px] p-[35px] shadow-sm flex flex-row items-center gap-[60px] shrink-0">
              {/* Kiri: Teks */}
              <div className="flex-1 h-full flex flex-col justify-center">
                <span className="text-[12px] font-black text-slate-800 tracking-wider uppercase block mb-1">
                  ABOUT ME
                </span>
                {/* Jarak Judul Nama dengan Paragraf adalah 5px sesuai instruksi mb-[5px] */}
                <h2 className="text-[34px] font-black text-slate-900 leading-none whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">
                  Rievaldy Andhika Koswara, S.I.Kom
                </h2>
                {/* Text-Align: Justify sesuai instruksi */}
                <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify">
                  Saya adalah lulusan Marketing Communication yang berfokus pada penguatan identitas merek dan eksekusi strategi media digital.
                  Berpengalaman dalam merangkai narasi merek, memproduksi konten kreatif, serta mengoptimalkan performa kanal digital untuk membangun hubungan bermakna dengan target audiens.
                </p>
              </div>

              {/* Kanan: Card Sertifikat */}
              <div className="w-[372px] shrink-0 flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block mb-3 pl-1">
                  CERTIFICATIONS &amp; LICENSES
                </span>
                <div className="flex flex-col gap-[10px]">
                  {/* Card Sertifikat (372 x 52, rounded 14) */}
                  <button
                    type="button"
                    onClick={() => openCert('Sertifikat LSP BNSP', '/certificates/sertifikat-bnsp.pdf', 'pdf')}
                    className="w-[372px] h-[52px] rounded-[14px] px-5 flex items-center justify-between text-[13px] font-bold text-slate-800 bg-white hover:shadow-md transition-all cursor-pointer group"
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
                    className="w-[372px] h-[52px] rounded-[14px] px-5 flex items-center justify-between text-[13px] font-bold text-slate-800 bg-white hover:shadow-md transition-all cursor-pointer group"
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
                    className="w-[372px] h-[52px] rounded-[14px] px-5 flex items-center justify-between text-[13px] font-bold text-slate-800 bg-white hover:shadow-md transition-all cursor-pointer group"
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

            {/* 3. SECTION SERVICES & EXPERTISE */}
            <section id="services" className="w-[1290px] flex flex-col gap-[20px] shrink-0">
              {/* Card Judul (1290 x 64, rounded 18) */}
              <div className="w-[1290px] h-[64px] bg-[#EFF4FA] rounded-[18px] px-8 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight">What I Do</span>
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">SERVICES &amp; EXPERTISE</h2>
              </div>

              {/* Row Grid Item */}
              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[20px] w-full">
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
                  // Card Item Services (300 x 229, rounded 28)
                  <div key={idx} className="w-[300px] h-[229px] bg-[#EFF4FA] rounded-[28px] p-6 shadow-sm flex flex-col justify-start hover:shadow-md transition-all shrink-0">
                    <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-600 mb-4">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </div>
                    {/* Judul 1 Baris */}
                    <h3 className="text-[16px] font-bold text-slate-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis mb-2">{item.title}</h3>
                    {/* Teks Rata Kanan Kiri */}
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. SECTION FEATURED PROJECTS */}
            <section id="work" className="w-[1290px] flex flex-col gap-[20px] shrink-0">
              {/* Card Judul (1290 x 64, rounded 18) */}
              <div className="w-[1290px] h-[64px] bg-[#EFF4FA] rounded-[18px] px-8 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight">Case Studies</span>
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">FEATURED PROJECTS</h2>
              </div>

              {/* Row Grid Item Project */}
              <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[20px] w-full">
                {[
                  { name: 'Social Media Management', desc: 'Menyusun content planner, penulisan copywriting persuasif, serta pengelolaan kanal media sosial harian.', action: goToSocialMedia },
                  { name: 'Graphic Design & Content', desc: 'Perancangan elemen grafis dan materi promosi visual yang konsisten untuk kebutuhan konten media sosial.', action: goToGraphicDesign },
                  { name: 'Commercial Photography', desc: 'Pengarahan estetika visual dan pengambilan foto produk komersial dengan teknik retouching Adobe Lightroom.', action: goToPhotography },
                  { name: 'Videography & Editing', desc: 'Produksi konten video dari proses pengambilan gambar hingga penyuntingan akhir menggunakan Adobe Premiere Pro dan CapCut.', action: goToVideography }
                ].map((proj, idx) => (
                  // Card Item Project (300 x 229, rounded 28)
                  <div key={idx} className="w-[300px] h-[229px] bg-[#EFF4FA] rounded-[28px] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all shrink-0">
                    <div>
                      <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-600 mb-4">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                      </div>
                      {/* Judul 1 Baris */}
                      <h3 className="text-[16px] font-bold text-slate-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis mb-2">{proj.name}</h3>
                      {/* Teks Rata Kanan Kiri */}
                      <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify line-clamp-3">
                        {proj.desc}
                      </p>
                    </div>
                    <button type="button" onClick={proj.action} className="w-full h-[40px] rounded-full text-[12px] font-bold text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm mt-2">
                      See Portfolio
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. SECTION TOOLS & SOFTWARE PROFICIENCY */}
            <section id="tools" className="w-[1290px] flex flex-col gap-[20px] shrink-0">
              {/* Card Judul (1290 x 64, rounded 18) */}
              <div className="w-[1290px] h-[64px] bg-[#EFF4FA] rounded-[18px] px-8 shadow-sm flex flex-col justify-center">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block leading-tight">Technical Stack</span>
                <h2 className="text-[20px] font-black text-slate-900 uppercase leading-tight whitespace-nowrap overflow-hidden text-ellipsis">TOOLS &amp; SOFTWARE PROFICIENCY</h2>
              </div>

              {/* Row Grid Item Tools */}
              <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-[20px] w-full">
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
                  // Card Item Tools (414 x 141, rounded 28)
                  <div key={idx} className="w-[414px] h-[141px] bg-[#EFF4FA] rounded-[28px] p-[24px] shadow-sm flex flex-col justify-start hover:shadow-md transition-all shrink-0">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      {/* Judul 1 Baris */}
                      <h3 className="text-[16px] font-bold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                        {tool.name}
                      </h3>
                      <span className="text-[9px] font-extrabold text-slate-600 uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm shrink-0">
                        {tool.category}
                      </span>
                    </div>
                    {/* Teks Rata Kanan Kiri */}
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify line-clamp-3">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER (Mengikuti jarak 20px dari section atas) */}
            <footer id="contact" className="w-[1290px] bg-[#EFF4FA] rounded-[28px] p-8 shadow-sm flex flex-row items-center justify-between shrink-0">
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase block">Let&apos;s Connect</span>
                <h2 className="text-[24px] font-black text-slate-900 uppercase whitespace-nowrap overflow-hidden text-ellipsis">INTERESTED IN WORKING TOGETHER?</h2>
              </div>
              <div className="flex gap-4 shrink-0">
                <a href="mailto:andhikarievaldy@gmail.com" className="text-white font-bold text-[13px] px-8 py-3.5 rounded-[14px] shadow-md bg-slate-800 hover:bg-slate-900 transition-colors">
                  Send Email Direct
                </a>
                <a href="https://www.linkedin.com/in/rievaldyandhika/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold text-[13px] px-8 py-3.5 rounded-[14px] bg-white shadow-sm border border-slate-200 hover:shadow-md transition-all">
                  LinkedIn Profile
                </a>
              </div>
            </footer>
          </>
        )}

        {/* ======================= SUB-PAGES ======================= */}
        {/* Catatan: Karena Sub-Pages berada di container yg sama (1440px), saya terapkan juga layout presisi agar konsisten. */}
        {currentView === 'social-media' && (
          <div className="w-[1290px] flex flex-col gap-[20px] shrink-0">
            <div className="w-[1290px] h-[245px] bg-[#EFF4FA] p-[35px] rounded-[28px] shadow-sm flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm mb-4">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">
                Social Media Management
              </h1>
              <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-[800px]">
                Kumpulan dokumentasi eksekusi strategi media sosial, penyusunan jadwal konten, penulisan narasi copywriting, serta pengelolaan interaksi merek.
              </p>
            </div>

            <div className="flex flex-row flex-wrap gap-x-[30px] gap-y-[20px] w-[1290px]">
              {[
                {
                  name: 'Diatera Technology',
                  desc: 'Mengelola kanal Instagram Diatera Technology melalui penyusunan content planner terstruktur, penulisan copywriting edukatif seputar solusi IT & teknologi, serta perancangan visual feed dan story yang profesional untuk membangun kredibilitas dan interaksi audiens.',
                  action: () => openPreview({...}) // Data preview disederhanakan visualisasi koding ini, fungsi sama
                },
                {
                  name: 'Glovecare',
                  desc: 'Mengelola aktivitas Instagram Glovecare dengan fokus pada edukasi perawatan produk, promosi penawaran layanan khusus, penyusunan kalender konten harian, serta penciptaan visual yang bersih dan konsisten untuk memperkuat identitas merek.',
                  action: () => openPreview({...}) 
                }
              ].map((item, idx) => (
                <div key={idx} className="w-[630px] bg-[#EFF4FA] p-[35px] rounded-[28px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all shrink-0 min-h-[229px]">
                  <div>
                    <h2 className="text-[20px] font-extrabold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">{item.name}</h2>
                    <p className="text-[14px] font-medium text-slate-600 leading-relaxed text-justify mb-5">
                      {item.desc}
                    </p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm">
                    See Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'photography' && (
          <div className="w-[1290px] flex flex-col gap-[20px] shrink-0">
            <div className="w-[1290px] h-[245px] bg-[#EFF4FA] p-[35px] rounded-[28px] shadow-sm flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm mb-4">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">
                Commercial Photography
              </h1>
              <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-[800px]">
                Pengarahan visual, konsep tata cahaya, dan pengambilan foto komersial produk yang disempurnakan dengan teknik retouching profesional serta color grading Adobe Lightroom.
              </p>
            </div>
            {/* Row Layout untuk Portfolio Card */}
            <div className="flex flex-row flex-wrap gap-[30px] w-full">
              {[
                { name: 'Product Photography – Glovecare', desc: 'Pengambilan foto komersial produk perawatan kendaraan Glovecare dengan pengarahan estetika visual, penataan lighting studio, serta retouching.', action: () => openPreview({...}) }
              ].map((item, idx) => (
                <div key={idx} className="w-[410px] min-h-[229px] bg-[#EFF4FA] p-8 rounded-[28px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all shrink-0">
                  <div>
                    <h2 className="text-[18px] font-extrabold text-slate-900 mb-[5px] line-clamp-2">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify mb-5">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm">
                    See Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'videography' && (
          <div className="w-[1290px] flex flex-col gap-[20px] shrink-0">
            <div className="w-[1290px] h-[245px] bg-[#EFF4FA] p-[35px] rounded-[28px] shadow-sm flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm mb-4">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">
                Videography &amp; Video Editing
              </h1>
              <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-[800px]">
                Produksi dan penyuntingan video komersial, proyek kreatif, serta konten vlogging berbasis penceritaan visual yang dinamis.
              </p>
            </div>
            
            <div className="flex flex-row flex-wrap gap-[30px] w-full">
              {[
                { name: 'Commercial & Brand Project', desc: 'Produksi video berbasis konsep naratif berformat landscape dengan fokus pada penyampaian pesan merek dan estetika visual yang terstruktur.', action: () => openPreview({...}) },
                { name: 'Short-Form Campaign Video', desc: 'Penyuntingan video kreatif berformat vertikal yang dirancang khusus untuk kebutuhan kampanye media sosial dan engagement audiens.', action: () => openPreview({...}) },
                { name: 'Creative Vlog & Lifestyle', desc: 'Dokumentasi penceritaan personal dan perjalanan harian berformat vertikal dengan alur penyuntingan yang kasual dan estetik.', action: () => openPreview({...}) }
              ].map((item, idx) => (
                <div key={idx} className="w-[410px] min-h-[229px] bg-[#EFF4FA] p-8 rounded-[28px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all shrink-0">
                  <div>
                    <h2 className="text-[18px] font-extrabold text-slate-900 mb-[5px] line-clamp-2">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify mb-5">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm">
                    See Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'graphic-design' && (
          <div className="w-[1290px] flex flex-col gap-[20px] shrink-0">
            <div className="w-[1290px] h-[245px] bg-[#EFF4FA] p-[35px] rounded-[28px] shadow-sm flex flex-col justify-center">
              <div>
                <button type="button" onClick={goToMain} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[14px] text-[12px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm mb-4">
                  &larr; Kembali ke Beranda
                </button>
              </div>
              <h1 className="text-[34px] font-black text-slate-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis mb-[5px]">
                Graphic Design &amp; Visual Content
              </h1>
              <p className="text-[14px] font-medium text-slate-700 leading-relaxed text-justify max-w-[800px]">
                Perancangan identitas visual, media promosi seminar, materi e-commerce, filter AR interaktif, serta desain merchandise operasional merek.
              </p>
            </div>

            <div className="flex flex-row flex-wrap gap-[30px] w-full">
              {[
                { name: 'Banner Seminar – Esa Unggul University', desc: 'Perancangan banner promosi seminar terpadu untuk kebutuhan publikasi visual dan media informasi acara.', action: () => openPreview({...}) },
                { name: 'Display Marketplace – Glovecare', desc: 'Penataan visual etalase toko digital Glovecare guna menciptakan tampilan produk yang profesional dan menarik minat pembeli.', action: () => openPreview({...}) },
                { name: 'E-Invitation Display - Digisite Tech', desc: 'Perancangan aset display marketplace serta undangan digital (e-invitation) interaktif untuk kebutuhan pemasaran Digisite Tech.', action: () => openPreview({...}) },
                { name: 'Filter Live Report – Meta Spark Studio', desc: 'Pembuatan filter AR interaktif untuk liputan acara secara langsung (live report) guna meningkatkan keterlibatan audiens di Instagram.', action: () => openPreview({...}) },
                { name: 'Flyer Seminar – Esa Unggul University', desc: 'Perancangan flyer promosi seminar terpadu untuk kebutuhan publikasi cetak maupun media digital.', action: () => openPreview({...}) },
                { name: 'Lanyard & ID Card', desc: 'Penerapan identitas visual merek pada media operasional profesional seperti lanyard dan ID Card.', action: () => openPreview({...}) },
                { name: 'Logo Design', desc: 'Pengembangan desain logo utama sebagai fondasi identitas visual merek yang kuat dan konsisten.', action: () => openPreview({...}) },
                { name: 'Story Content – OnTheGoods', desc: 'Perancangan desain story harian dan penawaran promosi yang dinamis untuk menguatkan branding serta engagement OnTheGoods.', action: () => openPreview({...}) }
              ].map((item, idx) => (
                <div key={idx} className="w-[410px] min-h-[229px] bg-[#EFF4FA] p-8 rounded-[28px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all shrink-0">
                  <div>
                    <h2 className="text-[18px] font-extrabold text-slate-900 mb-[5px] line-clamp-2">{item.name}</h2>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed text-justify mb-5">{item.desc}</p>
                  </div>
                  <button type="button" onClick={item.action} className="w-full h-[45px] rounded-[14px] text-[13px] font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm">
                    See Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ======================= MODALS (DI-PERTANAHANKAN 100%) ======================= */}
      
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
