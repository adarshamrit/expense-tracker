'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const { user } = useUser();
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const expenses = [
    { category: 'Food & Dining', amount: 8450, icon: '🍽️', color: 'from-red-500 to-pink-600', percentage: 32 },
    { category: 'Transportation', amount: 4200, icon: '🚗', color: 'from-blue-500 to-cyan-600', percentage: 16 },
    { category: 'Shopping', amount: 6800, icon: '🛍️', color: 'from-purple-500 to-pink-600', percentage: 26 },
    { category: 'Entertainment', amount: 3200, icon: '🎬', color: 'from-green-500 to-teal-600', percentage: 12 },
    { category: 'Bills & Utilities', amount: 2850, icon: '⚡', color: 'from-orange-500 to-red-600', percentage: 11 },
    { category: 'Healthcare', amount: 750, icon: '🏥', color: 'from-emerald-500 to-green-600', percentage: 3 }
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyBudget = 30000;
  const budgetUsed = (totalExpenses / monthlyBudget) * 100;

  const recentTransactions = [
    { name: 'Swiggy Order', amount: 450, category: 'Food & Dining', date: '2 hours ago', icon: '🍽️' },
    { name: 'Uber Ride', amount: 180, category: 'Transportation', date: '5 hours ago', icon: '🚗' },
    { name: 'Amazon Purchase', amount: 1250, category: 'Shopping', date: '1 day ago', icon: '🛍️' },
    { name: 'Netflix Subscription', amount: 199, category: 'Entertainment', date: '2 days ago', icon: '🎬' },
    { name: 'Electricity Bill', amount: 1850, category: 'Bills & Utilities', date: '3 days ago', icon: '⚡' }
  ];

  return (
    <SignedIn>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, {user?.firstName}! 👋
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Here's your financial overview for today
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">Total Expenses</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{totalExpenses.toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-lg">
                  <span className="text-2xl">💸</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-red-600 dark:text-red-400">+12% from last month</div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">Budget Remaining</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{(monthlyBudget - totalExpenses).toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-emerald-600 dark:text-emerald-400">{(100 - budgetUsed).toFixed(0)}% remaining</div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">Transactions</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">127</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-lg">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-blue-600 dark:text-blue-400">+8 this week</div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">Savings Goal</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">₹15,000</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-purple-600 dark:text-purple-400">75% achieved</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Expense Categories */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Expense Categories</h2>
              <div className="space-y-4">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${expense.color}`}>
                        <span className="text-lg">{expense.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{expense.category}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{expense.percentage}% of budget</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">₹{expense.amount.toLocaleString()}</p>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-1">
                        <div 
                          className={`h-full bg-gradient-to-r ${expense.color} rounded-full`}
                          style={{ width: `${expense.percentage * 3}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Transactions</h2>
                <Link href="/transactions" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <span className="text-lg">{transaction.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{transaction.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">-₹{transaction.amount}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-3xl mb-2">➕</div>
              <p className="font-semibold text-gray-900 dark:text-white">Add Expense</p>
            </button>
            <button className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-semibold text-gray-900 dark:text-white">View Reports</p>
            </button>
            <button className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold text-gray-900 dark:text-white">Set Budget</p>
            </button>
            <button className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-3xl mb-2">📷</div>
              <p className="font-semibold text-gray-900 dark:text-white">Scan Receipt</p>
            </button>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}
