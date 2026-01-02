"use client";

import React, { useState } from 'react';
import { Plus, Flame } from 'lucide-react';

interface ToppingItem {
  id: number;
  name: string;
  price: number;
  category: string;
  level?: number;
}

export default function ToppingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toppingItems: ToppingItem[] = [
    { id: 1, name: 'Bakso', price: 3000, category: 'Protein' },
    { id: 2, name: 'Sosis', price: 3000, category: 'Protein' },
    { id: 3, name: 'Telur Mata Sapi', price: 4000, category: 'Protein' },
    { id: 4, name: 'Telur Dadar', price: 3000, category: 'Protein' },
    { id: 5, name: 'Nugget', price: 4000, category: 'Protein' },
    { id: 6, name: 'Ayam Suir', price: 5000, category: 'Protein' },
    { id: 7, name: 'Kornet', price: 5000, category: 'Protein' },
    { id: 8, name: 'Keju', price: 3000, category: 'Pelengkap' },
    { id: 9, name: 'Nasi', price: 5000, category: 'Pelengkap' },
    { id: 10, name: 'Pangsit', price: 3000, category: 'Pelengkap' },
    { id: 11, name: 'Bawang Goreng', price: 2000, category: 'Pelengkap' },
    { id: 12, name: 'Pokcoy', price: 2000, category: 'Sayuran' },
    { id: 13, name: 'Cesim', price: 2000, category: 'Sayuran' },
    { id: 14, name: 'Kobis', price: 2000, category: 'Sayuran' },
    { id: 15, name: 'Pedas Level 1', price: 0, category: 'Tingkat Pedas', level: 1 },
    { id: 16, name: 'Pedas Level 2', price: 0, category: 'Tingkat Pedas', level: 2 },
    { id: 17, name: 'Pedas Level 3', price: 0, category: 'Tingkat Pedas', level: 3 },
    { id: 18, name: 'Pedas Level 4', price: 0, category: 'Tingkat Pedas', level: 4 },
    { id: 19, name: 'Pedas Level 5', price: 0, category: 'Tingkat Pedas', level: 5 },
  ];

  const formatPrice = (price: number) => {
    if (price === 0) return 'GRATIS';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categories = [
    { name: 'Semua', filter: 'all' },
    { name: 'Protein', filter: 'Protein' },
    { name: 'Pelengkap', filter: 'Pelengkap' },
    { name: 'Sayuran', filter: 'Sayuran' },
    { name: 'Tingkat Pedas', filter: 'Tingkat Pedas' }
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? toppingItems 
    : toppingItems.filter(item => item.category === selectedCategory);

  const getSpicyColor = (level?: number) => {
    if (!level) return '';
    const colors = [
      'from-yellow-400 to-orange-400',
      'from-orange-400 to-orange-500',
      'from-orange-500 to-red-500',
      'from-red-500 to-red-600',
      'from-red-600 to-red-700'
    ];
    return colors[level - 1];
  };

  const getSpicyIcons = (level?: number) => {
    if (!level) return null;
    return Array.from({ length: level }, (_, i) => (
      <Flame key={i} className="w-4 h-4" />
    ));
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-white pt-10 pb-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Menu <span className="text-[#e41526]">Topping</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tambahkan topping favoritmu untuk membuat hidangan lebih istimewa!
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
                Menampilkan <span className="font-bold text-[#e41526]">{filteredMenu.length}</span> topping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPPING GRID */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                className={`group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ffde00] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  item.category === 'Tingkat Pedas' ? 'ring-2 ring-red-200' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className={`relative h-56 overflow-hidden flex items-center justify-center ${
                  item.category === 'Tingkat Pedas' 
                    ? `bg-gradient-to-br ${getSpicyColor(item.level)}` 
                    : item.category === 'Protein'
                    ? 'bg-gradient-to-br from-red-100 to-orange-50'
                    : item.category === 'Sayuran'
                    ? 'bg-gradient-to-br from-green-100 to-emerald-50'
                    : 'bg-gradient-to-br from-yellow-100 to-amber-50'
                }`}>
                  <div className={`text-center px-4 ${
                    item.category === 'Tingkat Pedas' ? 'text-white' : 'text-gray-400'
                  }`}>
                    {item.category === 'Tingkat Pedas' ? (
                      <div className="flex flex-col items-center">
                        <div className="flex gap-1 mb-3">
                          {getSpicyIcons(item.level)}
                        </div>
                        <p className="text-2xl font-bold">{item.name}</p>
                      </div>
                    ) : (
                      <>
                        <Plus className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <p className="text-xs font-medium">{item.name}</p>
                      </>
                    )}
                  </div>
                  {/* Category Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    item.category === 'Tingkat Pedas' 
                      ? 'bg-white text-red-600' 
                      : 'bg-[#ffde00] text-gray-900'
                  }`}>
                    {item.category}
                  </div>
                  {/* Free Badge for Spicy Level */}
                  {item.price === 0 && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      GRATIS
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e41526] transition-colors">
                    {item.name}
                  </h3>
                  
                  {item.category === 'Tingkat Pedas' && (
                    <div className="mb-4">
                      <div className="flex gap-1 text-red-500">
                        {getSpicyIcons(item.level)}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    <span className={`font-extrabold text-2xl ${
                      item.price === 0 ? 'text-green-600' : 'text-[#e41526]'
                    }`}>
                      {formatPrice(item.price)}
                    </span>
                    {item.price > 0 && (
                      <div className="bg-[#00a339] text-white p-2 rounded-full hover:scale-110 transition-transform">
                        <Plus className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Flame className="w-6 h-6" />
              Tingkat Pedas
            </h3>
            <p className="text-sm text-orange-50">
              Pilih level kepedasan sesuai selera Anda! Dari level 1 (ringan) hingga level 5 (extra pedas). 
              Semua tingkat pedas GRATIS tanpa biaya tambahan.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Plus className="w-6 h-6" />
              Informasi Topping
            </h3>
            <p className="text-sm text-blue-50">
              Tambahkan berbagai topping untuk memperkaya cita rasa hidangan Anda. 
              Pilih protein, sayuran, atau pelengkap sesuai selera!
            </p>
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