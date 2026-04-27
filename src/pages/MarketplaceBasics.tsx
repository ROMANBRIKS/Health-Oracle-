
import { BookOpen, Info, CheckCircle2 } from 'lucide-react';

export default function MarketplaceBasics() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="prof-card bg-slate-900 text-white rounded-2xl p-10">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="text-blue-400" size={32} />
          <h1 className="text-4xl font-black tracking-tight">Marketplace Basics</h1>
        </div>
        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
          Everything you need to know about buying insurance through the Healthcare.gov marketplace in 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="prof-card">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Info size={18} className="text-blue-600" />
            What is the Marketplace?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The Marketplace (HealthCare.gov) is a service that helps people shop for and enroll in health insurance. The federal government operates the Marketplace for most states.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xs font-bold text-blue-800 uppercase mb-1">Plain English Summary</p>
            <p className="text-xs text-blue-700 italic">"It's like Amazon for health insurance, where the government might pay for part of your plan if you qualify."</p>
          </div>
        </div>

        <div className="prof-card">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-600" />
            Key Deadlines
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <strong>Nov 1:</strong> Open Enrollment Begins
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <strong>Dec 15:</strong> Deadline for Jan 1 Coverage
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <strong>Jan 15:</strong> Open Enrollment Ends
            </li>
          </ul>
        </div>
      </div>

      <div className="prof-card">
        <h2 className="text-lg font-bold mb-6">Understanding "Metal Tiers"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border border-slate-100 rounded-xl bg-orange-50/30">
            <span className="block text-xl mb-2">🥉</span>
            <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">Bronze</h3>
            <p className="text-[11px] text-slate-500">Lowest monthly cost, but you pay a lot when you see the doctor.</p>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 scale-105 shadow-xl ring-2 ring-blue-500/20">
            <span className="block text-xl mb-2">🥈</span>
            <h3 className="font-bold text-sm mb-1 uppercase tracking-wider text-blue-600">Silver</h3>
            <p className="text-[11px] text-slate-500">The "Best Value" for most people. Eligible for extra savings (subsidies).</p>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-yellow-50/30">
            <span className="block text-xl mb-2">🥇</span>
            <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">Gold</h3>
            <p className="text-[11px] text-slate-500">Highest monthly cost, but the insurance pays for almost everything.</p>
          </div>
        </div>
      </div>
      <div className="prof-card">
        <h2 className="text-lg font-bold mb-6">How to Enroll (Step-by-Step)</h2>
        <div className="space-y-6">
          {[
            { 
              step: 'Gather Documents', 
              text: 'You\'ll need your SSN, employer info, and income details (W2s or paystubs).',
              icon: '📄'
            },
            { 
              step: 'Create an Account', 
              text: 'Go to HealthCare.gov and create a secure login. It only takes about 5 minutes.',
              icon: '👤'
            },
            { 
              step: 'Fill out the Application', 
              text: 'Enter your household size and income. This determines if you get a "Subsidy" (discount).',
              icon: '✍️'
            },
            { 
              step: 'Compare and Choose', 
              text: 'Look at the Bronze, Silver, and Gold plans. Pay close attention to the "Deductible" (what you pay before insurance kicks in).',
              icon: '⚖️'
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xl shadow-sm border border-white">
                {item.icon}
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.step}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
