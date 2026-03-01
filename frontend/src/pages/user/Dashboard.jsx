const Dashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your profile, orders and shopping activity here.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Orders
          </h3>
          <p className="text-2xl font-bold text-[#F25278] mt-2">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Wishlist Items
          </h3>
          <p className="text-2xl font-bold text-[#F25278] mt-2">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Saved Addresses
          </h3>
          <p className="text-2xl font-bold text-[#F25278] mt-2">
            0
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;