import { useState } from "react";

const CompareProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 15000,
      features: ["5G", "128GB Storage", "48MP Camera"],
    },
    {
      id: 2,
      name: "Laptop",
      price: 45000,
      features: ["i5 Processor", "8GB RAM", "512GB SSD"],
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      features: ["Noise Cancellation", "Wireless", "20h Battery"],
    },
  ];

  const [productA, setProductA] = useState(null);
  const [productB, setProductB] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7f7] via-[#fafafa] to-white px-6 py-16">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          🔍 Compare Products
        </h1>
        <p className="text-gray-600 max-w-xl">
          Select two products and compare their price and features
          to make a better buying decision.
        </p>
      </div>

      {/* ================= SELECT DROPDOWNS ================= */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 mb-14">
        <select
          className="w-full sm:w-64 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F25278]"
          onChange={(e) =>
            setProductA(
              products.find((p) => p.id === Number(e.target.value))
            )
          }
        >
          <option value="">Select Product A</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <select
          className="w-full sm:w-64 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F25278]"
          onChange={(e) =>
            setProductB(
              products.find((p) => p.id === Number(e.target.value))
            )
          }
        >
          <option value="">Select Product B</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* ================= COMPARISON TABLE ================= */}
      {productA && productB && (
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-x-auto">

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F25278] text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">{productA.name}</th>
                <th className="p-4 text-left">{productB.name}</th>
              </tr>
            </thead>

            <tbody>
              {/* PRICE */}
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-700">
                  Price
                </td>
                <td className="p-4 font-bold text-[#F25278]">
                  ₹{productA.price}
                </td>
                <td className="p-4 font-bold text-[#F25278]">
                  ₹{productB.price}
                </td>
              </tr>

              {/* FEATURES */}
              <tr className="bg-gray-50">
                <td className="p-4 font-semibold text-gray-700">
                  Features
                </td>
                <td className="p-4">
                  <ul className="space-y-1 list-disc list-inside text-gray-600">
                    {productA.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4">
                  <ul className="space-y-1 list-disc list-inside text-gray-600">
                    {productB.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default CompareProducts;
