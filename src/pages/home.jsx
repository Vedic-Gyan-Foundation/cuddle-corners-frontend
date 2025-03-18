import { Banner, SchoolFacilities, AboutUs } from "../components";

function Home() {
  return (
    <section>
      {/* <!---- Banner ----> */}
      <Banner />

      <div className="flex flex-col gap-8 px-6 sm:px-10">
        {/* <!---- School Facilities  -----> */}
        <SchoolFacilities />

        {/* <!---- About Us -----> */}
        <AboutUs />
      </div>
    </section>
  );
}

export default Home;
