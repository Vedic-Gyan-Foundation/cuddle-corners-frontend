import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ className }) {
  const location = useLocation();

  // Split the current URL path into segments, removing any empty parts
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => !!segment);

  return (
    <nav className={`font-robotoSlab text-xl ${className}`}>
      {/* Always show the Home link */}
      <Link
        to="/"
        className="inline-block transform capitalize text-secondary-500 transition-transform duration-200 hover:scale-110 hover:text-secondary-300"
      >
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        // Build the full path up to the current segment
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <span key={path}>
            {/* Separator between breadcrumbs */}
            <span className="mx-2">/</span>

            {isLast ? (
              // Last segment: plain text (not a link)
              <span className="capitalize text-primary-400">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              // Intermediate segments: clickable breadcrumb links
              <Link
                to={path}
                className="inline-block transform capitalize text-secondary-500 transition-transform hover:scale-110 hover:text-secondary-300"
              >
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
