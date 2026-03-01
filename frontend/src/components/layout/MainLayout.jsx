import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
