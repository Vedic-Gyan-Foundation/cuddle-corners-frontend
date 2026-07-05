import { Link } from "react-router-dom";
import { Phone, CalendarHeart } from "lucide-react";

import { SITE } from "../config/site";
import ROUTES from "../config/routes";
import { WhatsAppIcon } from "./icons";

// Fixed bottom action bar on mobile — the channels Indian parents actually
// convert on. Hidden on desktop, where the header CTA + footer cover it.
function StickyActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1 p-2">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center gap-0.5 rounded-xl py-2 font-fredoka text-xs font-medium text-primary-800 transition-colors hover:bg-primary-50"
        >
          <Phone size={20} aria-hidden="true" />
          Call
        </a>
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 rounded-xl py-2 font-fredoka text-xs font-medium text-whatsapp-dark transition-colors hover:bg-primary-50"
        >
          <WhatsAppIcon size={20} aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to={ROUTES.ADMISSION}
          className="flex flex-col items-center gap-0.5 rounded-xl bg-secondary-500 py-2 font-fredoka text-xs font-semibold text-primary-900 transition-colors hover:bg-secondary-400"
        >
          <CalendarHeart size={20} aria-hidden="true" />
          Book a Visit
        </Link>
      </div>
    </div>
  );
}

export default StickyActionBar;
