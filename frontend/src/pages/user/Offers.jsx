const Offers = () => {
  return (
    <div className="space-y-20 bg-gradient-to-b from-[#f8f8f8] via-[#f3f3f3] to-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white px-12 py-24">

        {/* glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-400/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">
            Exclusive Mall <br />
            <span className="bg-white text-red-700 px-4 py-2 rounded-xl inline-block mt-3">
              Offers & Deals
            </span>
          </h1>

          <p className="text-lg text-red-100 max-w-xl">
            Grab exciting discounts and limited-time deals from your favorite
            shops across all floors of Super Mall.
          </p>
        </div>
      </section>

      {/* ================= FEATURED OFFERS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          🔥 Featured Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Flat 30% Off",
              desc: "On all electronics & gadgets",
              tag: "Electronics",
            },
            {
              title: "Buy 1 Get 1 Free",
              desc: "On selected fashion brands",
              tag: "Fashion",
            },
            {
              title: "Up to 20% Discount",
              desc: "Fresh grocery & daily needs",
              tag: "Grocery",
            },
          ].map((offer, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              {/* badge */}
              <span className="absolute -top-3 right-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {offer.tag}
              </span>

              <h3 className="text-2xl font-extrabold text-red-700 mb-3">
                {offer.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {offer.desc}
              </p>

              <button className="text-red-600 font-semibold hover:underline">
                View Offer →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FLOOR WISE DEALS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          🏬 Floor-wise Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              floor: "Ground Floor",
              offers: "Luxury brands & accessories offers",
            },
            {
              floor: "1st Floor",
              offers: "Electronics & gadgets discounts",
            },
            {
              floor: "2nd Floor",
              offers: "Fashion & lifestyle deals",
            },
            {
              floor: "3rd Floor",
              offers: "Food court & grocery savings",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-red-700 mb-2">
                {item.floor}
              </h3>
              <p className="text-gray-600">
                {item.offers}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl text-white px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold mb-3">
              Don’t Miss Today’s Deals!
            </h2>
            <p className="text-red-100">
              Visit Super Mall today and enjoy exclusive offers across all
              categories.
            </p>
          </div>

          <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Shops
          </button>
        </div>
      </section>

    </div>
  );
};

export default Offers;
