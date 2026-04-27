
import { ShieldCheck, Scale, AlertTriangle, FileText } from 'lucide-react';

export default function Disclosures() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="prof-card bg-slate-50 border-2 border-slate-200 p-10 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <ShieldCheck className="text-slate-900" size={32} />
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Legal Disclosures</h1>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          HIMO (Health Intelligence Mega-Oracle) is an educational tool. We are not doctors, insurance brokers, or federal agents. We provide information based on public laws, but you should always verify with your insurance provider.
        </p>
      </div>

      <div className="space-y-6">
        <div className="prof-card">
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <AlertTriangle size={18} className="text-amber-500" />
             Not Medical Advice
           </h2>
           <p className="text-xs text-slate-600 leading-relaxed">
             The information provided by HIMO, including drug coverage (GLP-1) and procedure costs, is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
           </p>
        </div>

        <div className="prof-card">
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <Scale size={18} className="text-blue-600" />
             Data Accuracy
           </h2>
           <p className="text-xs text-slate-600 leading-relaxed">
             Calculations for HSA savings, Medicare caps, and ACA subsidies are estimates based on the 2026 Federal Baseline and the "One Big Beautiful Bill Act" projections. Actual costs may vary depending on your specific zip code, insurance carrier, and employer group settings.
           </p>
        </div>

        <div className="prof-card">
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <FileText size={18} className="text-slate-500" />
             Privacy Policy
           </h2>
           <p className="text-xs text-slate-600 leading-relaxed">
             HIMO does not store your social security number, medical records, or sensitive private data. Your inputs (income, family size) are used only to generate the reports shown on your screen and are not sold to third-party advertisers.
           </p>
        </div>
      </div>

      <div className="text-center pb-12">
         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
           Last Updated: April 27, 2026 • Compliance ID: HIMO-SEC-099
         </p>
      </div>
    </div>
  );
}
