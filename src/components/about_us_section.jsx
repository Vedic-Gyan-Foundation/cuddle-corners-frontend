import { ButtonPrimary, RevealOnScroll } from "../ui";

function AboutUsSection() {
  return (
    <div className="flex flex-wrap items-center gap-10 lg:flex-nowrap">
      {/* <!----- Left Side: Text Content -----> */}
      <RevealOnScroll
        staggerChildren={0.5} // Adds a 0.5s delay between the start of each child's animation, creating a smooth sequential effect.
        className="w-full px-6 sm:px-12 lg:w-1/2"
      >
        <h1 className="mb-4 font-lobsterTwo text-3xl font-bold sm:text-5xl">
          Explore Our Commitment to Learning and Joyful Experiences
        </h1>
        <div className="my-5 space-y-7 *:text-left *:font-robotoSlab *:text-gray-700">
          <p>
            At Cuddle Corners, we create a warm and nurturing space where
            children feel safe, valued, and excited to learn. Our focus is on
            building meaningful connections, ensuring that every child’s early
            learning journey is filled with love, care, and joyful experiences.
          </p>
          <p>
            Through our partnership with{" "}
            <span className="font-semibold">Toondemy</span>, Singapore&apos;s
            leading education provider, we offer a unique curriculum that blends
            creativity with structured learning. Our approach encourages
            curiosity, problem-solving, and self-expression, helping children
            develop confidence and essential life skills.
          </p>

          <p>
            We believe learning goes beyond academics—it&apos;s about fostering
            strong relationships, creativity, and a love for discovery. With
            caring educators and a supportive environment, we prepare children
            for a bright future, where they grow with confidence and joy.
          </p>
        </div>
        {/* <div className="flex items-center gap-6"> */}
        <ButtonPrimary label="Read More" color="blue" />

        {/* <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="img/user.jpg"
              alt="CEO"
            />
            <div className="ml-3">
              <h6 className="font-semibold text-blue-500">John Doe</h6>
              <small className="text-gray-600">CEO & Founder</small>
            </div>
          </div> */}
        {/* </div> */}
      </RevealOnScroll>

      {/* <!----- Right Side: Images -----> */}

      <div className="w-full lg:w-1/2">
        <div className="relative mx-auto flex w-fit flex-col items-center">
          {/* Top Image */}
          <img
            className="aspect-square w-3/4 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500"
            src="./images/placeholders/about-us-img-1.jpg"
            alt="cuddle-corners-about-us-img-1"
          />

          {/* Bottom Images */}
          <div className="absolute -bottom-20 flex w-full justify-between px-2 sm:-bottom-5 sm:px-14">
            <img
              className="aspect-square w-36 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500 sm:w-48"
              src="./images/placeholders/about-us-img-2.jpg"
              alt="cuddle-corners-about-us-img-2"
            />
            <img
              className="aspect-square w-36 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500 sm:w-48"
              src="./images/placeholders/about-us-img-3.jpg"
              alt="cuddle-corners-about-us-img-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
