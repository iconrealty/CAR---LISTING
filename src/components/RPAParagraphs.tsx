import { ArrowLeft } from 'lucide-react';

interface RPAParagraphsProps {
  onBack?: () => void;
  isEmbedded?: boolean;
}

const paragraphs = [
  { id: 1, title: 'Offer', description: 'Governs the identity of the purchase offer, outlining buyer information, purchase price, and closing date.', formPage: '1-3', pkgPage: '3' },
  { id: 2, title: 'Agency', description: 'Confirms agency representation (Seller Agent, Buyer Agent, Dual Agency) and requires AD form delivery.', formPage: '1-3', pkgPage: '3' },
  { id: 3, title: 'Terms of Purchase & Allocations', description: 'The transactional engine organizing financing, credit limits, escrow periods, and cost allocations.', formPage: '1-3', pkgPage: '3' },
  { id: 4, title: 'Property Addenda & Advisories', description: 'Identifies any specialized addenda attached to the purchase offer (e.g. TOPA, manufactured home forms).', formPage: '4', pkgPage: '6' },
  { id: 5, title: 'Additional Terms Affecting Price', description: 'Dictates the deposit wire rules, remedies on EMD defaults, and interest rate ceilings on buyer loans.', formPage: '4', pkgPage: '6' },
  { id: 6, title: 'Additional Financing Terms', description: 'Mandates specific buyer timelines (usually 3 days) to deliver active written proofs of funds and preapproval letters.', formPage: '4', pkgPage: '6' },
  { id: 7, title: 'Closing and Possession', description: 'Sets possession delivery timing (usually 6:00 PM), "As-Is" physical status on closing, and key codes transfer rules.', formPage: '5', pkgPage: '7' },
  { id: 8, title: 'Contingencies & Removal', description: 'Governs standard buyer protections (loan, appraisal, inspections) and states removals must be delivered in writing.', formPage: '5', pkgPage: '7' },
  { id: 9, title: 'Included in & Excluded from Sale', description: 'Lists household items, fixtures, appliances, security systems, and smart home devices transferring in the deal.', formPage: '6', pkgPage: '8' },
  { id: 10, title: 'Allocation of Costs', description: 'Defines who pays for pest control treatments, NHD disclosures, general inspections, and home warranty coverages.', formPage: '7-8', pkgPage: '9-10' },
  { id: 11, title: 'Statutory & Supplemental Disclosures', description: 'Enforces seller\'s absolute duty to complete and deliver TDS, SPQ, NHD, and buyer\'s rights of visual inspections.', formPage: '7-8', pkgPage: '9-10' },
  { id: 12, title: 'Buyer\'s Investigation of Property', description: 'Details buyer\'s rights list to hire independent technicians for general, pest, geological, or water checks.', formPage: '9', pkgPage: '11' },
  { id: 13, title: 'Title and Vesting', description: 'Guarantees the buyer receives a deed of clean title, title insurance ALTA options, and GTO guidelines.', formPage: '10', pkgPage: '12' },
  { id: 14, title: 'Time Periods & Right to Cancel', description: 'Defines timelines (Notice to Perform, Demand to Close Escrow) and conditions for transaction cancellations.', formPage: '10', pkgPage: '12' },
  { id: 15, title: 'Repairs', description: 'Stipulates repairs must meet professional work standards, requiring seller to provide invoices and paid receipts.', formPage: '11', pkgPage: '13' },
  { id: 16, title: 'Final Verification of Condition', description: 'Sets buyer walkthrough bounds within 5 days of COE to verify property condition was successfully maintained.', formPage: '11', pkgPage: '13' },
  { id: 17, title: 'Prorations of Property Taxes', description: 'Allocates property taxes, HOA regular fees, municipal bonds, and utility costs proportionally up to the close of escrow.', formPage: '11', pkgPage: '13' },
  { id: 18, title: 'Brokers and Agents', description: 'Outlines standard commission structures, agent duties, non-party broker status, and limits of representation.', formPage: '12', pkgPage: '14' },
  { id: 19, title: 'Joint Escrow Instructions', description: 'Defines formal instructions, deposits, and duties directing the designated neutral escrow provider.', formPage: '12', pkgPage: '14' },
  { id: 20, title: 'Selection of Service Providers', description: 'Confirms buyers have total choice over specialized professionals and agents do not offer structural guarantees.', formPage: '13-14', pkgPage: '15' },
  { id: 21, title: 'Multiple Listing Service (MLS)', description: 'Authorizes reporting transaction details, closing timelines, and final prices to local MLS directories.', formPage: '13-14', pkgPage: '15' },
  { id: 22, title: 'Attorney Fees and Costs', description: 'Entitles the prevailing party in any contract, mediation, or title conflict of the transaction to full attorney costs.', formPage: '13-14', pkgPage: '15' },
  { id: 23, title: 'Assignment / Nomination', description: 'Restricts contract assignments to a buyer\'s wholly owned trust or LLC without pre-closing seller consent.', formPage: '13-14', pkgPage: '15' },
  { id: 24, title: 'Legally Authorized Signer', description: 'Requires delivering full proof of authority if a party is signing on behalf of a trust, probate, or corporation.', formPage: '13-14', pkgPage: '15' },
  { id: 25, title: 'Definitions and Instructions', description: 'Contains standard legal definitions of Acceptance, Agency, Close of Escrow, Count Days, and Day timelines.', formPage: '13-14', pkgPage: '15' },
  { id: 26, title: 'Equal Housing Opportunity', description: 'Enforces complete compliance with federal, state, and local anti-redlining and anti-discrimination boundaries.', formPage: '13-14', pkgPage: '15' },
  { id: 27, title: 'Terms and Conditions of Offer', description: 'Establishes offer terms, confirmation cycles, and clarifies that sellers retain authority to seek backup offers.', formPage: '13-14', pkgPage: '15' },
  { id: 28, title: 'Entire Contract & Changes', description: 'States the RPA document holds the absolute complete final understanding of both parties, invalidating early verbal offers.', formPage: '13-14', pkgPage: '15' },
  { id: 29, title: 'Liquidated Damages', description: 'Limits buyer default liability to standard good faith deposit ceilings up to 3% when signed by both parties.', formPage: '15', pkgPage: '17' },
  { id: 30, title: 'Mediation', description: 'Mandates active mediation participation before using binding arbitration or standard local court proceedings.', formPage: '15', pkgPage: '17' },
  { id: 31, title: 'Arbitration of Disputes', description: 'Neutral binding arbitration for claims and transaction conflicts that failed resolution in mediation.', formPage: '15', pkgPage: '17' },
  { id: 32, title: 'Offer Block', description: 'Contains offer expiration parameters, representative spaces, and buyer formal sign indicators.', formPage: '16-17', pkgPage: '18' },
  { id: 33, title: 'Acceptance Block', description: 'Details seller counters, brokerage representation, and holds seller\'s final binding execution signature.', formPage: '16-17', pkgPage: '18' }
];

