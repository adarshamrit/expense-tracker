'use client';

import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      title: "AI-Powered Expense Tracking",
      description: "Automatically categorize and analyze your spending patterns with advanced AI",
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Smart Budget Management", 
      description: "Set intelligent budgets and receive real-time alerts when approaching limits",
      icon: "💡",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Comprehensive Analytics",
      description: "Get detailed insights and reports on your financial habits and trends",
      icon: "📊",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Multi-Currency Support",
      description: "Track expenses in multiple currencies with real-time conversion rates",
      icon: "🌍",
      color: "from-green-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users", icon: "👥" },
    { number: "₹50L+", label: "Expenses Tracked", icon: "💰" },
    { number: "98%", label: "Accuracy Rate", icon: "🎯" },
    { number: "24/7", label: "AI Support", icon: "🤖" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Smart
                <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"> AI-Powered </span>
                <br />
                Expense Tracking
              </h1>
              
              {/* Animated Background Elements */}
              <div className="absolute -top-4 left-1/4 w-20 h-20 bg-emerald-200/30 dark:bg-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-8 right-1/4 w-16 h-16 bg-green-300/30 dark:bg-green-500/20 rounded-full blur-lg animate-bounce delay-300"></div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Take control of your finances with intelligent expense tracking, 
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> automated categorization</span>, 
              and <span className="text-green-600 dark:text-green-400 font-semibold">personalized insights</span> 
              that help you save more and spend smarter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <SignedOut>
                <SignInButton>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg">
                    <div className="flex items-center gap-3">
                      <span>Start Tracking Free</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                <Link href="/dashboard">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg">
                    <div className="flex items-center gap-3">
                      <span>Go to Dashboard</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </button>
                </Link>
              </SignedIn>

              <button className="group px-8 py-4 border-2 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold rounded-xl transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-600 text-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 00-3-3H7a3 3 0 00-3 3v6M9 10v8a3 3 0 003 3h3a3 3 0 003-3v-8" />
                  </svg>
                  <span>Watch Demo</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful Features for 
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent"> Smart Money Management</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of personal finance with AI-driven insights and automation that makes managing money effortless.
            </p>
          </div>

          {/* Animated Feature Showcase */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className={`inline-block text-6xl sm:text-7xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} shadow-lg`}>
                    <span className="block text-white">{features[currentFeature].icon}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
              
              {/* Feature Indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature 
                        ? 'bg-emerald-500 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300 dark:hover:bg-emerald-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Receipt Scanning", desc: "Snap photos of receipts for instant expense logging", icon: "📷" },
              { title: "Category Auto-Sort", desc: "AI automatically categorizes your transactions", icon: "🏷️" },
              { title: "Budget Alerts", desc: "Smart notifications before you overspend", icon: "🚨" },
              { title: "Trend Analysis", desc: "Visualize your spending patterns over time", icon: "📈" },
              { title: "Goal Tracking", desc: "Set and monitor your financial objectives", icon: "🎯" },
              { title: "Secure & Private", desc: "Bank-level security for all your data", icon: "🔐" }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-xl sm:text-2xl mb-8 opacity-90">
                Join thousands of users who've transformed their financial habits with ExpenseTracker AI
              </p>
              <SignedOut>
                <SignInButton>
                  <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started - It's Free!
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Go to Your Dashboard
                  </button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
