
import { MapPin, Search, Star, ShieldCheck, Phone } from 'lucide-react';
import { useState } from 'react';

export default function FindDoctors() {
  const [zip, setZip] = useState('');
  
  const MOCK_DOCTORS = [
    { name: 'Dr. Sarah Chen', specialty: 'Family Medicine', rating: 4.9, distance: '1.2 mi', status: 'Accepting New Patients' },
    { name: 'Dr. James Wilson', specialty: 'Cardiology', rating: 4.7, distance: '2.5 mi', status: 'In-Network (HIMO Verified)' },
    { name: 'Dr. Elena Rodriguez', specialty: 'Pediatrics', rating: 5.0, distance: '0.8 mi', status: 'Extended Hours' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="prof-card bg-white rounded-2xl p-6 sm:p-10 border-b-8 border-b-blue-600 shadow-xl">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <MapPin className="text-blue-600 shrink-0" size={24} />
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">Find Local Doctors</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 relative">
           <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Zip Code (e.g. 77002)" 
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full p-3 pl-11 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 outline-none font-bold text-sm sm:text-lg transition-all"
              />
           </div>
           <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-lg active:scale-95 shrink-0">
              SEARCH
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {MOCK_DOCTORS.map((doc, i) => (
            <div key={i} className="prof-card group hover:border-blue-300 transition-all cursor-pointer">
               <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                     <ShieldCheck size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-600">
                     <Star size={12} fill="currentColor" />
                     {doc.rating}
                  </div>
               </div>
               <h3 className="font-bold text-slate-900">{doc.name}</h3>
               <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-4">{doc.specialty}</p>
               
               <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-slate-400 font-bold uppercase">Distance</span>
                     <span className="text-slate-900 font-bold">{doc.distance}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-slate-400 font-bold uppercase">Status</span>
                     <span className="text-green-600 font-bold">{doc.status}</span>
                  </div>
               </div>

               <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded group-hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Phone size={12} /> Contact Office
               </button>
            </div>
         ))}
      </div>

      <div className="p-8 bg-slate-100 rounded-2xl text-center">
         <p className="text-sm text-slate-500 italic max-w-lg mx-auto">
           "HIMO uses the CMS National Provider Identifier (NPI) database to find doctors near you. We prioritize doctors with high transparency ratings and confirmed network status."
         </p>
      </div>
    </div>
  );
}
