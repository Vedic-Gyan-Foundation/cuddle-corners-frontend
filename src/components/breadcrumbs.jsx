import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation(); // Get the current URL location

  const pathSegments = location.pathname
    .split("/") // Split the pathname into an array based on "/"
    .filter((segment) => !!segment); // Remove empty segments (""), keeping only valid parts

  return (
    <nav className="font-robotoSlab text-xl">
      {/* <!---- Home link (always present) ----> */}
      <Link
        to="/"
        className="inline-block transform capitalize text-secondary-500 transition-transform duration-200 hover:scale-110 hover:text-secondary-300"
      >
        Home
      </Link>

      {/*  <!---- Loop through each segment to build breadcrumb links ----> */}
      {pathSegments.map((segment, index) => {
        /**
         * Constructs the full breadcrumb path step by step.
         *
         * @param {string[]} pathSegments - Array of URL path segments.
         * @param {number} index - Current segment index in the loop.
         * @returns {string} - The full path up to the current breadcrumb.
         *
         * @example
         * // Given URL: "/about-us/team/contact"
         * pathSegments = ["about-us", "team", "contact"]
         *
         * Iterations:
         * - index = 0 → slice(0, 1) → `["about-us"]` → "/about-us"
         * - index = 1 → slice(0, 2) → `["about-us", "team"]` → "/about-us/team"
         * - index = 2 → slice(0, 3) → `["about-us", "team", "contact"]` → "/about-us/team/contact"
         */
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1; // Check if this is the last segment

        return (
          <span key={path}>
            <span className="mx-2">/</span>{" "}
            {/* <!---- Separator between breadcrumbs ----> */}
            {isLast ? (
              // Last breadcrumb (non-clickable, gray color)
              <span className="capitalize text-primary-400">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              // Clickable breadcrumb link
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
};

export default Breadcrumbs;
