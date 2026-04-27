/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Database, ShieldCheck, Globe, Scale, BookOpen, ExternalLink, Activity, Pill, DollarSign, MapPin, LayoutDashboard, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Dashboard from './pages/Dashboard';
import MarketplaceBasics from './pages/MarketplaceBasics';
import MedicareGuide from './pages/MedicareGuide';
import HSAGuide from './pages/HSAGuide';
import TransparencyLaws from './pages/TransparencyLaws';
import FindDoctors from './pages/FindDoctors';
import Disclosures from './pages/Disclosures';

import GLP1Module from './components/GLP1Module';
import AuditBot from './components/AuditBot';

export default function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { label: 'Marketplace Basics', icon: BookOpen, path: '/marketplace' },
    { label: 'Medicare Part D Guide', icon: Pill, path: '/medicare' },
    { label: 'IRS Pub 969 (HSA)', icon: DollarSign, path: '/hsa' },
    { label: 'Transparency Laws', icon: Scale, path: '/transparency' },
    { label: 'Find Local Doctors', icon: MapPin, path: '/doctors' },
    { label: 'Legal Disclosures', icon: ShieldCheck, path: '/disclosures' }
  ];

  // Auto-close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      {/* Header: Authority Bar */}
      <header className="h-20 bg-slate-900 text-white flex items-center justify-between px-8 border-b border-slate-700 sticky top-0 z-50">
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              } else {
                setIsSidebarOpen(!isSidebarOpen);
              }
            }}
            className="p-1.5 sm:p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </button>
          <Link to="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shadow-blue-500/20">H</div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-xl font-bold leading-none tracking-tight">HIMO</h1>
              <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="hidden sm:inline text-nowrap">2026 Health Law Auditor</span>
              </p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">The "Price Jump" Date</span>
            <span className="text-xs font-mono text-blue-300">2026 Subsidy Cliff Baseline</span>
          </div>
          <div className="h-10 w-[1px] bg-slate-700 hidden lg:block"></div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all">
            Connect
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Navigation Sidebar - Desktop */}
        <motion.aside 
          initial={false}
          animate={{ width: isSidebarOpen ? 280 : 80 }}
          className="hidden lg:flex flex-col bg-slate-900 border-r border-slate-800 sticky top-20 h-[calc(100vh-80px)] z-40 transition-all duration-300 overflow-hidden"
        >
          <div className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  className={`flex items-center gap-3 p-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all group ${
                    location.pathname === item.path 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={18} className={`shrink-0 transition-opacity ${location.pathname === item.path ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                  <AnimatePresence mode="wait">
                    {isSidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="truncate"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </nav>
          </div>

          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 border-t border-slate-800 text-slate-500 hover:text-white flex items-center justify-center transition-colors hover:bg-white/5"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </motion.aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[60] lg:hidden"
              />
              <motion.aside 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 w-80 bg-slate-900 z-[70] lg:hidden flex flex-col"
              >
                <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-lg">H</div>
                    <span className="text-white font-bold tracking-tight">HIMO LIBRARY</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 p-2">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex-1 p-4">
                  <nav className="flex flex-col gap-1.5">
                    {NAV_ITEMS.map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.path}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                          location.pathname === item.path 
                          ? 'bg-blue-600 text-white' 
                          : 'text-slate-400 hover:bg-white/5'
                        }`}
                      >
                        <item.icon size={18} />
                        <span className="font-bold uppercase tracking-widest text-[9px]">{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 p-6 max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/marketplace" element={<MarketplaceBasics />} />
                <Route path="/medicare" element={<MedicareGuide />} />
                <Route path="/hsa" element={<HSAGuide />} />
                <Route path="/transparency" element={<TransparencyLaws />} />
                <Route path="/doctors" element={<FindDoctors />} />
                <Route path="/disclosures" element={<Disclosures />} />
              </Routes>
            </div>
            
            {/* Context Sidebar */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
              <GLP1Module />
              <section className="prof-card bg-slate-900 text-white border-0">
                <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-800 pb-2">Auditor Support</h2>
                <div className="space-y-4">
                  <p className="text-[10px] text-slate-400 leading-relaxed italic">
                     HIMO models are calibrated weekly against CMS.gov and IRS.gov regulatory updates.
                  </p>
                  <div className="flex items-center gap-3 text-[9px] font-black text-blue-400 bg-blue-500/10 p-2 rounded border border-blue-500/20 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-blue-500" />
                    Verified Data
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>

      {/* Footer Citations */}
      <footer className="h-12 bg-slate-100 border-t border-slate-200 flex items-center justify-between px-8 text-slate-500 font-medium z-10">
        <div className="text-[9px] uppercase tracking-widest flex items-center gap-4">
          <span className="text-slate-400">Source:</span>
          <span className="text-slate-700 flex items-center gap-1">CMS.GOV <ExternalLink size={10} /></span>
          <span className="text-slate-700 flex items-center gap-1">HHS <ExternalLink size={10} /></span>
        </div>
        <div className="text-[9px] font-mono opacity-50 hidden sm:block uppercase tracking-wider">
          Compliance: 2026-OBBBA-4400-ALPHA
        </div>
      </footer>

      <AuditBot />
    </div>
  );
}
