import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Home() {
  const menuItems = [
    { 
      name: 'Nasi Goreng', 
      desc: 'Nasi goreng dengan bumbu khas, telur mata sapi, dan taburan bawang goreng yang renyah',
      foto: '/menu/nasgor.webp',
      badge: 'FAVORIT',
      price: 'Rp 12.000'
    },
    { 
      name: 'Mie Dokdok', 
      desc: 'Kombinasi mie dengan tekstur kenyal dan kuah gurih yang menggugah selera',
      foto: '/menu/mie-dokdok.jpg',
      badge: 'FAVORIT',
      price: 'Rp 13.000'
    },
    { 
      name: 'Es Teh', 
      desc: 'Minuman segar yang pas untuk teman makan',
      foto: '/menu/es-teh.jpg',
      badge: 'FAVORIT',
      price: 'Rp 3.000'
    }
  ];

  const aboutImages = [
    { src: '/tempat/1.webp', alt: 'Warmindo Modies - Suasana 1', position: 'top-0 left-0 w-[50%]', color: 'ffde00' },
    { src: '/tempat/2.webp', alt: 'Warmindo Modies - Suasana 2', position: 'top-[120px] right-0 w-[40%]', color: 'e41526' },
    { src: '/tempat/3.webp', alt: 'Warmindo Modies - Suasana 3', position: 'bottom-0 left-0 w-[50%]', color: '00a339' }
  ];

  const contactItems = [
    {
      href: 'https://wa.me/628123456789',
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
      bgColor: 'bg-[#25D366]/10',
      hoverColor: 'hover:border-[#25D366]',
      iconColor: 'text-[#25D366]',
      title: 'WhatsApp',
      subtitle: '0812-3456-789'
    },
    {
      href: 'https://instagram.com/warmindomodies',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      bgColor: 'bg-[#e41526]/10',
      hoverColor: 'hover:border-[#e41526]',
      iconColor: 'text-[#e41526]',
      title: 'Instagram',
      subtitle: '@warmindomodies'
    },
    {
      href: 'mailto:halo@modies.com',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      bgColor: 'bg-[#ffde00]/10',
      hoverColor: 'hover:border-[#ffde00]',
      iconColor: 'text-[#ffde00]',
      title: 'Email',
      subtitle: 'halo@modies.com'
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-white via-yellow-100 to-yellow-400 pt-10 pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* KOLOM KIRI - Konten Teks */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full">
                <span className="animate-pulse w-2 h-2 bg-[#e41526] rounded-full"></span>
                <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">SEJAK 2024</span>
              </div>
              
              <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                Warmindo <br className="hidden md:block" />
                <span className="text-[#e41526]">Modies</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-black">
                Tempat nongkrong asik, perut kenyang, hati senang!
              </p>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Nikmati kelezatan berbagai makanan dan minuman favorit dengan cita rasa legendaris yang tak terlupakan.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link 
                  href="/tentang" 
                  className="bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Lihat Cerita Kami
                </Link>
                <Link 
                  href="/menu" 
                  className="bg-white text-[#ff7f08] border-2 border-[#ff7f08] px-8 py-3 rounded-full font-bold text-base hover:bg-[#e41526] hover:text-white hover:border-[#e41526] transition-all shadow-md"
                >
                  Lihat Menu
                </Link>
              </div>
            </div>

            {/* KOLOM KANAN - Gambar */}
            <div className="relative order-1 md:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-500">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="/jumbotron.png" 
                    alt="Warmindo Modies Hero" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Dekorasi di sekitar gambar */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#ffde00] rounded-full opacity-30 blur-xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#e41526] rounded-full opacity-20 blur-xl -z-10"></div>
            </div>
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

      {/* TENTANG KAMI */}
      <section id="tentang" className="relative bg-gradient-to-b from-white to-orange-50 py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
            
            {/* KOLOM KIRI - Gambar */}
            <div className="relative order-2 md:order-1 md:col-span-2 h-[600px] md:h-[700px]">
              {aboutImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`absolute ${image.position} z-${index === 1 ? '30' : '20'} transform hover:scale-105 transition-transform duration-500`}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  <div 
                    className={`absolute ${index === 0 ? '-bottom-4 -left-4' : index === 1 ? '-top-4 -right-4' : '-bottom-4 -right-4'} w-24 h-24 bg-[#${image.color}] rounded-full opacity-20 blur-2xl -z-10`}
                  ></div>
                </div>
              ))}
            </div>

            {/* KOLOM KANAN - Konten Teks */}
            <div className="space-y-6 text-center md:text-left order-1 md:order-2 md:col-span-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full">
                <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">TENTANG KAMI</span>
              </div>
              
              {/* Heading */}
              <h2 className="font-extrabold text-black text-4xl md:text-5xl lg:text-6xl leading-tight">
                Kenapa Harus<br />
                <span className="text-[#e41526]">Modies?</span>
              </h2>
              
              {/* Deskripsi */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
                Warmindo Modies berdiri sejak tahun 2024 sebagai tempat makan sederhana yang dekat dengan keseharian mahasiswa. Kami menyajikan beragam menu favorit seperti mie, nasi, dan camilan yang diracik dengan rasa pas, harga bersahabat, dan porsi mengenyangkan. Warmindo Modies bukan sekadar tempat makan, tetapi juga ruang nyaman untuk berkumpul, mengerjakan tugas, dan melepas penat.
              </p>
              
              {/* Link Button */}
              <div className="pt-4">
                <Link 
                  href="/tentang" 
                  className="inline-block bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Selengkapnya
                </Link>
              </div>
              
              {/* Garis Dekoratif */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#f39000] to-[#ffde00] rounded-full mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU POPULER */}
      <section id="menu" className="relative bg-gradient-to-b from-[#fff7ed] to-[#00a339] py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full mb-6">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">MENU FAVORIT</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4 leading-tight">
              Paling Banyak Dicari!
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Pilihan menu terbaik yang selalu jadi favorit pelanggan setia kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-[#00a339] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">
                    <img 
                      src={item.foto} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg" 
                    />
                  </div>
                  <span className="bg-[#e41526] text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ffde00] text-sm">★</span>
                    ))}
                  </div>
                  
                  <div className="text-xl font-bold text-[#00a339]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link Button */}
          <div className="text-center pt-4">
            <Link 
              href="/menu" 
              className="inline-block bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path 
          fill="#00a339" 
          fillOpacity="1" 
          d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,245.3C672,224,768,192,864,181.3C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      {/* KONTAK */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full mb-6">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">KONTAK KAMI</span>
            </div>
              
            {/* Heading */}
            <h2 className="font-extrabold text-black text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hubungi Kami
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((contact, index) => (
              <a 
                key={index}
                href={contact.href} 
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col items-center p-6 border-2 border-gray-200 rounded-xl ${contact.hoverColor} hover:shadow-lg transition-all`}
              >
                <div className={`w-14 h-14 ${contact.bgColor} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <svg className={`w-6 h-6 ${contact.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={contact.icon} />
                  </svg>
                </div>
                <span className="font-semibold text-lg text-gray-800 mb-1">{contact.title}</span>
                <span className="text-gray-500 text-sm">{contact.subtitle}</span>
              </a>
            ))}
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