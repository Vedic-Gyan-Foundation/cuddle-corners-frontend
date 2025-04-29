import { PagesBanner } from "../components";
import { RevealOnScroll } from "../ui";
import {
  programAdditionalResources,
  programContents,
} from "../utils/data/program_contents";

function Programmes() {
  return (
    <article className="py-28">
      <PagesBanner headingText="Inspiring Young Explorers Every Step of the Way" />

      {/* <!--- Program Contents ---> */}
      <RevealOnScroll
        className="mx-auto grid max-w-6xl grid-cols-1 gap-x-20 gap-y-16 px-10 py-20 md:grid-cols-2"
        staggerChildren={0.2} // stagger timing
      >
        {programContents?.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={item?.imageSrc}
                alt={item?.imageAlt}
                className="h-12 w-12 flex-shrink-0 self-start"
              />
              <div className="space-y-4">
                <h2 className="font-robotoSlab text-xl text-secondary-600">
                  {item?.heading}
                </h2>
                <p className="text-justify text-gray-700">{item?.para}</p>
              </div>
            </div>
          </div>
        ))}
      </RevealOnScroll>

      {/* <!---- Types of classroom ---> */}
      <section className="bg-secondary-400 px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="https://images.squarespace-cdn.com/content/v1/623b745f99da7f6d050e59e5/53a00b1a-424c-416e-a76e-77d018c96952/TSD_image_toddler.jpg"
              alt="Toddler classroom"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-primary-900 dark:text-white">
              Preschool Classroom
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>For ages 3 through 5 years old</li>
              <li>Curriculum: Experience Preschool</li>
              <li>Classroom ratio is 1:10</li>
            </ul>
            <p className="text-2xl font-semibold text-primary-800 dark:text-white">
              Helpful resources to download:
            </p>

            <RevealOnScroll
              staggerChildren={0.2}
              className="grid grid-cols-1 gap-4 *:rounded-md *:bg-slate-100 *:p-3 *:text-center *:font-robotoSlab *:font-semibold *:text-primary-500 sm:grid-cols-2"
            >
              <a
                href="/s/Toddler-Classroom-Description.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Class Description
              </a>
              <a
                href="/s/Toddler-Curriculum-Info.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Curriculum
              </a>
              <a
                href="/s/TSP-Toddler-Schedule-2024-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Daily Schedule
              </a>
              <a
                href="/s/Toddler-Classroom-Enrichment-Schedule-ar29.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Enrichment Calendar
              </a>
              <a
                href="/s/Toddler-Monthly-Activity-Calendar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Activity Calendar
              </a>
              <a
                href="/s/April-Toddler-Newsletter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Family Newsletter
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* <!--- Program Additional Resources ---> */}
      <section className="mt-20 px-8">
        <h2 className="mb-16 text-center text-5xl font-semibold text-primary-900">
          Additional resources
        </h2>
        <div className="flex flex-col gap-5 sm:flex-row">
          {programAdditionalResources?.map((item, index) => (
            <div
              key={index}
              className="mx-5 flex flex-1 flex-col items-center justify-center gap-6 rounded-md bg-primary-200 px-4 py-6 *:text-stone-600"
            >
              <h2 className="font-robotoSlab text-2xl">{item?.heading}</h2>
              <p className="text-center">{item?.para}</p>
              <button className="rounded-md bg-secondary-500 p-3 font-semibold uppercase">
                See Theme
              </button>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Programmes;
