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
        <div className="absolute bottom-[63%] left-1/2 flex -translate-x-1/2 transform flex-col items-center justify-center text-white">
          <p className="text-center font-fredoka text-3xl font-semibold">
            <span className="block whitespace-nowrap">
              Where Learning Begins
            </span>
            <span className="block">with Love and Care</span>
          </p>
          <p className="mt-4 text-lg font-medium">Admission Open</p>

          <EnrollNowBtn styles="mt-7 rounded-lg" />
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
          <div className="absolute flex h-full w-1/2 flex-col items-center justify-center pl-16 text-white sm:bottom-8 md:left-16 lg:bottom-12">
            <p className="custom-md:text-4xl text-center font-fredoka font-semibold *:tracking-wider md:text-3xl lg:text-6xl">
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
