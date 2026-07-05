import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Send } from "lucide-react";

import { DaysSelector, DateSelector, Button } from "../ui";
import { HQ_EMAIL } from "../config/site";

const FIELD =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink placeholder:text-ink-muted focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200";
const LABEL = "mb-1.5 block font-fredoka text-sm font-medium text-ink";
const REQ = "text-ink-muted";

const EMPTY = {
  parent_guardian_name: "",
  email: "",
  phone_number: "",
  childs_first_name: "",
  childs_dob: "",
  day: "",
  tour_mode: "",
  tour_days_time: "",
  additional_info: "",
};

function EnrollmentForm({ onOpenModal }) {
  const [formData, setFormData] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);

  const update = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10)
      update("phone_number", value);
  };

  const handleSubmit = async (e) => {
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
    if (phone_number.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await axios.post(
        `https://formsubmit.co/ajax/${HQ_EMAIL}`,
        formData,
        { headers: { "Content-Type": "application/json" } },
      );
      if (data?.success) {
        toast.success("Thank you! We'll be in touch very soon.");
        setFormData(EMPTY); // reset only on success
        onOpenModal(false); // close only on success
      } else {
        throw new Error("submission failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong — please try again or call us."); // keep data
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-ink-soft">
        Tell us a little about your child and we&apos;ll arrange a warm,
        no-pressure visit. Fields marked{" "}
        <span className="text-ink-muted">(required)</span>.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="parent_guardian_name" className={LABEL}>
            Parent / guardian name <span className={REQ}>(required)</span>
          </label>
          <input
            id="parent_guardian_name"
            type="text"
            value={formData.parent_guardian_name}
            onChange={(e) => update("parent_guardian_name", e.target.value)}
            className={FIELD}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email <span className={REQ}>(required)</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className={FIELD}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone_number" className={LABEL}>
            Phone number <span className={REQ}>(required)</span>
          </label>
          <input
            id="phone_number"
            type="tel"
            inputMode="numeric"
            value={formData.phone_number}
            onChange={handlePhoneNumberChange}
            className={FIELD}
            placeholder="10-digit mobile number"
            maxLength={10}
          />
        </div>
        <div>
          <label htmlFor="childs_first_name" className={LABEL}>
            Child&apos;s first name <span className={REQ}>(required)</span>
          </label>
          <input
            id="childs_first_name"
            type="text"
            value={formData.childs_first_name}
            onChange={(e) => update("childs_first_name", e.target.value)}
            className={FIELD}
            placeholder="Your little one's name"
          />
        </div>
      </div>

      <DateSelector
        labelText="Child's date of birth"
        id="childs_dob"
        htmlFor="childs_dob"
        selectedDate={formData.childs_dob}
        onDateChange={(date) => update("childs_dob", date)}
      />

      <DaysSelector
        title="Which days are you interested in?"
        selectedDay={formData.day}
        onDayChange={(day) => update("day", day)}
      />

      <fieldset>
        <legend className={LABEL}>
          How would you like to tour a centre?{" "}
          <span className={REQ}>(required)</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["In-person", "Virtual"].map((mode) => (
            <label
              key={mode}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                formData.tour_mode === mode
                  ? "border-primary-400 bg-primary-50 text-primary-800"
                  : "border-line text-ink-soft hover:border-primary-200"
              }`}
            >
              <input
                type="radio"
                name="tour_mode"
                checked={formData.tour_mode === mode}
                onChange={() => update("tour_mode", mode)}
                className="accent-primary-600"
              />
              {mode}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="tour_days_time" className={LABEL}>
          Best days &amp; times for a visit{" "}
          <span className={REQ}>(required)</span>
        </label>
        <input
          id="tour_days_time"
          type="text"
          value={formData.tour_days_time}
          onChange={(e) => update("tour_days_time", e.target.value)}
          className={FIELD}
          placeholder="e.g. weekday mornings"
        />
      </div>

      <div>
        <label htmlFor="additional_info" className={LABEL}>
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="additional_info"
          rows={3}
          value={formData.additional_info}
          onChange={(e) => update("additional_info", e.target.value)}
          className={`${FIELD} resize-none`}
          placeholder="Allergies, questions, preferred centre…"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          icon={Send}
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? "Sending…" : "Request my visit"}
        </Button>
      </div>
    </form>
  );
}

export default EnrollmentForm;
