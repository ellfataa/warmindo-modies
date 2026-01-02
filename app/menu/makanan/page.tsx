"use client";
import React from 'react';

export default function MakananPage() {
  const menuMakanan = [
    {
      name: 'Mie Instan Kuah',
      price: 'Rp 8.000',
      desc: 'Mie instan kuah hangat dengan bumbu pilihan',
      image: '/images/menu/mie-instan-kuah.jpg',
      category: 'Mie'
    },
    {
      name: 'Mie Instan Goreng',
      price: 'Rp 8.000',
      desc: 'Mie instan goreng dengan bumbu spesial',
      image: '/images/menu/mie-instan-goreng.jpg',
      category: 'Mie'
    },
    {
      name: 'Mie Dokdok',
      price: 'Rp 10.000',
      desc: 'Mie rebus pedas khas dengan telur',
      image: '/images/menu/mie-dokdok.jpg',
      category: 'Mie'
    },
    {
      name: 'Mie Get',
      price: 'Rp 11.000',
      desc: 'Mie dengan bumbu kacang yang gurih',
      image: '/images/menu/mie-get.jpg',
      category: 'Mie'
    },
    {
      name: 'Nasi Orak Arik',
      price: 'Rp 10.000',
      desc: 'Nasi dengan telur orak arik yang lembut',
      image: '/images/menu/nasi-orak-arik.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Magelangan',
      price: 'Rp 12.000',
      desc: 'Nasi dengan mie goreng khas Magelang',
      image: '/images/menu/nasi-magelangan.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Omlet',
      price: 'Rp 11.000',
      desc: 'Nasi dengan telur dadar omlet isi sayuran',
      image: '/images/menu/nasi-omlet.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Goreng',
      price: 'Rp 12.000',
      desc: 'Nasi goreng spesial dengan bumbu rahasia',
      image: '/images/menu/nasi-goreng.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Telur Dadar',
      price: 'Rp 10.000',
      desc: 'Nasi putih dengan telur dadar lembut',
      image: '/images/menu/nasi-telur-dadar.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Telur Ceplok',
      price: 'Rp 10.000',
      desc: 'Nasi putih dengan telur ceplok mata sapi',
      image: '/images/menu/nasi-telur-ceplok.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Bakar Ayam Suwir',
      price: 'Rp 15.000',
      desc: 'Nasi bakar dengan ayam suwir bumbu kecap',
      image: '/images/menu/nasi-bakar-ayam-suwir.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Goreng Bakso',
      price: 'Rp 13.000',
      desc: 'Nasi goreng dengan bakso sapi yang kenyal',
      image: '/images/menu/nasi-goreng-bakso.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Goreng Sosis',
      price: 'Rp 13.000',
      desc: 'Nasi goreng dengan sosis bakar',
      image: '/images/menu/nasi-goreng-sosis.jpg',
      category: 'Nasi'
    },
    {
      name: 'Nasi Goreng Seafood',
      price: 'Rp 18.000',
      desc: 'Nasi goreng dengan udang dan cumi segar',
      image: '/images/menu/nasi-goreng-seafood.jpg',
      category: 'Nasi'
    },
    {
      name: 'Ayam Goreng Serundeng',
      price: 'Rp 16.000',
      desc: 'Ayam goreng crispy dengan serundeng kelapa',
      image: '/images/menu/ayam-goreng-serundeng.jpg',
      category: 'Ayam'
    },
    {
      name: 'Ayam Penyet',
      price: 'Rp 15.000',
      desc: 'Ayam goreng penyet dengan sambal terasi',
      image: '/images/menu/ayam-penyet.jpg',
      category: 'Ayam'
    },
    {
      name: 'Mie Tek Tek',
      price: 'Rp 12.000',
      desc: 'Mie goreng dengan bumbu khas tek tek',
      image: '/images/menu/mie-tek-tek.jpg',
      category: 'Mie'
    },
    {
      name: 'Mie Banglades',
      price: 'Rp 13.000',
      desc: 'Mie goreng pedas khas Bangladesh',
      image: '/images/menu/mie-banglades.jpg',
      category: 'Mie'
    },
    {
      name: 'Gultik (Gule Tikungan)',
      price: 'Rp 14.000',
      desc: 'Gulai kikil khas dengan bumbu rempah',
      image: '/images/menu/gultik.jpg',
      category: 'Spesial'
    },
    {
      name: 'Rice Bowl Chicken',
      price: 'Rp 15.000',
      desc: 'Nasi dengan ayam teriyaki dan sayuran',
      image: '/images/menu/rice-bowl-chicken.jpg',
      category: 'Rice Bowl'
    },
    {
      name: 'Rice Bowl Baso',
      price: 'Rp 14.000',
      desc: 'Nasi dengan bakso dan telur balado',
      image: '/images/menu/rice-bowl-baso.jpg',
      category: 'Rice Bowl'
    },
    {
      name: 'Pangsit Kuah',
      price: 'Rp 12.000',
      desc: 'Pangsit dalam kuah kaldu ayam',
      image: '/images/menu/pangsit-kuah.jpg',
      category: 'Pangsit'
    },
    {
      name: 'Pangsit Goreng',
      price: 'Rp 12.000',
      desc: 'Pangsit goreng crispy dengan saus asam manis',
      image: '/images/menu/pangsit-goreng.jpg',
      category: 'Pangsit'
    }
  ];

  const categories = [
    { name: 'Semua', filter: 'all' },
    { name: 'Mie', filter: 'Mie' },
    { name: 'Nasi', filter: 'Nasi' },
    { name: 'Ayam', filter: 'Ayam' },
    { name: 'Rice Bowl', filter: 'Rice Bowl' },
    { name: 'Pangsit', filter: 'Pangsit' },
    { name: 'Spesial', filter: 'Spesial' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredMenu = selectedCategory === 'all' 
    ? menuMakanan 
    : menuMakanan.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-white pt-10 pb-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Menu <span className="text-[#e41526]">Makanan</span>
            </h1>
            
            {/* FILTER CATEGORIES */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat.filter)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    selectedCategory === cat.filter
                      ? 'bg-[#ffde00] text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">
                Menampilkan <span className="font-bold text-[#e41526]">{filteredMenu.length}</span> menu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ffde00] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 bg-gradient-to-br from-orange-100 to-yellow-50 overflow-hidden flex items-center justify-center">
                  <div className="text-gray-400 text-center px-4">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium">{item.name}</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-[#ffde00] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {item.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e41526] transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    <span className="text-[#e41526] font-extrabold text-2xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
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