import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#e41526] relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Kolom 1: Brand */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                <span className="text-white drop-shadow-lg">Warmindo</span>{' '}
                <span className="text-white drop-shadow-lg">Modies</span>
              </h2>
              <p className="text-white/90 leading-relaxed max-w-md text-base">
                Menyajikan cita rasa dengan suasana modern.<br />
                Tempat nongkrong asik, perut kenyang, kantong aman.
              </p>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white"></span>
              Navigasi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/90 hover:text-[#ffde00] hover:translate-x-1 transition-all inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3 group-hover:bg-[#ffde00] group-hover:scale-125 transition-all"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-white/90 hover:text-[#ffde00] hover:translate-x-1 transition-all inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3 group-hover:bg-[#ffde00] group-hover:scale-125 transition-all"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/90 hover:text-[#ffde00] hover:translate-x-1 transition-all inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3 group-hover:bg-[#ffde00] group-hover:scale-125 transition-all"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-white/90 hover:text-[#ffde00] hover:translate-x-1 transition-all inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3 group-hover:bg-[#ffde00] group-hover:scale-125 transition-all"></span>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white"></span>
              Jam Buka
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white text-sm">Senin - Minggu</p>
                    <p className="text-white/80 text-sm">11.00 - 23.59 WIB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white text-sm">Khusus Jumat</p>
                    <p className="text-white/80 text-sm">16.00 - 23.59 WIB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f39000] rounded-lg p-3 shadow-lg">
                <p className="font-bold text-white flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Buka Setiap Hari!
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/90">
              © 2025 <span className="text-white font-semibold">Warmindo Modies</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;