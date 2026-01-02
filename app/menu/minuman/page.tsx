"use client";

import React, { useState } from 'react';
import { Coffee, Snowflake, Flame } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  priceHot: number;
  priceCold: number;
  category: string;
}

export default function MinumanPage() {
  const [selectedTemp, setSelectedTemp] = useState('hot');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Teh', priceHot: 3000, priceCold: 5000, category: 'Minuman Tradisional' },
    { id: 2, name: 'Jeruk', priceHot: 5000, priceCold: 7000, category: 'Minuman Segar' },
    { id: 3, name: 'Good Day', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 4, name: 'Nutrisari Semua Varian', priceHot: 4000, priceCold: 6000, category: 'Minuman Serbuk' },
    { id: 5, name: 'Dancow Semua Varian', priceHot: 5000, priceCold: 7000, category: 'Susu' },
    { id: 6, name: 'Frisian Flag Semua Varian', priceHot: 5000, priceCold: 7000, category: 'Susu' },
    { id: 7, name: 'Chocolatos Semua Varian', priceHot: 5000, priceCold: 7000, category: 'Cokelat' },
    { id: 8, name: 'ABC Kopi', priceHot: 4000, priceCold: 6000, category: 'Kopi Instan' },
    { id: 9, name: 'Kuku Bima', priceHot: 4000, priceCold: 6000, category: 'Minuman Energi' },
    { id: 10, name: 'Extra Joss', priceHot: 4000, priceCold: 6000, category: 'Minuman Energi' },
    { id: 11, name: 'Jahe Wangi', priceHot: 4000, priceCold: 6000, category: 'Minuman Tradisional' },
    { id: 12, name: 'Luwak White Coffee', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 13, name: 'Milo', priceHot: 6000, priceCold: 8000, category: 'Cokelat' },
    { id: 14, name: 'Adem Sari', priceHot: 4000, priceCold: 6000, category: 'Minuman Segar' },
    { id: 15, name: 'Top Coffee Gula Aren', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 16, name: 'Kapal Api Special Mix', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 17, name: 'Good Day Cappuccino', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 18, name: 'Indocafe Coffee Mix', priceHot: 5000, priceCold: 7000, category: 'Kopi Instan' },
    { id: 19, name: 'Beng-Beng Drink', priceHot: 6000, priceCold: 8000, category: 'Cokelat' },
    { id: 20, name: 'ABC Klepom', priceHot: 4000, priceCold: 6000, category: 'Minuman Serbuk' },
    { id: 21, name: 'Teh Tarik Max Tea', priceHot: 5000, priceCold: 7000, category: 'Minuman Tradisional' },
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
    { name: 'Kopi Instan', filter: 'Kopi Instan' },
    { name: 'Cokelat', filter: 'Cokelat' },
    { name: 'Susu', filter: 'Susu' },
    { name: 'Minuman Tradisional', filter: 'Minuman Tradisional' },
    { name: 'Minuman Segar', filter: 'Minuman Segar' },
    { name: 'Minuman Energi', filter: 'Minuman Energi' },
    { name: 'Minuman Serbuk', filter: 'Minuman Serbuk' }
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-white pt-10 pb-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">            
            <h1 className="font-extrabold text-[#00a339] text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              Menu <span className="text-[#e41526]">Minuman</span>
            </h1>
            
            {/* Temperature Toggle */}
            <div className="max-w-md mx-auto mb-6">
              <p className="text-sm text-gray-600 mb-3 text-center font-medium">Pilih Suhu Minuman:</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedTemp('hot')}
                  className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTemp === 'hot'
                      ? 'bg-[#ffde00] text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <Flame className="w-5 h-5" />
                  Hangat
                </button>
                <button
                  onClick={() => setSelectedTemp('cold')}
                  className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTemp === 'cold'
                      ? 'bg-[#ffde00] text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <Snowflake className="w-5 h-5" />
                  Dingin
                </button>
              </div>
            </div>
            
            {/* FILTER CATEGORIES */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat.filter)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    selectedCategory === cat.filter
                      ? 'bg-[#e41526] text-white shadow-lg scale-105'
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
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ffde00] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className={`relative h-56 overflow-hidden flex items-center justify-center ${
                  selectedTemp === 'hot' 
                    ? 'bg-gradient-to-br from-orange-100 to-red-50' 
                    : 'bg-gradient-to-br from-blue-100 to-cyan-50'
                }`}>
                  <div className="text-gray-400 text-center px-4">
                    <Coffee className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-medium">{item.name}</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-[#ffde00] text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {item.category}
                  </div>
                  {/* Temperature Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${
                    selectedTemp === 'hot' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {selectedTemp === 'hot' ? (
                      <>
                        <Flame className="w-3 h-3" />
                        Hangat
                      </>
                    ) : (
                      <>
                        <Snowflake className="w-3 h-3" />
                        Dingin
                      </>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e41526] transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-600">{formatPrice(item.priceHot)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Snowflake className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-600">{formatPrice(item.priceCold)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    <span className={`font-extrabold text-2xl ${
                      selectedTemp === 'hot' ? 'text-orange-600' : 'text-blue-600'
                    }`}>
                      {formatPrice(selectedTemp === 'hot' ? item.priceHot : item.priceCold)}
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