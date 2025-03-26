import { Outlet } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "../components";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <!----- Scrolls to top when route changes ----->*/}
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <main id="main-container" className="flex-grow py-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
