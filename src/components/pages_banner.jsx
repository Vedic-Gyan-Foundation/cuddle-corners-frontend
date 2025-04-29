import Breadcrumbs from "./breadcrumbs";

function PagesBanner({ headingText, imgSrc }) {
  return (
    <section className="relative mt-[-7rem] sm:mt-[-3rem]">
      {/* <!-- Background banner image --> */}
      <img
        src={imgSrc ? imgSrc : "/images/banners/about-us-banner-1.png"}
        alt="cuddle-corners-about-us-banner-img"
        className="h-80 w-full object-cover"
      />

      {/* <!-- Overlay: lighter and blurred --> */}
      <div className="absolute inset-0 z-10 bg-white/15 backdrop-blur-sm"></div>

      {/* <!-- Wave background --> */}
      <div className="absolute bottom-0 left-0 z-20 h-4 w-full bg-[url(/images/backgrounds/wavey-bg-upfacing.webp)] bg-contain sm:h-7"></div>

      {/* <!-- Title & Breadcrumbs --> */}
      <div className="absolute inset-x-6 top-1/2 z-30 -translate-y-1/2 sm:inset-x-12">
        <div className="flex flex-col items-center gap-9">
          {headingText ? (
            <h1 className="flex-1 text-center font-robotoSlab text-3xl font-medium text-slate-50 sm:text-5xl">
              {headingText}
            </h1>
          ) : null}
          <Breadcrumbs className="self-start" />
        </div>
      </div>
    </section>
  );
}

export default PagesBanner;
