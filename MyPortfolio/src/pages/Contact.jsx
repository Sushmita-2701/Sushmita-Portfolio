import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully.");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0b0a10] text-[#f3efea] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5e]">// 05 — contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
          Get In Touch
        </h2>
        <div className="hairline-grad w-full mt-8 mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="border border-[#262230] p-8">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#ff6b5e]/10 border border-[#262230] flex items-center justify-center text-[#ff8a7f]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[#6e6878] font-mono text-xs uppercase tracking-wide">Email</p>
                  <p className="text-[#f3efea] mt-1">mauryasushmita9422@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#4fd1c5]/10 border border-[#262230] flex items-center justify-center text-[#7fe3d9]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[#6e6878] font-mono text-xs uppercase tracking-wide">Phone</p>
                  <p className="text-[#f3efea] mt-1">+91 7972945300</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#ff6b5e]/10 border border-[#262230] flex items-center justify-center text-[#ff8a7f]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[#6e6878] font-mono text-xs uppercase tracking-wide">Location</p>
                  <p className="text-[#f3efea] mt-1">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-mono uppercase tracking-wide text-[#a8a2b0] mb-5">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Sushmita-2701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-[#262230] flex items-center justify-center hover:bg-[#ff6b5e] hover:text-[#0b0a10] hover:border-[#ff6b5e] transition-colors"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-[#262230] flex items-center justify-center hover:bg-[#4fd1c5] hover:text-[#0b0a10] hover:border-[#4fd1c5] transition-colors"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://leetcode.com/u/sushmita_2701/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-[#262230] flex items-center justify-center hover:bg-[#ff6b5e] hover:text-[#0b0a10] hover:border-[#ff6b5e] transition-colors"
                >
                  <SiLeetcode size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="border border-[#262230] p-8">
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#262230] px-5 py-4 text-[#f3efea] outline-none focus:border-[#4fd1c5] transition-colors placeholder:text-[#6e6878]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#262230] px-5 py-4 text-[#f3efea] outline-none focus:border-[#4fd1c5] transition-colors placeholder:text-[#6e6878]"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#262230] px-5 py-4 text-[#f3efea] outline-none focus:border-[#4fd1c5] transition-colors resize-none placeholder:text-[#6e6878]"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 bg-gradient-to-r from-[#ff6b5e] to-[#4fd1c5] text-[#0b0a10] px-8 py-4 font-mono text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "sending..." : "send message"}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
