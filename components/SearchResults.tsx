
import React from 'react';
import { SearchResult, SearchHistoryItem } from '../types';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  currentSearch: SearchHistoryItem | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, currentSearch }) => {
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center p-8">
            <svg className="animate-spin mx-auto h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 text-slate-500">Searching for results...</p>
        </div>
      );
    }

    if (!currentSearch) {
        return <div className="p-8 text-center text-slate-500">Please start a search to see results.</div>
    }

    if (results.length === 0 && currentSearch) {
      return <div className="p-8 text-center text-slate-500">No results found for "{currentSearch.query}".</div>;
    }

    return (
      <div className="space-y-4">
        {results.map((result, index) => (
          <SearchResultItem key={result.id} result={result} defaultOpen={index === 0} />
        ))}
      </div>
    );
  };

  return (
    <div>
        {currentSearch && !isLoading && (
            <div className="mb-4">
                <p className="text-slate-600">
                    Showing results for <span className="font-bold text-slate-800">"{currentSearch.query}"</span>
                </p>
            </div>
        )}
        {renderContent()}
    </div>
  );
};

export default SearchResults;
