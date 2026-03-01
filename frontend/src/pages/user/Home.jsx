// HERO IMAGE (NEW – MALL INTERIOR)
import heroMall from "../../assets/images/hero-mall.jpg";

// Category images
import electronicsImg from "../../assets/images/categories/electronics.jpg";
import clothingImg from "../../assets/images/categories/clothing.jpg";
import groceryImg from "../../assets/images/categories/grocery.jpg";
import footwearImg from "../../assets/images/categories/footwear.jpg";

// Shop images
import shop1 from "../../assets/images/shops/smart-electronics.jpg";
import shop2 from "../../assets/images/shops/fashion-hub.jpg";
import shop3 from "../../assets/images/shops/daily-needs.jpg";

const Home = () => {
  return (
    <div className="space-y-28">

      {/* ================= HERO SECTION (PREMIUM MALL STYLE) ================= */}
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white">

        {/* Soft glow */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-red-400/30 rounded-full blur-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-12 py-28">

          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Experience the <br />
              <span className="bg-white text-red-700 px-5 py-2 rounded-xl inline-block mt-4">
                Super Mall
              </span>
            </h1>

            <p className="text-lg text-red-100 max-w-lg">
              A modern shopping destination where fashion, electronics,
              groceries and lifestyle brands come together.
            </p>

            <div className="flex gap-5">
              <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Explore Mall
              </button>
              <button className="border border-white/70 px-8 py-3 rounded-lg hover:bg-white hover:text-red-700 transition">
                View Stores
              </button>
            </div>

            {/* GLASS STATS */}
            <div className="flex gap-6 pt-4">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-sm text-red-100">Premium Shops</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold">5 Floors</h3>
                <p className="text-sm text-red-100">Shopping Zones</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={heroMall}
              alt="Shopping Mall Interior"
              className="rounded-3xl shadow-2xl w-full max-w-xl"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-8 backdrop-blur-md bg-white/90 text-red-700 px-5 py-3 rounded-xl shadow-lg">
              <p className="text-sm font-semibold">🏬 Biggest Mall Experience</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Electronics", img: electronicsImg },
            { name: "Clothing", img: clothingImg },
            { name: "Grocery", img: groceryImg },
            { name: "Footwear", img: footwearImg },
          ].map((cat) => (
            <div
              key={cat.name}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-bold">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED SHOPS ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Featured Shops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Smart Electronics", img: shop1 },
            { name: "Fashion Hub", img: shop2 },
            { name: "Daily Needs", img: shop3 },
          ].map((shop) => (
            <div
              key={shop.name}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={shop.img}
                alt={shop.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {shop.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Trusted brands with premium quality products.
                </p>
                <button className="text-red-600 font-semibold hover:underline">
                  View Shop →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OFFERS ================= */}
      <section className="bg-gray-100 rounded-3xl p-14">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Latest Offers 🔥
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Flat 30% off on Electronics",
            "Buy 1 Get 1 Free on Clothing",
            "20% Discount on Grocery Items",
          ].map((offer, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {offer}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
