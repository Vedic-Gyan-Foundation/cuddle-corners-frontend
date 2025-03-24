export default function AboutUs() {
  return (
    <div className="mt-20 min-h-screen">
      {/* <div className="mt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white"> */}
      {/* Hero Section with Bubbles */}
      <div className="relative overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="absolute left-10 top-10 h-24 w-24 animate-bounce rounded-full bg-pink-400 opacity-20"></div>
        <div
          className="absolute right-20 top-20 h-16 w-16 animate-bounce rounded-full bg-yellow-300 opacity-20"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 h-20 w-20 animate-bounce rounded-full bg-green-300 opacity-20"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="absolute right-1/4 top-1/3 h-28 w-28 animate-bounce rounded-full bg-blue-300 opacity-20"
          style={{ animationDelay: "1.2s" }}
        ></div>

        <div className="container mx-auto mt-10 px-4 pb-16 pt-12">
          <h1 className="mb-6 text-center font-lobsterTwo text-5xl font-bold text-black">
            About Our School
          </h1>
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-xl text-purple-800">
              Where curiosity blooms and learning adventures begin!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Our Story Section */}
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-lg bg-yellow-300"></div>
              <img
                src="/images/about/kids_about.webp"
                alt="Happy children learning"
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-indigo-700">
              Our Story
            </h2>
            <p className="mb-4 text-lg">
              Kids Wonder School was founded in 2010 with a simple vision: to
              create a place where children love to learn. Our journey started
              with just 15 students and 2 teachers in a small building.
            </p>
            <p className="text-lg">
              Today, we&apos;ve grown into a vibrant community of over 300
              students and 30 dedicated teachers. While we&apos;ve grown in
              size, our commitment to joyful, engaging education remains
              unchanged!
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-red-300 opacity-50"></div>
          <div className="absolute bottom-10 right-10 h-12 w-12 rounded-full bg-green-300 opacity-50"></div>

          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-700">
            Our Mission
          </h2>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            <div className="flex-1 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-blue-700">
                Inspire Curiosity
              </h3>
              <p>
                We create an environment where questions are celebrated and
                exploration is encouraged.
              </p>
            </div>
            <div className="flex-1 rounded-xl border-2 border-green-200 bg-green-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-green-700">
                Build Confidence
              </h3>
              <p>
                We empower children to express themselves and take pride in
                their unique abilities.
              </p>
            </div>
            <div className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-purple-700">
                Foster Kindness
              </h3>
              <p>
                We nurture empathy and teach children to be compassionate
                community members.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <h2 className="mb-8 text-center text-3xl font-bold text-indigo-700">
          Meet Our Amazing Team
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Team Member Card */}
          <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2">
            <div className="h-48 bg-indigo-100">
              <img
                src="/images/about/principal.jpg"
                alt="Principal Sarah Johnson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-indigo-700">
                Sarah Johnson
              </h3>
              <p className="mb-2 text-purple-600">Principal</p>
              <p className="text-sm text-gray-600">
                Leading our school with 15 years of experience in childhood
                education
              </p>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2">
            <div className="h-48 bg-pink-100">
              <img
                src="/images/about/jagajeet_pic.jpeg"
                alt="Teacher Michael Rodriguez"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-indigo-700">
                Jagajeet Sinha
              </h3>
              <p className="mb-2 text-purple-600">Trustee (Operations)</p>
              <p className="text-sm text-gray-600">
                Bringing creativity to life through paint, clay, and imagination
              </p>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2">
            <div className="h-48 bg-yellow-100">
              <img
                src="/images/about/founder.jpeg"
                alt="Teacher Emily Chen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-indigo-700">Sanjay Jha</h3>
              <p className="mb-2 text-purple-600">Managing Trustee</p>
              <p className="text-sm text-gray-600">
                Making science magical through hands-on experiments and
                discovery
              </p>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="transform overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2">
            <div className="h-48 bg-green-100">
              <img
                src="/images/about/jagajeet_pic.jpeg"
                alt="Teacher James Wilson"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-indigo-700">
                James Wilson
              </h3>
              <p className="mb-2 text-purple-600">Music Teacher</p>
              <p className="text-sm text-gray-600">
                Helping children find their rhythm and voice through music
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-700">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-500">
                  L
                </div>
                <div className="ml-4">
                  <p className="font-bold">Lisa Thompson</p>
                  <p className="text-sm text-gray-500">
                    Parent of Alex, Grade 2
                  </p>
                </div>
              </div>
              <p className="italic">
                &quot;My son used to dread school. Since joining Kids Wonder, he
                jumps out of bed every morning excited for the day ahead!&quot;
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-500">
                  R
                </div>
                <div className="ml-4">
                  <p className="font-bold">Robert Patel</p>
                  <p className="text-sm text-gray-500">
                    Parent of Maya, Grade 4
                  </p>
                </div>
              </div>
              <p className="italic">
                &quot;The teachers truly know my daughter as an individual.
                They&apos;ve helped her confidence grow so much in just one
                year.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