const importantParagraphs = [1, 2, 3, 8, 11, 14, 29, 31, 33];

const pageGroups = [
  { pageNum: '1-3', name: 'Pages 1-3', packageText: 'Package Pages 3-5', colorKey: '1', paras: 'Paras 1-3' },
  { pageNum: '4', name: 'Page 4', packageText: 'Package Page 6', colorKey: '2', paras: 'Paras 4-6' },
  { pageNum: '5', name: 'Page 5', packageText: 'Package Page 7', colorKey: '3', paras: 'Paras 7-8' },
  { pageNum: '6', name: 'Page 6', packageText: 'Package Page 8', colorKey: '4', paras: 'Para 9' },
  { pageNum: '7-8', name: 'Pages 7-8', packageText: 'Package Pages 9-10', colorKey: '5', paras: 'Paras 10-11' },
  { pageNum: '9', name: 'Page 9', packageText: 'Package Page 11', colorKey: '6', paras: 'Para 12' },
  { pageNum: '10', name: 'Page 10', packageText: 'Package Page 12', colorKey: '1', paras: 'Paras 13-14' },
  { pageNum: '11', name: 'Page 11', packageText: 'Package Page 13', colorKey: '2', paras: 'Paras 14-17' },
  { pageNum: '12', name: 'Page 12', packageText: 'Package Page 14', colorKey: '3', paras: 'Paras 18-19' },
  { pageNum: '13-14', name: 'Pages 13-14', packageText: 'Package Pages 15-16', colorKey: '4', paras: 'Paras 20-28' },
  { pageNum: '15', name: 'Page 15', packageText: 'Package Page 17', colorKey: '5', paras: 'Paras 29-31' },
  { pageNum: '16-17', name: 'Pages 16-17', packageText: 'Package Pages 18-19', colorKey: '6', paras: 'Paras 32-33' }
];

const pageStyles: Record<string, {
  border: string;
  bg: string;
  headerBg: string;
  badge: string;
  badgeText: string;
  indicator: string;
  bulletBg: string;
  bulletText: string;
}> = {
  '1': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-blue-50/80 border-blue-200 text-blue-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
  '2': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-purple-50/80 border-purple-200 text-purple-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
  '3': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-amber-50/80 border-amber-200 text-amber-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
  '4': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-emerald-50/80 border-emerald-200 text-emerald-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
  '5': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-indigo-50/80 border-indigo-200 text-indigo-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
  '6': {
    border: 'border-zinc-200',
    bg: 'bg-zinc-50/20',
    headerBg: 'bg-zinc-100 border-b border-zinc-200/80',
    badge: 'bg-rose-50/80 border-rose-200 text-rose-800',
    badgeText: 'text-zinc-500',
    indicator: 'bg-zinc-500',
    bulletBg: 'bg-zinc-50 border-zinc-200/60',
    bulletText: 'text-zinc-700',
  },
};

