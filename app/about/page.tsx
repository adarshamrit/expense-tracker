'use client';

export default function About() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former fintech executive with 15 years of experience in personal finance technology.",
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Chen", 
      role: "CTO & AI Lead",
      bio: "AI researcher specializing in machine learning applications for financial data analysis.",
      avatar: "👩‍💻"
    },
    {
      name: "Michael Kumar",
      role: "Head of Product",
      bio: "UX expert passionate about making complex financial concepts simple and accessible.",
      avatar: "👨‍🎨"
    }
  ];

  const milestones = [
    { year: "2023", event: "ExpenseTracker AI founded with a vision to democratize financial insights", icon: "🚀" },
    { year: "2024", event: "Launched AI-powered expense categorization with 98% accuracy", icon: "🤖" },
    { year: "2024", event: "Reached 10,000+ active users across 25 countries", icon: "🌍" },
    { year: "2025", event: "Introduced advanced analytics and personalized recommendations", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About 
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"> ExpenseTracker AI</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to make personal finance management intelligent, intuitive, and accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                ExpenseTracker AI was born from a simple belief: managing personal finances shouldn't be complicated or time-consuming. 
                We leverage cutting-edge artificial intelligence to transform how people understand and control their spending habits.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our platform automatically categorizes expenses, identifies spending patterns, and provides personalized insights 
                that help users make smarter financial decisions and achieve their monetary goals.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-teal-600 p-12 rounded-2xl shadow-2xl">
                <span className="text-8xl">💡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy First",
                description: "Your financial data is yours. We use bank-level encryption and never share your personal information.",
                icon: "🔐",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "AI-Powered Intelligence", 
                description: "Advanced machine learning algorithms that get smarter with every transaction you make.",
                icon: "🤖",
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "User-Centric Design",
                description: "Every feature is designed with simplicity and user experience as the top priority.",
                icon: "❤️",
                color: "from-pink-500 to-red-600"
              }
            ].map((value, index) => (
              <div key={index} className="group text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`inline-block text-5xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="block text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
                  <span className="text-2xl">{milestone.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-2">{milestone.year}</div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the future of personal finance management today.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
