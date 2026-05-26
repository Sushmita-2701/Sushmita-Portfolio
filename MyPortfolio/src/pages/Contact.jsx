import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");

          setForm({
            name: "",
            email: "",
            message: "",
          });

          setLoading(false);
        },
        () => {
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#020817] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mt-8">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="bg-[#07111F]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="text-white">mauryasushmita9422@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="text-white">+91 7972945300</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="text-white">Pune, Maharashtra, India</p>
                </div>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-5">
                Connect With Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/Sushmita-2701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaLinkedin size={24} />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-[#07111F]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;