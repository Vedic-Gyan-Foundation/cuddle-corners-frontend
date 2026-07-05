import { Outlet } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "../components";
import StickyActionBar from "../ui/sticky_action_bar";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {/* <!----- Scrolls to top when route changes ----->*/}
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      {/* pt clears the fixed navbar; the footer carries the mobile action-bar clearance */}
      <main id="main-container" className="flex-grow pt-[68px]">
        <Outlet />
      </main>
      <Footer />
      <StickyActionBar />
    </div>
  );
}

export default AppLayout;
