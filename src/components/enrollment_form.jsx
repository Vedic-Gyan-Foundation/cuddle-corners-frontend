import { useState } from "react";
import toast from "react-hot-toast";

import { DaysSelector, DateSelector, ButtonPrimary } from "../ui";

function EnrollmentForm({ onOpenModal }) {
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
    onOpenModal(false);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* <!-- Parent/guardian name --> */}
      <div className="grid w-full">
        <label htmlFor="parent_guardian_name" className="py-2 font-normal">
          Parent/guardian name{" "}
          <span className="py-1 text-xs text-stone-500">(required)</span>
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
          Email <span className="py-1 text-xs text-stone-500">(required)</span>
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
          Phone number{" "}
          <span className="py-1 text-xs text-stone-500">(required)</span>
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
          Child&apos;s first name{" "}
          <span className="py-1 text-xs text-stone-500">(required)</span>
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
          How would you like to have a tour of the center?{" "}
          <span className="py-1 text-xs text-stone-500">(required)</span>
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
          What days and times work best for a center tour?{" "}
          <span className="py-1 text-xs text-stone-500">(required)</span>
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
        <ButtonPrimary
          label="Submit"
          color="green"
          className="mx-auto rounded px-6 py-2 text-white transition-colors duration-200"
          type="submit"
        >
          Submit
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default EnrollmentForm;
