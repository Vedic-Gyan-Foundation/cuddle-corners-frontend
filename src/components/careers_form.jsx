import { useState } from "react";
import toast from "react-hot-toast";

function CareersForm() {
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
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File must be under 2MB.");
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone_number, message } = formData;

    if (!fullName || !email || !phone_number || !message || !resume) {
      toast.error("Please fill all required fields and upload your resume.");
      return;
    }

    if (phone_number.length !== 10) {
      toast.error("Phone number must be 10 digits.");
      return;
    }

    console.dir({ ...formData, resume });

    // API LOGIC GOES HERE

    setFormData({ fullName: "", email: "", phone_number: "", message: "" });
    setResume(null);
    e.target.reset();
    toast.success("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-xl p-8">
      <div>
        <label className="block font-semibold text-gray-700">
          Name <span className="text-sm text-gray-500">(required)</span>
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
          value={formData.fullName}
          onChange={(e) => handleFormDataUpdate("fullName", e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700">
          Email <span className="text-sm text-gray-500">(required)</span>
        </label>
        <input
          type="email"
          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
          value={formData.email}
          onChange={(e) => handleFormDataUpdate("email", e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700">
          Phone <span className="text-sm text-gray-500">(required)</span>
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2"
          value={formData.phone_number}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700">Message</label>
        <textarea
          rows={4}
          className="mt-1 w-full resize-none rounded-md border border-gray-300 bg-gray-50 p-2"
          value={formData.message}
          onChange={(e) =>
            e.target.value.length <= 500 &&
            handleFormDataUpdate("message", e.target.value)
          }
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.message.length}/500 characters
        </p>
      </div>

      <div>
        <label className="block font-semibold text-gray-700">
          Upload Resume (PDF, max 2MB)
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleResumeUpload}
          className="mt-1"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary-500 py-3 font-bold text-white transition duration-300 hover:bg-primary-700"
      >
        SEND
      </button>
    </form>
  );
}

export default CareersForm;
