import { ArrowLeft, FileText } from 'lucide-react';

interface RLADeepDiveProps {
  onBack?: () => void;
  isEmbedded?: boolean;
}

const rlaRows = [
  { 
    id: 'A', 
    title: 'Representation, Listing Period, and Price', 
    content: 'Determines the timeframe and price of the listing representation.',
    subRows: [
      { id: '1', title: 'Listing Period', description: 'The start and end dates of the exclusive listing agreement.' },
      { id: '2', title: 'Listing Price', description: 'The agreed upon asking price for the property.' },
    ]
  },
  { 
    id: 'B', 
    title: 'Property Type', 
    content: 'Specifies the asset class and type of property being listed.',
    subRows: [
      { id: '1', title: 'Standard / Mobile / Manufactured', description: 'Checkboxes to identify whether the property is a standard home, mobile home, or manufactured home. MHLA Required' },
      { id: '2', title: 'Probate / Trust / Conservatorship', description: 'Identifies if the sale is subject to specialized legal procedures or court confirmation. PLA required' },
    ]
  },
  { 
    id: 'C', 
    title: 'Compensation', 
    content: 'Outlines the total compensation structure for the listing broker.',
    subRows: [
      { id: '1', title: 'Compensation to Seller\'s Broker', description: 'The total percentage or flat fee paid by the seller to the listing broker.' },
      { id: '2', title: 'Additional Compensation if Unrepresented Buyer', description: 'Agreed upon adjustments if the buyer is unrepresented.' },
      { id: '3', title: 'Continuation of Right to Compensation', description: 'Protects the broker\'s commission for a certain period after the agreement ends for buyers introduced during the listing.' },
      { id: '4', title: 'Seller Obligation to Previous Brokers', description: 'Identifies if the seller still owes compensation obligations to a previous listing broker.' },
      { id: '5', title: 'Broker is Paying a Referral Fee', description: 'Discloses if the broker will be paying a referral fee out of their own compensation.' }
    ]
  },
  { 
    id: 'D', 
    title: 'Items Included and Excluded', 
    content: 'Details which fixtures and personal property are included or excluded from the sale.',
    subRows: [
      { id: '1', title: 'Items Included', description: 'Specific personal property (e.g., appliances) that will transfer to the buyer.' },
      { id: '2', title: 'Items Excluded', description: 'Fixtures that the seller intends to remove before the close of escrow.' },
      { id: '3', title: 'Lease Items', description: 'Items on the property that are leased rather than owned (e.g., solar panels).' },
      { id: '4', title: 'Liened Items', description: 'Items on the property that have a lien attached to them.' },
      { id: '5', title: 'Smart Home Items Included / Excluded', description: 'Specific smart home devices and their operational status remaining with or leaving the property.' }
    ]
  },
  { 
    id: 'E', 
    title: 'MLS & Marketing', 
    content: 'Authorizations regarding the Multiple Listing Service (MLS) and marketing strategies.',
    subRows: [
      { id: '1', title: 'MLS to be Marketed', description: 'Specifies which MLS systems the property will be listed on.' },
      { id: '2', title: 'Seller Concessions', description: 'Indicates any concessions or credits the seller is offering upfront.' },
      { id: '3', title: 'Restriction on Photographs Only MLS', description: 'Instructions on whether photographs are permitted elsewhere besides the MLS.' }
    ]
  },
  { 
    id: 'F', 
    title: 'Broker\'s and Seller\'s Duties', 
    content: 'Defines the responsibilities of both parties during the listing period.',
    subRows: [
      { id: '1', title: 'Presentation of Offers', description: 'How and when offers will be presented to the seller.' },
      { id: '2', title: 'Buyers Letters', description: 'Seller\'s preference or policy regarding receiving personal letters from prospective buyers.' },
      { id: '3', title: 'Investigation Reports', description: 'Handling and disclosure of prior investigation reports given to or obtained by the seller.' }
    ]
  },
  { 
    id: 'G', 
    title: 'Exceptions to Ownership', 
    content: 'Exceptions to Ownership is where the seller discloses if someone other than the seller has rights, claims, or interests in the property that could affect the sale.',
  },
  { 
    id: 'H', 
    title: 'Seller Contingency on Replacement Property', 
    content: 'Conditions related to the seller finding a replacement property (Using form SPRP).',
    subRows: [
      { id: '1', title: 'SPRP Addendum', description: 'Indicates the sale is contingent on the seller purchasing a new home, and this form will be presented with the offer.' },
    ]
  },
  { 
    id: 'J', 
    title: 'Seller Opt Outs', 
    content: 'Specific marketing or showing options the seller chooses to explicitly opt out of.',
    subRows: [
      { id: '1', title: 'Signage Opt Out', description: 'Seller elects not to have a "For Sale" sign placed on the property.' },
      { id: '2', title: 'Lockbox Opt Out', description: 'Seller elects not to allow a broker lockbox for agent access.' },
    ]
  },
  { 
    id: 'K', 
    title: 'Additional Terms', 
    content: 'Blank space for any custom-typed or handwritten addendums to this listing agreement.',
  },
];

