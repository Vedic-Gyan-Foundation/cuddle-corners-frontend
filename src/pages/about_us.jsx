import { learningDomains } from "../utils/data/learning_journey";
import { RevealOnScroll, StackedCards } from "../ui";
import { aboutUSImagesOne } from "../utils/data/about_us_images";
import { PagesBanner } from "../components";

function AboutUs() {
  return (
    <article>
      {/* <!--  Hero Section --> */}
      <PagesBanner headingText="About Us" />

      {/* <!----- About Us Section -----> */}
      <div className="mt-20 flex flex-col gap-32 px-6 sm:px-12">
        {/* <!---- Our School ----> */}
        <section className="grid w-full gap-28 sm:grid-cols-1 lg:grid-cols-5">
          {/* <!-- Text --> */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-5xl font-semibold text-primary-600">
              Our School
            </h2>
            <div className="space-y-4 *:text-left *:text-base *:leading-[1.5]">
              <p>
                At Cuddle Corners, we offer a warm and nurturing preschool
                experience for children aged 18 months to 5 years. Located in
                LOCATION, our bright and engaging classrooms provide the perfect
                setting for early learning, play, and discovery.
              </p>
              <p>
                In partnership with <b>Toondemy</b>, Singapore&apos;sleading
                education provider, we deliver a well-rounded curriculum that
                blends creativity, structure, and meaningful exploration. From
                literacy and numeracy to art and social-emotional growth, each
                day is filled with joy and purpose.
              </p>
              <p>
                AOur passionate educators focus on building strong relationships
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
        <section className="grid w-full gap-28 sm:grid-cols-1 lg:grid-cols-5">
          {/* <!-- Image  --> */}
          <div className="order-2 mx-14 flex items-center justify-center lg:order-1 lg:col-span-2 lg:mx-10">
            <StackedCards images={aboutUSImagesOne} />
          </div>

          {/* <!-- Text  --> */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <h2 className="mb-6 text-5xl font-semibold text-primary-600">
              Mission
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
        <section>
          <RevealOnScroll
            staggerChildren={0.1} // stagger timing
          >
            <h2 className="mb-12 text-5xl font-semibold text-primary-600">
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
                    <Icon size={34} className="text-primary-600" />
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

        {/* <!----- Our Team ------> */}
        <section>
          <h2 className="mb-14 text-5xl font-semibold text-primary-600">
            Our Team
          </h2>
          <div></div>
        </section>
      </div>
    </article>
  );
}

export default AboutUs;
