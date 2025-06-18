import React, { useState } from 'react';
import contactImg from '../../assets/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setTouched({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-24 min-h-screen flex items-start justify-center">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Contact Form - start */}
        <div className="flex-1 flex flex-col justify-center items-start w-full max-w-xl mx-auto lg:mx-0">
          <div className="w-full">
            <p className="mb-2 font-semibold text-gray-500 md:mb-4 md:text-lg xl:text-xl text-left">Let's discuss your project</p>
            <h1 className="mb-2 text-3xl font-bold text-black sm:text-4xl md:mb-4 md:text-5xl text-left leading-tight">Get In Touch</h1>
            <p className="mb-6 text-base text-gray-600 md:text-lg xl:text-xl text-left max-w-2xl">Ready to start your next project? Fill out the form below and we'll get back to you within 24 hours.</p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border ${errors.name && touched.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none`}
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border ${errors.email && touched.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none`}
                    placeholder="john@example.com"
                  />
                  {errors.email && touched.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 border ${errors.subject && touched.subject ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none`}
                  placeholder="What can we help you with?"
                />
                {errors.subject && touched.subject && <span className="text-xs text-red-500 mt-1 block">{errors.subject}</span>}
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message && touched.message ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-500 outline-none resize-none`}
                  placeholder="Tell us about your project, requirements, and timeline..."
                />
                {errors.message && touched.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
              </div>
              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block rounded-lg bg-gray-900 px-8 py-3 text-center text-base font-semibold text-white shadow-md outline-none ring-gray-400 transition duration-150 hover:bg-black hover:shadow-lg focus-visible:ring active:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <a
                  href="tel:+1234567890"
                  className="inline-block rounded-lg bg-gray-100 px-8 py-3 text-center text-base font-semibold text-gray-800 outline-none ring-gray-300 transition duration-150 hover:bg-gray-200 focus-visible:ring active:text-gray-900"
                >
                  Call Us
                </a>
              </div>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-2">
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg mt-2">
                  <p className="text-red-800 font-medium">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
            {/* Contact Information */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">hello@cloudpixel.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Office</p>
                    <p className="text-gray-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form - end */}
        {/* Image - start */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md mx-auto lg:mx-0 h-64 lg:h-96 xl:h-[28rem] lg:ml-16 lg:mb-100">
          <img src={contactImg} loading="lazy" alt="Contact Us" className="h-full w-auto object-contain object-center drop-shadow-xl" />
        </div>
        {/* Image - end */}
      </div>
    </div>
  );
};

export default Contact;