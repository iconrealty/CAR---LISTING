export interface KeySection {
  title: string;
  description: string;
}

export interface FormStats {
  pages: number;
  startPage: number;
  endPage: number;
  signatures: number;
  initials: number;
  agentSignatures: number;
}

export interface FormDocument {
  id: string;
  acronym: string;
  title: string;
  summary: string;
  importance: string;
  keySections: KeySection[];
  proTip: string;
  stats: FormStats;
}

