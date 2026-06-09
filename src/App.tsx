import { useState } from 'react';
import { formsData, offerFormsData } from './data';
import Sidebar from './components/Sidebar';
import FormDetails from './components/FormDetails';
import Dashboard from './components/Dashboard';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [activePackage, setActivePackage] = useState<'listing' | 'offer' | null>(null);
  const [selectedFormId, setSelectedFormId] = useState('overview');
  const [showDetailOnMobile, setShowDetailOnMobile] = useState(false);

  const forms = activePackage === 'listing' ? formsData : offerFormsData;
  const selectedForm = forms.find((f) => f.id === selectedFormId);

  const handleSelect = (id: string) => {
    setSelectedFormId(id);
    setShowDetailOnMobile(true);
  };

  const handleBack = () => {
    setSelectedFormId('overview');
    setShowDetailOnMobile(false);
  };

  const handleSwitchPackage = (pkg: 'listing' | 'offer') => {
    setActivePackage(pkg);
    setSelectedFormId('overview');
    setShowDetailOnMobile(true);
  };

  return (
    <div className="h-screen bg-white flex flex-col font-sans overflow-hidden text-black selection:bg-zinc-200">
      {/* Sleek Minimal Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-black/5 z-30 shrink-0 relative flex items-center h-14">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              id="header-main-brand-logo"
              onClick={() => {
                if (activePackage) {
                  setSelectedFormId('overview');
                  setShowDetailOnMobile(false);
                } else {
                  setActivePackage(null);
                  setSelectedFormId('overview');
                }
              }}
              className="flex items-center gap-2 text-black font-semibold tracking-tight font-sans text-sm hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-mono font-bold">ICON</span>
              <span>Realty</span>
            </button>
            {activePackage && (
              <button 
                id="header-change-package-btn"
                onClick={() => {
                  setActivePackage(null);
                  setSelectedFormId('overview');
                  setShowDetailOnMobile(false);
                }}
                className="text-xs font-bold text-zinc-650 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer bg-black/5 hover:bg-black/10 px-3 py-1.5 rounded-lg border border-black/5"
              >
                ← Change Package
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-zinc-500 hidden sm:block tracking-wide uppercase">
            {activePackage ? (
              <button
                id="header-active-package-btn"
                onClick={() => {
                  setSelectedFormId('overview');
                  setShowDetailOnMobile(false);
                }}
                className="hover:text-black transition-colors font-semibold uppercase tracking-wide cursor-pointer text-xs"
              >
                {activePackage === 'listing' ? 'Listing Package' : 'Offer Package'}
              </button>
            ) : (
              'Instructional Platform'
            )}
          </div>
        </div>
      </header>

      {/* Main Content Render */}
      {activePackage === null ? (
        <div className="flex-1 overflow-y-auto bg-[#F5F5F7] py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:justify-center justify-start items-center">
          <div className="max-w-4xl w-full text-center mb-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-1.1 mb-4 font-display">
              Contract Masterclass
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {/* Listing Package Card */}
            <div 
              id="home-listing-package-card"
              onClick={() => handleSwitchPackage('listing')}
              className="bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 transition-all duration-300 hover:shadow-lg cursor-pointer group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-zinc-50 rounded-full blur-2xl pointer-events-none translate-x-8 -translate-y-8 group-hover:bg-zinc-100 transition-colors"></div>
              
              <h2 className="text-2xl font-bold font-display text-black mb-3 z-10 flex items-center gap-2">
                Listing Package
                <span className="text-[10px] font-bold text-white font-sans bg-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Seller
                </span>
              </h2>
              
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6 flex-1 z-10">
                This deep dive explains the key parts of the listing package, what each form means, key obligations, potential risks, and how to explain it clearly to clients.
              </p>

              <div className="border-t border-black/5 pt-5 mb-6 grid grid-cols-2 gap-4 z-10">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Core Forms</span>
                  <span className="text-lg font-bold text-black">8 Forms</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Total Pages</span>
                  <span className="text-lg font-bold text-black">21 Pages</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:translate-x-1 transition-transform z-10">
                Explore Listing Package
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </div>

            {/* Offer Package Card */}
            <div 
              id="home-offer-package-card"
              onClick={() => handleSwitchPackage('offer')}
              className="bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 transition-all duration-300 hover:shadow-lg cursor-pointer group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-zinc-50 rounded-full blur-2xl pointer-events-none translate-x-8 -translate-y-8 group-hover:bg-zinc-100 transition-colors"></div>

              <h2 className="text-2xl font-bold font-display text-black mb-3 z-10 flex items-center gap-2">
                Offer Package
                <span className="text-[10px] font-bold text-white font-sans bg-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Buyer
                </span>
              </h2>

              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6 flex-1 z-10">
                This deep dive explains the key parts of the offer package, what each form means, key obligations, potential risks, and how to explain it clearly to clients.
              </p>

              <div className="border-t border-black/5 pt-5 mb-6 grid grid-cols-2 gap-4 z-10">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Core Forms</span>
                  <span className="text-lg font-bold text-black">9 Forms</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Total Pages</span>
                  <span className="text-lg font-bold text-black">29 Pages</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:translate-x-1 transition-transform z-10">
                Explore Offer Package
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-xs text-zinc-400 font-medium tracking-wide uppercase">
            Icon Realty Training & Compliance Portal
          </div>
        </div>
      ) : (
        /* Main Layout Area */
        <div className="flex-1 flex overflow-hidden w-full relative">
          {/* Sidebar Navigation */}
          <div 
            className={`w-full md:w-[300px] lg:w-[340px] flex-shrink-0 border-r border-[#E5E5E7] bg-[#F5F5F7] absolute md:relative inset-y-0 left-0 z-20 transition-transform duration-300 transform ${
              showDetailOnMobile ? '-translate-x-full md:translate-x-0' : 'translate-x-0'
            }`}
          >
            <Sidebar 
              forms={forms} 
              selectedFormId={selectedFormId} 
              onSelect={handleSelect} 
              activePackage={activePackage}
              onSwitchPackage={handleSwitchPackage}
              onGoHome={() => {
                setActivePackage(null);
                setSelectedFormId('overview');
              }}
            />
          </div>

          {/* Content Area */}
          <main 
            className={`flex-1 overflow-hidden bg-white absolute md:relative inset-y-0 left-0 md:left-auto w-full md:w-auto z-30 md:z-10 transition-transform duration-300 transform md:translate-x-0 ${
              showDetailOnMobile ? 'translate-x-0' : 'translate-x-[100%] md:translate-x-0'
            }`}
          >
            {selectedFormId === 'overview' ? (
              <Dashboard 
                onBack={handleBack} 
                onSelectForm={handleSelect} 
                activePackage={activePackage}
                onSwitchPackage={handleSwitchPackage}
              />
            ) : (
              selectedForm && (
                <FormDetails 
                  form={selectedForm} 
                  onBack={handleBack} 
                  activePackage={activePackage} 
                />
              )
            )}
          </main>
        </div>
      )}
    </div>
  );
}
