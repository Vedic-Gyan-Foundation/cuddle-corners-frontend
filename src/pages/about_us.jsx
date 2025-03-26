import Breadcrumbs from "../components/breadcrumbs";
import { learningDomains } from "../utils/data/learningDomains";
import { RevealOnScroll } from "../ui";

function AboutUs() {
  return (
    <div>
      {/* <!-- Banner image section --> */}
      <section className="relative mt-[-7rem] sm:mt-[-3rem]">
        {/* <!-- Background banner image --> */}
        <img
          src="/images/banners/carousel-1.jpg"
          alt="cuddle-corners-about-us-banner-img"
          className="h-80 w-full object-cover"
        />
        {/* <!-- Upside-facing cloud wave background --> */}
        <div className="absolute bottom-0 left-0 h-4 w-full bg-[url(/images/backgrounds/wavey-bg-upfacing.png)] bg-contain sm:h-7"></div>

        {/* <!-- Page title & Breadcrumbs --> */}
        <div className="absolute bottom-1/3 left-6 *:text-white sm:left-12">
          <div className="flex flex-col gap-9">
            {/* <!-- Page title --> */}
            <h1 className="text-7xl font-bold">About Us</h1>
            {/* <!-- Breadcrumbs navigation --> */}
            <Breadcrumbs />
          </div>
        </div>
      </section>

      {/* <!----- Main contents -----> */}
      <div className="mt-12 flex flex-col gap-32 px-6 sm:px-12">
        {/* <!----- About us -----> */}
        <section>
          <h2 className="mb-14 text-5xl font-semibold">About Us</h2>
          <div className="space-y-4 *:text-justify *:text-lg">
            <p>
              At Cuddle Corners, we believe that a child&apos;s journey into
              education should begin with love, care, and a deep sense of
              belonging. As a dedicated preschool chain, we are committed to
              nurturing young minds and shaping bright futures through our
              partnership with Toondemy, Singapore&apos;s premier choice for
              innovative education solutions.
            </p>
            <p>
              In today&apos;s fast-evolving world, early childhood education
              plays a crucial role in shaping a child&apos;s emotional, social,
              and intellectual development. Our vision is to create a safe,
              stimulating, and loving environment where children feel valued,
              confident, and eager to explore the world around them. We
              understand that every child is unique, and we foster their
              individuality through meaningful interactions and carefully
              designed learning experiences.
            </p>
            <p>
              Our curriculum blends
              <b>
                {" "}
                traditional education with modern, creative learning solutions
              </b>
              , making learning engaging, enjoyable, and impactful. We emphasize
              <b> experiential learning</b>, where children develop essential
              cognitive, social, and motor skills through play, exploration, and
              guided discovery.
            </p>
            <p>
              At Cuddle Corners, we don&apos;t just teach—we <b>nurture</b>,{" "}
              <b>support</b>, and <b>inspire</b>. Our passionate educators guide
              children on a journey of exploration and self-discovery, equipping
              them with the skills and confidence to excel in their future
              academic and personal lives.
            </p>
            <p>
              The name <b>Cuddle Corners</b> reflects our core belief: that a
              <b> warm</b>, <b>caring</b>, and <b>supportive</b> environment
              lays the foundation for lifelong learning and success. Through our
              unique approach, we instill emotional resilience, curiosity, and
              problem-solving skills—empowering children to thrive in an
              ever-changing world.
            </p>
            <p>
              <b>
                Join us at Cuddle Corners, where education is more than
                learning—it&apos;s about love, care, and creating meaningful
                connections that last a lifetime.
              </b>
            </p>
          </div>
        </section>

        {/* <!----- Learning Journey ------> */}
        <section>
          <RevealOnScroll
            staggerChildren={0.2} // stagger timing
          >
            <h2 className="mb-14 text-5xl font-semibold">
              Our Learning Journey
            </h2>
          </RevealOnScroll>

          <RevealOnScroll
            className="grid gap-8 md:grid-cols-3"
            staggerChildren={0.5} // stagger timing
          >
            {learningDomains.map(
              ({ title, description, icon: Icon }, index) => (
                // <!--- Learning domain card ---->
                <div
                  key={index}
                  className="group rounded-2xl bg-secondary-50 p-6 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center transition-transform group-hover:scale-110">
                    <Icon size={34} className="text-primary-600" />
                    <p className="ml-2 text-xl font-semibold text-stone-800">
                      {title}
                    </p>
                  </div>
                  <p className="text-stone-700">{description}</p>
                </div>
              ),
            )}
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;

// import { motion } from "framer-motion";
// import { BookOpen, Heart, Rocket, Cloud } from "lucide-react";
// import { Cloud as CloudCompo } from "../ui";
// import { learningDomains } from "../utils/learningDomainsData";

// export default function AboutUs() {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-16 text-center"
//         >
//           <h1 className="mb-6 text-5xl font-bold text-sky-600">
//             <Rocket className="mr-2 inline-block h-12 w-12 animate-bounce text-yellow-400" />
//             Cuddle Corners
//           </h1>
//           <p className="text-xl font-semibold text-gray-700">
//             Where Learning Begins with Love and Care
//           </p>
//         </motion.div>

//         {/* Main Content */}
//         <section className="mb-20">
//           <div className="grid items-center gap-12 md:grid-cols-2">
//             {/* Our Story */}
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               className="relative rounded-3xl border-4 border-pink-200 bg-white p-8 shadow-xl"
//             >
//               <h2 className="mb-6 text-3xl font-bold text-pink-600">
//                 Our Story
//               </h2>
//               <p className="mb-4 text-gray-700">
//                 At Cuddle Corners, we believe that the foundation of a child's
//                 educational journey starts with love...
//               </p>
//               <div className="mt-6 flex items-center">
//                 <Heart className="mr-2 h-8 w-8 animate-pulse text-red-500" />
//                 <span className="text-lg font-semibold text-gray-700">
//                   Nurturing Young Minds Since 2015
//                 </span>
//               </div>
//               <motion.img
//                 src="/mascot.png"
//                 alt="Friendly Bear Mascot"
//                 className="absolute -bottom-8 -right-8 h-48 w-48"
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </motion.div>

//             {/* Team Section */}
//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               className="rounded-3xl border-4 border-yellow-300 bg-yellow-100 p-8 shadow-xl"
//             >
//               <h3 className="mb-6 text-2xl font-bold text-amber-600">
//                 Our Team
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {teamMembers.map((member, index) => (
//                   <TeamMemberCard key={index} {...member} />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }
