import { FormDocument } from './types';

export const formsData: FormDocument[] = [
  {
    id: 'ad',
    acronym: 'AD',
    title: 'Disclosure Regarding Real Estate Agency Relationship',
    summary: 'This form discloses the types of agency relationships available (Seller\'s Agent, Buyer\'s Agent, Dual Agent) and the duties owed by the agent to the principals.',
    importance: 'Must be provided and signed BEFORE entering into a discussion regarding a real estate transaction. It establishes the legal relationship and duties (fiduciary, honesty, disclosure) between the realtor and the client.',
    keySections: [
      {
        title: 'Seller\'s Agent Duties',
        description: 'Fiduciary duty of utmost care, integrity, honesty, and loyalty in dealings with the Seller.'
      },
      {
        title: 'Dual Agency',
        description: 'Agent represents both Seller and Buyer. Requires consent from both. Agent cannot disclose confidential financial information or price negotiations between parties without permission.'
      }
    ],
    proTip: 'Always present this form first. Explain to the seller that checking the "Dual Agency" box doesn\'t immediately make you a dual agent, but it gives consent if a buyer from your brokerage makes an offer.',
    stats: { pages: 2, startPage: 1, endPage: 2, signatures: 1, initials: 0, agentSignatures: 1 }
  },
  {
    id: 'rla',
    acronym: 'RLA',
    title: 'Residential Listing Agreement',
    summary: 'The core contractual agreement between the Seller and the Brokerage, granting the exclusive authorization and right to sell the property within a specific timeframe.',
    importance: 'This is the employment contract. It guarantees the broker\'s right to a commission if the property sells during the listing period and outlines all terms of the sale, marketing, and compensation.',
    keySections: [
      {
        title: 'Paragraph 1 & 2: Listing Period & Price',
        description: 'Defines the exact start and end dates of the agreement and the agreed-upon listing price.'
      },
      {
        title: 'Paragraph 4: Compensation',
        description: 'Explicitly states that real estate commissions are NOT fixed by law and are fully negotiable. Details the total compensation percentage or amount owed to the broker.'
      },
      {
        title: 'Paragraph 6: Seller Representations',
        description: 'Seller warrants they are unaware of any notice of default, delinquent loans, bankruptcies, or other issues affecting title, unless explicitly disclosed.'
      },
      {
        title: 'Paragraph 7: Broker & Seller Duties',
        description: 'Broker agrees to diligently market the property. Seller agrees to act in good faith, consider offers, and disclose material facts.'
      },
      {
        title: 'Paragraph 19: Dispute Resolution',
        description: 'Requires mediation before arbitration or court action for disputes arising between the Seller and Broker.'
      }
    ],
    proTip: 'Walk the seller through the compensation paragraph carefully. Ensure they understand what they are paying and the conditions under which it is earned.',
    stats: { pages: 7, startPage: 3, endPage: 9, signatures: 1, initials: 6, agentSignatures: 1 }
  },
  {
    id: 'mlsa',
    acronym: 'MLSA',
    title: 'Multiple Listing Service Addendum',
    summary: 'Explains the benefits of using the Multiple Listing Service (MLS) and outlines rules regarding "Clear Cooperation" and internet marketing choices.',
    importance: 'Informs the seller how their property will be marketed and syndicated online, and ensures compliance with mandatory MLS submission rules set by NAR.',
    keySections: [
      {
        title: 'Paragraph 1 & 2: Benefits of MLS',
        description: 'Describes how the MLS maximizes publicity and exposes the property to a wide marketplace of potential buyers through syndication.'
      },
      {
        title: 'Paragraph 3: Clear Cooperation Policy',
        description: 'Requires that the listing be submitted to the MLS within 1 business day of any public marketing (e.g., yard signs, website listings).'
      },
      {
        title: 'Paragraph 4: Internet Opt-Outs',
        description: 'Allows the seller to opt-out of internet marketing entirely or hide the property address online, though this reduces exposure.'
      }
    ],
    proTip: 'Use this form to explain why maximum exposure via the MLS is usually their best tool for achieving the highest possible sale price.',
    stats: { pages: 3, startPage: 10, endPage: 12, signatures: 1, initials: 3, agentSignatures: 1 }
  },
  {
    id: 'bca',
    acronym: 'BCA',
    title: 'Broker Compensation Advisory',
    summary: 'Advises sellers and buyers that real estate commissions are fully negotiable and outlines how compensation is typically handled in compliance with NAR settlements.',
    importance: 'Ensures transparency regarding commissions, specifically addressing that compensation is not fixed by law and explaining the dynamics of buyer representation compensation.',
    keySections: [
      {
        title: 'Paragraph 1: Negotiability',
        description: 'Reiterates that listing agreement compensation is fully negotiable between the seller and the listing broker.'
      },
      {
        title: 'Paragraph 3: Buyer Broker Compensation',
        description: 'Explains that a buyer\'s broker negotiates compensation with the buyer directly, but the buyer may ask the seller to pay this compensation as part of their purchase offer.'
      }
    ],
    proTip: 'Address recent changes in industry practices confidently here. Explain that buyers are responsible for their agent\'s fees, but sellers may still receive offers asking for concessions to cover those costs.',
    stats: { pages: 2, startPage: 13, endPage: 14, signatures: 1, initials: 0, agentSignatures: 0 }
  },
  {
    id: 'prbs',
    acronym: 'PRBS',
    title: 'Possible Representation of More Than One Buyer or Seller',
    summary: 'Discloses that the brokerage may represent multiple clients who could be competing for the same property or selling similar properties.',
    importance: 'Protects the brokerage by acknowledging that they might represent a buyer interested in the seller\'s property, or other sellers with competing listings in the neighborhood.',
    keySections: [
      {
        title: 'Multiple Sellers & Buyers',
        description: 'Brokerage may have listings on multiple similar properties and may work with various buyers looking at the same homes.'
      },
      {
        title: 'Consent to Dual Agency',
        description: 'The parties consent to the Brokerage acting as a dual agent if a situation arises where the Brokerage represents both the buyer and the seller in the same transaction.'
      }
    ],
    proTip: 'Frame this positively to sellers. "We have a large database of active buyers looking for homes like yours, which is a massive advantage for you!"',
    stats: { pages: 2, startPage: 15, endPage: 16, signatures: 1, initials: 0, agentSignatures: 1 }
  },
  {
    id: 'fhda',
    acronym: 'FHDA',
    title: 'Fair Housing and Discrimination Advisory',
    summary: 'Advises clients on Federal and State Fair Housing laws that prohibit discrimination in real estate transactions.',
    importance: 'Crucial for risk management. It ensures sellers are aware they cannot choose a buyer based on race, color, religion, sex, familial status, or other protected classes.',
    keySections: [
      {
        title: 'Protected Classes',
        description: 'Lists classes protected against discrimination, including race, color, religion, sex, gender identity, marital status, and more.'
      },
      {
        title: 'Buyer Letters',
        description: 'Advises that "love letters" from buyers can inadvertently reveal protected characteristics and lead to unconscious bias or discrimination claims.'
      }
    ],
    proTip: 'Strongly advise your sellers against accepting "Buyer Letters" to protect them from potential discrimination liabilities. Focus strictly on the price and terms of the objective offer.',
    stats: { pages: 2, startPage: 17, endPage: 18, signatures: 1, initials: 0, agentSignatures: 0 }
  },
  {
    id: 'sa',
    acronym: 'SA',
    title: 'Seller\'s Advisory',
    summary: 'Provides the seller with important information regarding their legal duties, disclosures, and marketing considerations when selling a home in California.',
    importance: 'Sets expectations for the seller\'s responsibilities during the transaction, especially regarding the mandatory, legally-binding disclosure of all known material facts.',
    keySections: [
      {
        title: 'General Disclosure Duties',
        description: 'Seller MUST affirmatively disclose in writing all known facts that materially affect the value or desirability of the property (TDS, NHD, SPQ).'
      },
      {
        title: 'Pre-Sale Considerations',
        description: 'Recommends that sellers consider obtaining professional pre-sale inspections (like a general home or termite inspection) to avoid surprises during escrow.'
      }
    ],
    proTip: '"When in doubt, disclose." Over-disclosing protects the seller from stressful post-close lawsuits.',
    stats: { pages: 2, startPage: 19, endPage: 20, signatures: 1, initials: 0, agentSignatures: 0 }
  },
  {
    id: 'ccpa',
    acronym: 'CCPA',
    title: 'California Consumer Privacy Act Advisory',
    summary: 'Advises California residents of their rights regarding the collection, sharing, and sale of their private personal information.',
    importance: 'A legally required notice explaining that during a real estate transaction, personal information will be collected and shared with necessary third parties (lenders, title, escrow).',
    keySections: [
      {
        title: 'Information Sharing',
        description: 'Explains that personal info is securely shared with entities like the MLS, title companies, and escrow providers to facilitate the sale.'
      },
      {
        title: 'Consumer Rights',
        description: 'Outlines the consumer\'s right to know what data is collected and their right to request deletion or opt-out of data sales where applicable by law.'
      }
    ],
    proTip: 'Keep it brief and reassuring. "This form lets you know we will be sharing your info with escrow and title to get your home sold, and that your data rights are protected by California law."',
    stats: { pages: 1, startPage: 21, endPage: 21, signatures: 1, initials: 0, agentSignatures: 0 }
  }
];
