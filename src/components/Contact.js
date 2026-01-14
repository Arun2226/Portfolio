"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
  
    if (data.success) {
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="min-h-screen py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <a href="mailto:arunmadhu.b@gmail.com" className="hover:text-emerald-400 transition-colors">
                  arunmadhu.b@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaPhone className="text-emerald-400 text-2xl" />
                <a href="tel:+919938956999" className="hover:text-cyan-400 transition-colors">
                  +91 9938956999
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <span>Berhampur, Odisha, India</span>
              </div>
            </div>

            <h4 className="text-xl font-bold text-cyan-400 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Arun2226" className="text-slate-400 hover:text-emerald-400 text-3xl transition-all hover:scale-110" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arun-bondada-3a588a236" className="text-slate-400 hover:text-cyan-400 text-3xl transition-all hover:scale-110" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg cursor-pointer ${
                  isSubmitting
                    ? 'bg-slate-600 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 hover:scale-105 hover:shadow-emerald-500/50'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 p-4 rounded-lg">
                  ✅ Thank you! Your message has been sent successfully. Check your email for confirmation.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-lg">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
