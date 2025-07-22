
export type TabID = 
  | 'home' 
  | 'software' 
  | 'trading' 
  | 'text' // 'text' is for 'About Me'
  | 'fullStack'
  | 'aiMl'
  | 'finTech'
  | 'javascript'
  | 'python'
  | 'apiDesign'
  | 'marketAnalysis'
  | 'algoThinking'
  | 'blockchain';

export interface TabOption {
  id: TabID;
  label: string;
}