export default function RLADeepDive({ onBack, isEmbedded = false }: RLADeepDiveProps) {
  if (isEmbedded) {
    return (
      <div className="space-y-6 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
        {rlaRows.map((row) => (
          <div key={row.id} className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 hover:border-black/10 transition-colors shadow-xs">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center font-display text-2xl font-bold shrink-0">
                {row.id}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-black font-display mb-2">{row.title}</h3>
                {row.content && <p className="text-zinc-600 leading-relaxed font-semibold mb-4">{row.content}</p>}
                
                {row.subRows && row.subRows.length > 0 && (
                  <div className="space-y-3 mt-4 pt-4 border-t border-black/5">
                    {row.subRows.map((subRow) => (
                      <div key={subRow.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start">
                        {row.id !== 'J' && row.id !== 'H' && row.id !== 'B' && (
                          <span className="bg-[#F5F5F7] px-2 py-1 rounded text-xs font-bold text-zinc-600 shrink-0 self-start">
                            {row.id}.{subRow.id}
                          </span>
                        )}
                        <div>
                          <span className="font-bold text-zinc-800 text-sm block sm:inline">{subRow.title}</span>
                          <span className="text-zinc-500 text-sm sm:ml-2 block sm:inline font-medium">{subRow.description}</span>
                        </div>
                      </div>
                    ))}
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

        <div className="mb-12 relative flex flex-col items-start pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 w-full">
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">RLA</h3>
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">22 <span className="text-xl md:text-2xl text-zinc-400 font-medium ml-1">Paragraphs</span></div>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Paragraph 2</h3>
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">11 <span className="text-xl md:text-2xl text-zinc-400 font-medium ml-1">Rows</span></div>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-transparent transition-colors hover:border-black/5 flex flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans">Total Pages</h3>
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-black font-display mt-auto">7 <span className="text-xl md:text-2xl text-zinc-400 font-medium ml-1">Pages</span></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] mb-5 font-display flex items-baseline gap-3 flex-wrap">
            RLA Deep Dive
            <span className="text-2xl md:text-3xl font-bold text-black">(A-K)</span>
          </h1>
        </div>

        <div className="space-y-6">
          {rlaRows.map((row) => (
            <div key={row.id} className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 hover:border-black/10 transition-colors shadow-sm">
              <div className="flex items-start gap-5">
                <div className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center font-display text-2xl font-bold shrink-0">
                  {row.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black font-display mb-2">{row.title}</h3>
                  {row.content && <p className="text-zinc-600 leading-relaxed font-medium mb-4">{row.content}</p>}
                  
                  {row.subRows && row.subRows.length > 0 && (
                    <div className="space-y-3 mt-4 pt-4 border-t border-black/5">
                      {row.subRows.map((subRow) => (
                        <div key={subRow.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start">
                          {row.id !== 'J' && row.id !== 'H' && row.id !== 'B' && (
                            <span className="bg-[#F5F5F7] px-2 py-1 rounded text-xs font-bold text-zinc-600 shrink-0 self-start">
                              {row.id}.{subRow.id}
                            </span>
                          )}
                          <div>
                            <span className="font-semibold text-black text-sm block sm:inline">{subRow.title}</span>
                            <span className="text-zinc-500 text-sm sm:ml-2 block sm:inline">{subRow.description}</span>
                          </div>
                        </div>
                      ))}
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
