'use client';

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Calendar, 
  GraduationCap, 
  User, 
  Trophy,
  Search,
  Bell
} from 'lucide-react';
import { supabase, Course } from '../../lib/supabase';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        // Fetches your courses dynamically from your Supabase 'courses' table
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        if (data) setCourses(data);
      } catch (err) {
        console.error('Error fetching data from Supabase:', err);
        
        // FALLBACK: If your keys aren't added yet, it cleanly falls back to your mock data 
        // so your screen never goes completely blank!
        setCourses([
          { id: '1', title: 'Advanced Mathematics', progress: 78, icon_name: 'BookOpen', created_at: '' },
          { id: '2', title: 'Data Structures & Algorithms', progress: 92, icon_name: 'GraduationCap', created_at: '' },
          { id: '3', title: 'Web Development (Next.js)', progress: 45, icon_name: 'BookOpen', created_at: '' },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex font-sans">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-slate-800/60 bg-[#040710]/80 backdrop-blur-xl p-6 hidden md:flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Student Hub
            </span>
          </div>

          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
              { id: 'grades', label: 'Grades', icon: Trophy },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'profile', label: 'Profile', icon: User },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' 
                      : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-800/60 pt-4 flex items-center gap-3 px-2">
          <div className="h-9 w-9 bg-slate-800 rounded-full flex items-center justify-center font-bold text-sm text-slate-300">
            S
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-300">Sandra</p>
            <p className="text-[10px] text-slate-500">sandra@university.edu</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        
        {/* TOP BAR */}
        <header className="h-20 border-b border-slate-800/40 bg-[#090d16]/50 backdrop-blur-md px-8 flex items-center justify-between">
          <div className="relative w-80 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search assignments, grades..." 
              className="w-full bg-slate-900/50 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
            />
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="h-9 w-9 bg-slate-900/60 border border-slate-800/60 rounded-xl flex items-center justify-center relative hover:bg-slate-800/50 transition-colors">
              <Bell className="h-4 w-4 text-slate-400" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT VIEW */}
        <div className="p-8 max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Welcome Back, Sandra!</h1>
            <p className="text-sm text-slate-400 mt-1">Here is a quick look at your academic performance status.</p>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Current GPA</span>
                <div className="p-2 bg-emerald-500/10 rounded-xl"><Trophy className="h-4 w-4 text-emerald-400" /></div>
              </div>
              <p className="text-3xl font-bold mt-2 text-white">3.84</p>
              <p className="text-xs text-emerald-400 mt-1 font-medium">↑ Top 10% of class</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Attendance</span>
                <div className="p-2 bg-blue-500/10 rounded-xl"><Clock className="h-4 w-4 text-blue-400" /></div>
              </div>
              <p className="text-3xl font-bold mt-2 text-white">94.2%</p>
              <p className="text-xs text-slate-500 mt-1">Goal: Above 90%</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pending Tasks</span>
                <div className="p-2 bg-rose-500/10 rounded-xl"><CheckCircle className="h-4 w-4 text-rose-400" /></div>
              </div>
              <p className="text-3xl font-bold mt-2 text-rose-400">3 Due</p>
              <p className="text-xs text-rose-400/70 mt-1">Next deadline: Tomorrow</p>
            </div>
          </div>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* CLASS SCHEDULE CARD */}
            <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wide">Today's Class Schedule</h3>
              <div className="divide-y divide-slate-800/40">
                {courses.map((course) => (
                  <div key={course.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="h-10 w-10 rounded-xl bg-slate-800/60 border border-slate-700/30 flex items-center justify-center shrink-0">
                        <BookOpen className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">{course.title}</p>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                  <Clock className="h-3 w-3 shrink-0" />
                  <span>09:00 AM - 10:30 AM</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Progress: {course.progress}%
                </div>
              </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 bg-slate-800 text-slate-400">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK PROGRESS PROFILE */}
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white tracking-wide">Course Trackers</h3>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-400 truncate max-w-[75%]">{course.title}</span>
                        <span className="text-slate-300">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}