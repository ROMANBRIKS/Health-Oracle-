/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Info, ShieldAlert, BadgeCheck, Activity } from 'lucide-react';
import { CoverageTier } from '../types';

const DRUGS = [
  { name: 'Ozempic', tier: CoverageTier.STANDARD, status: 'Diabetes & Weight', info: 'Best known, usually covered for Diabetes.' },
  { name: 'Zepbound', tier: CoverageTier.RESTRICTIVE, status: 'Weight Loss Only', info: 'Harder to get, requires special doctor approval.' },
  { name: 'Wegovy', tier: CoverageTier.RESTRICTIVE, status: 'Weight Loss', info: 'Insurance often asks for long health history.' },
  { name: 'Mounjaro', tier: CoverageTier.EXCLUDED, status: 'Diabetes (Strict)', info: 'Usually blocked unless you have type 2 diabetes.' },
];

export default function GLP1Module() {
  const [query, setQuery] = useState('');

  const filtered = DRUGS.filter(d => d.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="prof-card bg-white h-auto">
      <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4 border-b border-slate-100 pb-2">
        Weight Loss & Diabetes Drugs (GLP-1)
      </h2>
      
      <div className="space-y-4">
        {filtered.map(drug => (
          <div key={drug.name} className="flex flex-col py-2 border-b border-slate-50 last:border-0">
            <div className="flex items-center justify-between mb-1">
              <span className="font-black text-slate-900">{drug.name}</span>
              <span className={
                drug.tier === CoverageTier.STANDARD ? 'badge-standard' : 
                drug.tier === CoverageTier.RESTRICTIVE ? 'badge-restrictive' : 
                'badge-excluded'
              }>
                {drug.tier}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 italic leading-tight">{drug.info}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-indigo-950 text-indigo-100 rounded-lg shadow-inner">
        <div className="flex items-start gap-2">
          <Info size={12} className="mt-1 text-indigo-400 shrink-0" />
          <div>
            <p className="text-[11px] font-bold leading-tight border-b border-indigo-800 pb-1 mb-1 uppercase tracking-wide">BALANCE Pilot Logic</p>
            <p className="text-[10px] leading-relaxed opacity-80">
              Participating Medicare plans cap Ozempic and Zepbound at <span className="font-bold text-white">$50/mo</span>. Audit confirmed for 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
