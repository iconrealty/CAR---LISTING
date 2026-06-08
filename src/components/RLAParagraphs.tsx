import { ArrowLeft } from 'lucide-react';

interface RLAParagraphsProps {
  onBack?: () => void;
  isEmbedded?: boolean;
}

const paragraphs = [
  { id: 1, title: 'Exclusive Right to Sell', description: 'Grants the broker the exclusive right to sell the property during the listing period.', formPage: '1', pkgPage: '3' },
  { id: 2, title: 'Listing Price and Terms', description: 'Specifies the listing price and accepted terms of sale.', formPage: '1', pkgPage: '3' },
  { id: 3, title: 'Advisories and Addenda', description: 'Identifies which advisories and addenda are part of the agreement.', formPage: '2', pkgPage: '4' },
  { id: 4, title: 'Compensation to Broker', description: 'Details the commission rate or flat fee payable to the listing broker, noting that compensation is not fixed by law.', formPage: '2', pkgPage: '4' },
  { id: 5, title: 'Items Included and Excluded', description: 'Specifies which fixtures and personal property are included or excluded from the sale.', formPage: '3', pkgPage: '5' },
  { id: 6, title: 'Seller Representations', description: 'Seller confirms they have the legal right to sell and notes any existing notices of default.', formPage: '3', pkgPage: '5' },
  { id: 7, title: 'Broker\'s and Seller\'s Duties', description: 'Outlines what the broker will do to market the property and what the seller agrees to do to help.', formPage: '3', pkgPage: '5' },
  { id: 8, title: 'Deposit', description: 'Authorizes the broker to accept and hold deposits on the seller\'s behalf.', formPage: '4', pkgPage: '6' },
  { id: 9, title: 'Agency Relationships', description: 'Explains the potential for dual agency and requires the appropriate disclosure forms.', formPage: '4', pkgPage: '6' },
  { id: 10, title: 'Seller Concessions', description: 'Specifies any seller concessions or credits to the buyer.', formPage: '5', pkgPage: '7' },
  { id: 11, title: 'Security, Insurance, Showings, Audio and Video', description: 'Advises the seller to take precautions regarding valuables, insurance, and outlines rules for showings and video/audio recording.', formPage: '5', pkgPage: '7' },
  { id: 12, title: 'Photographs and Internet Advertising', description: 'Authorizes the broker to use photos and market the property online.', formPage: '5', pkgPage: '7' },
  { id: 13, title: 'Keysafe / Lockbox', description: 'Authorizes the use of a lockbox for property access by agents.', formPage: '5', pkgPage: '7' },
  { id: 14, title: 'Sign', description: 'Authorizes the placement of a "For Sale" sign on the property.', formPage: '6', pkgPage: '8' },
  { id: 15, title: 'Equal Housing Opportunity', description: 'Confirms the property is offered in compliance with federal, state, and local anti-discrimination laws.', formPage: '6', pkgPage: '8' },
  { id: 16, title: 'Attorney Fees', description: 'States that the prevailing party in a legal dispute is entitled to reasonable attorney fees.', formPage: '6', pkgPage: '8' },
  { id: 17, title: 'Management Approval', description: 'Notes if the agreement is subject to broker or manager approval.', formPage: '6', pkgPage: '8' },
  { id: 18, title: 'Successors and Assigns', description: 'Makes the agreement binding on the seller\'s heirs and successors.', formPage: '6', pkgPage: '8' },
  { id: 19, title: 'Dispute Resolution', description: 'Requires mediation before arbitration or litigation.', formPage: '6', pkgPage: '8' },
  { id: 20, title: 'Entire Agreement', description: 'States that this document contains the entire agreement between the parties.', formPage: '6', pkgPage: '8' },
  { id: 21, title: 'Ownership, Title and Authority', description: 'Seller warrants they are the sole owner or have authority to execute the agreement.', formPage: '6', pkgPage: '8' },
  { id: 22, title: 'Representative Capacity', description: 'Requires additional documentation if the seller is signing in a representative capacity (e.g., trust, corporation).', formPage: '6', pkgPage: '8' },
];

const importantParagraphs = [1, 2, 4, 6, 19];

const pageGroups = [
  { pageNum: '1', name: 'Page 1', packageText: 'Package Page 3', colorKey: '1', paras: 'Paras 1-2' },
  { pageNum: '2', name: 'Page 2', packageText: 'Package Page 4', colorKey: '2', paras: 'Paras 3-4' },
  { pageNum: '3', name: 'Page 3', packageText: 'Package Page 5', colorKey: '3', paras: 'Paras 5-7' },
  { pageNum: '4', name: 'Page 4', packageText: 'Package Page 6', colorKey: '4', paras: 'Paras 8-9' },
  { pageNum: '5', name: 'Page 5', packageText: 'Package Page 7', colorKey: '5', paras: 'Paras 10-13' },
  { pageNum: '6', name: 'Page 6', packageText: 'Package Page 8', colorKey: '6', paras: 'Paras 14-22' },
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

export default function RLAParagraphs({ onBack, isEmbedded = false }: RLAParagraphsProps) {
  if (isEmbedded) {
    return (
      <div className="space-y-8 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
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
                        <div className="w-11 h-11 rounded-xl bg-[#F5F5F7] text-zinc-800 border border-black/[0.04] flex items-center justify-center font-display text-base font-bold shrink-0">
                          {paragraph.id}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-1.5 font-display flex items-baseline gap-2 flex-wrap">
                            <span className={isImportant ? "text-red-600" : "text-black"}>
                              {paragraph.title}
                            </span>
                            {isImportant && (
                              <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                                Critical
                              </span>
                            )}
                          </h3>
                          <p className="text-zinc-500 leading-relaxed font-semibold text-sm sm:text-base">
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
        <div className="mb-12 relative flex flex-col items-start pt-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] font-display flex items-baseline gap-3 flex-wrap">
            RLA Paragraphs
            <span className="text-2xl md:text-3xl font-bold text-zinc-400 font-sans leading-none">(1-22)</span>
          </h1>
        </div>

        {/* Structured Groups of Paragraphs by Page */}
        <div className="space-y-8">
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
                          <div className="w-11 h-11 rounded-xl bg-[#F5F5F7] text-zinc-800 border border-black/[0.04] flex items-center justify-center font-display text-base font-bold shrink-0">
                            {paragraph.id}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold mb-1.5 font-display flex items-baseline gap-2 flex-wrap">
                              <span className={isImportant ? "text-red-600" : "text-black"}>
                                {paragraph.title}
                              </span>
                              {isImportant && (
                                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                                  Critical
                                </span>
                              )}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-medium text-sm sm:text-base">
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
