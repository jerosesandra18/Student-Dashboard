"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Calendar, 
  User, 
  LogOut, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react";

export default function Home() {
  // 1. Sidebar Tab Active State Controller Tracker
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock Datasets mapped for Dashboard components and tabular view containers
  const schedule = [
   { name: "Advanced Mathematics", time: "09:00 AM - 10:30 AM", status: "Completed", progress: 100 },
  { name: "Data Structures & Algorithms", time: "11:00 AM - 12:30 PM", status: "Completed", progress: 100 },
  { name: "Web Development (Next.js)", time: "02:00 PM - 03:30 PM", status: "Live Now", progress: 75 },
  ];

  const grades = [
    { course: "Advanced Mathematics", code: "MATH-401", grade: "A+", percentage: "98%", status: "Passed" },
    { course: "Data Structures & Algorithms", code: "CS-302", grade: "A-", percentage: "91%", status: "Passed" },
    { course: "Web Development (Next.js)", code: "CS-405", grade: "A", percentage: "94%", status: "Passed" },
    { course: "Database Management Systems", code: "CS-330", grade: "B+", percentage: "88%", status: "Passed" },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased text-slate-900">
      
      {/* SIDEBAR NAVIGATION PANEL */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800">
        <div className="p-6">
          <div className="flex items-center gap-3 px-2 mb-8">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white tracking-tight">Student Hub</span>
          </div>

          <nav className="space-y-1.5">
            {/* DASHBOARD BUTTON */}
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "dashboard"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </button>

            {/* GRADES BUTTON */}
            <button
              onClick={() => setActiveTab("grades")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "grades"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Grades
            </button>

            {/* SCHEDULE BUTTON */}
            <button
              onClick={() => setActiveTab("schedule")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "schedule"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Schedule
            </button>

            {/* PROFILE BUTTON */}
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "profile"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <User className="h-4 w-4" />
              Profile
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between px-2 py-3 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Logged in as</span>
              <span className="text-sm font-medium text-slate-300">Sandra</span>
            </div>
            <LogOut className="h-4 w-4 text-slate-500 hover:text-rose-400 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* DYNAMIC SCREEN CONTENT DISPLAY CONTAINER */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-7xl mx-auto p-8">
          
          {activeTab === "dashboard" ? (
            /* ================= RENDER INTERFACE 1: MAIN DASHBOARD ================= */
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back, Sandra!</h1>
                <p className="text-slate-500 mt-1">Here is a quick look at your academic performance status.</p>
              </div>

              {/* Statistical Performance Row metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-sm font-medium text-slate-400 mb-1">Current GPA</div>
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">3.84</div>
                  <div className="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">↑ Top 10% of class</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-sm font-medium text-slate-400 mb-1">Attendance</div>
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">94.2%</div>
                  <div className="text-xs text-slate-400 mt-2">Goal: Above 90%</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-sm font-medium text-slate-400 mb-1">Pending Tasks</div>
                  <div className="text-3xl font-bold text-rose-600 tracking-tight">3 Due</div>
                  <div className="text-xs text-rose-500 font-medium mt-2">Next deadline: Tomorrow</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Daily Class Layout Column Component */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Today's Class Schedule</h3>
                  <div className="space-y-4">
                    {schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                          <p className="text-xs text-slate-400 mt-1">Progress: {item.progress}%</p>
                          </div>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          item.status === "Live Now" ? "bg-amber-100 text-amber-700 animate-pulse" : "bg-slate-200/60 text-slate-600"
                        }`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Sidebar Ledger Scorecard preview block */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Grades</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Quiz 3: Matrices</p>
                        <p className="text-[10px] text-slate-400">Advanced Math</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">A+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Lab Assignment 2</p>
                        <p className="text-[10px] text-slate-400">Data Structures</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">A-</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
                      <div>
                        <p className="text-xs font-bold text-slate-800">UI Prototype</p>
                        <p className="text-[10px] text-slate-400">Web Development</p>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ) : activeTab === "grades" ? (
            /* ================= RENDER INTERFACE 2: COMPLETE ACADEMIC LEDGER DATA TABLE ================= */
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Academic Performance Ledger</h1>
                <p className="text-slate-500 mt-1">A historical view of your finalized grades across enrolled coursework semesters.</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6">Course Title</th>
                      <th className="py-4 px-6">Course Code</th>
                      <th className="py-4 px-6">Earned Grade</th>
                      <th className="py-4 px-6">Percentage</th>
                      <th className="py-4 px-6">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                    {grades.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 text-slate-900 font-semibold">{row.course}</td>
                        <td className="py-4 px-6 text-slate-400 font-mono text-xs">{row.code}</td>
                        <td className="py-4 px-6">
                          <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md font-bold">{row.grade}</span>
                        </td>
                        <td className="py-4 px-6 font-semibold">{row.percentage}</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold">
                            <CheckCircle className="h-3.5 w-3.5" />
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          ) : (
            /* ================= RENDER INTERFACE 3: FALLBACK FALLTHROUGH CONTAINER CARD ================= */
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
              <div className="bg-white p-12 rounded-2xl text-center border border-slate-100 shadow-sm max-w-md w-full flex flex-col items-center">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 capitalize">{activeTab} View Coming Soon</h3>
                <p className="text-slate-400 text-sm">We are busy organizing records for your student hub application workspace container panel.</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}