/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StateData {
  code: string;
  name: string;
  isMedicaidExpanded: boolean;
  costIndex: number; // 1.0 is average
}

export const US_STATES: StateData[] = [
  { code: 'AL', name: 'Alabama', isMedicaidExpanded: false, costIndex: 0.91 },
  { code: 'AK', name: 'Alaska', isMedicaidExpanded: true, costIndex: 1.25 },
  { code: 'AZ', name: 'Arizona', isMedicaidExpanded: true, costIndex: 0.98 },
  { code: 'AR', name: 'Arkansas', isMedicaidExpanded: true, costIndex: 0.89 },
  { code: 'CA', name: 'California', isMedicaidExpanded: true, costIndex: 1.15 },
  { code: 'CO', name: 'Colorado', isMedicaidExpanded: true, costIndex: 1.05 },
  { code: 'CT', name: 'Connecticut', isMedicaidExpanded: true, costIndex: 1.12 },
  { code: 'DE', name: 'Delaware', isMedicaidExpanded: true, costIndex: 1.08 },
  { code: 'FL', name: 'Florida', isMedicaidExpanded: false, costIndex: 1.02 },
  { code: 'GA', name: 'Georgia', isMedicaidExpanded: false, costIndex: 0.95 },
  { code: 'HI', name: 'Hawaii', isMedicaidExpanded: true, costIndex: 1.18 },
  { code: 'ID', name: 'Idaho', isMedicaidExpanded: true, costIndex: 0.93 },
  { code: 'IL', name: 'Illinois', isMedicaidExpanded: true, costIndex: 1.01 },
  { code: 'IN', name: 'Indiana', isMedicaidExpanded: true, costIndex: 0.94 },
  { code: 'IA', name: 'Iowa', isMedicaidExpanded: true, costIndex: 0.92 },
  { code: 'KS', name: 'Kansas', isMedicaidExpanded: false, costIndex: 0.96 },
  { code: 'KY', name: 'Kentucky', isMedicaidExpanded: true, costIndex: 0.88 },
  { code: 'LA', name: 'Louisiana', isMedicaidExpanded: true, costIndex: 0.97 },
  { code: 'ME', name: 'Maine', isMedicaidExpanded: true, costIndex: 1.03 },
  { code: 'MD', name: 'Maryland', isMedicaidExpanded: true, costIndex: 1.10 },
  { code: 'MA', name: 'Massachusetts', isMedicaidExpanded: true, costIndex: 1.18 },
  { code: 'MI', name: 'Michigan', isMedicaidExpanded: true, costIndex: 0.94 },
  { code: 'MN', name: 'Minnesota', isMedicaidExpanded: true, costIndex: 1.04 },
  { code: 'MS', name: 'Mississippi', isMedicaidExpanded: false, costIndex: 0.86 },
  { code: 'MO', name: 'Missouri', isMedicaidExpanded: true, costIndex: 0.93 },
  { code: 'MT', name: 'Montana', isMedicaidExpanded: true, costIndex: 1.01 },
  { code: 'NE', name: 'Nebraska', isMedicaidExpanded: true, costIndex: 0.97 },
  { code: 'NV', name: 'Nevada', isMedicaidExpanded: true, costIndex: 1.02 },
  { code: 'NH', name: 'New Hampshire', isMedicaidExpanded: true, costIndex: 1.09 },
  { code: 'NJ', name: 'New Jersey', isMedicaidExpanded: true, costIndex: 1.16 },
  { code: 'NM', name: 'New Mexico', isMedicaidExpanded: true, costIndex: 0.92 },
  { code: 'NY', name: 'New York', isMedicaidExpanded: true, costIndex: 1.22 },
  { code: 'NC', name: 'North Carolina', isMedicaidExpanded: true, costIndex: 0.98 },
  { code: 'ND', name: 'North Dakota', isMedicaidExpanded: true, costIndex: 1.03 },
  { code: 'OH', name: 'Ohio', isMedicaidExpanded: true, costIndex: 0.94 },
  { code: 'OK', name: 'Oklahoma', isMedicaidExpanded: true, costIndex: 0.90 },
  { code: 'OR', name: 'Oregon', isMedicaidExpanded: true, costIndex: 1.06 },
  { code: 'PA', name: 'Pennsylvania', isMedicaidExpanded: true, costIndex: 1.03 },
  { code: 'RI', name: 'Rhode Island', isMedicaidExpanded: true, costIndex: 1.09 },
  { code: 'SC', name: 'South Carolina', isMedicaidExpanded: false, costIndex: 0.95 },
  { code: 'SD', name: 'South Dakota', isMedicaidExpanded: true, costIndex: 0.96 },
  { code: 'TN', name: 'Tennessee', isMedicaidExpanded: false, costIndex: 0.92 },
  { code: 'TX', name: 'Texas', isMedicaidExpanded: false, costIndex: 1.01 },
  { code: 'UT', name: 'Utah', isMedicaidExpanded: true, costIndex: 0.99 },
  { code: 'VT', name: 'Vermont', isMedicaidExpanded: true, costIndex: 1.07 },
  { code: 'VA', name: 'Virginia', isMedicaidExpanded: true, costIndex: 1.05 },
  { code: 'WA', name: 'Washington', isMedicaidExpanded: true, costIndex: 1.12 },
  { code: 'WV', name: 'West Virginia', isMedicaidExpanded: true, costIndex: 0.91 },
  { code: 'WI', name: 'Wisconsin', isMedicaidExpanded: false, costIndex: 0.98 },
  { code: 'WY', name: 'Wyoming', isMedicaidExpanded: false, costIndex: 1.08 },
];

export enum CoverageTier {
  STANDARD = 'Standard',
  RESTRICTIVE = 'Restrictive',
  EXCLUDED = 'Excluded'
}

export interface DrugCoverage {
  name: string;
  tier: CoverageTier;
  outOfPocket: number;
  notes: string;
}

export interface SubsidyData {
  income: number;
  year2025Premium: number;
  year2026Premium: number;
  shockPercentage: number;
}

export interface HSAMetrics {
  limit: number;
  taxBracket: number;
  taxSavings: number;
  netCost: number;
}

export interface ProcedureCost {
  name: string;
  locationHigh: { state: string; cost: number };
  locationLow: { state: string; cost: number };
}

export interface AuditMessage {
  role: 'user' | 'assistant';
  content: string;
}
