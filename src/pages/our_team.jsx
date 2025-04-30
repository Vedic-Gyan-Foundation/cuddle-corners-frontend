import { useState } from "react";
import { Link } from "react-router";
import { teamMembers } from "../utils/data/team_members";

const OurTeam = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white font-fredoka">
      {/* Cloud Background Header */}
      <div className="cloud-bg mb-8">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl">
            Our Amazing Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-primary-600 md:text-xl">
            Meet the dedicated educators and professionals who make our
            preschool a second home for your little ones
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="mb-6 text-center text-3xl text-primary-700">
            The Passionate Individuals Behind Our Success
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700">
            Our team brings together experience, passion, and dedication to
            create a nurturing environment where children can explore, learn,
            and grow with confidence.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative overflow-hidden ${hoveredId === member.id ? "bg-primary-50" : ""}`}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-300 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-20" />

                  <div className="p-6">
                    <h3 className="mb-1 text-2xl font-bold text-primary-800">
                      {member.name}
                    </h3>
                    <div className="mb-3 flex items-center">
                      <span className="inline-block rounded-full bg-secondary-300 px-3 py-1 text-sm font-medium text-secondary-800">
                        {member.designation}
                      </span>
                    </div>
                    <div className="mb-4 h-px bg-primary-100"></div>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="mb-16 mt-24 rounded-2xl bg-linear-primary-mix-tb p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-800">
              Join Our Growing Family
            </h2>
            <p className="mb-8 text-primary-700">
              We&apos;re always looking for passionate educators and staff who
              share our vision for exceptional early childhood education. If
              you&apos;re interested in franchise opportunities or joining our
              team, we&apos;d love to hear from you!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/careers"
                className="rounded-full bg-primary-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-primary-700 hover:shadow-lg"
              >
                Career Opportunities
              </Link>
              <Link
                to="/partner-with-cuddle-corners"
                className="rounded-full bg-secondary-500 px-6 py-3 font-medium text-secondary-900 shadow-md transition-all duration-200 hover:bg-secondary-600 hover:shadow-lg"
              >
                Franchise Information
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Cloud Animations */}
        <div className="relative h-24 overflow-hidden">
          <div className="absolute left-0 top-0 h-12 w-24 animate-cloud-slow rounded-full bg-white opacity-80"></div>
          <div className="absolute left-10 top-12 h-16 w-32 animate-cloud-medium rounded-full bg-white opacity-70"></div>
          <div className="absolute left-20 top-4 h-10 w-20 animate-cloud-fast rounded-full bg-white opacity-60"></div>
          <div className="absolute left-40 top-16 h-14 w-28 animate-cloud-ultraslow rounded-full bg-white opacity-75"></div>
          <div className="absolute left-60 top-2 h-8 w-16 animate-cloud-xfast rounded-full bg-white opacity-65"></div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
