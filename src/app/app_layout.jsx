import { Outlet, useLocation } from "react-router-dom";

import { Navbar, Footer, ScrollToTop, Seo } from "../components";
import StickyActionBar from "../ui/sticky_action_bar";
import ROUTES from "../config/routes";
import { buildBranchJsonLd } from "../config/seo";
import { franchiseDetails } from "../utils/data/franchise_details";

// Locations lives at two routes; both share one canonical + branch structured
// data so the duplicate URL never competes with the primary in search.
const LOCATIONS_SEO = {
  page: "locations",
  canonicalPath: ROUTES.FRANCHISE_DETAILS,
  jsonLd: buildBranchJsonLd(franchiseDetails),
};

const ROUTE_SEO = {
  [ROUTES.HOME]: { page: "home" },
  [ROUTES.ABOUT_US.ROOT]: { page: "about" },
  [ROUTES.OUR_TEAM]: { page: "team" },
  [ROUTES.PROGRAMMES.ROOT]: { page: "programmes" },
  [ROUTES.ADMISSION]: { page: "admission" },
  [ROUTES.FRANCHISE_DETAILS]: LOCATIONS_SEO,
  [ROUTES.LOCATE_US]: LOCATIONS_SEO,
  [ROUTES.CAREERS]: { page: "careers" },
  [ROUTES.JOIN_US]: { page: "franchise" },
  [ROUTES.PRIVACY_POLICY]: { page: "privacy" },
  [ROUTES.TERMS_OF_USE]: { page: "terms" },
};

function RouteSeo() {
  const { pathname } = useLocation();
  const props = ROUTE_SEO[pathname];
  return props ? <Seo {...props} /> : null;
}

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <RouteSeo />
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
