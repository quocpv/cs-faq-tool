
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResults from './components/SearchResults';
import { SearchResult, SearchHistoryItem, SearchParams } from './types';
import { performSearch } from './services/searchService';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentSearch, setCurrentSearch] = useState<SearchHistoryItem | null>(null);

  const handleSearch = useCallback(async (params: SearchParams) => {
    setIsLoading(true);
    setCurrentSearch(null); 
    setSearchResults([]);

    try {
      const results = await performSearch(params);
      const newHistoryItem: SearchHistoryItem = {
        id: Date.now(),
        query: params.query,
        filter: params.topic,
        resultsCount: results.length,
      };
      setSearchHistory(prev => [newHistoryItem, ...prev.slice(0, 4)]);
      setSearchResults(results);
      setCurrentSearch(newHistoryItem);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <Header />
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <div className="mt-8 grid grid-cols-1 gap-8">
          <SearchHistory history={searchHistory} onClear={() => setSearchHistory([])} />
          <SearchResults results={searchResults} isLoading={isLoading} currentSearch={currentSearch} />
        </div>
      </main>
    </div>
  );
};

export default App;
