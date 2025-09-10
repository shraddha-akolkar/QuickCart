import React from "react";

export default function NewsLetter() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12" id="contact">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-6">
            We’d love to hear from you! Whether you have a question about products, orders, or partnerships, our team is
            ready to help. Send us a message and we’ll get back shortly.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li><strong>Email:</strong> sharddha@gmail.com</li>
            <li><strong>Phone:</strong> +91-9876543210 </li>
            <li><strong>Address:</strong> Distributed across global partners</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <form className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-3 rounded-lg shadow hover:bg-orange-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}