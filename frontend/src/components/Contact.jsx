import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';
import axios from 'axios';

// NEW CODE (Replace with your actual backend URL)
const API_URL = 'https://your-backend-url.onrender.com/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await axios.post(`${API_URL}/contact`, form);
      setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to send message. Please try again or email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's work together!" />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card">
            <h3 className="font-display font-semibold text-xl mb-6 gradient-text">Contact Information</h3>
            <div className="space-y-5">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                  <HiMail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium group-hover:text-primary-500 transition-colors">{personalInfo.email}</p>
                </div>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                  <HiLocationMarker className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium group-hover:text-primary-500 transition-colors">{personalInfo.location}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:border-primary-500/30 hover:-translate-y-1 transition-all"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:border-primary-500/30 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin className="w-6 h-6 text-[#0a66c2]" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 glass rounded-xl hover:border-primary-500/30 hover:-translate-y-1 transition-all"
              >
                <HiMail className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-300 border border-slate-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-300 border border-slate-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-300 border border-slate-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          {status.message && (
            <p
              className={`text-sm font-medium ${status.type === 'success' ? 'text-green-500' : 'text-red-500'
                }`}
            >
              {status.message}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
