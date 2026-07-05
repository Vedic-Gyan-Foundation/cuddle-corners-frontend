import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Send, FileText } from "lucide-react";

import { HQ_EMAIL } from "../config/site";
import { Button } from "../ui";

function CareersForm() {
  const fileResume = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [resume, setResume] = useState(null);

  const handleFormDataUpdate = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      handleFormDataUpdate("phone_number", value);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed.");
        e.target.value = "";
        setResume(null);
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File must be under 2MB.");
        e.target.value = "";
        setResume(null);
        return;
      }
      setResume(file);
    }
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted transition-colors duration-200 ease-gentle focus:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-200";

  const labelClasses = "block font-fredoka text-sm font-semibold text-ink";

  return (
    <form
      action={`https://formsubmit.co/${HQ_EMAIL}`}
      encType="multipart/form-data"
      method="POST"
      className="space-y-6 rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="careers-name" className={labelClasses}>
            Name <span className="font-normal text-ink-muted">(required)</span>
          </label>
          <input
            id="careers-name"
            type="text"
            name="Name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClasses}
            value={formData.fullName}
            onChange={(e) => handleFormDataUpdate("fullName", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="careers-email" className={labelClasses}>
            Email <span className="font-normal text-ink-muted">(required)</span>
          </label>
          <input
            id="careers-email"
            type="email"
            name="Email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
            value={formData.email}
            onChange={(e) => handleFormDataUpdate("email", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="careers-phone" className={labelClasses}>
          Phone <span className="font-normal text-ink-muted">(required)</span>
        </label>
        <input
          id="careers-phone"
          type="tel"
          name="Number"
          required
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={inputClasses}
          value={formData.phone_number}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div>
        <label htmlFor="careers-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="careers-message"
          rows={4}
          name="Message"
          placeholder="Tell us a little about yourself and the role you're interested in."
          className={`${inputClasses} resize-none`}
          value={formData.message}
          onChange={(e) =>
            e.target.value.length <= 500 &&
            handleFormDataUpdate("message", e.target.value)
          }
        />
        <p className="mt-1.5 text-right text-xs text-ink-muted">
          {formData.message.length}/500 characters
        </p>
      </div>

      <div>
        <label htmlFor="careers-resume" className={labelClasses}>
          Upload Resume{" "}
          <span className="font-normal text-ink-muted">(PDF, max 2MB)</span>
        </label>
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-dashed border-line bg-paper-alt px-4 py-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
            <FileText size={20} aria-hidden="true" />
          </span>
          <input
            id="careers-resume"
            name="Resume"
            type="file"
            accept=".pdf"
            ref={fileResume}
            onChange={handleResumeUpload}
            className="block w-full text-sm text-ink-soft file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-primary-100 file:px-4 file:py-2 file:font-fredoka file:text-sm file:font-medium file:text-primary-800 hover:file:bg-primary-200"
          />
        </div>
        {resume && (
          <p className="mt-1.5 text-xs text-ink-muted">
            Selected: {resume.name}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" icon={Send} className="w-full">
        Send Application
      </Button>
    </form>
  );
}

export default CareersForm;
