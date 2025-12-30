import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Home() {
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
              
              <p className="text-black-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Nikmati kelezatan berbagai makanan dan minuman favorit dengan cita rasa legendaris yang tak terlupakan.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link 
                  href="/tentang" 
                  className="bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg hover:shadow-green-200"
                >
                  Lihat Cerita Kami
                </Link>
                <Link 
                  href="/menu" 
                  className="bg-white text-[#ff7f08] border-2 border-[#ff7f08] px-8 py-3 rounded-full font-bold text-base hover:bg-[#e41526] hover:text-white transition-all shadow-md"
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#facc15" fill-opacity="1" d="M0,128L15,138.7C30,149,60,171,90,165.3C120,160,150,128,180,96C210,64,240,32,270,64C300,96,330,192,360,213.3C390,235,420,181,450,170.7C480,160,510,192,540,170.7C570,149,600,75,630,85.3C660,96,690,192,720,229.3C750,267,780,245,810,202.7C840,160,870,96,900,101.3C930,107,960,181,990,197.3C1020,213,1050,171,1080,133.3C1110,96,1140,64,1170,64C1200,64,1230,96,1260,112C1290,128,1320,128,1350,128C1380,128,1410,128,1425,128L1440,128L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>

      {/* TENTANG KAMI */}
      <section id="tentang" className="relative bg-gradient-to-b from-white to-orange-50 py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* KOLOM KIRI - Gambar */}
            <div className="relative order-2 md:order-1 md:col-span-2 h-[600px] md:h-[700px]">
              {/* Gambar 1 - Kiri Atas */}
              <div className="absolute top-0 left-0 w-[50%] z-20 transform hover:scale-105 transition-transform duration-500">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/tempat/1.webp" 
                    alt="Warmindo Modies - Suasana 1" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#ffde00] rounded-full opacity-20 blur-2xl -z-10"></div>
              </div>

              {/* Gambar 2 - Kanan Tengah (Overlap) */}
              <div className="absolute top-[120px] right-0 w-[40%] z-30 transform hover:scale-105 transition-transform duration-500">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/tempat/2.webp" 
                    alt="Warmindo Modies - Suasana 2" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e41526] rounded-full opacity-20 blur-2xl -z-10"></div>
              </div>

              {/* Gambar 3 - Kiri Bawah */}
              <div className="absolute bottom-0 left-0 w-[50%] z-20 transform hover:scale-105 transition-transform duration-500">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/tempat/3.webp" 
                    alt="Warmindo Modies - Suasana 3" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00a339] rounded-full opacity-20 blur-2xl -z-10"></div>
              </div>
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
                <span className="text-black">Modies?</span>
              </h2>
              
              {/* Deskripsi */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
                Warmindo Modies berdiri sejak tahun 2024 sebagai tempat makan sederhana yang dekat dengan keseharian mahasiswa. Kami menyajikan beragam menu favorit seperti mie, nasi, dan camilan yang diracik dengan rasa pas, harga bersahabat, dan porsi mengenyangkan. Warmindo Modies bukan sekadar tempat makan, tetapi juga ruang nyaman untuk berkumpul, mengerjakan tugas, dan melepas penat.
              </p>
              
              {/* Link Button */}
              <div className="pt-4">
                <Link 
                  href="/tentang" 
                  className="inline-block bg-[#e41526] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#ff7f08] hover:scale-105 transition-all shadow-lg"
                >
                  Selengkapnya
                </Link>
              </div>
              
              {/* Ala-ala Garis */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#f39000] to-[#ffde00] rounded-full mx-auto md:mx-0"></div>
            </div>

          </div>
        </div>
      </section>

      {/* MENU POPULER */}
      <section id="menu" className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#e41526] rounded-full">
              <span className="text-white font-bold text-xs tracking-wide">MENU FAVORIT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Paling Banyak <span className="text-[#e41526]">Dicari!</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan menu terbaik yang selalu jadi favorit pelanggan setia kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Mie Goreng Spesial Modies', 
                desc: 'Mie goreng signature dengan bumbu rahasia dan topping spesial',
                icon: '🍜',
                badge: '#1 BEST SELLER'
              },
              { 
                name: 'Internet (Indomie Telur Kornet)', 
                desc: 'Kombinasi sempurna indomie, telur ceplok, dan kornet premium',
                icon: '🥚',
                badge: 'FAVORIT'
              },
              { 
                name: 'Es Teh Manis Jumbo', 
                desc: 'Minuman segar jumbo yang pas untuk teman makan',
                icon: '🥤',
                badge: 'RECOMMENDED'
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00a339] relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffde00] rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div className="bg-[#e41526] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {item.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#00a339] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#ffde00] text-sm">⭐</span>
                      ))}
                    </div>
                    <button className="text-[#00a339] font-bold hover:underline">
                      Pesan →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#00a339] to-[#008c30] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffde00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e41526] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi <span className="text-[#ffde00]">Kami</span>
            </h2>
            <p className="text-green-100 text-lg">
              Punya pertanyaan? Kami siap membantu Anda!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://wa.me/628123456789" className="group flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-[#ffde00] rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform">
                📞
              </div>
              <span className="font-bold text-xl mb-2">WhatsApp</span>
              <span className="text-green-100">0812-3456-789</span>
              <span className="mt-3 text-[#ffde00] text-sm font-semibold">Chat Sekarang →</span>
            </a>
            
            <a href="https://instagram.com/warmindomodies" className="group flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-[#ffde00] rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform">
                📸
              </div>
              <span className="font-bold text-xl mb-2">Instagram</span>
              <span className="text-green-100">@warmindomodies</span>
              <span className="mt-3 text-[#ffde00] text-sm font-semibold">Follow Kami →</span>
            </a>
            
            <a href="mailto:halo@modies.com" className="group flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-[#ffde00] rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform">
                ✉️
              </div>
              <span className="font-bold text-xl mb-2">Email</span>
              <span className="text-green-100">halo@modies.com</span>
              <span className="mt-3 text-[#ffde00] text-sm font-semibold">Kirim Email →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}