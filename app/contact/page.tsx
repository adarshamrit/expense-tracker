'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You could integrate with an API or email service here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email Support",
      content: "support@expensetracker.ai",
      description: "Get help with your account or technical issues",
      icon: "✉️",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Phone Support", 
      content: "+91 1800-123-4567",
      description: "Speak directly with our support team",
      icon: "📞",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant help through our in-app chat",
      icon: "💬",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Office Address",
      content: "Tech Hub, Bangalore",
      description: "Visit us at our headquarters",
      icon: "📍",
      color: "from-orange-500 to-red-600"
    }
  ];

  const faqs = [
    {
      question: "How secure is my financial data?",
      answer: "We use bank-level 256-bit encryption and follow industry-standard security practices to protect your data."
    },
    {
      question: "Can I import data from other apps?",
      answer: "Yes! We support importing from popular banking apps, spreadsheets, and other expense tracking tools."
    },
    {
      question: "Is there a mobile app?",
      answer: "Our web app is fully responsive and works great on mobile. Native iOS and Android apps are coming soon!"
    },
    {
      question: "How accurate is the AI categorization?",
      answer: "Our AI achieves 98% accuracy in expense categorization and continuously learns from your corrections."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get in 
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help you make the most of ExpenseTracker AI. Reach out with any questions or feedback!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="What can we help you with?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{info.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">{info.content}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Chat: Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our support team is here to help you succeed with ExpenseTracker AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Live Chat
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105">
                  Browse Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
