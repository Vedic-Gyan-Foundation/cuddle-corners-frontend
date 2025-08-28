import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const franchiseFeatures = [
  {
    title: "Low Investment, High Returns",
    description:
      "Start your own Cuddle Corners franchise with minimal capital investment and enjoy attractive ROI within a short timeframe.",
    icon: "💰",
  },
  {
    title: "Proven Business Model",
    description:
      "Benefit from our established curriculum and operational systems that have demonstrated success across multiple locations.",
    icon: "📈",
  },
  {
    title: "Comprehensive Training",
    description:
      "Receive thorough initial training and ongoing support from our experienced team of education professionals.",
    icon: "🎓",
  },
  {
    title: "Marketing Support",
    description:
      "Gain access to ready-made marketing materials and strategies to help you attract families in your community.",
    icon: "📱",
  },
  {
    title: "Exclusive Territory",
    description:
      "Secure exclusive rights to operate in your designated area without competition from other Cuddle Corners franchises.",
    icon: "🗺️",
  },
  {
    title: "Community Recognition",
    description:
      "Join a brand that parents trust and recognize for quality early childhood education.",
    icon: "🏆",
  },
];

const faqs = [
  {
    question: "What is the joining/sign-in fee?",
    answer:
      "The joining/sign-in fee is ₹1,25,000. This covers your franchise application, onboarding, and initial training. Additional setup costs may apply depending on your location and requirements.",
  },
  {
    question: "What education background do I need?",
    answer:
      "While an education background is beneficial, it's not mandatory. Our comprehensive training program will equip you with all necessary knowledge. A passion for early childhood education is essential.",
  },
  {
    question: "How long does it take to open a franchise?",
    answer:
      "Typically, it takes 2-3 months from signing the franchise agreement to opening day. This includes location selection, staff hiring, training, and setup.",
  },
  {
    question: "What ongoing support will I receive?",
    answer:
      "You'll receive continuous curriculum updates, marketing assistance, operational guidance, and access to our franchise support team. We also hold regular training workshops and annual conferences.",
  },
  {
    question: "What are the royalty fees?",
    answer:
      "We do not charge any royalty fee on gross revenue. You keep 100% of your earnings.",
  },
];

const stages = [
  {
    number: "01",
    title: "Initial Inquiry",
    description:
      "Complete our franchise questionnaire and speak with our development team",
  },
  {
    number: "02",
    title: "Discovery Meeting",
    description: "Learn more about our model and franchise opportunity",
  },
  {
    number: "03",
    title: "Business Review",
    description: "Review financial details and location requirements",
  },
  {
    number: "04",
    title: "Sign Agreement",
    description: "Formalize our partnership with franchise documentation",
  },
  {
    number: "05",
    title: "Training & Setup",
    description:
      "Complete our comprehensive training program and prepare your location",
  },
  {
    number: "06",
    title: "Grand Opening",
    description:
      "Launch your Cuddle Corners preschool with our marketing support",
  },
];

const JoinUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, location } = formData;

    // Empty fields check
    if (!name || !email || !phone || !location) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Phone number validation (Indian 10-digit)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // All validations passed
    console.log("Form submitted:", formData);
    toast.success("Request submitted successfully!");

    // Reset form if needed
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="font-fredoka sm:pt-20">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-primary-75 py-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-16 h-20 w-20 animate-cloud-slow opacity-70">
            <div className="h-20 w-20 rounded-full bg-white"></div>
          </div>
          <div className="absolute left-0 top-24 h-16 w-16 animate-cloud-medium opacity-60">
            <div className="h-16 w-16 rounded-full bg-white"></div>
          </div>
          <div className="absolute left-0 top-8 h-12 w-12 animate-cloud-fast opacity-50">
            <div className="h-12 w-12 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl text-primary-900 md:text-5xl">
            Join the Cuddle Corners Family
          </h1>
          <p className="mx-auto mb-6 max-w-3xl font-robotoSlab text-xl text-primary-800">
            Bring the joy of quality early childhood education to your community
            with a Cuddle Corners franchise
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="#process"
              className="rounded-full bg-primary-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-primary-700"
            >
              Learn About Our Process
            </a>
            <a
              href="#contact"
              className="rounded-full bg-secondary-500 px-8 py-3 font-medium text-primary-900 transition duration-300 hover:bg-secondary-600"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Why Franchise Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl text-primary-900 md:text-4xl">
            Why Choose a Cuddle Corners Franchise?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {franchiseFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border-t-4 border-secondary-500 bg-primary-50 p-6 shadow-md transition duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl text-primary-800">
                  {feature.title}
                </h3>
                <p className="text-primary-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="bg-gradient-to-b from-primary-50 to-white py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl text-primary-900 md:text-4xl">
            Our Franchise Process
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center font-robotoSlab text-primary-800">
            From your initial inquiry to your grand opening, we&apos;ll be with
            you every step of the way
          </p>

          <div className="relative">
            {/* Process steps */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 transform bg-primary-300 md:block"></div>

            <div className="relative space-y-8 md:space-y-0">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className={`items-center md:flex ${index % 2 === 0 ? "md:flex-row" : "text-right md:flex-row-reverse"}`}
                >
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} p-4`}
                  >
                    <div
                      className={`rounded-lg border-l-4 bg-white p-6 shadow-md ${index % 2 === 0 ? "border-secondary-500" : "border-primary-600"}`}
                    >
                      <div className="mb-2 text-3xl font-bold text-primary-500">
                        {stage.number}
                      </div>
                      <h3 className="mb-2 text-xl text-primary-800">
                        {stage.title}
                      </h3>
                      <p className="font-robotoSlab text-primary-700">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative hidden md:block md:w-12">
                    <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-primary-500 bg-white"></div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl text-primary-900 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-primary-200"
              >
                <button
                  className="flex w-full items-center justify-between bg-primary-50 p-4 text-left transition duration-300 hover:bg-primary-100"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-primary-800">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${activeAccordion === index ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                {activeAccordion === index && (
                  <div className="bg-white p-4 font-robotoSlab">
                    <p className="text-primary-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-linear-primary-mix-bt py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-center text-3xl text-primary-900 md:text-4xl">
              Ready to Join Our Family?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl text-primary-800">
                  Request Information
                </h3>
                <p className="mb-6 font-robotoSlab text-primary-700">
                  Fill out this form and our franchise development team will
                  contact you shortly to discuss the opportunity in detail.
                </p>
                <div className="space-y-2 font-robotoSlab">
                  <p className="flex items-center gap-2 text-primary-800">
                    <Mail size={20} />
                    <a
                      href="mailto:info@cuddlecorners.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 transition-colors duration-300 hover:text-secondary-600"
                    >
                      info@cuddlecorners.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-primary-800">
                    <Phone size={20} />
                    <span>
                      <a
                        href="tel:+919856199105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2 transition-colors duration-300 hover:text-secondary-600"
                      >
                        +91-9856199105
                      </a>
                      <span>/ </span>
                      <a
                        href="tel:+918134992941"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2 transition-colors duration-300 hover:text-secondary-600"
                      >
                        +91-8134992941
                      </a>
                    </span>
                  </p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 block text-primary-800" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-primary-200 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-primary-800"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-primary-200 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-primary-800"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-primary-200 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="+91-7002956764"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-primary-800"
                    htmlFor="location"
                  >
                    Interested Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full rounded-lg border border-primary-200 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-primary-800"
                    htmlFor="message"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full rounded-lg border border-primary-200 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your interest in our franchise opportunity"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-secondary-500 px-8 py-3 font-medium text-primary-900 transition duration-300 hover:bg-secondary-600"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl text-primary-900 md:text-4xl">
            What Our Franchisees Say
          </h2>

          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3"> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border-t-4 border-secondary-500 bg-primary-50 p-6 shadow-md">
              <div className="mb-4 text-4xl text-secondary-500">&quot;</div>
              <p className="mb-6 font-robotoSlab italic text-primary-800">
                Opening a Cuddle Corners franchise was the best decision I made.
                The support team is incredible, and our community loves the
                program.
              </p>
              <div className="font-medium text-primary-900">
                - Sarah Johnson, Franchise Owner since 2022
              </div>
            </div>

            <div className="rounded-lg border-t-4 border-secondary-500 bg-primary-50 p-6 shadow-md">
              <div className="mb-4 text-4xl text-secondary-500">&quot;</div>
              <p className="mb-6 font-robotoSlab italic text-primary-800">
                The training we received was comprehensive and prepared us
                perfectly for running our own location. We reached profitability
                faster than expected!
              </p>
              <div className="font-medium text-primary-900">
                - Michael & Kate Williams, Franchise Owners since 2021
              </div>
            </div>

            {/* <div className="rounded-lg border-t-4 border-secondary-500 bg-primary-50 p-6 shadow-md">
              <div className="mb-4 text-4xl text-secondary-500">&quot;</div>
              <p className="mb-6 font-robotoSlab italic text-primary-800">
                As someone without a background in education, I was worried
                about starting a preschool. Cuddle Corners provided everything I
                needed to succeed.
              </p>
              <div className="font-medium text-primary-900">
                - David Chen, Franchise Owner since 2023
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl text-white md:text-4xl">
            Begin Your Franchising Journey Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-robotoSlab text-white">
            Join our growing family of successful franchisees and make a
            difference in your community through early childhood education
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-secondary-500 px-8 py-3 font-medium text-primary-900 transition duration-300 hover:bg-secondary-600"
          >
            Request Information Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
