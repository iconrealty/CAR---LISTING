import { ArrowLeft, FileText } from 'lucide-react';

interface RPADeepDiveProps {
  onBack?: () => void;
  isEmbedded?: boolean;
}

const rpaRows = [
  { 
    id: 'A', 
    title: 'Purchase Price', 
    content: 'The total proposed purchase price for the property being bought.',
  },
  { 
    id: 'B', 
    title: 'Close Of Escrow (COE)', 
    content: 'Determines when ownership officially transfers and the sale is complete.',
  },
  { 
    id: 'C', 
    title: 'Expiration of Offer', 
    content: 'Specifies when the purchase offer automatically expires if not signed by the seller.',
  },
  { 
    id: 'D', 
    title: 'Deposits', 
    content: 'Earnest Money Deposit and additional deposits showing buyer commitment',
    subRows: [
      { id: '1', title: 'Initial Deposit', description: 'Earnest Money Deposit (EMD) typically wired to escrow within 3 business days of acceptance.' },
      { id: '2', title: 'Increased Deposit', description: 'Details rules and addendums used if the buyer increases their deposit later in escrow.' }
    ]
  },
  { 
    id: 'E', 
    title: 'Financing & Occupancy', 
    content: 'Covers the buyer\'s loan details, additional financing structures, and occupancy intentions.',
    subRows: [
      { id: '1', title: 'Loan Amount', description: 'Details the primary financing loan amount, interest rate ceilings, and option of conventional, FHA, VA, or other programs.' },
      { id: '2', title: 'Additional Financed Amount', description: 'Financing details for a second loan or other financed methods to cover the purchase price.' },
      { id: '3', title: 'Occupancy Type', description: 'Identifies whether the buyer intends to occupy the property as a primary residence, secondary home, or investment property to meet standard lender guidelines.' }
    ]
  },
  { 
    id: 'F', 
    title: 'Balance of Down Payment', 
    content: 'The remaining cash required from the buyer to complete closing, excluding EMD and loans.'
  },
  { 
    id: 'G', 
    title: 'Seller Payment to Cover Buyer Expenses', 
    content: 'Details any front-end credits back to the buyer to help cover transaction fees.',
    subRows: [
      { id: '1', title: 'Seller Credit to Buyer', description: 'Specific maximum dollar credit agreed upon to cover buyer\'s closing costs.' },
      { id: '2', title: 'Additional Seller Credits', description: 'Note that this credit is in addition to G.1.' },
      { id: '3', title: 'Seller Payment to Pay Buyer\'s Broker', description: 'This is the section where we ask the seller to pay for our broker compensation. Note that a BRBC is Required and MUST be signed by the buyer before presenting the offer.' }
    ]
  },
  { 
    id: 'H', 
    title: 'Verification of Funds & Financing', 
    content: 'Timeline for delivering proof of purchasing capability (usually 3 days).',
    subRows: [
      { id: '1', title: 'Verification of Cash', description: 'Buyer must provide proof of sufficient liquid cash funds for the purchase.' },
      { id: '2', title: 'Verification of Down payment and Closing cost', description: 'Proof of funds covering the designated down payment amount and estimated closing costs.' },
      { id: '3', title: 'Verification of Loan', description: 'Prequalification or preapproval letter from a lender.' }
    ]
  },
  { 
    id: 'J', 
    title: 'Final Verification of Condition', 
    content: 'The formal physical walkthrough conducted prior to closing. Must be completed within 5 days prior to Close of Escrow to verify condition is maintained.'
  },
  { 
    id: 'K', 
    title: 'Assignment Request', 
    content: 'Defines the buyer\'s rights to assign the purchase contract. Buyer has 17 days to request assigning the transaction to an entity (e.g., trust or LLC).',
  },
  { 
    id: 'L', 
    title: 'Contingencies & Timelines', 
    content: 'Conditions that must be active or removed in writing to safeguard EMD.',
    subRows: [
      { id: '1', title: 'Loan Contingency', description: 'Standard 17 days after acceptance to obtain loan approval.' },
      { id: '2', title: 'Appraisal Contingency', description: 'Standard 17 days to verify property value is at or above the sale price.' },
      { id: '3', title: 'Investigation of Property', description: 'Standard 17 days to perform general physical, environmental, and neighborhood due diligence.' },
      { id: '4', title: 'Insurance', description: 'Standard 17 days to secure property or homeowner insurance availability.' },
      { id: '5', title: 'Review of Seller Documents', description: 'Standard 17 days to inspect disclosures (TDS, NHD) and approve.' },
      { id: '6', title: 'Preliminary Title Report', description: 'Standard 17 days to review public title records and easements.' },
      { id: '7', title: 'Common Interest Disclosures', description: 'Standard 17 days to review HOA documents and disclosures if applicable.' },
      { id: '8', title: 'Review of Lease or Liened Items', description: 'Standard 17 days to check contracts for solar panels, alarm systems, or other leased/liened items.' },
      { id: '9', title: 'Sale of Buyer\'s Property', description: 'A contingency requiring the sale of the buyer\'s own property. A COP form is necessary.' }
    ]
  },
  { 
    id: 'M', 
    title: 'Possession Timing', 
    content: 'Defines exact rules and dates when keys are handed over.',
    subRows: [
      { id: '1', title: 'Time of Possession', description: 'Default key handover is 6:00 PM on the Close of Escrow date.' },
      { id: '2', title: 'Seller Occupied Units', description: 'Sets compliance rules if the seller remains in possession (using form SIP or RLAS).' },
      { id: '3', title: 'Tenant Occupied Units', description: 'Occupied Units by tenants. TOPA is necessary.' }
    ]
  },
  { 
    id: 'N', 
    title: 'Documents, Fees, & Compliance', 
    content: 'Deadlines for ordering documents and sending disclosures.',
    subRows: [
      { id: '1', title: 'Seller Document Delivery', days: '7 Days', description: 'Seller has 7 days after acceptance to provide all statutory disclosures.' },
      { id: '2', title: 'Sign and Return Escrow Instructions', days: '5 Days', description: 'Timeline of 5 days after receipt to sign and return escrow instructions.' },
      { id: '3', title: 'Time to Pay Fee for Ordering HOA Docs', days: '3 Days', description: 'Timeline of 3 days after acceptance to pay the necessary fee for ordering mandatory HOA documentation.' },
      { id: '4', title: 'Time to Install Smoke Alarms and CO Detectors', days: '7 Days', description: 'Timeline of 7 days after acceptance for the seller to install functional smoke alarms, carbon monoxide detectors, and brace water heaters.' },
      { id: '5', title: 'Evidence of Representative Authority', days: '3 Days', description: 'Required proof and documentation to be delivered within 3 days after acceptance for any party signing on behalf of a trust, LLC, or other entity.' }
    ]
  },
  { 
    id: 'P', 
    title: 'Items Included & Excluded', 
    content: 'Explicit list of personal items transferring with the property.',
    subRows: [
      { id: '1', title: 'Household Appliances', description: 'Checks for stove, refrigerator, washer, dryer, and video doorbells.' },
      { id: '2', title: 'Bathroom Mirrors', description: 'Stated to be included unless explicitly excluded in the agreement.' }
    ]
  },
  { 
    id: 'Q', 
    title: 'Allocation of Costs', 
    content: 'Details which party pays for standard real estate closing fees.',
    subRows: [
      { id: '1', title: 'Natural Hazard Zones (NHD)', description: 'Buyer or seller pays for the environmental report (e.g. MyNHD).' },
      { id: '2', title: 'Escrow & Title Fees', description: 'Specifies who pays for title insurance policies (CLTA/ALTA) and escrow services.' },
      { id: '3', title: 'Municipality Taxes', description: 'Delineates County & City purchase transfer taxes payment.' },
      { id: '4', title: 'Home Warranty Plan', description: 'Who pays for warranty coverage, selecting provider and maximum price seller covers.' }
    ]
  },
  { 
    id: 'R', 
    title: 'Other Terms', 
    content: 'Custom blank space for any bespoke negotiated terms or conditions.'
  }
];

