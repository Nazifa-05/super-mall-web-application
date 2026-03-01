import { useParams } from "react-router-dom";

import shop1 from "../../assets/images/shops/smart-electronics.jpg";
import shop2 from "../../assets/images/shops/fashion-hub.jpg";
import shop3 from "../../assets/images/shops/daily-needs.jpg";

import laptopImg from "../../assets/images/products/laptop.jpg";
import phoneImg from "../../assets/images/products/iPhone.JPG";
import headphoneImg from "../../assets/images/products/sonyHP.WEBP";
import shirtImg from "../../assets/images/products/shirt.JPG";
import jeansImg from "../../assets/images/products/jeans.AVIF";
import riceImg from "../../assets/images/products/rice.JPG";
import milkImg from "../../assets/images/products/milk.JPG";



const ShopDetails = () => {
  const { shopId } = useParams();

  const shops = [
    {
      id: 1,
      name: "Smart Electronics",
      category: "Electronics",
      floor: "1st Floor",
      image: shop1,
      description:
        "Smart Electronics offers the latest gadgets, mobiles, laptops and accessories from trusted brands.",
      products: [
        { name: "Laptop", price: "₹55,000", image: laptopImg },
        { name: "Smartphone", price: "₹25,000", image: phoneImg },
        { name: "Headphones", price: "₹3,000", image: headphoneImg },
      ],
      offers: [
        "Flat 20% off on Laptops",
        "Extra 10% off on Credit Card",
      ],
    },
    {
      id: 2,
      name: "Fashion Hub",
      category: "Clothing",
      floor: "2nd Floor",
      image: shop2,
      description:
        "Fashion Hub brings trendy clothing for men, women and kids.",
      products: [
        { name: "Shirt", price: "₹1,999", image: shirtImg },
        { name: "Jeans", price: "₹2,499", image: jeansImg },
      ],
      offers: [
        "Buy 2 Get 1 Free",
        "Flat 30% Off on Jackets",
      ],
    },
    {
      id: 3,
      name: "Daily Needs",
      category: "Grocery",
      floor: "3rd Floor",
      image: shop3,
      description:
        "Daily Needs provides fresh grocery and essential items.",
      products: [
        { name: "Rice", price: "₹899", image: riceImg },
        { name: "Milk", price: "₹65", image: milkImg },
      ],
      offers: ["Flat 10% Off on Groceries"],
    },
  ];

  const shop = shops.find((s) => s.id === Number(shopId));

  if (!shop) {
    return <div className="p-10 text-center">Shop not found</div>;
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">

      {/* HEADER */}
      <section className="bg-[#b91c1c] text-white">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold">
              {shop.name}
            </h1>

            <p className="text-pink-100 max-w-lg">
              {shop.description}
            </p>

            <div className="flex gap-4">
              <span className="bg-white text-[#b91c1c] px-4 py-1 rounded-full font-semibold text-sm">
                {shop.category}
              </span>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                {shop.floor}
              </span>
            </div>
          </div>

          <div>
            <img
              src={shop.image}
              alt={shop.name}
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-8 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          🛍️ Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {shop.products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-[#b91c1c] font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="max-w-7xl mx-auto px-8 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
           Current Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shop.offers.map((offer, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 font-medium">
                {offer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ShopDetails;