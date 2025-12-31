import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t-8 border-[#e41526]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Kolom 1: Brand */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="text-[#00a339]">Warmindo</span>{' '}
                <span className="text-[#e41526]">Modies</span>
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-md">
                Menyajikan cita rasa dengan suasana modern.<br />Tempat nongkrong asik, perut kenyang, kantong aman.
              </p>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-4">Navigasi</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/" className="hover:text-[#00a339] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-[#00a339] transition-colors"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#00a339] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-[#00a339] transition-colors"></span>
                  Menu Populer
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#00a339] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-[#00a339] transition-colors"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#00a339] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-[#00a339] transition-colors"></span>
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-4">Jam Buka</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00a339] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Senin - Minggu</p>
                  <p>11.00 - 00.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00a339] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Khusus Jumat</p>
                  <p>16.00 - 00.00 WIB</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-[#e41526] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e41526] rounded-full animate-pulse"></span>
                  Buka Setiap Hari!
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black">
              © {new Date().getFullYear()} <span className="text-black font-semibold">Warmindo Modies</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;