import { ArrowLeft, FileText } from 'lucide-react';
import { FormDocument } from '../types';

interface FormDetailsProps {
  form: FormDocument;
  onBack?: () => void;
}

export default function FormDetails({ form, onBack }: FormDetailsProps) {
  return (
    <div className="h-full overflow-y-auto pb-20">
      <div className="p-6 md:px-12 md:py-12 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 w-full">
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{form.stats.pages} <span className="text-xl md:text-2xl text-zinc-400 font-medium ml-1">{form.stats.pages === 1 ? 'Page' : 'Pages'}</span></div>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Page Range in Package</h3>
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">{form.stats.startPage}-{form.stats.endPage}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 font-medium mb-3 font-sans">
            <FileText className="w-4 h-4" />
            <span className="tracking-widest uppercase text-[10px] font-semibold">Form / {form.acronym}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] mb-5 font-display flex items-baseline gap-3 flex-wrap">
            {form.title}
            <span className="text-2xl md:text-3xl font-bold text-black">({form.acronym})</span>
          </h1>

          <p className="text-lg text-zinc-500 leading-relaxed font-medium max-w-2xl">
            {form.summary}
          </p>
        </div>

        <div className="grid gap-8 border-t border-black/5 pt-10">
          {/* Why it Matters Card */}
          <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-10 border border-transparent transition-colors hover:border-black/5">
            <div className="flex items-center mb-5">
              <h2 className="text-2xl font-semibold text-black font-display">Strategic Importance</h2>
            </div>
            <p className="text-zinc-600 leading-relaxed text-lg font-medium">
              {form.importance}
            </p>
          </div>

          {/* Key Sections to Explain */}
          <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-10 border border-transparent transition-colors hover:border-black/5">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-semibold text-black font-display">Key Sections to Review</h2>
            </div>
            <div className="space-y-6">
              {form.keySections.map((section, idx) => (
                <div key={idx} className="group border-t border-black/5 pt-6 first:border-0 first:pt-0">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2 font-display">{section.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-base font-medium">
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip Card */}
          <div className="bg-black rounded-3xl p-8 md:p-10 text-white">
            <div className="flex items-center mb-5">
              <h2 className="text-xl font-semibold text-white tracking-tight font-display">Tip</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed font-medium md:text-lg">
              {form.proTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