export default function RPAParagraphs({ onBack, isEmbedded = false }: RPAParagraphsProps) {
  if (isEmbedded) {
    return (
      <div className="space-y-8 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-300 font-sans">
        {pageGroups.map((group) => {
          const style = pageStyles[group.colorKey];
          const groupParas = paragraphs.filter((p) => p.formPage === group.pageNum);

          return (
            <div 
              key={group.pageNum}
              className={`rounded-3xl border ${style.border} ${style.bg} overflow-hidden shadow-xs`}
            >
              {/* Clean Header for the Group */}
              <div className={`px-6 py-4 ${style.headerBg} flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap`}>
                <div className="flex items-center gap-3">
                  <span className={`text-sm sm:text-base font-black uppercase tracking-tight px-3 py-1 rounded-lg border ${style.badge}`}>
                    {group.name}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${style.badgeText}`}>
                    {group.paras}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-650 bg-white/80 px-3 py-1 rounded-lg border border-zinc-200/50 shadow-xs shrink-0">
                  {group.packageText}
                </span>
              </div>

              {/* Paragraph Items */}
              <div className="divide-y divide-black/5 bg-white">
                {groupParas.map((paragraph) => {
                  const isImportant = importantParagraphs.includes(paragraph.id);
                  return (
                    <div 
                      key={paragraph.id} 
                      className="p-6 md:p-8 hover:bg-[#F5F5F7]/20 transition-colors relative"
                    >
                      <div className="flex items-start gap-5">
                        {/* Rich neutral badge counter (Apple/Minimal style) */}
                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-display text-base font-bold shrink-0 ${
                          isImportant 
                            ? "bg-red-50 text-red-600 border-red-200" 
                            : "bg-[#F5F5F7] text-zinc-800 border-black/[0.04]"
                        }`}>
                          {paragraph.id}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-1.5 font-display flex items-baseline gap-2 flex-wrap">
                            <span className={isImportant ? "text-red-600 font-bold" : "text-black"}>
                              {paragraph.title}
                            </span>
                            {isImportant && (
                              <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                                Critical
                              </span>
                            )}
                          </h3>
                          <p className="leading-relaxed font-semibold text-sm sm:text-base text-zinc-500">
                            {paragraph.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors font-medium mb-8 text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </button>
        )}

        {/* Minimal Header */}
        <div className="mb-12 relative flex flex-col items-start pt-4 font-sans">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] font-display flex items-baseline gap-3 flex-wrap">
            RPA Paragraphs
            <span className="text-2xl md:text-3xl font-bold text-zinc-400 font-sans leading-none">(1-33)</span>
          </h1>
        </div>

        {/* Structured Groups of Paragraphs by Page */}
        <div className="space-y-8 font-sans">
          {pageGroups.map((group) => {
            const style = pageStyles[group.colorKey];
            const groupParas = paragraphs.filter((p) => p.formPage === group.pageNum);

            return (
              <div 
                key={group.pageNum}
                className={`rounded-2xl border ${style.border} ${style.bg} overflow-hidden shadow-2xs`}
              >
                {/* Clean Header for the Group */}
                <div className={`px-6 py-4 ${style.headerBg} flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap`}>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm sm:text-base font-black uppercase tracking-tight px-3 py-1 rounded-lg border ${style.badge}`}>
                      {group.name}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${style.badgeText}`}>
                      {group.paras}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 bg-white/80 px-3 py-1 rounded-lg border border-zinc-200/50 shadow-xs shrink-0">
                    {group.packageText}
                  </span>
                </div>

                {/* Paragraph Items */}
                <div className="divide-y divide-black/5 bg-white">
                  {groupParas.map((paragraph) => {
                    const isImportant = importantParagraphs.includes(paragraph.id);
                    return (
                      <div 
                        key={paragraph.id} 
                        className="p-6 md:p-8 hover:bg-[#F5F5F7]/20 transition-colors relative"
                      >
                        <div className="flex items-start gap-5">
                          {/* Rich neutral badge counter (Apple/Minimal style) */}
                          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-display text-base font-bold shrink-0 ${
                            isImportant 
                              ? "bg-red-50 text-red-600 border-red-200" 
                              : "bg-[#F5F5F7] text-zinc-800 border-black/[0.04]"
                          }`}>
                            {paragraph.id}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold mb-1.5 font-display flex items-baseline gap-2 flex-wrap">
                              <span className={isImportant ? "text-red-600 font-bold" : "text-black"}>
                                {paragraph.title}
                              </span>
                              {isImportant && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                                  Critical
                                </span>
                              )}
                            </h3>
                            <p className="leading-relaxed font-semibold text-sm sm:text-base text-zinc-500">
                              {paragraph.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
