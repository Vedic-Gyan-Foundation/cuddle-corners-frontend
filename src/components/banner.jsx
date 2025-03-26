import { ButtonPrimary } from "../ui";

function Banner() {
  return (
    <>
      {/* <!---- Mobile Banner ----> */}
      <div className="relative block sm:hidden">
        <img
          src="./images/banners/mobile-home-banner-1.png.png"
          alt="mobile-view-banner"
          className="mt-[-7rem] w-full"
        />
        <div className="absolute left-5 top-[20%] flex transform flex-col items-center justify-center text-white">
          <div className="flex w-full flex-col gap-6">
            <div className="*:text-4xl *:font-semibold">
              <h1>A Happy, Safe & Engaging</h1>
              <h1>Preschool Experience for your child</h1>
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
      <div>
        <div className="relative mt-[-3rem] hidden sm:block">
          <div className="absolute inset-0"></div>
          <img
            src="./images/banners/desktop-home-banner-1.png"
            alt="mobile-view-banner"
            className="w-full"
          />
          <div className="absolute left-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-7 text-white">
            <div className="ml-20 flex flex-col gap-4 lg:gap-6">
              <div className="text-left *:text-3xl *:font-semibold *:lg:text-6xl">
                <h1>A Happy, Safe & Engaging</h1>
                <h1>Preschool Experience for your child</h1>
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
