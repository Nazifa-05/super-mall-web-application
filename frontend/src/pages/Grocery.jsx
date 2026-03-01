import React from "react";
import riceImg from "../assets/images/products/rice.JPG";
import fruitsImg from "../assets/images/products/fruits.JPEG";
import milkImg from "../assets/images/products/milk.JPG";
import oilImg from "../assets/images/products/oil.JPG";

const Grocery = () => {
  const groceries = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      price: "₹899",
      image: riceImg,
    },
    {
      id: 2,
      name: "Fresh Fruits Pack",
      price: "₹499",
      image: fruitsImg,
    },
    {
      id: 3,
      name: "Organic Milk",
      price: "₹65",
      image: milkImg,
    },
    {
      id: 4,
      name: "Sunflower Oil",
      price: "₹179",
      image: oilImg,
    },
  ];

  return (
    <div className="space-y-12">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Grocery Essentials 🛒
        </h1>
        <p className="text-gray-600 mt-2">
          Fresh and daily needs available at Super Mall
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-[#F25278] font-bold mt-2">
                {item.price}
              </p>

              <button className="mt-4 w-full bg-[#F25278] text-white py-2 rounded-lg font-medium hover:bg-[#e44468] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Grocery;