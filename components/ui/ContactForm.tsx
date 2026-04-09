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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Thank you for your message. We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          rows={10}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-vertical"
        />
      </div>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
