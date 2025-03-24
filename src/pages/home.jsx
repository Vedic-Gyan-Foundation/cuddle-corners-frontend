import { Banner, SchoolFacilities, AboutUsSection } from "../components";

function Home() {
  return (
    <section className="">
      {/* <!---- Banner ----> */}
      <Banner />

      <div className="mt-12 flex flex-col gap-8">
        {/* <!---- School Facilities  -----> */}
        <SchoolFacilities />

        {/* <!---- About Us -----> */}
        <AboutUsSection />
      </div>
    </section>
  );
}

export default Home;
