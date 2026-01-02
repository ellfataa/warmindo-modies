"use client";

import React, { useState } from 'react';
import { Cookie } from 'lucide-react';

interface CamilanItem {
  id: number;
  name: string;
  price: number;
  desc: string;
  category: string;
}

export default function CamilanPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const camilanItems: CamilanItem[] = [
    { 
      id: 1, 
      name: 'Pisang Goreng', 
      price: 5000, 
      desc: 'Pisang goreng renyah dengan tepung crispy',
      category: 'Gorengan' 
    },
    { 
      id: 2, 
      name: 'Pisang Kribo', 
      price: 6000, 
      desc: 'Pisang goreng dengan taburan gula aren',
      category: 'Gorengan' 
    },
    { 
      id: 3, 
      name: 'Mendoan', 
      price: 5000, 
      desc: 'Tempe mendoan khas dengan tepung bumbu',
      category: 'Gorengan' 
    },
    { 
      id: 4, 
      name: 'Dimsum', 
      price: 8000, 
      desc: 'Dimsum kukus atau goreng dengan isian daging',
      category: 'Kukus & Goreng' 
    },
    { 
      id: 5, 
      name: 'Kentang Goreng', 
      price: 7000, 
      desc: 'French fries crispy dengan bumbu spesial',
      category: 'Gorengan' 
    },
    { 
      id: 6, 
      name: 'Keju Aroma', 
      price: 8000, 
      desc: 'Cemilan keju dengan aroma gurih yang menggoda',
      category: 'Olahan Keju' 
    },
    { 
      id: 7, 
      name: 'Pisang Aroma', 
      price: 7000, 
      desc: 'Pisang goreng dengan topping keju dan coklat',
      category: 'Olahan Pisang' 
    },
    { 
      id: 8, 
      name: 'Roti Goreng Mayo/Coklat', 
      price: 6000, 
      desc: 'Roti goreng dengan saus mayo atau coklat',
      category: 'Roti' 
    },
    { 
      id: 9, 
      name: 'Pisang Bakar', 
      price: 7000, 
      desc: 'Pisang bakar dengan topping keju dan meses',
      category: 'Olahan Pisang' 
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categories = [
    { name: 'Semua', filter: 'all' },
    { name: 'Gorengan', filter: 'Gorengan' },
    { name: 'Olahan Pisang', filter: 'Olahan Pisang' },
    { name: 'Olahan Keju', filter: 'Olahan Keju' },
    { name: 'Kukus & Goreng', filter: 'Kukus & Goreng' },
    { name: 'Roti', filter: 'Roti' }
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? camilanItems 
    : camilanItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-white pt-10 pb-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Menu <span className="text-[#e41526]">Camilan</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nikmati berbagai camilan lezat untuk menemani waktu santai Anda!
            </p>
            
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

      {/* CAMILAN GRID */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ffde00] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className={`relative h-56 overflow-hidden flex items-center justify-center ${
                  item.category === 'Gorengan'
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-50'
                    : item.category === 'Olahan Pisang'
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-50'
                    : item.category === 'Olahan Keju'
                    ? 'bg-gradient-to-br from-orange-100 to-yellow-50'
                    : item.category === 'Kukus & Goreng'
                    ? 'bg-gradient-to-br from-pink-100 to-rose-50'
                    : 'bg-gradient-to-br from-amber-100 to-orange-50'
                }`}>
                  <div className="text-gray-400 text-center px-4">
                    <Cookie className="w-16 h-16 mx-auto mb-2 opacity-50" />
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
                      {formatPrice(item.price)}
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