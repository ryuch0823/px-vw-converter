'use client';



import { useState } from 'react';
import Footer from '../components/Footer';
import { sendContactForm } from './actions';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return; // Spam bot trap

    setStatus('sending');
    const result = await sendContactForm(formData);
    setStatus(result.success ? 'sent' : 'error');
  };

  return (
    <main className="max-w-xl mx-auto">
      <div className="mx-auto pt-[5vh] pb-[4vh] h-[100vh] flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {status === 'sent' ? (
        <p className="text-green-600">Thank you! Your message has been sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Honeypot (hidden) */}
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot">Leave this field empty</label>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>

          {status === 'error' && (
            <p className="text-red-600 mt-2">There was an error sending your message. Please try again later.</p>
          )}
        </form>
      )}
      <Footer />
      </div>
    </main>
  );
}
