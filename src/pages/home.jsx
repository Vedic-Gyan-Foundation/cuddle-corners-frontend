import {
  HomePageBanner,
  SchoolFacilities,
  AboutUsSection,
} from "../components";

function Home() {
  return (
    <section>
      {/* <!---- Banner ----> */}
      <HomePageBanner />

      <div className="mt-12 flex flex-col gap-8 px-6 sm:px-12">
        {/* <!---- School Facilities  -----> */}
        <SchoolFacilities />

        {/* <!---- About Us -----> */}
        <AboutUsSection />
      </div>
    </section>
  );
}

export default Home;
