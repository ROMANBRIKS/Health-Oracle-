import { DollarSign, TrendingUp, ShieldCheck, HelpCircle, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PhaseDetail {
  title: string;
  subtitle: string;
  description: string;
  steps: string[];
  proTip: string;
}

const PHASE_DETAILS: Record<string, PhaseDetail> = {
  '1': {
    title: 'Tax-Free In',
    subtitle: 'Cutting your taxable income immediately.',
    description: 'Every dollar you put into an HSA is removed from your "Taxable Income." If you make $50,000 and put $4,000 in your HSA, the IRS acts like you only made $46,000.',
    steps: [
      'Check if your insurance plan is "HSA-Eligible" (Must have a high deductible).',
      'Ask your employer if they offer "Payroll Deduction"—this saves you the most money on Social Security taxes.',
      'If your employer doesn\'t offer it, open a private HSA (like Fidelity or Lively) and transfer money manually.',
      'Claim the deduction on your Tax Return at the end of the year.'
    ],
    proTip: 'If your employer offers a "Match" (free money), ALWAYS contribute enough to get the full match first.'
  },
  '2': {
    title: 'Tax-Free Growth',
    subtitle: 'Turning your health fund into a retirement nest egg.',
    description: 'Unlike a normal savings account where you pay taxes on interest, HSA growth is 100% tax-exempt. You can even invest the money in the stock market.',
    steps: [
      'Keep a "Safety Buffer" in your HSA (usually $1,000 - $2,000) for immediate needs.',
      'Link your HSA to an investment brokerage (most big ones allow this).',
      'Choose low-cost index funds or target-date funds.',
      'Leave the money alone to grow year after year.'
    ],
    proTip: 'The HSA is the only account in America that is "Triple Tax Advantaged"—no tax in, no tax growth, no tax out.'
  },
  '3': {
    title: 'Tax-Free Out',
    subtitle: 'Paying for your care with zero government "cut".',
    description: 'When you need to see a doctor or buy medicine, you use your HSA money. Since it was never taxed, you are essentially getting a 20-30% discount vs. your normal bank account.',
    steps: [
      'Use the HSA debit card provided by your bank at the pharmacy or doctor\'s office.',
      'Alternatively, pay with your own credit card (to get points) and "reimburse" yourself from the HSA later.',
      'Digitalize all receipts: Take a photo of every medical bill and store it in the cloud. The IRS requires proof.',
      'Use it for dental, vision, and even some over-the-counter items like sunscreen or bandages.'
    ],
    proTip: 'There is no time limit for reimbursement. You can pay a bill today and pay yourself back from the HSA 20 years later!'
  }
};

export default function HSAGuide() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Modal Overlay */}
      <AnimatePresence>
        {activePhase && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhase(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-6 sticky top-0 bg-white z-10 pb-2">
                  <div>
                    <h3 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Detailed Guide: Phase {activePhase}</h3>
                    <h2 className="text-2xl font-black text-slate-900 leading-tight">{PHASE_DETAILS[activePhase].title}</h2>
                  </div>
                  <button 
                    onClick={() => setActivePhase(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>

                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  {PHASE_DETAILS[activePhase].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">How to achieve this:</h4>
                  {PHASE_DETAILS[activePhase].steps.map((step, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-xs font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-600 leading-snug">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Pro Auditor Tip</p>
                    <p className="text-xs text-emerald-800 italic leading-relaxed">{PHASE_DETAILS[activePhase].proTip}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActivePhase(null)}
                className="w-full p-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-600 transition-colors shrink-0"
              >
                Got it, thank you!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="prof-card bg-emerald-700 text-white rounded-2xl p-10 shadow-2xl overflow-hidden relative border-0">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="text-emerald-300" size={32} />
            <h1 className="text-4xl font-black tracking-tight">HSA & Tax Savings (IRS Pub 969)</h1>
          </div>
          <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
            Learn how to use "HSA" accounts to pay your doctor with tax-free money—saving you up to 37% on every bill.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <DollarSign size={200} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="prof-card bg-white border-b-4 border-b-emerald-500 flex flex-col shadow-sm">
           <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Phase 1</h3>
           <h2 className="text-lg font-bold mb-2 text-slate-900">Tax-Free In</h2>
           <p className="text-xs text-slate-500 leading-relaxed italic flex-1">Money goes into the account without being taxed by Uncle Sam.</p>
           <button 
             onClick={() => setActivePhase('1')}
             className="mt-6 flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest group border border-emerald-100/50 p-2 rounded hover:bg-emerald-50 transition-colors w-fit"
           >
              Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
        <div className="prof-card bg-white border-b-4 border-b-emerald-500 scale-105 shadow-xl flex flex-col z-10">
           <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Phase 2</h3>
           <h2 className="text-lg font-bold mb-2 text-slate-900">Tax-Free Growth</h2>
           <p className="text-xs text-slate-500 leading-relaxed italic flex-1">The money earns interest (or stock gains) and you pay NO taxes on that growth.</p>
           <button 
             onClick={() => setActivePhase('2')}
             className="mt-6 flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest group border border-emerald-100/50 p-2 rounded hover:bg-emerald-50 transition-colors w-fit"
           >
              Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
        <div className="prof-card bg-white border-b-4 border-b-emerald-500 flex flex-col shadow-sm">
           <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Phase 3</h3>
           <h2 className="text-lg font-bold mb-2 text-slate-900">Tax-Free Out</h2>
           <p className="text-xs text-slate-500 leading-relaxed italic flex-1">You spend the money on doctor visits, surgery, or medicine with ZERO taxes.</p>
           <button 
             onClick={() => setActivePhase('3')}
             className="mt-6 flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest group border border-emerald-100/50 p-2 rounded hover:bg-emerald-50 transition-colors w-fit"
           >
              Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div className="prof-card bg-slate-900 text-white border-0">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <TrendingUp size={18} className="text-emerald-400" />
          2026 Contribution Limits
        </h2>
        <div className="grid grid-cols-2 gap-8">
           <div className="space-y-1">
              <p className="text-xs text-slate-400 uppercase font-bold">Individual Only</p>
              <p className="text-3xl font-black text-emerald-400">$4,400</p>
           </div>
           <div className="space-y-1">
              <p className="text-xs text-slate-400 uppercase font-bold">Family Coverage</p>
              <p className="text-3xl font-black text-emerald-400">$8,800</p>
           </div>
        </div>
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
           <p className="text-xs text-slate-300">
             * If you are 55 or older, you can add an extra <strong>$1,000</strong> "catch-up" contribution.
           </p>
        </div>
      </div>

      <div className="prof-card">
         <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
           <HelpCircle size={18} className="text-blue-500" />
           In Plain English: Why do this?
         </h2>
         <p className="text-sm text-slate-600 leading-relaxed text-slate-700">
           Imagine if the government gave you a 30% discount on every doctor visit. That's what an HSA does. By using "Pre-Tax" money, you are essentially getting a massive government subsidy on all your healthcare needs. It's the most powerful savings account in the United States because it helps you build wealth while staying healthy.
         </p>
      </div>
    </div>
  );
}
