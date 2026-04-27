/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, ArrowRight, DollarSign } from 'lucide-react';

const PROCEDURES = [
  { 
    name: 'Knee Replacement', 
    high: { state: 'NY', cost: 45200 }, 
    low: { state: 'MD', cost: 18400 },
    savings: 26800,
    note: 'Extreme Coastal Disparity'
  },
  { 
    name: 'MRI (Brain Scan)', 
    high: { state: 'CA', cost: 3400 }, 
    low: { state: 'UT', cost: 920 },
    savings: 2480,
    note: 'Western Regional Gap'
  },
  { 
    name: 'Childbirth (Standard)', 
    high: { state: 'NJ', cost: 22000 }, 
    low: { state: 'AL', cost: 9500 },
    savings: 12500,
    note: 'The "Zip Code" Birth Tax'
  },
];

export default function ProcedureMap() {
  return (
    <div className="prof-card w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Surgery Price Comparison</h2>
          <p className="text-sm text-slate-500 font-medium">Why these states? We chose them to show you the <strong>biggest possible savings</strong> in the country. If you live in a high-cost state, these are your "Exit Options".</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-blue-600 px-3 py-1 text-[10px] font-bold text-white rounded uppercase tracking-widest">
            National Data (50 States Audited)
          </div>
          <span className="text-[9px] text-slate-400 mt-1 uppercase font-mono italic">Searching for lowest regional averages...</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROCEDURES.map(proc => (
          <div key={proc.name} className="p-5 border border-slate-100 bg-slate-50 rounded-lg group hover:border-blue-200 transition-all shadow-sm">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{proc.name}</h3>
            <p className="text-[9px] text-slate-400 italic mb-4">{proc.note}</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-600">{proc.high.state} (Expensive)</span>
                <span className="font-mono font-bold text-red-600">${proc.high.cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-600">{proc.low.state} (Smart Choice)</span>
                <span className="font-mono font-bold text-green-700">${proc.low.cost.toLocaleString()}</span>
              </div>

              <div className="mt-4 p-3 bg-white border border-slate-200 rounded text-center">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Travel Savings</span>
                <div className="text-xl font-black text-blue-700 font-mono tracking-tighter">${proc.savings.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
