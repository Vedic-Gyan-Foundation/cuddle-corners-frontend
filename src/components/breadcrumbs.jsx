import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Friendlier labels than the raw route slugs.
const LABELS = {
  "about-us": "About",
  team: "Our Team",
  programmes: "Programmes",
  admission: "Admissions",
  "franchise-details": "Locations",
  "locate-us": "Locations",
  careers: "Careers",
  "partner-with-cuddle-corners": "Franchise",
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms & Conditions",
};

const pretty = (seg) =>
  LABELS[seg] ||
  seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

function Breadcrumbs({ className = "" }) {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
        <li>
          <Link
            to="/"
            className="text-ink-soft transition-colors hover:text-primary-700"
          >
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const path = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          return (
            <li key={path} className="flex items-center gap-1.5">
              <ChevronRight
                size={14}
                className="text-ink-muted"
                aria-hidden="true"
              />
              {isLast ? (
                <span className="text-primary-700" aria-current="page">
                  {pretty(segment)}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-ink-soft transition-colors hover:text-primary-700"
                >
                  {pretty(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
