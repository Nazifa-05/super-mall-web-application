import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Electronics", slug: "electronics", icon: "📱", desc: "Mobiles, Laptops, Gadgets" },
    { name: "Clothing", slug: "clothing", icon: "👕", desc: "Men, Women & Kids Wear" },
    { name: "Grocery", slug: "grocery", icon: "🛒", desc: "Daily needs & essentials" },
    { name: "Footwear", slug: "footwear", icon: "👟", desc: "Shoes, Sandals & Slippers" },
    { name: "Beauty", slug: "beauty", icon: "💄", desc: "Cosmetics & Personal care" },
    { name: "Home Appliances", slug: "home-appliances", icon: "🏠", desc: "Kitchen & Home items" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Shop by Categories</h1>
        <p className="text-gray-600 mt-2">
          Explore various product categories available in our Super Mall
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="bg-white border rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/categories/${cat.slug}`)}
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
            <p className="text-gray-500">{cat.desc}</p>

            <button className="mt-4 text-red-600 font-medium hover:underline">
              View Shops →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
