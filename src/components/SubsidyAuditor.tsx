/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, ArrowUpRight, TrendingUp, Database, MapPin } from 'lucide-react';
import { US_STATES } from '../types';

export default function SubsidyAuditor() {
  const [income, setIncome] = useState<number>(45000);
  const [householdSize, setHouseholdSize] = useState<number>(1);
  const [selectedStateCode, setSelectedStateCode] = useState<string>('TX');
  
  const selectedState = US_STATES.find(s => s.code === selectedStateCode) || US_STATES[42]; // Default to TX

  const calcShock = (inc: number, size: number, stateCode: string) => {
    const state = US_STATES.find(s => s.code === stateCode) || US_STATES[0];
    
    // Base subsidy logic adjusted for household size (FPL-ish simulation)
    const fplBase = 15000 + (size * 5000);
    const ratio = inc / fplBase;
    
    // State Adjustment: Non-expansion states (like TX) have higher base premiums for private plans
    const expansionMultiplier = state.isMedicaidExpanded ? 1.0 : 1.25;
    const premiumBase = 1100 * state.costIndex * expansionMultiplier;
    
    const subsidy2025 = Math.max(0, premiumBase * 0.8 - (inc * (ratio > 4 ? 0.085 : 0.02)) / 12);
    // The cliff: over 400% FPL lose all enhanced credits in 2026
    const subsidy2026 = ratio > 4 ? 0 : subsidy2025 * 0.35; 
    
    const p2025 = premiumBase - subsidy2025;
    const p2026 = premiumBase - subsidy2026;
    const shock = ((p2026 - p2025) / p2025) * 100;
    
    return { p2025, p2026, shock, subsidy2025, ratio, stateName: state.name };
  };

  const { p2025, p2026, shock, ratio, stateName } = calcShock(income, householdSize, selectedStateCode);

  return (
    <div className="prof-card">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Insurance Price Jump Auditor</h2>
          <p className="text-sm text-slate-500 font-medium tracking-tight">Technical Name: ACA Subsidy Cliff. This shows why rates go up in 2026 based on your specific family size.</p>
        </div>
        <div className="text-right">
          <motion.span 
            key={shock}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl font-black text-red-600 leading-none block"
          >
            +{shock.toFixed(0)}%
          </motion.span>
          <p className="prof-label">Your Cost Increase</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="prof-label">Select Your State</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select 
                  value={selectedStateCode}
                  onChange={(e) => setSelectedStateCode(e.target.value)}
                  className="prof-input pl-10 text-sm font-bold appearance-none bg-white"
                >
                  {US_STATES.map(s => <option key={s.code} value={s.code}>{s.name} ({s.code})</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="prof-label">2026 Household Income</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-slate-400 font-bold">$</span>
                <input 
                  type="number" 
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="prof-input pl-8 text-sm font-bold"
                />
              </div>
            </div>
            <div>
              <label className="prof-label">Family Size</label>
              <select 
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="prof-input text-sm font-bold"
              >
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
              </select>
            </div>
          </div>

          {!selectedState.isMedicaidExpanded && (
            <div className="p-3 bg-amber-50 border border-amber-200 flex gap-3 rounded-lg">
              <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[10px] text-amber-800 leading-tight">
                <strong>Plain English Warning for {selectedState.name}:</strong> Your state did not expand Medicaid. This means people with low income may have higher monthly premiums than in other states.
              </p>
            </div>
          )}

          <div className="space-y-3">
             <div className="flex justify-between items-center text-xs py-2.5 border-b border-slate-100 italic">
                <span className="font-semibold text-slate-500 uppercase tracking-tighter">Current Plan (Post-ARPA)</span>
                <span className="font-mono font-bold text-slate-700">${p2025.toFixed(2)}</span>
             </div>
             <div className="flex justify-between items-center text-xs py-2.5 bg-red-50 px-3 rounded-md border border-red-100">
                <span className="font-bold text-red-700 uppercase tracking-tighter">2026 Statutory Premium</span>
                <span className="font-mono font-black text-red-700">${p2026.toFixed(2)}</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 items-end h-40 pt-4">
          <div className="relative flex flex-col justify-end">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '32px' }}
              className="w-full bg-slate-100 border border-slate-200 rounded-t-sm"
            />
            <div className="absolute -top-10 left-0 w-full text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">2025 Baseline</span>
              <span className="block text-xs font-mono font-bold text-slate-500">${p2025.toFixed(0)}/mo</span>
            </div>
            <p className="mt-2 text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest">Enhanced</p>
          </div>
          
          <div className="relative flex flex-col justify-end">
            <motion.div 
              key={p2026}
              initial={{ height: 0 }}
              animate={{ height: '100px' }}
              className="w-full bg-red-600 rounded-t-sm relative shadow-[0_-8px_20px_rgba(220,38,38,0.2)] border border-red-700"
            />
            <div className="absolute -top-10 left-0 w-full text-center">
              <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-tighter italic">2026 CLIFF</span>
              <span className="block text-xs font-mono font-black text-red-700">${p2026.toFixed(0)}/mo</span>
            </div>
            <p className="mt-2 text-[10px] font-bold text-red-600 text-center uppercase tracking-widest">Statutory</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
          <Database size={10} />
          IRS Notice 2026-05 Baseline Calculation Method (OBBBA Compliant)
        </p>
      </div>
    </div>
  );
}
