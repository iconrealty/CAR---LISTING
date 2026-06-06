import { formsData } from '../data';
import { ArrowLeft } from 'lucide-react';

interface DashboardProps {
  onBack?: () => void;
  onSelectForm?: (id: string) => void;
}

export default function Dashboard({ onBack, onSelectForm }: DashboardProps) {
  const totalPages = formsData.reduce((acc, form) => acc + form.stats.pages, 0);
  const totalSignatures = formsData.reduce((acc, form) => acc + form.stats.signatures, 0);
  const totalInitials = formsData.reduce((acc, form) => acc + form.stats.initials, 0);

  return (
    <div className="h-full overflow-y-auto pb-20">
      <div className="p-6 md:px-12 md:py-12 max-w-5xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        
         {onBack && (
          <button 
            onClick={onBack}
            className="md:hidden flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors font-medium mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </button>
        )}

        {/* Header */}
        <div className="mb-12 relative flex flex-col items-start pt-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] font-display">
            Package Overview
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-[#F5F5F7] rounded-3xl p-6 md:p-8 border border-transparent transition-colors hover:border-black/5 flex flex-col">
            <div className="flex items-center mb-6">
              <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Forms</h3>
            </div>
            <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{formsData.length}</div>
          </div>
          <div className="bg-[#F5F5F7] rounded-3xl p-6 md:p-8 border border-transparent transition-colors hover:border-black/5 flex flex-col">
            <div className="flex items-center mb-6">
              <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
            </div>
            <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{totalPages}</div>
          </div>
          <div className="bg-[#F5F5F7] rounded-3xl p-6 md:p-8 border border-transparent transition-colors hover:border-black/5 flex flex-col">
            <div className="flex items-center mb-6">
              <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Signatures</h3>
            </div>
            <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{totalSignatures}</div>
          </div>
          <div className="bg-[#F5F5F7] rounded-3xl p-6 md:p-8 border border-transparent transition-colors hover:border-black/5 flex flex-col">
            <div className="flex items-center mb-6">
              <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Initials</h3>
            </div>
            <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{totalInitials}</div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F5F7] border-b border-black/5">
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans w-[40%]">Form</th>
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans">Pages</th>
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans">Range</th>
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans">Signatures</th>
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans">Initials</th>
                  <th className="py-4 px-6 font-semibold text-[10px] text-zinc-500 uppercase tracking-widest font-sans">Agent Signatures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {formsData.map(form => (
                  <tr 
                    key={form.id} 
                    className={`hover:bg-[#F5F5F7]/50 transition-colors ${onSelectForm ? 'cursor-pointer' : ''}`}
                    onClick={() => onSelectForm && onSelectForm(form.id)}
                  >
                    <td className="py-4 px-6">
                      <div className="font-semibold text-sm text-black font-display">{form.acronym}</div>
                      <div className="text-xs text-zinc-500 font-medium mt-0.5 truncate">{form.title}</div>
                    </td>
                    <td className="py-4 px-6 text-sm font-semibold text-black">{form.stats.pages}</td>
                    <td className="py-4 px-6 text-sm font-medium text-zinc-500">
                      {form.stats.pages === 1 ? form.stats.startPage : `${form.stats.startPage}-${form.stats.endPage}`}
                    </td>
                    <td className="py-4 px-6 text-sm font-semibold text-black">{form.stats.signatures}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-black">{form.stats.initials > 0 ? form.stats.initials : ''}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-black">{form.stats.agentSignatures > 0 ? form.stats.agentSignatures : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
