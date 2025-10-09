import "./App.css";

function App() {
  return (
    <div className="p-6 space-y-10">
      {/* LATIHAN 1 - NAVBAR */}
      <section>
        <h2 className="font-bold mb-2">LATIHAN 1 - Navbar</h2>
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-4 shadow-sm">
          {/* Kiri - Logo */}
          <div className="font-bold text-xl mb-2 md:mb-0 self-start">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <li>
              <a href="#" className="hover:text-blue-600 block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 block">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <hr />

      {/* LATIHAN 2 - GRID GALERI */}
      <section>
        <h2 className="font-bold mb-2">LATIHAN 2 - Grid Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
            />
          ))}
        </div>
      </section>

      <hr />

      {/* LATIHAN 3 - PRICING TABLE */}
      <section>
        <h2 className="font-bold mb-2">LATIHAN 3 - Pricing Table</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-200 p-6 rounded">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p>Rp 50.000</p>
          </div>
          <div className="bg-blue-200 p-6 rounded scale-105">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p>Rp 100.000</p>
          </div>
          <div className="bg-gray-200 p-6 rounded">
            <h3 className="font-semibold text-lg">Premium</h3>
            <p>Rp 200.000</p>
          </div>
        </div>
      </section>

      <hr />

      {/* LATIHAN 4 - DASHBOARD LAYOUT */}
      <section>
        <h2 className="font-bold mb-2">LATIHAN 4 - Dashboard Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-[700px]">
          <header className="bg-gray-300 p-4 md:col-span-12">Header</header>
          <aside className="bg-gray-200 p-4 md:col-span-3">Sidebar</aside>
          <main className="bg-white border p-4 md:col-span-9">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-12">Footer</footer>
        </div>
      </section>

      <hr />

      {/* LATIHAN 5 - CARD PRODUCT */}
      <section>
        <h2 className="font-bold mb-2">LATIHAN 5 - Card Product</h2>
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start border p-6 bg-white shadow-sm gap-4">
      {/* Gambar produk */}
      <img
        src="https://www.placehold.co/80x80"
        alt="Gambar Produk"
        className="h-28 w-28 object-cover"
      />

      {/* Teks produk */}
      <div className="text-center md:text-left flex flex-col justify-center">
        <h3 className="font-bold text-lg">Nama Produk</h3>
        <p className="text-sm text-gray-600">
          Deskripsi produk singkat untuk latihan TailwindCSS...
        </p>
      </div>
    </div>
      </section>
    </div>
  );
}

export default App;
