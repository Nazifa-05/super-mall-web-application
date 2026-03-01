import { useNavigate } from "react-router-dom";

import shop1 from "../../assets/images/shops/smart-electronics.jpg";
import shop2 from "../../assets/images/shops/fashion-hub.jpg";
import shop3 from "../../assets/images/shops/daily-needs.jpg";

const Shops = () => {
  const navigate = useNavigate();

  const shops = [
    {
      id: 1,
      name: "Smart Electronics",
      category: "Electronics",
      floor: "1st Floor",
      image: shop1,
      route: "/electronics",
    },
    {
      id: 2,
      name: "Fashion Hub",
      category: "Clothing",
      floor: "2nd Floor",
      image: shop2,
      route: "/clothing",
    },
    {
      id: 3,
      name: "Daily Needs",
      category: "Grocery",
      floor: "3rd Floor",
      image: shop3,
      route: "/grocery",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Mall Shops
        </h1>
        <p className="text-gray-600 max-w-xl">
          Browse all shops available in Super Mall and explore products, offers
          and categories floor-wise.
        </p>
      </section>

      {/* ================= SHOPS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>

                <div className="flex gap-3">
                  <span className="text-sm px-3 py-1 rounded-full bg-pink-100 text-[#F25278] font-medium">
                    {shop.category}
                  </span>
                  <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {shop.floor}
                  </span>
                </div>

                <button
                  onClick={() => navigate(shop.route)}
                  className="mt-4 text-[#b4002a] font-semibold hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shops;
