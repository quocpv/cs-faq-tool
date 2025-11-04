
export interface SearchParams {
  query: string;
  searchType: 'ai' | 'key';
  topic: string;
  channel: string;
}

export interface SearchResult {
  id: string;
  title: string;
  tags: {
    category: string;
    match: number;
    level: string;
  };
  cause: string[];
  handling: string[];
  note: string[];
  templates: {
    neutral: string;
    calming: string;
  };
}

export interface SearchHistoryItem {
  id: number;
  query: string;
  filter: string;
  resultsCount: number;
}
