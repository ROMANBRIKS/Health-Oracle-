/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PiggyBank, ShieldCheck, Target } from 'lucide-react';

export default function HSASync() {
  const [taxBracket, setTaxBracket] = useState<number>(24);
  const HSA_LIMIT = 4400; // 2026 OBBBA Limit

  const savings = HSA_LIMIT * (taxBracket / 100);
  const netContribution = HSA_LIMIT - savings;

  return (
    <div className="prof-card h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold">$</div>
        <h2 className="text-sm font-bold uppercase tracking-tight text-slate-900">Tax-Free Savings Tool (HSA)</h2>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="prof-label">Annual Savings Limit</p>
            <span className="text-2xl font-black text-green-700">$4,400</span>
          </div>
          <div className="text-right">
            <p className="prof-label">Money You Save on Taxes</p>
            <span className="text-xl font-bold text-slate-700">${savings.toFixed(0)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="prof-label block">Tax Bracket Allocation: {taxBracket}%</label>
          <input 
            type="range" 
            min="10" 
            max="37" 
            value={taxBracket}
            onChange={(e) => setTaxBracket(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <p className="text-xs italic text-slate-600 leading-relaxed">
            "By maximizing your HSA, you reduce your taxable AGI, potentially qualifying for higher premium tax credits under the 2026 Cliff baseline."
          </p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Net Annual Cost</span>
          <span className="font-mono font-black text-lg text-slate-900">${netContribution.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
