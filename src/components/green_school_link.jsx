/* eslint-disable react-refresh/only-export-components -- shared link component + text helper */
import { SITE } from "../config/site";

/**
 * Inline link to the affiliated flagship school, The Green School International.
 * Opens in a new tab so it reads as an external reference.
 */
export function GreenSchoolLink({ className = "" }) {
  return (
    <a
      href={SITE.greenSchoolUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium text-primary-700 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-800 hover:decoration-primary-600 ${className}`}
    >
      {SITE.greenSchoolName}
    </a>
  );
}

/**
 * Turn any occurrence of the Green School name inside a plain string into a
 * link, returning an array of strings + link nodes safe to render in JSX.
 */
export function linkifyGreenSchool(text) {
  const name = SITE.greenSchoolName;
  if (typeof text !== "string" || !text.includes(name)) return text;
  const parts = text.split(name);
  return parts.flatMap((part, i) =>
    i === 0 ? [part] : [<GreenSchoolLink key={i} />, part],
  );
}
