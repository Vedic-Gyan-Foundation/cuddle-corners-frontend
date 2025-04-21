import { useNavigate } from "react-router";
import { ButtonPrimary, RevealOnScroll } from "../ui";

function AboutUsSection() {
  const naviagte = useNavigate();

  // redirect to the about-us page
  const navigateToAboutUs = () => {
    naviagte("/about-us");
  };

  return (
    <div className="flex flex-wrap items-center gap-10 lg:flex-nowrap">
      {/* <!----- Left Side: Text Content -----> */}
      <RevealOnScroll
        staggerChildren={0.5} // Adds a 0.5s delay between the start of each child's animation, creating a smooth sequential effect.
        className="w-full lg:w-1/2"
      >
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
          Explore Our Commitment to Learning and Joyful Experiences
        </h1>
        <div className="my-5 space-y-7 *:text-left *:font-robotoSlab *:text-gray-700">
          <p>
            At <span className="font-semibold">Cuddle Corners</span>, we provide
            a<span className="font-semibold"> warm, nurturing environment</span>{" "}
            where children feel{" "}
            <span className="italic">safe, valued, and excited</span> to learn.
            We believe that early childhood education is more than just
            academics—it&apos;s about
            <span className="font-semibold">
              {" "}
              love, care, and meaningful connections
            </span>
            .
          </p>
          <p>
            In collaboration with{" "}
            <span className="font-semibold">Toondemy</span>, Singapore&apos;s
            leading education provider, our unique curriculum blends{" "}
            <span className="italic">creativity with structured learning</span>.
            We encourage{" "}
            <span className="font-semibold">
              curiosity, problem-solving, and self-expression
            </span>
            , helping children build confidence and essential life skills.
          </p>
          <p>
            At Cuddle Corners, we strive to create an environment that fosters
            <span className="font-semibold">
              {" "}
              strong relationships, creativity, and a lifelong love for learning
            </span>
            . With caring educators and a supportive atmosphere, we empower
            children to grow with{" "}
            <span className="italic">confidence and joy</span>, preparing them
            for a bright future.
          </p>
        </div>

        <ButtonPrimary
          label="Read More"
          color="blue"
          onClick={navigateToAboutUs}
        />
      </RevealOnScroll>

      {/* <!----- Right Side: Images -----> */}

      <div className="w-full lg:w-1/2">
        <div className="relative mx-auto flex w-fit flex-col items-center">
          {/* Top Image */}
          <img
            className="aspect-square w-3/4 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500"
            src="./images/placeholders/about-us-img-1.webp"
            alt="cuddle-corners-about-us-img-1"
          />

          {/* Bottom Images */}
          <div className="absolute -bottom-20 flex w-full justify-between gap-8 px-2 sm:-bottom-5 sm:px-14">
            <img
              className="aspect-square w-44 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500 sm:w-36"
              src="./images/placeholders/about-us-img-2.webp"
              alt="cuddle-corners-about-us-img-2"
            />
            <img
              className="aspect-square w-44 rounded-full border-8 border-primary-100 object-cover transition-colors duration-300 ease-in hover:border-primary-500 sm:w-36"
              src="./images/placeholders/about-us-img-3.webp"
              alt="cuddle-corners-about-us-img-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
