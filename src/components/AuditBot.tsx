/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, ShieldQuestion } from 'lucide-react';
import { askOracle } from '../services/geminiService';

export default function AuditBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'HIMO Oracle online. Awaiting healthcare financial inquiries for 2026 Audit.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askOracle(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const QUICK_PROMPTS = [
    "Check my 2026 Subsidy Impact",
    "Calculate Max HSA Efficiency",
    "Audit Ozempic Medicare Cap"
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 w-72 h-[420px] bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col font-sans"
          >
            {/* Header */}
            <div className="bg-blue-600 p-2.5 text-[10px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              Live AI Audit Bot
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide text-[11px] leading-relaxed">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded-lg ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest animate-pulse p-2">
                  Analyzing Mandates...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="p-3 bg-slate-900/50 flex flex-col gap-2 border-t border-slate-800">
              {QUICK_PROMPTS.map(p => (
                <button 
                  key={p}
                  onClick={() => { setInput(p); setMessages(prev => [...prev, {role: 'user', content: p}]); setIsLoading(true); askOracle(p).then(res => { setMessages(prev => [...prev, {role: 'assistant', content: res}]); setIsLoading(false); }); }}
                  className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded text-[10px] font-semibold text-left px-3 border border-slate-600 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Status */}
            <div className="p-2 bg-slate-950 flex items-center justify-center gap-2 border-t border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Oracle Status: Online</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all group active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
}
