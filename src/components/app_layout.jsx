import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function AppLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
