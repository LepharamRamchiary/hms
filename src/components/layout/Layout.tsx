import { Outlet } from "react-router";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;