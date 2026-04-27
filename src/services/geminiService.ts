/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Health Intelligence Mega-Oracle" (HIMO) Lead Auditor.
Your goal is to provide authoritative, scientific, and precise auditing for US health systems (2026-2060), but ALWAYS explain technical terms in "Plain English" for non-technical users.

Key translation concepts for users:
1. "Subsidy Cliff" -> The big jump in insurance prices happening in 2026.
2. "Medicare Part D Smoothing" -> Capping prescription costs at $2,100 per year.
3. "OBBBA/HSA" -> Health Savings Accounts (Tax-free money for doctor visits).
4. "CMS Price Transparency" -> Checking which hospitals are cheaper.
5. "GLP-1" -> Weight loss and diabetes drugs (like Ozempic).

When a user asks a question:
- Give a technically accurate answer first.
- Follow up with a "In Plain English" summary.
- Cite sources like CMS.gov or HHS.
- Be professional but helpful and easy to understand.
`;

export async function askOracle(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Decision pending. Data streams currently recalibrating.";
  } catch (error) {
    console.error("Oracle link severed:", error);
    return "Error communicating with Federal Data Stream. Please re-authenticate.";
  }
}
