// Central contact / CTA data so every button points at the same place.
// NOTE: destinations use Cuddle Corners' own published contacts. Confirm the
// preferred lead inbox + WhatsApp number with the business before launch.

export const HQ_PHONE = "+919856199105"; // primary Nalapara / HQ line
export const HQ_PHONE_ALT = "+918134992941";
export const HQ_EMAIL = "info@cuddlecorners.com";

const WA_MESSAGE =
  "Hi Cuddle Corners! I'd like to enquire about admission for my child.";

export const SITE = {
  name: "Cuddle Corners",
  tagline: "A happy, safe place to grow, play and learn",
  ageRange: "18 months – 5 years",
  centresCount: 6,
  city: "Guwahati, Assam",
  phone: HQ_PHONE,
  phoneAlt: HQ_PHONE_ALT,
  phoneHref: `tel:${HQ_PHONE}`,
  email: HQ_EMAIL,
  emailHref: `mailto:${HQ_EMAIL}`,
  whatsappHref: `https://wa.me/${HQ_PHONE.replace("+", "")}?text=${encodeURIComponent(WA_MESSAGE)}`,
  addressShort: "Mahapurush Madhabdev Path, Nalapara, Guwahati",
  addressFull:
    "Mahapurush Madhabdev Path, Near ITI, Nalapara, Sarusajai, Guwahati, Assam, 781040",
  mapHref: "https://maps.app.goo.gl/DpoUnPBk86P9UYDg6",
  facebook: "https://www.facebook.com/cuddle.corners.preschool",
  instagram: "https://www.instagram.com/cuddle.corners",
  curriculumPartner: "ToonDemy",
  // Affiliated flagship school (opens in a new tab where referenced).
  greenSchoolUrl: "https://www.greenschoolguwahati.com",
  greenSchoolName: "The Green School International",
};

// Build a WhatsApp deep-link for any number with a friendly prefilled message.
export function waLink(number, message = WA_MESSAGE) {
  const digits = (number || "").replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
