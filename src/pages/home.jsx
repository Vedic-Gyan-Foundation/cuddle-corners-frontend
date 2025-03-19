import { Banner, SchoolFacilities, AboutUs } from "../components";

function Home() {
  return (
    <section>
      {/* <!---- Banner ----> */}
      <Banner />

      <div className="mt-12 flex flex-col gap-8">
        {/* <!---- School Facilities  -----> */}
        <SchoolFacilities />

        {/* <!---- About Us -----> */}
        <AboutUs />
      </div>
    </section>
  );
}

export default Home;
