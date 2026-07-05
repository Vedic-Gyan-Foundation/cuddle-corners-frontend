// Central SEO metadata for every route. Titles use a pipe separator (no em
// dashes), descriptions stay near 150-160 characters and lead with the local,
// intent-rich keywords parents actually search for (preschool, daycare,
// Guwahati, the child's age). Update the live domain here if it ever changes.
import { SITE } from "./site";

export const SITE_URL = "https://cuddlecorners.com";

// Default social-share image (used when a page does not set its own).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/photos/hero-classroom.jpg`;

export const PAGE_SEO = {
  home: {
    title: "Cuddle Corners | Preschool & Daycare in Guwahati",
    description:
      "A warm, safe preschool and daycare for children aged 18 months to 5 years, with 6 nurturing centres across Guwahati, Assam. Book a campus visit today.",
  },
  about: {
    title: "About Us | Cuddle Corners Preschool, Guwahati",
    description:
      "Cuddle Corners is a warm preschool for ages 18 months to 5 years across Guwahati, with a ToonDemy Singapore curriculum and caring, trained educators.",
  },
  programmes: {
    title: "Programmes | Cuddle Corners Preschool, Guwahati",
    description:
      "Playgroup, Nursery, LKG, UKG and daycare for little ones aged 18 months to 5 years, taught through joyful, play-led learning at Cuddle Corners, Guwahati.",
  },
  admission: {
    title: "Admissions | Cuddle Corners Preschool, Guwahati",
    description:
      "Enrol your child at Cuddle Corners. Book a campus visit, see how admissions work, and start a happy, safe preschool journey in Guwahati, Assam.",
  },
  locations: {
    title: "Our Centres in Guwahati | Cuddle Corners Preschool",
    description:
      "Find your nearest Cuddle Corners preschool in Guwahati. Call, WhatsApp or get directions to our centres in Bharalumukh, Kahilipara, Rehabari, Nalapara and Beltola.",
  },
  team: {
    title: "Our Team | Cuddle Corners Preschool, Guwahati",
    description:
      "Meet the trustees and educators behind Cuddle Corners, a warm preschool for young children aged 18 months to 5 years across Guwahati, Assam.",
  },
  careers: {
    title: "Careers | Work at Cuddle Corners Preschool",
    description:
      "Join Cuddle Corners as an early-years educator in Guwahati. Explore our culture and apply to help little ones grow, play and learn every day.",
  },
  franchise: {
    title: "Franchise Opportunity | Partner with Cuddle Corners",
    description:
      "Own a Cuddle Corners preschool franchise in Northeast India. Enjoy 33% off the franchise fee, a token first-year royalty, and full setup, training and marketing support.",
  },
  privacy: {
    title: "Privacy Policy | Cuddle Corners",
    description:
      "How Cuddle Corners collects, uses and protects the personal information you share with us.",
  },
  terms: {
    title: "Terms & Conditions | Cuddle Corners",
    description:
      "The terms and conditions that govern your use of the Cuddle Corners website.",
  },
};

// Split a free-text franchise address into a schema.org PostalAddress.
// Every branch address ends "..., Guwahati, Assam, India, <6-digit pin>".
function toPostalAddress(address) {
  const postalCode = (address.match(/(\d{6})\s*$/) || [])[1];
  const streetAddress = address.replace(/,?\s*Guwahati,.*$/i, "").trim();
  return {
    "@type": "PostalAddress",
    streetAddress: streetAddress || address,
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    addressCountry: "IN",
    ...(postalCode ? { postalCode } : {}),
  };
}

// Build an ItemList of the open centres for the Locations page. Telephone is
// deliberately omitted: a couple of the stored branch numbers are malformed,
// and shipping bad data in structured markup is worse than shipping none.
// Addresses are reliable, so we surface those plus the parent-brand link.
export function buildBranchJsonLd(branches) {
  const open = branches.filter(
    (b) => b.franchiseAddress && b.franchiseAddress !== "Coming Soon",
  );

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cuddle Corners centres in Guwahati",
    itemListElement: open.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Preschool",
        name: b.franchiseName,
        address: toPostalAddress(b.franchiseAddress),
        areaServed: SITE.city,
        url: `${SITE_URL}/franchise-details`,
        parentOrganization: {
          "@type": "Preschool",
          name: SITE.name,
          url: SITE_URL,
        },
      },
    })),
  };
}
