import { useState } from 'react';
import { formsData, offerFormsData } from './data';
import Sidebar from './components/Sidebar';
import FormDetails from './components/FormDetails';
import Dashboard from './components/Dashboard';

export default function App() {
  const [activePackage, setActivePackage] = useState<'listing' | 'offer'>('listing');
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
    setShowDetailOnMobile(false);
  };

  return (
    <div className="h-screen bg-white flex flex-col font-sans overflow-hidden text-black selection:bg-zinc-200">
      {/* Sleek Minimal Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-black/5 z-30 shrink-0 relative flex items-center h-14">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-black">
            <h1 className="text-sm font-semibold tracking-tight font-sans">Icon Realty</h1>
          </div>

          <div className="text-xs font-semibold text-zinc-500 hidden sm:block tracking-wide uppercase">
            {activePackage === 'listing' ? 'C.A.R. Listing Package' : 'C.A.R. Offer Package'}
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
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
    </div>
  );
}
