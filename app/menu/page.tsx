const daftarMenu = [
  { id: 1, nama: "Nasi Goreng Wagyu", harga: "Rp 45.000", kategori: "Makanan" },
  { id: 2, nama: "Es Kopi Susu Aren", harga: "Rp 20.000", kategori: "Minuman" },
  { id: 3, nama: "Sate Ayam Madura", harga: "Rp 35.000", kategori: "Makanan" },
];

export default function MenuPage() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Daftar Menu Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {daftarMenu.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-hover transition-all">
            <h3 className="text-xl font-semibold">{item.nama}</h3>
            <p className="text-gray-500">{item.kategori}</p>
            <p className="text-orange-600 font-bold mt-2">{item.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
}