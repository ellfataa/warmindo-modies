// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-[#e41526] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Kolom 1: Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic">
              <span className="text-[#00a339]">WARMINDO</span> <span className="text-[#e41526]">MODIES</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menyajikan cita rasa mie goreng legendaris dengan suasana modern. Tempat nongkrong asik, perut kenyang, kantong aman.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#f39000] uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/" className="hover:text-[#00a339] transition-colors">Beranda</Link></li>
              <li><Link href="/menu" className="hover:text-[#00a339] transition-colors">Menu Populer</Link></li>
              <li><Link href="/tentang" className="hover:text-[#00a339] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/kontak" className="hover:text-[#00a339] transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#f39000] uppercase tracking-wider">Jam Buka</h3>
            <div className="text-gray-700 space-y-1 text-sm">
              <p className="flex justify-between"><span>Senin - Jumat:</span> <span>10.00 - 22.00</span></p>
              <p className="flex justify-between"><span>Sabtu - Minggu:</span> <span>10.00 - 24.00</span></p>
              <p className="mt-4 font-bold text-[#e41526]">Buka Setiap Hari!</p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} <span className="text-[#00a339]">Warmindo</span> <span className="text-[#e41526]">Modies</span>. 
            Dibuat dengan ❤️ untuk pecinta mie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;