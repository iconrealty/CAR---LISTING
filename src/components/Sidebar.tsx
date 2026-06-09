import { FormDocument } from '../types';
import { Home } from 'lucide-react';

interface SidebarProps {
  forms: FormDocument[];
  selectedFormId: string;
  onSelect: (id: string) => void;
  activePackage: 'listing' | 'offer';
  onSwitchPackage: (pkg: 'listing' | 'offer') => void;
}

export default function Sidebar({ forms, selectedFormId, onSelect, activePackage, onSwitchPackage }: SidebarProps) {
  return (
    <aside className="w-full h-full bg-[#F5F5F7] flex flex-col z-0">
      <div className="pt-5 pb-3 px-5 sticky top-0 z-10 shrink-0 bg-[#F5F5F7]/80 backdrop-blur-xl border-b border-black/5 flex flex-col gap-3">
        <button 
          onClick={() => onSelect('overview')}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl hover:bg-black/5 transition-all group w-full border border-transparent hover:border-black/5"
        >
          <Home className="w-4 h-4 text-black" />
          <span className="text-sm font-bold uppercase tracking-widest text-black font-display text-center">
            HOME
          </span>
        </button>

        {/* Apple-style Segmented Control for Package Switching */}
        <div className="bg-[#E5E5E7] p-1 rounded-2xl flex items-center shadow-2xs border border-black/[0.02]">
          <button
            onClick={() => onSwitchPackage('listing')}
            className={`flex-1 text-center py-2 rounded-xl font-bold font-sans text-xs tracking-tight transition-all duration-200 cursor-pointer ${
              activePackage === 'listing'
                ? 'bg-white text-black shadow-xs ring-1 ring-black/[0.01]'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            Listing Package
          </button>
          <button
            onClick={() => onSwitchPackage('offer')}
            className={`flex-1 text-center py-2 rounded-xl font-bold font-sans text-xs tracking-tight transition-all duration-200 cursor-pointer ${
              activePackage === 'offer'
                ? 'bg-white text-black shadow-xs ring-1 ring-black/[0.01]'
                : 'text-zinc-550 hover:text-black'
            }`}
          >
            Offer Package
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <button
          onClick={() => onSelect('overview')}
          className={`w-full text-left p-3.5 mb-2 rounded-[14px] transition-all duration-200 flex items-center gap-3.5 group ${
            selectedFormId === 'overview'
              ? 'bg-black text-white shadow-md'
              : 'bg-transparent text-black hover:bg-black/5'
          }`}
        >
          <div className="flex-1 min-w-0">
            <div className={`font-semibold text-sm tracking-tight font-sans ${selectedFormId === 'overview' ? 'text-white' : 'text-black'}`}>
              {activePackage === 'listing' ? 'Listing Package Overview' : 'Offer Package Overview'}
            </div>
          </div>
        </button>

        {forms.map((form, index) => {
          const isSelected = form.id === selectedFormId;
          const number = String(index + 1);
          return (
            <button
              key={form.id}
              onClick={() => onSelect(form.id)}
              className={`w-full text-left p-3.5 rounded-[14px] transition-all duration-200 flex items-start gap-3 group ${
                isSelected
                  ? 'bg-white shadow-sm ring-1 ring-black/5'
                  : 'bg-transparent hover:bg-black/5'
              }`}
            >
              <div className={`mt-0.5 text-base font-mono font-bold px-2 py-1 rounded ${
                isSelected ? 'bg-[#F5F5F7] text-zinc-500' : 'text-zinc-400 group-hover:text-zinc-500'
              }`}>
                {number}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className={`font-semibold text-sm tracking-tight mb-0.5 font-sans ${
                  isSelected ? 'text-black' : 'text-zinc-650'
                }`}>
                  {form.acronym}
                </div>
                <div className={`text-xs truncate font-medium font-sans ${
                  isSelected ? 'text-zinc-550' : 'text-zinc-400'
                }`}>
                  {form.title}
                </div>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

