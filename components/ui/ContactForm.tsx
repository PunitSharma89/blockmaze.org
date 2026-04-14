"use client";

import { useState, useEffect } from "react";
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

  // Auto-hide success/error message after 5 seconds
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 5000);
    return () => clearTimeout(timer);
  }, [status]);

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-lg outline-none focus:ring-0 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "success" && (
        <div className="p-3 border border-green-500 text-green-600 rounded">
          Thank you! Your message has been sent.
        </div>
      )}
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
