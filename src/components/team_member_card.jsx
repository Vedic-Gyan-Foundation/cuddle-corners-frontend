import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Reusable leadership / team profile card.
 * Props:
 *   name        – person's name (required)
 *   role        – designation shown as a pill (required)
 *   image       – photo src (required)
 *   bio         – long description; collapses behind a "Read more" toggle
 *   clampLines  – how many lines to show before expanding (default 5)
 */
function TeamMemberCard({ name, role, image, bio, clampLines = 5 }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = typeof bio === "string" && bio.length > 240;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift">
      <div className="flex flex-col items-center gap-4 px-6 pt-8 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="shrink-0 overflow-hidden rounded-full border-4 border-primary-100 shadow-soft">
          <img
            src={image}
            alt={`Portrait of ${name}, ${role} at Cuddle Corners`}
            className="h-24 w-24 object-cover transition-transform duration-500 ease-gentle group-hover:scale-105 sm:h-28 sm:w-28"
            width="112"
            height="112"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-fredoka text-2xl font-semibold text-ink">
            {name}
          </h3>
          <span className="mt-2 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 font-fredoka text-sm font-semibold text-primary-800">
            {role}
          </span>
        </div>
      </div>

      <div className="mt-5 px-6">
        <div className="h-px w-full bg-line" aria-hidden="true" />
      </div>

      <div className="flex flex-grow flex-col px-6 pb-7 pt-5">
        <p
          className="leading-relaxed text-ink-soft"
          style={
            isLong && !expanded
              ? {
                  WebkitLineClamp: clampLines,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
              : undefined
          }
        >
          {bio}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-4 inline-flex items-center gap-1 self-start font-fredoka text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
          >
            {expanded ? "Read less" : "Read more"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ease-gentle ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </article>
  );
}

export default TeamMemberCard;
