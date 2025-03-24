import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/footer";
import EnhancedNavbar from "../components/newNav";
import RefinedNavbar from "../components/newNav";

function AppLayout() {
  return (
    <div className="h-dvh">
      <header>
        <Navbar />
        {/* <RefinedNavbar /> */}
      </header>
      <main id="main-container" className="pb-28 sm:py-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
