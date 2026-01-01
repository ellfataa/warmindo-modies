'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsTop(currentScrollY < 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Jika link memiliki hash (#) dan kita sudah di halaman home
    if (href.includes('#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setIsMobileMenuOpen(false);
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (href === '/' && pathname === '/') {
      // Jika klik "Beranda" saat sudah di home, scroll ke top
      e.preventDefault();
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Untuk navigasi ke halaman lain
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '/', label: 'Beranda'},
    { href: '/menu', label: 'Menu'},
    { href: '/tentang', label: 'Tentang' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <nav 
            className={`
              mx-auto max-w-fit
              transition-all duration-300
              ${isTop 
                ? 'bg-white/80 backdrop-blur-md shadow-md' 
                : 'bg-white/90 backdrop-blur-xl shadow-2xl'
              }
              rounded-full px-6 py-3 md:px-8 md:py-4
            `}
          >
            <div className="flex items-center gap-6 md:gap-8">
              
              <Link 
                href="/" 
                className="group flex items-center gap-3 flex-shrink-0"
                onClick={(e) => handleSmoothScroll(e, '/')}
              >
                {/* Logo Warmindo */}
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/logo-warmindo.jpg"
                    alt="Logo Warmindo"
                    width={100} 
                    height={80}
                    className="object-contain drop-shadow-sm rounded-lg"
                  />
                </div>

                {/* Nama Warung */}
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight flex items-center gap-1.5">
                  <span className="text-black">
                    Modies
                  </span>
                </h1>
              </Link>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group relative px-4 py-2 font-semibold text-sm text-gray-600 hover:text-warmindo-red transition-all duration-300 rounded-full hover:bg-gray-50"
                  >
                    <span className="flex items-center gap-2">
                      <span>{link.label}</span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none ml-2"
                aria-label="Toggle menu"
              >
                <span 
                  className={`w-5 h-0.5 bg-warmindo-red rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`w-5 h-0.5 bg-warmindo-green rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`w-5 h-0.5 bg-warmindo-orange rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`
              md:hidden mt-2 mx-auto max-w-fit
              transition-all duration-300 origin-top
              ${isMobileMenuOpen 
                ? 'scale-y-100 opacity-100' 
                : 'scale-y-0 opacity-0 pointer-events-none'
              }
            `}
          >
            <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl px-6 py-4 border border-white/20">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-center gap-3 px-4 py-3 font-semibold text-sm text-gray-600 hover:text-warmindo-red hover:bg-gray-50 rounded-2xl transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer untuk konten di bawah navbar */}
      <div className="h-24"></div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;