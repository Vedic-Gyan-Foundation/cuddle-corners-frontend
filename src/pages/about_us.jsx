import { learningDomains } from "../utils/data/learning_journey";
import { ButtonPrimary, RevealOnScroll, StackedCards } from "../ui";
import { aboutUSImagesOne } from "../utils/data/about_us_images";
import { PagesBanner } from "../components";
import { useState } from "react";
import Modal from "../ui/modal";
import EnrollmentForm from "../components/enrollment_form";

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value) => {
    setIsOpen(value);
  };

  return (
    <div className="pt-28">
      {/* <!--  Hero Section --> */}
      <PagesBanner headingText="We believe every child is born with a natural curiosity and a love for learning." />

      {/* <!----- About Us Section -----> */}
      <div className="mt-20 flex flex-col gap-32">
        {/* <!---- Our School ----> */}
        <section className="grid w-full gap-28 px-6 sm:grid-cols-1 sm:px-12 lg:grid-cols-5">
          {/* <!-- Text --> */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-5xl font-semibold text-primary-900">
              Our School
            </h2>
            <div className="space-y-4 *:text-left *:text-base *:leading-[1.5]">
              <p>
                At Cuddle Corners, we provide a warm and nurturing preschool
                experience for children aged 18 months to 5 years. With three
                convenient locations across Guwahati — The Green School
                International (Nalapara), R.K. Choudhury Road (Near Sluice Gate,
                Bharalumukh), and House No. 13, Lutuma Road, 4th Battalion Gate,
                Kahilipara — our bright and engaging classrooms create the
                perfect environment for early learning, play, and discovery.
              </p>

              <p>
                In partnership with <b>Toondemy</b>, Singapore&apos;s leading
                education provider, we deliver a well-rounded curriculum that
                blends creativity, structure, and meaningful exploration. From
                literacy and numeracy to art and social-emotional growth, each
                day is filled with joy and purpose.
              </p>
              <p>
                Our passionate educators focus on building strong relationships
                and supporting each child&apos;s unique potential. With a
                foundation in care, curiosity, and connection, we help children
                grow into confident, happy learners—ready to thrive in school
                and life.
              </p>
            </div>
          </div>

          {/* <!-- Image  --> */}
          <div className="mx-14 flex items-center justify-center lg:col-span-2 lg:mx-10">
            <StackedCards images={aboutUSImagesOne} />
          </div>
        </section>

        {/* <!---- Mission -----> */}
        <section className="grid w-full gap-28 px-6 sm:grid-cols-1 sm:px-12 lg:grid-cols-5">
          {/* <!-- Image  --> */}
          <div className="order-2 mx-14 flex items-center justify-center lg:order-1 lg:col-span-2 lg:mx-10">
            <StackedCards images={aboutUSImagesOne} />
          </div>

          {/* <!-- Text  --> */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <h2 className="mb-6 text-5xl font-semibold text-primary-900">
              Our Mission
            </h2>

            <div className="space-y-4 *:text-left *:text-base *:leading-[1.5]">
              <p>
                At Cuddle Corners, our mission is to nurture every child with
                the same love, patience, and care they receive at home. We are
                committed to providing a program that focuses on the holistic
                development of young children by creating enriching learning
                experiences through exploration, discovery, and hands-on
                activities.
              </p>
              <p>
                By fostering a safe and supportive environment, we aim to build
                a strong foundation for lifelong learning—helping each child
                grow with confidence, curiosity, and a love for education.
              </p>
            </div>
          </div>
        </section>

        {/* <!----- Learning Journey ------> */}
        <section className="px-6 sm:px-12">
          <RevealOnScroll
            staggerChildren={0.1} // stagger timing
          >
            <h2 className="mb-12 text-5xl font-semibold text-primary-900">
              Our Learning Journey
            </h2>
          </RevealOnScroll>

          <RevealOnScroll
            className="grid gap-8 md:grid-cols-3"
            staggerChildren={0.2} // stagger timing
          >
            {learningDomains.map(
              ({ title, description, icon: Icon }, index) => (
                // <!--- Learning domain card ---->
                <div
                  key={index}
                  className="group h-full rounded-2xl bg-secondary-50 p-6 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center transition-transform group-hover:scale-110">
                    <Icon size={34} className="text-primary-900" />
                    <p className="ml-2 text-xl font-semibold text-stone-800">
                      {title}
                    </p>
                  </div>
                  <p className="text-stone-700">{description}</p>
                </div>
              ),
            )}
          </RevealOnScroll>
        </section>

        {/* <!----- Photos and Enrollment form container ------> */}
        <div className="bg-primary-50 pb-14">
          {/* <!-- Photos --> */}
          <section>
            <h2 className="mb-14 pt-12 text-center font-robotoSlab text-4xl font-semibold text-primary-900">
              See How We Learn, Laugh, and Grow at Cuddle Corners!
            </h2>
            <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: 8 }, (_, i) => i + 1).map(
                (imgName, index) => (
                  <img
                    key={index}
                    src="https://images.squarespace-cdn.com/content/v1/623b745f99da7f6d050e59e5/993571be-b4ac-4d9e-8be9-973cd0013236/TSD_gallery_art_class.jpg?format=1000w"
                    alt={`Gallery image ${index + 1}`}
                    className="w-full rounded-md object-cover"
                  />
                ),
              )}
            </div>
          </section>

          {/* <!-- Enrollment form  --> */}
          <section className="mx-auto max-w-3xl space-y-10 px-4 py-20 text-center">
            <img
              src="./images/icons/chat.svg"
              alt="cuddle-corners-enrollment-form-img"
              className="mx-auto aspect-square w-20 sm:w-32"
            />
            <div className="space-y-6">
              <p className="text-4xl text-primary-900">
                Ready to Begin a Learning Adventure?
              </p>
              <p className="mx-auto max-w-prose text-sm text-stone-500">
                If you’d like to learn more about our programs or the enrollment
                process, simply click the button below to fill out our short
                questionnaire. A member of our team will be in touch with you
                shortly!
              </p>
            </div>
            <ButtonPrimary
              label="Contact Us"
              color="blue"
              onClick={() => setIsOpen(true)}
              className="mx-auto pt-6"
            />
          </section>
        </div>
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

export default AboutUs;
