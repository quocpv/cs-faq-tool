
import React from 'react';
import { SearchHistoryItem } from '../types';

interface SearchHistoryProps {
  history: SearchHistoryItem[];
  onClear: () => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onClear }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-800">Lịch sử tìm kiếm</h2>
        <button onClick={onClear} className="text-sm font-medium text-red-500 hover:text-red-700">Xóa tất cả</button>
      </div>
      <div className="space-y-3">
        {history.map(item => (
          <div key={item.id} className="p-4 bg-slate-50 rounded-md border border-slate-200">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-slate-700">{item.query}</p>
              <span className="text-sm text-slate-500">Results: {item.resultsCount}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1">Filter: {item.filter}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
