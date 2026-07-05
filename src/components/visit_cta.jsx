import { ArrowRight } from "lucide-react";

import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import { Container, Button, BearMascot, CloudDivider, CloudPuff } from "../ui";

/**
 * The shared pre-footer call-to-action. A cream→deep-blue wave transitions in,
 * and the blue block flows seamlessly into the (also blue) footer.
 */
export default function VisitCTA({
  heading = "Come see the smiles for yourself",
  text = "Book a campus visit or send us a quick WhatsApp — we'd love to show you around and answer every little question.",
}) {
  return (
    <section className="relative text-white">
      <CloudDivider className="-mb-px text-primary-900" />
      <div className="relative overflow-hidden bg-primary-900">
        <CloudPuff className="pointer-events-none absolute left-[7%] top-10 hidden w-24 opacity-20 md:block" />
        <CloudPuff className="pointer-events-none absolute bottom-10 right-[9%] hidden w-28 opacity-20 md:block" />
        <Container className="relative flex flex-col items-center gap-6 py-20 text-center">
          <BearMascot className="w-24" />
          <h2 className="max-w-2xl font-fredoka text-3xl font-semibold sm:text-4xl">
            {heading}
          </h2>
          <p className="max-w-xl text-lg text-primary-100">{text}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              to={ROUTES.ADMISSION}
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconRight
            >
              Book a Visit
            </Button>
            <Button href={SITE.whatsappHref} variant="whatsapp" size="lg">
              Message us on WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
