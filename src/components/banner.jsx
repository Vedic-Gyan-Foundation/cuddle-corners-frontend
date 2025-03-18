import { ButtonPrimary } from "../ui";

function Banner() {
  return (
    <>
      {/* <!---- Mobile Banner ----> */}
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

          <ButtonPrimary label="Enroll Now" />
        </div>
      </div>

      {/* <!---- Desktop Banner ----> */}
      <div id="banner-container">
        <div className="relative mt-12 hidden sm:block">
          <img
            src="/images/banners/desktop-view-banner-1.png"
            alt="mobile-view-banner"
            className="w-full"
          />
          <div className="absolute left-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-7 text-white">
            <div className="flex flex-col gap-4 lg:gap-12">
              <div className="text-left *:font-lobsterTwo *:text-2xl *:font-semibold *:lg:text-5xl">
                <p>A Happy, Safe & Engaging</p>
                <p>Preschool Experience for your child</p>
              </div>
              <p className="w-2/3 font-robotoslab lg:w-full">
                A safe and a nurturing place where your little one can grow,
                play and thrive
              </p>
              <div className="space-y-4 *:block">
                <p className="pl-2 font-robotoslab font-semibold text-stone-700">
                  Admission Open
                </p>
                <div>
                  <ButtonPrimary label="Enroll Now" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
