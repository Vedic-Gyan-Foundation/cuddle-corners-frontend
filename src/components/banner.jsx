import EnrollNowBtn from "../ui/enroll_now_btn";

function Banner() {
  return (
    <>
      {/* <!---- Mobile view ----> */}
      <div className="relative block sm:hidden">
        <img
          src="/images/banners/mobile-view-banner-1.png"
          alt="mobile-view-banner"
          className="w-full"
        />
        <div className="absolute left-1/2 top-20 flex -translate-x-1/2 transform flex-col items-center justify-center text-white">
          <p className="text-center font-fredoka text-2xl font-semibold">
            <span className="block whitespace-nowrap">
              Where Learning Begins
            </span>
            <span className="block">with Love and Care</span>
          </p>
          <p className="mt-4 text-lg font-medium">Admission Open</p>

          <EnrollNowBtn styles="mt-4 rounded-lg" />
        </div>
      </div>
      {/* <!---- Desktop view ----> */}
      <div id="banner-container">
        <div className="relative hidden sm:block">
          <img
            src="/images/banners/desktop-view-banner-1.png"
            alt="mobile-view-banner"
            className="w-full"
          />
          <div className="absolute left-10 top-[46%] flex w-[45%] -translate-y-1/2 flex-col items-center justify-center pl-8 text-white">
            <p className="text-center font-fredoka text-2xl font-semibold *:tracking-wider lg:text-4xl xl:text-6xl">
              <span className="block whitespace-nowrap">
                Where Learning Begins
              </span>
              <span className="block">with Love and Care</span>
            </p>
            <p className="mt-2 font-medium sm:text-base md:mt-4">
              Admission Open
            </p>
            <EnrollNowBtn styles="mt-2 md:mt-4 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
