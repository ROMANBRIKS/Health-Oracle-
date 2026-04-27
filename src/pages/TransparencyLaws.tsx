
import { Scale, Eye, MapPin, ExternalLink, AlertCircle } from 'lucide-react';

export default function TransparencyLaws() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="prof-card bg-slate-100 rounded-2xl p-10 border-2 border-slate-200">
        <div className="flex items-center gap-4 mb-6">
          <Scale className="text-slate-900" size={32} />
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Health Price Transparency</h1>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          New federal laws now force hospitals and insurance companies to show you their "Hidden" prices before you get a bill.
        </p>
      </div>

      <div className="prof-card bg-amber-50 border border-amber-200">
         <div className="flex gap-4">
            <AlertCircle className="text-amber-600 shrink-0" size={24} />
            <div>
               <h2 className="text-lg font-bold text-amber-900 mb-2 underline decoration-amber-300">The "No Surprises" Act</h2>
               <p className="text-sm text-amber-800 leading-relaxed italic">
                 "If you go to an In-Network hospital, you cannot be hit with a surprise bill from an Out-of-Network doctor you didn't choose. It is now illegal to bill you more than your standard plan cost."
               </p>
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="prof-card">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                 <Eye size={20} />
              </div>
              <h3 className="font-bold">Hospital Price Files</h3>
           </div>
           <p className="text-xs text-slate-500 leading-relaxed">
             Every hospital is required to post a "Standard Charges" file online. This includes the "Cash Price" if you don't use insurance.
           </p>
           <button className="mt-4 w-full p-2 text-[10px] font-bold uppercase tracking-widest border border-slate-200 rounded hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              Browse CMS Database <ExternalLink size={12} />
           </button>
        </div>

        <div className="prof-card">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <MapPin size={20} />
              </div>
              <h3 className="font-bold">Comparative Shopping</h3>
           </div>
           <p className="text-xs text-slate-500 leading-relaxed">
             You have the legal right to ask for a "Good Faith Estimate" for any scheduled surgery. You can then take that estimate and compare it to other hospitals.
           </p>
           <div className="mt-4 p-3 bg-slate-900 text-white rounded text-[10px] italic">
              "Plain English Tip: Always ask for the 'Cash Pay Discount'. Often, paying cash is cheaper than using a high-deductible plan."
           </div>
        </div>
      </div>

      <div className="prof-card bg-slate-900 text-white">
         <h2 className="text-lg font-bold mb-4">Your Rights Checklist</h2>
         <ul className="space-y-4">
            {[
               "Right to a written estimate for surgery.",
               "Right to appeal a bill that is $400+ higher than the estimate.",
               "Right to see 'Negotiated Rates' between insurance and hospitals.",
               "Protection from 'Balance Billing' in emergency rooms."
            ].map((text, i) => (
               <li key={i} className="flex items-center gap-3 text-xs">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold">✓</div>
                  {text}
               </li>
            ))}
         </ul>
      </div>
    </div>
  );
}
