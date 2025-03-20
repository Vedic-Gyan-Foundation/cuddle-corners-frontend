import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/footer";
import EnhancedNavbar from "../components/newNav";
import RefinedNavbar from "../components/newNav";

function AppLayout() {
  return (
    <>
      <header>
        {/* <Navbar /> */}
        <RefinedNavbar />
      </header>
      <main className="h-dvh">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default AppLayout;
