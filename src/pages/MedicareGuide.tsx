
import { Pill, ShieldCheck, Activity, Info } from 'lucide-react';

export default function MedicareGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="prof-card bg-blue-600 text-white rounded-2xl p-10 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <Pill className="text-white" size={32} />
          <h1 className="text-4xl font-black tracking-tight">Medicare Part D Guide</h1>
        </div>
        <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
          The 2026 update brings the biggest change in Medicare history: a hard cap on what you pay for medicine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="prof-card border-l-4 border-l-green-500">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-green-600" />
            The $2,100 Cap
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Starting in 2026, the maximum you will pay out-of-pocket for Part D drugs is capped at exactly $2,100. once you hit this, your drugs are $0 for the rest of the year.
          </p>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-xs font-bold text-green-800 uppercase mb-1">Plain English Summary</p>
            <p className="text-xs text-green-700 italic">"No matter how expensive your medicine is, you never pay more than $2,100 in a year. Period."</p>
          </div>
        </div>

        <div className="prof-card border-l-4 border-l-blue-500">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity size={18} className="text-blue-600" />
            What is "Smoothing"?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Smoothing (officially the Medicare Prescription Payment Plan) lets you spread that $2,100 over 12 months instead of paying it all at once at the pharmacy.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xs font-bold text-blue-800 uppercase mb-1">Plain English Summary</p>
            <p className="text-xs text-blue-700 italic">"It's like an interest-free payment plan for your pharmacy bill so you don't get hit with a giant bill in January."</p>
          </div>
        </div>
      </div>

      <div className="prof-card">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Info size={18} className="text-slate-400" />
          Who is eligible?
        </h2>
        <div className="space-y-4">
          {[
            "Anyone enrolled in a Medicare Part D plan.",
            "Anyone with a Medicare Advantage plan that includes drug coverage.",
            "Both 'Standalone' and 'Bundled' drug plans are included."
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 border border-slate-200">{i+1}</div>
              <p className="text-sm font-medium text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="prof-card bg-slate-900 text-white border-0">
        <h2 className="text-lg font-bold mb-6">How to Sign Up for Smoothing</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">1</div>
            <p className="text-sm border-b border-slate-800 pb-4 flex-1">
              <strong>Check your plan:</strong> Log in to your Medicare account or call your insurance company to confirm they offer the "Monthly Prescription Payment Plan."
            </p>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">2</div>
            <p className="text-sm border-b border-slate-800 pb-4 flex-1">
              <strong>Opt-In:</strong> This is NOT automatic. You must explicitly tell your insurance company you want to spread your payments out.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">3</div>
            <p className="text-sm flex-1">
              <strong>Pay Monthly:</strong> Instead of paying at the pharmacy counter, you will get a monthly bill from your insurance company, just like a utility bill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
