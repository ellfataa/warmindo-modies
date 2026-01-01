import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Tentang() {
  const visiMisi = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Visi',
      desc: 'Menjadi warung makan pilihan utama yang memberikan kenyamanan, kelezatan, dan kehangatan bagi setiap pelanggan.',
      bgColor: 'bg-[#ffde00]/10',
      iconColor: 'text-[#ffde00]'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Misi',
      desc: 'Menyajikan makanan berkualitas dengan harga terjangkau, menciptakan suasana nyaman untuk berkumpul, dan memberikan pelayanan terbaik.',
      bgColor: 'bg-[#e41526]/10',
      iconColor: 'text-[#e41526]'
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Nilai',
      desc: 'Kualitas terjaga, harga bersahabat, pelayanan ramah, dan selalu mengutamakan kepuasan pelanggan dalam setiap hidangan.',
      bgColor: 'bg-[#00a339]/10',
      iconColor: 'text-[#00a339]'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Awal Berdirinya Warmindo Modies',
      desc: 'Dimulai dengan semangat untuk menyediakan tempat makan yang nyaman dan terjangkau bagi mahasiswa dan masyarakat sekitar.',
      color: 'bg-[#ffde00]',
      hoverColor: 'group-hover:border-[#ffde00]'
    },
    {
      year: '2024',
      title: 'Menu Favorit Lahir',
      desc: 'Nasi Goreng, Mie Dokdok, dan berbagai menu andalan mulai dikenal dan menjadi favorit pelanggan setia.',
      color: 'bg-[#e41526]',
      hoverColor: 'group-hover:border-[#e41526]'
    },
    {
      year: '2025',
      title: 'Terus Berkembang',
      desc: 'Warmindo Modies terus berinovasi dengan menambah variasi menu dan meningkatkan kualitas pelayanan untuk kepuasan pelanggan.',
      color: 'bg-[#00a339]',
      hoverColor: 'group-hover:border-[#00a339]'
    }
  ];

  const keunggulan = [
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Harga Terjangkau',
      desc: 'Menu lengkap dengan harga yang ramah di kantong mahasiswa',
      color: 'text-[#ffde00]'
    },
    {
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Rasa Nikmat',
      desc: 'Bumbu khas dan resep rahasia yang bikin ketagihan',
      color: 'text-[#e41526]'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Lokasi Strategis',
      desc: 'Mudah dijangkau dan dekat dengan area kampus',
      color: 'text-[#00a339]'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Buka Lama',
      desc: 'Melayani dari pagi hingga larut malam',
      color: 'text-[#ff7f08]'
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-white via-yellow-100 to-yellow-400 pt-10 pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">TENTANG KAMI</span>
            </div>
            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Cerita Warmindo <br />
              <span className="text-[#e41526]">Modies</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto">
              Lebih dari sekadar tempat makan, kami adalah bagian dari keseharian Anda
            </p>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Warmindo Modies hadir sebagai solusi untuk kebutuhan makan yang lezat, terjangkau, dan mengenyangkan. Kami percaya bahwa makanan yang enak tidak harus mahal, dan suasana yang nyaman bisa didapat di tempat sederhana.
            </p>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="w-full">
        <path 
          fill="#facc15" 
          fillOpacity="1" 
          d="M0,128L15,138.7C30,149,60,171,90,165.3C120,160,150,128,180,96C210,64,240,32,270,64C300,96,330,192,360,213.3C390,235,420,181,450,170.7C480,160,510,192,540,170.7C570,149,600,75,630,85.3C660,96,690,192,720,229.3C750,267,780,245,810,202.7C840,160,870,96,900,101.3C930,107,960,181,990,197.3C1020,213,1050,171,1080,133.3C1110,96,1140,64,1170,64C1200,64,1230,96,1260,112C1290,128,1320,128,1350,128C1380,128,1410,128,1425,128L1440,128L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
        />
      </svg>

      {/* VISI MISI */}
      <section className="relative bg-gradient-to-b from-white to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full mb-6">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">VISI & MISI</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4 leading-tight">
              Prinsip Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visiMisi.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className={`w-8 h-8 ${item.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERJALANAN KAMI */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full mb-6">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">TIMELINE</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4 leading-tight">
              Perjalanan Kami
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start group"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-gray-300 to-transparent mt-2"></div>
                  )}
                </div>
                
                <div className={`flex-1 bg-white p-6 rounded-2xl border-2 border-gray-200 ${item.hoverColor} group-hover:shadow-xl transition-all`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="relative bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
              <span className="text-gray-700 font-medium text-xs md:text-sm tracking-wide">KEUNGGULAN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Kenapa Pilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulan.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <svg className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Siap Merasakan <span className="text-[#e41526]">Kelezatannya?</span>
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            Kunjungi Warmindo Modies sekarang dan nikmati berbagai menu kami!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/menu" 
              className="bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Lihat Menu
            </Link>
            <Link 
              href="/" 
              className="bg-white text-[#ff7f08] border-2 border-[#ff7f08] px-8 py-3 rounded-full font-bold text-base hover:bg-[#e41526] hover:text-white hover:border-[#e41526] transition-all shadow-md"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Separator Bottom */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="w-full">
        <path 
          fill="#e41526" 
          fillOpacity="1" 
          d="M0,32L24,69.3C48,107,96,181,144,186.7C192,192,240,128,288,128C336,128,384,192,432,192C480,192,528,128,576,101.3C624,75,672,85,720,117.3C768,149,816,203,864,197.3C912,192,960,128,1008,112C1056,96,1104,128,1152,154.7C1200,181,1248,203,1296,197.3C1344,192,1392,160,1416,144L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        />
      </svg>
    </div>
  );
}