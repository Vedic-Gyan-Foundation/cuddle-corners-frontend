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
        <div className="absolute left-5 top-[20%] flex transform flex-col items-center justify-center text-white">
          <div className="flex w-full flex-col gap-6">
            <div className="*:font-lobsterTwo *:text-4xl *:font-semibold">
              <p>A Happy, Safe & Engaging</p>
              <p>Preschool Experience for your child</p>
            </div>

            <p className="font-robotoSlab">
              A safe and a nurturing place where your little one can grow, play
              and thrive
            </p>

            <div className="space-y-4 *:block">
              <p className="pl-1 font-robotoSlab font-semibold text-stone-200 drop-shadow-2xl">
                Admission Open
              </p>
              <div>
                <ButtonPrimary label="Enroll Now" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!---- Desktop Banner ----> */}
      <div id="banner-container">      
        <div className="relative mt-[-3rem] hidden sm:block">
        <div class="absolute inset-0 bg-black opacity-20 blur-xl"></div>
          <img
            src="/images/banners/desktop-view-banner-1.png"
            alt="mobile-view-banner"
            className="w-full"
          />
          <div className="absolute left-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-7 text-white">
            <div className="flex ml-20 flex-col gap-4 lg:gap-6">
              <div className="text-left *:font-lobsterTwo *:text-3xl *:font-semibold *:lg:text-6xl">
                <p>A Happy, Safe & Engaging</p>
                <p>Preschool Experience for your child</p>
              </div>
              <p className="w-2/3 font-robotoSlab text-lg lg:w-full lg:text-xl">
                A safe and a nurturing place where your little one can grow,
                play and thrive
              </p>
              <div className="space-y-4 *:block">
                <p className="pl-2 font-robotoSlab text-sm font-semibold text-stone-200 lg:text-base">
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