export default function RPADeepDive({ onBack, isEmbedded = false }: RPADeepDiveProps) {
  if (isEmbedded) {
    return (
      <div className="space-y-6 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-300 font-sans">
        <div className="border-b border-black/10 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-black font-display tracking-tight">Paragraph 3</h2>
        </div>
        {rpaRows.map((row) => (
          <div key={row.id} className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 hover:border-black/10 transition-colors shadow-xs">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white w-14 h-12 rounded-xl flex items-center justify-center font-display text-lg font-bold shrink-0">
                {row.id}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-black font-display mb-2">{row.title}</h3>
                {row.content && <p className="text-zinc-600 leading-relaxed font-semibold mb-4 text-sm md:text-base">{row.content}</p>}
                
                {row.subRows && row.subRows.length > 0 && (
                  <div className="space-y-3 mt-4 pt-4 border-t border-black/5">
                    {row.subRows.map((subRowObj) => {
                      const subRow = subRowObj as { id: string; title: string; description: string; days?: string };
                      return (
                        <div key={subRow.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start text-sm">
                          <span className="bg-[#F5F5F7] px-2 py-1 rounded text-xs font-bold text-zinc-650 shrink-0 self-start">
                            {row.id}.{subRow.id}
                          </span>
                          <div>
                            <span className="font-bold text-zinc-800 block sm:inline">{subRow.title}</span>
                            {subRow.days && <span className="font-bold text-black ml-1 block sm:inline">({subRow.days})</span>}
                            <span className="text-zinc-500 sm:ml-2 block sm:inline font-medium">{subRow.description}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
        {onBack && (
          <button 
            onClick={onBack}
            className="md:hidden flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors font-medium mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </button>
        )}

        <div className="mb-12 relative flex flex-col items-start pt-4 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 w-full">
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">RPA Contract</h3>
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-black font-display mt-auto">33 <span className="text-lg text-zinc-400 font-medium ml-1">Paragraphs</span></div>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Paragraph 3</h3>
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-black font-display mt-auto">21 <span className="text-lg text-zinc-400 font-medium ml-1">Rows</span></div>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-black font-display mt-auto">17 <span className="text-lg text-zinc-400 font-medium ml-1">Pages</span></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] mb-5 font-display flex items-baseline gap-3 flex-wrap">
            RPA Deep Dive
            <span className="text-2xl md:text-3xl font-bold text-black">(A-R)</span>
          </h1>
        </div>

        <div className="space-y-6">
          <div className="border-b border-black/10 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-black font-display tracking-tight">Paragraph 3</h2>
          </div>
          {rpaRows.map((row) => (
            <div key={row.id} className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 hover:border-black/10 transition-colors shadow-sm">
              <div className="flex items-start gap-5">
                <div className="bg-black text-white w-14 h-12 rounded-xl flex items-center justify-center font-display text-lg font-bold shrink-0">
                  {row.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black font-display mb-2">{row.title}</h3>
                  {row.content && <p className="text-zinc-600 leading-relaxed font-medium mb-4 text-sm md:text-base">{row.content}</p>}
                  
                  {row.subRows && row.subRows.length > 0 && (
                    <div className="space-y-3 mt-4 pt-4 border-t border-black/5">
                      {row.subRows.map((subRowObj) => {
                        const subRow = subRowObj as { id: string; title: string; description: string; days?: string };
                        return (
                          <div key={subRow.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start text-sm">
                            <span className="bg-[#F5F5F7] px-2 py-1 rounded text-xs font-bold text-zinc-600 shrink-0 self-start">
                              {row.id}.{subRow.id}
                            </span>
                            <div>
                              <span className="font-semibold text-black block sm:inline">{subRow.title}</span>
                              {subRow.days && <span className="font-bold text-black ml-1 block sm:inline">({subRow.days})</span>}
                              <span className="text-zinc-500 sm:ml-2 block sm:inline">{subRow.description}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
