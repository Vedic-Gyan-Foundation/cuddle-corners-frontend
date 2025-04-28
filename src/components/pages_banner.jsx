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
      {/* <!-- Upside-facing cloud wave background --> */}
      <div className="absolute bottom-0 left-0 h-4 w-full bg-[url(/images/backgrounds/wavey-bg-upfacing.webp)] bg-contain sm:h-7"></div>

      {/* <!-- Page title & Breadcrumbs --> */}
      <div className="absolute bottom-1/3 left-6 *:text-white sm:left-12">
        <div className="flex flex-col gap-9">
          {/* <!-- Page title --> */}
          {headingText ? (
            <h1 className="text-5xl font-bold sm:text-7xl">{headingText}</h1>
          ) : null}
          {/* <!-- Breadcrumbs navigation --> */}
          <Breadcrumbs />
        </div>
      </div>
    </section>
  );
}

export default PagesBanner;
