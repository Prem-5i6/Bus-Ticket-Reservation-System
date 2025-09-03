import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full p-3 rounded-lg font-semibold text-black bg-white hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          🚀 Send Message
        </button>
      </form>

      {/* Success Message */}
      {submitted && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          ✅ Your message has been sent!
        </p>
      )}

      {/* Office Info */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3">Our Office</h3>
        <p>📍 Address: 123 Main Street, Hyderabad, India</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>✉️ Email: support@busreservation.com</p>
        <p className="mt-2 text-gray-600">
          Feel free to reach out to us for any queries regarding bookings,
          payments, or services.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;





