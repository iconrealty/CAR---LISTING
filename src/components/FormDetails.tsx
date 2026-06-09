import { useState, useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { FormDocument } from '../types';
import RLADeepDive from './RLADeepDive';
import RLAParagraphs from './RLAParagraphs';
import RPADeepDive from './RPADeepDive';
import RPAParagraphs from './RPAParagraphs';

interface FormDetailsProps {
  form: FormDocument;
  onBack?: () => void;
  activePackage?: 'listing' | 'offer';
}

export default function FormDetails({ form, onBack, activePackage }: FormDetailsProps) {
  const [rlaTab, setRlaTab] = useState<'overview' | 'deep-dive' | 'paragraphs'>('overview');

  useEffect(() => {
    setRlaTab('overview');
  }, [form.id]);

  const hasTabs = form.id === 'rla' || form.id === 'rpa';

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
          <div className="w-full mb-8">
            {/* Main Tabs (Total Pages, Page Range, and Paragraphs on RLA/RPA) */}
            <div className={`grid ${hasTabs ? 'grid-cols-3' : 'grid-cols-2'} gap-4 sm:gap-5 w-full ${hasTabs ? 'sm:max-w-xl' : 'sm:max-w-md'}`}>
              {hasTabs ? (
                <button
                  onClick={() => setRlaTab('overview')}
                  className={`rounded-3xl p-5 border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    rlaTab === 'overview'
                      ? 'border-black bg-white shadow-xs'
                      : 'border-transparent bg-[#F5F5F7] hover:border-black/5'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-black font-display">{form.stats.pages}</div>
                </button>
              ) : (
                <div className="bg-[#F5F5F7] rounded-3xl p-5 border border-transparent transition-colors hover:border-black/5 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-black font-display">{form.stats.pages}</div>
                </div>
              )}

              {hasTabs ? (
                <button
                  onClick={() => setRlaTab('overview')}
                  className={`rounded-3xl p-5 border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    rlaTab === 'overview'
                      ? 'border-black bg-white shadow-xs'
                      : 'border-transparent bg-[#F5F5F7] hover:border-black/5'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Page Range</h3>
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-black font-display">{form.stats.startPage}-{form.stats.endPage}</div>
                </button>
              ) : (
                <div className="bg-[#F5F5F7] rounded-3xl p-5 border border-transparent transition-colors hover:border-black/5 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Page Range</h3>
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-black font-display">{form.stats.startPage}-{form.stats.endPage}</div>
                </div>
              )}

              {hasTabs && (
                <button
                  onClick={() => setRlaTab('paragraphs')}
                  className={`rounded-3xl p-5 border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    rlaTab === 'paragraphs'
                      ? 'border-black bg-white shadow-xs'
                      : 'border-transparent bg-[#F5F5F7] hover:border-black/5'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Paragraphs</h3>
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-black font-display">
                    {form.id === 'rla' ? '22' : '33'}
                  </div>
                </button>
              )}
            </div>

            {/* Compact Seller/Buyer Signatures, Agent Signatures, and Initials Required Indicator below them */}
            {(form.stats.signatures > 0 || form.stats.agentSignatures > 0 || form.stats.initials > 0) && (
              <div className="flex flex-wrap gap-2.5 mt-4">
                {form.stats.signatures > 0 && (
                  <div className="bg-black hover:bg-black/90 border border-transparent px-4 py-2 rounded-2xl flex items-center gap-2 transition-colors">
                    <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider font-sans">
                      {activePackage === 'offer' ? 'Buyer Signatures:' : 'Seller Signatures:'}
                    </span>
                    <span className="text-sm font-bold text-white font-display">{form.stats.signatures}</span>
                  </div>
                )}
                {form.stats.agentSignatures > 0 && (
                  <div className="bg-black hover:bg-black/90 border border-transparent px-4 py-2 rounded-2xl flex items-center gap-2 transition-colors">
                    <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider font-sans">Agent Signatures:</span>
                    <span className="text-sm font-bold text-white font-display">{form.stats.agentSignatures}</span>
                  </div>
                )}
                {form.stats.initials > 0 && (
                  <div className="bg-black hover:bg-black/90 border border-transparent px-4 py-2 rounded-2xl flex items-center gap-2 transition-colors">
                    <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider font-sans">Initials:</span>
                    <span className="text-sm font-bold text-white font-display">{form.stats.initials}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RLA Tab Switcher (Visible ONLY on RLA Form directly below Total Pages / Page Range tabs) */}
          {form.id === 'rla' && (
            <div className="w-full flex bg-[#F5F5F7] p-1.5 rounded-2xl mb-10 border border-black/5 select-none shrink-0 font-sans">
              <button
                onClick={() => setRlaTab('overview')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'overview' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">Main RLA Page</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'overview' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Overview</span>
              </button>
              <button
                onClick={() => setRlaTab('deep-dive')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'deep-dive' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">RLA Deep Dive (A-K)</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'deep-dive' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Paragraph 2</span>
              </button>
              <button
                onClick={() => setRlaTab('paragraphs')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'paragraphs' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">RLA Paragraphs</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'paragraphs' ? 'text-zinc-500' : 'text-zinc-450'
                }`}>All 22 Paragraphs</span>
              </button>
            </div>
          )}

          {/* RPA Tab Switcher (Visible ONLY on RPA Form) */}
          {form.id === 'rpa' && (
            <div className="w-full flex bg-[#F5F5F7] p-1.5 rounded-2xl mb-10 border border-black/5 select-none shrink-0 font-sans">
              <button
                onClick={() => setRlaTab('overview')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'overview' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">Main RPA Page</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'overview' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Overview</span>
              </button>
              <button
                onClick={() => setRlaTab('deep-dive')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'deep-dive' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">RPA Deep Dive (A-R)</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'deep-dive' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Paragraph 3</span>
              </button>
              <button
                onClick={() => setRlaTab('paragraphs')}
                className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  rlaTab === 'paragraphs' 
                    ? 'bg-white text-black shadow-xs' 
                    : 'text-zinc-550 hover:text-black hover:bg-black/[0.02]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-tight">RPA Paragraphs</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  rlaTab === 'paragraphs' ? 'text-zinc-500' : 'text-zinc-450'
                }`}>All 33 Paragraphs</span>
              </button>
            </div>
          )}

          {(!hasTabs || rlaTab === 'overview') ? (
            <>
              <div className="flex items-center gap-2 text-zinc-400 font-medium mb-3 font-sans w-full animate-in fade-in duration-300">
                <FileText className="w-4 h-4" />
                <span className="tracking-widest uppercase text-[10px] font-bold">Form / {form.acronym}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] mb-5 font-display flex items-baseline gap-3 flex-wrap w-full animate-in fade-in duration-300">
                {form.title}
                <span className="text-2xl md:text-3xl font-bold text-black font-display">({form.acronym})</span>
              </h1>

              <p className="text-lg text-zinc-500 leading-relaxed font-semibold max-w-2xl animate-in fade-in duration-300">
                {form.summary}
              </p>
            </>
          ) : null}
        </div>

        {form.id === 'rla' && rlaTab === 'deep-dive' && (
          <RLADeepDive isEmbedded />
        )}

        {form.id === 'rla' && rlaTab === 'paragraphs' && (
          <RLAParagraphs isEmbedded />
        )}

        {form.id === 'rpa' && rlaTab === 'deep-dive' && (
          <RPADeepDive isEmbedded />
        )}

        {form.id === 'rpa' && rlaTab === 'paragraphs' && (
          <RPAParagraphs isEmbedded />
        )}

        {(!hasTabs || rlaTab === 'overview') && (
          <div className="grid gap-8 border-t border-black/5 pt-10 font-sans">
            {/* Why it Matters Card */}
            <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-10 border border-transparent transition-colors hover:border-black/5 animate-in fade-in duration-300">
              <div className="flex items-center mb-5">
                <h2 className="text-2xl font-semibold text-black font-display">Strategic Importance</h2>
              </div>
              <p className="text-zinc-650 leading-relaxed text-lg font-semibold">
                {form.importance}
              </p>
            </div>

            {/* Key Sections to Explain */}
            <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-10 border border-transparent transition-colors hover:border-black/5 animate-in fade-in duration-300">
              <div className="flex items-center mb-8">
                <h2 className="text-2xl font-semibold text-black font-display">Key Sections to Review</h2>
              </div>
              <div className="space-y-6">
                {form.keySections.map((section, idx) => (
                  <div key={idx} className="group border-t border-black/5 pt-6 first:border-0 first:pt-0">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 font-display">{section.title}</h3>
                      <p className="text-zinc-550 leading-relaxed text-base font-medium">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Card */}
            <div className="bg-black rounded-3xl p-8 md:p-10 text-white animate-in fade-in duration-400">
              <div className="flex items-center mb-5">
                <h2 className="text-xl font-semibold text-white tracking-tight font-display">Tip</h2>
              </div>
              <p className="text-zinc-300 leading-relaxed font-semibold md:text-lg">
                {form.proTip}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
