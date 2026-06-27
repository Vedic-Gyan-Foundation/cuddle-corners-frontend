import { PagesBanner } from "../components";
import { useMemo, useState } from "react";
import { franchiseDetails } from "../utils/data/franchise_details";

const socialLinks = [
  { key: "googleMapLocation", label: "Map" },
  { key: "whatsappLink", label: "WhatsApp" },
  { key: "facebookLink", label: "Facebook" },
  { key: "instagramLink", label: "Instagram" },
];

const extractPhoneNumbers = (contactNumber = "") => {
  const matches = contactNumber.match(/\+?\d{7,15}/g) || [];
  return [...new Set(matches)];
};

function FranchiseDetails() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBranches = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return franchiseDetails;
    }

    return franchiseDetails.filter((branch) => {
      return [
        branch.franchiseName,
        branch.franchiseAddress,
        branch.contactNumber,
        branch.emailId,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [searchQuery]);

  return (
    <article className="py-28">
      <PagesBanner headingText="Franchise Details" />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12">
        <div className="mb-10 rounded-2xl bg-secondary-50 p-6 shadow-sm">
          <h2 className="text-3xl text-primary-900 sm:text-4xl">
            Our Branches in and around Guwahati
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Explore branch contacts, address details, map locations, and social
            links in one place.
          </p>

          <div className="mt-5 max-w-xl">
            <label
              htmlFor="franchise-search"
              className="mb-2 block text-sm font-semibold text-primary-900"
            >
              Search by branch name, area, contact, or email
            </label>
            <input
              id="franchise-search"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Type branch name or locality"
              className="w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none ring-0 transition-colors placeholder:text-stone-400 focus:border-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-2xl text-primary-900">{branch.franchiseName}</h3>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                  #{branch.id}
                </span>
              </div>

              <div className="space-y-3 text-sm text-stone-700">
                <p>
                  <span className="font-semibold text-primary-900">Contact:</span>{" "}
                  {branch.contactNumber || "N/A"}
                </p>

                {extractPhoneNumbers(branch.contactNumber).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {extractPhoneNumbers(branch.contactNumber).map((number) => (
                      <a
                        key={`${branch.id}-${number}`}
                        href={`tel:${number}`}
                        className="rounded-full bg-secondary-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-secondary-400"
                      >
                        Call {number}
                      </a>
                    ))}
                  </div>
                )}

                <p>
                  <span className="font-semibold text-primary-900">Address:</span>{" "}
                  {branch.franchiseAddress || "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-primary-900">Email:</span>{" "}
                  {branch.emailId ? (
                    <a
                      href={`mailto:${branch.emailId}`}
                      className="text-secondary-600 underline-offset-2 hover:underline"
                    >
                      {branch.emailId}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map(({ key, label }) => {
                  const href = branch[key];

                  if (!href) {
                    return null;
                  }

                  return (
                    <a
                      key={`${branch.id}-${key}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700"
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-primary-200 bg-primary-50 p-8 text-center">
            <p className="text-lg font-semibold text-primary-900">
              No branch found for your search.
            </p>
            <p className="mt-2 text-sm text-stone-600">
              Try a branch name like Beltola, Rehabari, or Nalapara.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}

export default FranchiseDetails;