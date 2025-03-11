import Banner from "../components/banner";
import { RevealOnScroll, BearAvatar } from "../ui";
import { BookOpenText, BusFront, CookingPot, Volleyball } from "lucide-react";

function Home() {
  return (
    <section>
      {/* <!---- Banner ----> */}
      <Banner />

      {/* <!---- School Facilities Section -----> */}
      <>
        <div className="space-y-6 px-5 sm:mt-12">
          <h2 className="font-lobsterTwo text-center text-3xl font-semibold sm:text-5xl">
            School Facilities
          </h2>
          <p className="mx-auto w-2/3 text-center font-robotoslab text-base text-stone-600 sm:text-lg">
            Our preschool provides a safe and enriching environment with
            well-equipped facilities. We offer a reliable school bus service, a
            fun and secure playground, a healthy canteen with nutritious meals,
            and a positive learning atmosphere that fosters curiosity and
            growth.
          </p>
        </div>

        {/* <!---- School Facilities Deta with Animation ---> */}
        <RevealOnScroll>
          <div className="mx-auto flex flex-wrap items-center justify-center gap-20 py-20 sm:gap-12">
            <BearAvatar
              primaryColor="#FFEFEC"
              secondaryColor="#FD5D37"
              contentTitle="School Bus"
              contentDetails="Our safe and reliable school bus service ensures hassle-free transportation, with trained staff and GPS tracking for parents’ peace of mind"
            >
              <BusFront
                className="text-[#FD5D37] transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-white"
                size={45}
              />
            </BearAvatar>

            <BearAvatar
              primaryColor="#EAF3EF"
              secondaryColor="#198753"
              contentTitle="Playground"
              contentDetails="A spacious and secure playground encourages active play, helping children develop motor skills, teamwork, and a love for outdoor activities."
            >
              <Volleyball
                className="text-[#198753] transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-white"
                size={45}
              />
            </BearAvatar>

            <BearAvatar
              primaryColor="#fbedcf"
              secondaryColor="#FFC007"
              contentTitle="Healthy Canteen"
              contentDetails="Our canteen serves fresh, nutritious meals, promoting healthy eating habits with a well-balanced menu designed for growing kids."
            >
              <CookingPot
                className="text-[#FFC007] transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-white"
                size={45}
              />
            </BearAvatar>

            <BearAvatar
              primaryColor="#cbe9f0"
              secondaryColor="#10CAF0"
              contentTitle="Positive Learning"
              contentDetails=" We create a warm, engaging learning environment where children explore, discover, and develop essential skills with joy and confidence."
            >
              <BookOpenText
                className="text-[#10CAF0] transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-white"
                size={45}
              />
            </BearAvatar>
          </div>
        </RevealOnScroll>
      </>
    </section>
  );
}

export default Home;
