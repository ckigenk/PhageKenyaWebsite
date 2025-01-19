import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get in touch with the PhageKenya community.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 hover:bg-indigo-100 p-4 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 shadow-md">
                <Mail className="h-6 w-6 text-indigo-600 transition-transform transform hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <a href="mailto:bacteriophagekenya@gmail.com" className="text-gray-600 hover:text-indigo-600">
                  bacteriophagekenya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 hover:bg-indigo-100 p-4 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 shadow-md">
                <Phone className="h-6 w-6 text-indigo-600 transition-transform transform hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <a href="tel:+254706286882" className="text-gray-600 hover:text-indigo-600">
                  Call us
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 hover:bg-indigo-100 p-4 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 shadow-md">
                <MapPin className="h-6 w-6 text-indigo-600 transition-transform transform hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Kenya Institute of Primate Research<br />
                  Karen, Nairobi<br />
                  Kenya
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 hover:bg-indigo-100 p-4 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 shadow-md">
                <Linkedin className="h-6 w-6 text-indigo-600 transition-transform transform hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/phage-kenya-consortium-386246257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  PhageKenya
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-6 hover:bg-green-100 p-4 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 shadow-md">
                <FaWhatsapp className="h-6 w-6 text-green-600 transition-transform transform hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                <a
                  href="https://wa.me/+254707882964?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Phage%20Kenya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
