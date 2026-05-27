import { ArrowLeft } from 'lucide-react';

interface RLAParagraphsProps {
  onBack?: () => void;
}

const paragraphs = [
  { id: 1, title: 'Exclusive Right to Sell', description: 'Grants the broker the exclusive right to sell the property during the listing period.' },
  { id: 2, title: 'Listing Price and Terms', description: 'Specifies the listing price and accepted terms of sale.' },
  { id: 3, title: 'Advisories and Addenda', description: 'Identifies which advisories and addenda are part of the agreement.' },
  { id: 4, title: 'Compensation to Broker', description: 'Details the commission rate or flat fee payable to the listing broker, noting that compensation is not fixed by law.' },
  { id: 5, title: 'Items Included and Excluded', description: 'Specifies which fixtures and personal property are included or excluded from the sale.' },
  { id: 6, title: 'Seller Representations', description: 'Seller confirms they have the legal right to sell and notes any existing notices of default.' },
  { id: 7, title: 'Broker\'s and Seller\'s Duties', description: 'Outlines what the broker will do to market the property and what the seller agrees to do to help.' },
  { id: 8, title: 'Deposit', description: 'Authorizes the broker to accept and hold deposits on the seller\'s behalf.' },
  { id: 9, title: 'Agency Relationships', description: 'Explains the potential for dual agency and requires the appropriate disclosure forms.' },
  { id: 10, title: 'Seller Concessions', description: 'Specifies any seller concessions or credits to the buyer.' },
  { id: 11, title: 'Security, Insurance, Showings, Audio and Video', description: 'Advises the seller to take precautions regarding valuables, insurance, and outlines rules for showings and video/audio recording.' },
  { id: 12, title: 'Photographs and Internet Advertising', description: 'Authorizes the broker to use photos and market the property online.' },
  { id: 13, title: 'Keysafe / Lockbox', description: 'Authorizes the use of a lockbox for property access by agents.' },
  { id: 14, title: 'Sign', description: 'Authorizes the placement of a "For Sale" sign on the property.' },
  { id: 15, title: 'Equal Housing Opportunity', description: 'Confirms the property is offered in compliance with federal, state, and local anti-discrimination laws.' },
  { id: 16, title: 'Attorney Fees', description: 'States that the prevailing party in a legal dispute is entitled to reasonable attorney fees.' },
  { id: 17, title: 'Management Approval', description: 'Notes if the agreement is subject to broker or manager approval.' },
  { id: 18, title: 'Successors and Assigns', description: 'Makes the agreement binding on the seller\'s heirs and successors.' },
  { id: 19, title: 'Dispute Resolution', description: 'Requires mediation before arbitration or litigation.' },
  { id: 20, title: 'Entire Agreement', description: 'States that this document contains the entire agreement between the parties.' },
  { id: 21, title: 'Ownership, Title and Authority', description: 'Seller warrants they are the sole owner or have authority to execute the agreement.' },
  { id: 22, title: 'Representative Capacity', description: 'Requires additional documentation if the seller is signing in a representative capacity (e.g., trust, corporation).' },
];

const importantParagraphs = [1, 2, 4, 6, 19];

export default function RLAParagraphs({ onBack }: RLAParagraphsProps) {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] font-display flex items-baseline gap-3 flex-wrap">
            RLA Paragraphs
            <span className="text-2xl md:text-3xl font-bold text-black">(1-22)</span>
          </h1>
        </div>

        <div className="space-y-4 shadow-sm bg-white rounded-2xl border border-black/5 divide-y divide-black/5">
          {paragraphs.map((paragraph) => {
            const isImportant = importantParagraphs.includes(paragraph.id);
            return (
            <div key={paragraph.id} className="p-6 md:p-8 hover:bg-[#F5F5F7]/30 transition-colors">
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-xl font-bold shrink-0 ${
                  isImportant ? 'bg-red-100 text-red-600' : 'bg-[#F5F5F7] text-zinc-600'
                }`}>
                  {paragraph.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2 font-display">
                    {paragraph.title}
                    {isImportant && <span className="ml-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2.5 py-1 rounded-md align-middle">Critical</span>}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-medium text-base">{paragraph.description}</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
