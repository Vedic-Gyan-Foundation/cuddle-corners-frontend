import { PagesBanner } from "../components";
import { ButtonPrimary } from "../ui";
import { useState } from "react";
import Modal from "../ui/modal";
import EnrollmentForm from "../components/enrollment_form";

function Admission() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value) => {
    setIsOpen(value);
  };

  return (
    <div className="mt-28">
      <PagesBanner headingText="A Place to Build a Strong Foundation for Your Child’s Future Success" />

      <div className="mt-14 flex flex-col gap-32">
        {/* <!--- Section 1 ----> */}
        <section className="space-y-16 px-6 sm:px-12">
          <h2 className="mx-auto w-3/5 py-2 text-center text-4xl font-normal leading-[1.5] text-primary-900">
            Take the first steps toward learning more about Cuddle Corners
            Preschool
          </h2>
          {/* <!-- FORMS --> */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2">
            <div className="flex flex-col items-center">
              <img
                src="./images/icons/contact-us.svg"
                alt="cuddle-corners-contact-us-img"
                className="h-32"
              />
              <p className="w-2/5 py-4 text-center text-sm text-primary-800">
                We&apos;d love to learn more about your child! Please take a
                moment to fill out our short questionnaire.
              </p>
              <ButtonPrimary
                label="Contact Us"
                color="blue"
                onClick={() => setIsOpen(true)}
                className="pt-6"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./images/icons/enrollment-form-icon.svg"
                alt="cuddle-corners-contact-us-img"
                className="h-32"
              />
              <p className="w-2/5 py-4 text-center text-sm text-primary-800">
                Ready to join us? Download the enrollment form and email it to
                <a
                  href="mailto:info@cuddlecorners.com"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-700"
                >
                  <span> info@cuddlecorners.com</span>
                </a>
                .
              </p>
              <ButtonPrimary
                label="Enrollment Form"
                color="blue"
                href="/pdf/cuddle-corners-admission-form.pdf"
                className="pt-6"
              />
            </div>
          </div>
        </section>

        {/* <!--- Section 2  ----> */}
        <section className="relative grid grid-cols-1 gap-7 bg-primary-50 px-6 pb-32 pt-12 sm:grid-cols-2 sm:px-12">
          <div className="relative h-[600px] sm:h-auto">
            <img
              src="/images/general/admissions-general.webp"
              alt="cuddle-corners-admissions-details"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="relative z-10 space-y-8 self-center">
            <h3 className="text-4xl font-semibold text-primary-900">
              Enrollment details
            </h3>
            <p className="text-left text-primary-800">
              If, after your visit, you&apos;d like to enroll your child, please
              submit an{" "}
              <a
                href="./pdf/cuddle-corners-admission-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
              >
                <span>Application for Enrollment</span>
              </a>{" "}
              and Enrollment Deposit to secure a spot in our program or to hold
              a place on our waitlist.
              <br />
              <br />
              If your child is placed on the waitlist, your deposit will be held
              until a space becomes available. Should you choose to withdraw
              before a space opens up, your deposit may be refunded—however, you
              must notify the Center in writing.
              <br />
              <br />
              Once a spot becomes available and is reserved for your child, the
              deposit becomes non-refundable.
              <br />
              <br />
              After we receive both the application and deposit, you&apos;ll
              receive an enrollment packet and be asked to schedule your
              orientation.
              <br />
              <br />
              Enrollment at Cuddle Corners is offered on a first come, first
              served basis. We are unable to hold spots without both an{" "}
              <a
                href="./pdf/cuddle-corners-admission-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
              >
                <span>Application for Enrollment</span>
              </a>{" "}
              and Enrollment Deposit. Once our program is full, children will be
              added to the waitlist and admitted as space becomes available.
            </p>
          </div>
        </section>
      </div>

      <>
        {/* <!---- Modal  ----> */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Cuddle Corners enrollment"
        >
          {/* <!-- Enrollment form --> */}
          <EnrollmentForm onOpenModal={handleOpenModal} />
        </Modal>
      </>
    </div>
  );
}

export default Admission;
{
  /* Form */
}
