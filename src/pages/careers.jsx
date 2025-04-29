import { PagesBanner } from "../components";
import CareersForm from "../components/careers_form";

function Careers() {
  return (
    <div className="py-28">
      {/* <!--- Banner ---> */}
      <PagesBanner headingText="Be a Part of Something Special at Cuddle Corners!" />

      {/* <!--- Text Content ---> */}
      <div className="mt-20 space-y-10 px-6 *:text-center sm:px-12">
        <h2 className="text-3xl leading-relaxed *:font-robotoSlab *:text-primary-900">
          <span>
            We are seeking qualified, experienced and passionate educators!{" "}
          </span>
          <br />
          <span>
            Our goal is to add talented, energetic and positive people to our
            team.
          </span>
        </h2>
        <p>
          If you are interested in joining our team, please fill out the form
          below and one of our administrators will be in contact with you.
        </p>
      </div>

      {/* <!--- Form ---> */}
      <div className="mx-auto max-w-3xl">
        <CareersForm />
      </div>
    </div>
  );
}

export default Careers;
