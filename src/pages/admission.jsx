import { PagesBanner } from "../components";
import { ButtonPrimary } from "../ui";
import { useState } from "react";
import DaysSelector from "../ui/days_selector";
import DateSelector from "../ui/date_selector";
import toast from "react-hot-toast";
import Modal from "../ui/modal";

function Admission() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    parent_guardian_name: "",
    email: "",
    phone_number: "",
    childs_first_name: "",
    childs_dob: "",
    day: "",
    tour_mode: "",
    tour_days_time: "",
    additional_info: "",
  });

  const handleFormDataUpdate = (formName, formValue) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: formValue,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      handleFormDataUpdate("phone_number", value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      parent_guardian_name,
      email,
      phone_number,
      childs_first_name,
      childs_dob,
      day,
      tour_mode,
      tour_days_time,
    } = formData;

    if (
      !parent_guardian_name ||
      !email ||
      !phone_number ||
      !childs_first_name ||
      !childs_dob ||
      !day ||
      !tour_mode ||
      !tour_days_time
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    if (phone_number && phone_number.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    // API logic goes here
    console.dir(formData);

    // Close-Modal
    setIsOpen(false);
    // Reset-Form
    setFormData({
      parent_guardian_name: "",
      email: "",
      phone_number: "",
      childs_first_name: "",
      childs_dob: "",
      day: "",
      tour_mode: "",
      tour_days_time: "",
      additional_info: "",
    });

    toast.success("Form Submitted successfully");
  };

  return (
    <div className="mt-28">
      <PagesBanner headingText="Admission" />

      <div className="mt-14 flex flex-col gap-32">
        {/* <!--- Section 1 ----> */}
        <section className="space-y-16 px-6 sm:px-12">
          <h2 className="mx-auto w-3/5 py-2 text-center text-4xl font-normal leading-[1.5] text-primary-900">
            Take the first steps toward learning more about Cuddle Corners
            Preschool
          </h2>
          {/* <!-- FORMS --> */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2">
            <div className="flex flex-col items-center">
              <img
                src="./images/icons/contact-us.svg"
                alt="cuddle-corners-contact-us-img"
                className="h-32"
              />
              <p className="w-2/5 py-4 text-center text-sm text-primary-800">
                We&apos;d love to learn more about your child! Please take a
                moment to fill out our short questionnaire.
              </p>
              <ButtonPrimary
                label="Contact Us"
                color="blue"
                onClick={() => setIsOpen(true)}
                className="pt-6"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./images/icons/enrollment-form-icon.svg"
                alt="cuddle-corners-contact-us-img"
                className="h-32"
              />
              <p className="w-2/5 py-4 text-center text-sm text-primary-800">
                Ready to join us? Download the enrollment form and email it to
                <a
                  href="mailto:info@cuddlecorners.com"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-700"
                >
                  <span> info@cuddlecorners.com</span>
                </a>
                .
              </p>
              <ButtonPrimary
                label="Enrollment Form"
                color="blue"
                href="/pdf/cuddle-corners-admission-form.pdf"
                className="pt-6"
              />
            </div>
          </div>
        </section>

        {/* <!--- Section 2  ----> */}
        <section className="relative grid grid-cols-1 gap-7 bg-primary-50 px-6 pb-32 pt-12 sm:grid-cols-2 sm:px-12">
          <div className="relative h-[600px] sm:h-auto">
            <img
              src="/images/general/admissions-general.webp"
              alt="cuddle-corners-admissions-details"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="relative z-10 space-y-8 self-center">
            <h3 className="text-4xl font-semibold text-primary-900">
              Enrollment details
            </h3>
            <p className="text-left text-primary-800">
              If, after your visit, you&apos;d like to enroll your child, please
              submit an{" "}
              <a
                href="./pdf/cuddle-corners-admission-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
              >
                <span>Application for Enrollment</span>
              </a>{" "}
              and Enrollment Deposit to secure a spot in our program or to hold
              a place on our waitlist.
              <br />
              <br />
              If your child is placed on the waitlist, your deposit will be held
              until a space becomes available. Should you choose to withdraw
              before a space opens up, your deposit may be refunded—however, you
              must notify the Center in writing.
              <br />
              <br />
              Once a spot becomes available and is reserved for your child, the
              deposit becomes non-refundable.
              <br />
              <br />
              After we receive both the application and deposit, you&apos;ll
              receive an enrollment packet and be asked to schedule your
              orientation.
              <br />
              <br />
              Enrollment at Cuddle Corners is offered on a first come, first
              served basis. We are unable to hold spots without both an{" "}
              <a
                href="./pdf/cuddle-corners-admission-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
              >
                <span>Application for Enrollment</span>
              </a>{" "}
              and Enrollment Deposit. Once our program is full, children will be
              added to the waitlist and admitted as space becomes available.
            </p>
          </div>
        </section>
      </div>

      <>
        {/* <!---- Modal  ----> */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Cuddle Corners enrollment"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <!-- Parent/guardian name --> */}
            <div className="grid w-full">
              <label
                htmlFor="parent_guardian_name"
                className="py-2 font-normal"
              >
                Parent/guardian name
              </label>
              <input
                id="parent_guardian_name"
                type="text"
                name="parent_guardian_name"
                value={formData.parent_guardian_name}
                onChange={(e) =>
                  handleFormDataUpdate("parent_guardian_name", e.target.value)
                }
                className="rounded-md border bg-slate-200 px-5 py-2 placeholder:text-slate-400"
                placeholder="Enter parent or guardian name"
              />
            </div>

            {/* <!-- Email --> */}
            <div className="grid w-full">
              <label htmlFor="email" className="py-2 font-normal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleFormDataUpdate("email", e.target.value)}
                className="rounded-md border bg-slate-200 px-5 py-2"
                placeholder="Enter email address"
              />
            </div>

            {/* <!-- Phone number --> */}
            <div className="grid w-full">
              <label htmlFor="phone_number" className="py-2 font-normal">
                Phone number
              </label>
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                value={formData.phone_number}
                onChange={handlePhoneNumberChange}
                className="rounded-md border bg-slate-200 px-5 py-2"
                placeholder="Enter phone number"
                maxLength={10} // extra precaution
              />
            </div>

            {/* <!-- Child's first name --> */}
            <div className="grid w-full">
              <label htmlFor="childs_first_name" className="py-2 font-normal">
                Child&apos;s first name
              </label>
              <input
                id="childs_first_name"
                type="text"
                value={formData.childs_first_name}
                onChange={(e) =>
                  handleFormDataUpdate("childs_first_name", e.target.value)
                }
                className="rounded-md border bg-slate-200 px-5 py-2"
                placeholder="Enter child's first name"
              />
            </div>

            {/* <!-- Child's date of birth --> */}
            <DateSelector
              labelText="Child's date of birth"
              id="childs_dob"
              htmlFor="childs_dob"
              selectedDate={formData.childs_dob}
              onDateChange={(date) => handleFormDataUpdate("childs_dob", date)}
            />

            {/* <!-- Days you are interested in --> */}
            <DaysSelector
              title="Please select what days you are interested in"
              selectedDay={formData.day}
              onDayChange={(day) => handleFormDataUpdate("day", day)}
            />

            {/* <!-- Mode of center tour --> */}
            <div className="grid w-full">
              <p className="py-2 font-normal">
                How would you like to have a tour of the center?
              </p>
              <div className="mt-2 flex flex-col gap-4">
                {["In-person", "Virtual"].map((mode, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="tour_mode"
                      id={mode.toLowerCase()}
                      checked={formData.tour_mode === mode}
                      onChange={() => handleFormDataUpdate("tour_mode", mode)}
                      className="accent-primary-700"
                    />
                    <label htmlFor={mode.toLowerCase()}>{mode}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- In-Person tour days and times --> */}
            <div className="grid w-full">
              <label htmlFor="tour_days_time" className="py-2 font-normal">
                What days and times work best for a center tour?
              </label>
              <input
                id="tour_days_time"
                type="text"
                value={formData.tour_days_time}
                onChange={(e) =>
                  handleFormDataUpdate("tour_days_time", e.target.value)
                }
                className="rounded-md border bg-slate-200 px-5 py-2"
                placeholder="Enter preferred days and times"
              />
            </div>

            {/* <!-- Additional Information --> */}
            <div className="grid w-full">
              <label htmlFor="additional_info" className="py-2 font-normal">
                Any additional information you would like to provide?
              </label>
              <input
                id="additional_info"
                type="text"
                value={formData.additional_info}
                onChange={(e) =>
                  handleFormDataUpdate("additional_info", e.target.value)
                }
                className="rounded-md border bg-slate-200 px-5 py-2"
                placeholder="Enter additional information"
              />
            </div>

            {/* <-- Submit Button --> */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="rounded bg-primary-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-primary-700"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </>
    </div>
  );
}

export default Admission;
{
  /* Form */
}
