"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle Change (clean + removes error)
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    setErrors((prev: any) => ({
      ...prev,
      [field]: "",
    }));
  };

  // ✅ Validation (with email check)
  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("");

    if (!validate()) return;

    setLoading(true);

    const form = new FormData();

    form.append("your-name", formData.name);
    form.append("your-email", formData.email);
    form.append("your-Subjectn", formData.subject);
    form.append("your-message", formData.message);

    form.append("_wpcf7", "622");
    form.append("_wpcf7_version", "5.7");
    form.append("_wpcf7_locale", "en_US");
    form.append("_wpcf7_unit_tag", "wpcf7-f622-o1");
    form.append("_wpcf7_container_post", "0");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Input styles (with error border)
  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-lg outline-none focus:ring-0 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* ✅ Success */}
      {status === "success" && (
        <div className="p-3 border border-green-500 text-green-600 rounded">
          Thank you! Your message has been sent.
        </div>
      )}

      {/* ❌ Error */}
      {status === "error" && (
        <div className="p-3 border border-red-500 text-red-600 rounded">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClass("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={inputClass("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={inputClass("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Button */}
      <Button
        className="w-full"
        type="submit"
        variant="primary"
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
