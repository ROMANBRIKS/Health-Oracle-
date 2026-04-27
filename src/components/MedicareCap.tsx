/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Pill, Activity, CheckCircle2 } from 'lucide-react';

export default function MedicareCap() {
  const [monthlySpend, setMonthlySpend] = useState<number>(450);
  const CAP = 2100;

  const monthsToCap = Math.ceil(CAP / monthlySpend);
  const currentTotal = Math.min(CAP, monthlySpend * 5); // Example current
  const progress = (currentTotal / CAP) * 100;

  return (
    <div className="prof-card h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6 text-blue-600">
        <Activity size={18} />
        <h2 className="text-sm font-bold uppercase tracking-tight text-slate-900">Medicare Prescription Cost Cap</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-6 border-2 border-dashed border-slate-100 rounded-xl px-4 text-center">
        <span className="text-4xl font-black text-slate-900 tracking-tighter">$2,100</span>
        <span className="text-xs font-bold text-slate-500 uppercase mt-1">The most you pay for medicine in 2026</span>

        <div className="mt-8 w-full">
          <div className="flex justify-between text-[10px] font-bold mb-1 uppercase">
            <span className="text-slate-400">Total Spent So Far</span>
            <span className="text-blue-600">Free Medicine Starts after $2,100</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-blue-500 rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-mono font-bold text-slate-400">
             <span>$0</span>
             <span>Progress to Cap: {progress.toFixed(0)}%</span>
             <span>$2,100</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50">
         <p className="text-[10px] leading-relaxed text-slate-500 italic">
          "Under the 2026 Smoothing rule, after reaching the $2.1k threshold, your pharmacy copays for the remainder of the year drop to $0.00."
         </p>
      </div>
    </div>
  );
}
