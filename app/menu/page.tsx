import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Menu() {
  const categories = [
    {
      id: 'makanan',
      title: 'Makanan',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'bg-[#ffde00]',
      borderColor: 'border-[#ffde00]',
      textColor: 'text-[#ffde00]',
      hoverBorder: 'hover:border-[#ffde00]',
      link: '/menu/makanan',
      items: [
        { 
          name: 'Nasi Goreng Spesial', 
          price: 'Rp 15.000', 
          desc: 'Nasi goreng dengan telur, ayam, dan sayuran',
          image: '/images/menu/nasi-goreng-spesial.jpg'
        },
        { 
          name: 'Mie Goreng Jawa', 
          price: 'Rp 12.000', 
          desc: 'Mie goreng dengan bumbu khas Jawa',
          image: '/images/menu/mie-goreng-jawa.jpg'
        },
        { 
          name: 'Mie Dokdok', 
          price: 'Rp 10.000', 
          desc: 'Mie rebus pedas dengan telur',
          image: '/images/menu/mie-dokdok.jpg'
        },
        { 
          name: 'Nasi Goreng Bakso', 
          price: 'Rp 13.000', 
          desc: 'Nasi goreng dengan bakso sapi',
          image: '/images/menu/nasi-goreng-bakso.jpg'
        }
      ]
    },
    {
      id: 'minuman',
      title: 'Minuman',
      icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
      color: 'bg-[#00a339]',
      borderColor: 'border-[#00a339]',
      textColor: 'text-[#00a339]',
      hoverBorder: 'hover:border-[#00a339]',
      link: '/menu/minuman',
      items: [
        { 
          name: 'Es Teh Manis', 
          price: 'Rp 4.000', 
          desc: 'Teh manis dengan es batu',
          image: '/images/menu/es-teh-manis.jpg'
        },
        { 
          name: 'Kopi Susu', 
          price: 'Rp 7.000', 
          desc: 'Kopi dengan susu creamy',
          image: '/images/menu/kopi-susu.jpg'
        },
        { 
          name: 'Es Jeruk', 
          price: 'Rp 6.000', 
          desc: 'Jeruk segar dengan es',
          image: '/images/menu/es-jeruk.jpg'
        },
        { 
          name: 'Teh Hangat', 
          price: 'Rp 3.000', 
          desc: 'Teh manis hangat',
          image: '/images/menu/teh-hangat.jpg'
        }
      ]
    },
    {
      id: 'topping',
      title: 'Topping',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      color: 'bg-[#ff7f08]',
      borderColor: 'border-[#ff7f08]',
      textColor: 'text-[#ff7f08]',
      hoverBorder: 'hover:border-[#ff7f08]',
      link: '/menu/topping',
      items: [
        { 
          name: 'Telur Mata Sapi', 
          price: 'Rp 3.000', 
          desc: 'Telur goreng mata sapi',
          image: '/images/menu/telur-mata-sapi.jpg'
        },
        { 
          name: 'Bakso Sapi', 
          price: 'Rp 5.000', 
          desc: '3 butir bakso sapi',
          image: '/images/menu/bakso-sapi.jpg'
        },
        { 
          name: 'Sosis Bakar', 
          price: 'Rp 4.000', 
          desc: '2 potong sosis bakar',
          image: '/images/menu/sosis-bakar.jpg'
        },
        { 
          name: 'Ayam Suwir', 
          price: 'Rp 6.000', 
          desc: 'Ayam suwir bumbu kecap',
          image: '/images/menu/ayam-suwir.jpg'
        }
      ]
    },
    {
      id: 'camilan',
      title: 'Camilan',
      icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z',
      color: 'bg-[#9333ea]',
      borderColor: 'border-[#9333ea]',
      textColor: 'text-[#9333ea]',
      hoverBorder: 'hover:border-[#9333ea]',
      link: '/menu/camilan',
      items: [
        { 
          name: 'Pisang Goreng', 
          price: 'Rp 5.000', 
          desc: 'Pisang goreng crispy',
          image: '/images/menu/pisang-goreng.jpg'
        },
        { 
          name: 'Tempe Goreng', 
          price: 'Rp 4.000', 
          desc: 'Tempe goreng tepung',
          image: '/images/menu/tempe-goreng.jpg'
        },
        { 
          name: 'Cireng', 
          price: 'Rp 6.000', 
          desc: 'Cireng isi dengan bumbu kacang',
          image: '/images/menu/cireng.jpg'
        },
        { 
          name: 'Kentang Goreng', 
          price: 'Rp 8.000', 
          desc: 'French fries dengan saus',
          image: '/images/menu/kentang-goreng.jpg'
        }
      ]
    }
  ];

  const highlights = [
    {
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      title: 'Menu Favorit',
      desc: 'Berbagai pilihan menu andalan yang sudah terbukti kelezatannya',
      color: 'text-[#ffde00]',
      bgColor: 'bg-[#ffde00]/10'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Harga Terjangkau',
      desc: 'Harga bersahabat untuk kantong mahasiswa',
      color: 'text-[#e41526]',
      bgColor: 'bg-[#e41526]/10'
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Kualitas Terjamin',
      desc: 'Bahan segar dan resep rahasia yang bikin nagih',
      color: 'text-[#00a339]',
      bgColor: 'bg-[#00a339]/10'
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-white via-yellow-100 to-yellow-400 pt-10 pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">MENU KAMI</span>
            </div>
            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Pilihan Menu <br />
              <span className="text-[#e41526]">Warmindo Modies</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto">
              Kelezatan yang bikin ketagihan dengan harga bersahabat
            </p>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Dari makanan berat hingga camilan, dari minuman hangat hingga dingin. Semua ada di sini dengan cita rasa yang mantap dan harga yang ramah di kantong!
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

      {/* HIGHLIGHTS */}
      <section className="relative bg-gradient-to-b from-white to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffde00]/20 border border-[#ffde00] rounded-full mb-6">
              <span className="text-[#e41526] font-bold text-xs md:text-sm tracking-wide">KEUNGGULAN</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4 leading-tight">
              Kenapa Menu Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className={`w-8 h-8 ${item.color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

      {/* MENU CATEGORIES */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((category, index) => (
            <div key={category.id} className="relative">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 px-6 py-3 ${category.color}/20 border-2 ${category.borderColor} rounded-full mb-6`}>
                  <svg className={`w-6 h-6 ${category.textColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                  </svg>
                  <span className={`${category.textColor} font-bold text-sm md:text-base tracking-wide uppercase`}>
                    {category.title}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`group bg-white rounded-2xl border-2 border-gray-200 ${category.hoverBorder} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      
                      <div className={`${category.textColor} font-bold text-xl`}>
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button Lihat Semua */}
              <div className="text-center">
                <Link 
                  href={category.link}
                  className={`inline-flex items-center gap-2 ${category.color} text-white px-8 py-3 rounded-full font-bold text-base hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl`}
                >
                  <span>Lihat Semua {category.title}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Lapar? <span className="text-[#e41526]">Yuk Pesan!</span>
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            Datang langsung ke Warmindo Modies atau hubungi kami untuk delivery!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/kontak" 
              className="bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Hubungi Kami
            </Link>
            <Link 
              href="/tentang" 
              className="bg-white text-[#00a339] border-2 border-[#00a339] px-8 py-3 rounded-full font-bold text-base hover:bg-[#00a339] hover:text-white transition-all shadow-md"
            >
              Tentang Kami
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