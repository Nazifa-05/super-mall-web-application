import React from "react";
import iphoneImg from "../assets/images/products/iPhone.JPG";
import samsungImg from "../assets/images/products/samsungS24.PNG";
import sonyImg from "../assets/images/products/sonyHP.WEBP";
import dellLaptop from "../assets/images/products/Dell.WEBP";

const electronicsData = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹79,999",
    image: iphoneImg,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: "₹74,999",
    image: samsungImg,
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: "₹19,999",
    image: sonyImg,
  },
  {
    id: 4,
    name: "Dell Laptop",
    price: "₹65,000",
    image: dellLaptop,
  },
];

const Electronics = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}> Electronics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {electronicsData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {item.price}
            </p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                background: "red",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Compare
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
