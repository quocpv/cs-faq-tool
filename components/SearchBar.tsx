import React, { useState } from 'react';
import { SearchParams } from '../types';
import { AiIcon, KeyIcon, HistoryIcon, SearchIcon, PaymentIcon, AppIcon, AccountIcon, PromotionIcon, DVTCIcon, TravelIcon, MerchantIcon } from './Icons';

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

const TOPICS = [
  { name: 'All', icon: null },
  { name: 'Thanh toán', icon: <PaymentIcon className="w-4 h-4 mr-2" /> },
  { name: 'Ứng dụng', icon: <AppIcon className="w-4 h-4 mr-2" /> },
  { name: 'Tài khoản', icon: <AccountIcon className="w-4 h-4 mr-2" /> },
  { name: 'Khuyến Mãi', icon: <PromotionIcon className="w-4 h-4 mr-2" /> },
  { name: 'DVTC', icon: <DVTCIcon className="w-4 h-4 mr-2" /> },
  { name: 'Travelling', icon: <TravelIcon className="w-4 h-4 mr-2" /> },
  { name: 'Merchant', icon: <MerchantIcon className="w-4 h-4 mr-2" /> },
];

const CHANNELS = ['In-app', 'Live Chat', 'Call'];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('chuyển tiền');
  const [searchType, setSearchType] = useState<'ai' | 'key'>('ai');
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeChannel, setActiveChannel] = useState('In-app');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch({
        query,
        searchType,
        topic: activeTopic,
        channel: activeChannel,
      });
    }
  };

  const SearchTypeButton = ({ type, label, icon }: { type: 'ai' | 'key', label: string, icon: React.ReactNode }) => (
    <button
      type="button"
      onClick={() => setSearchType(type)}
      className={`flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-md transition-colors ${
        searchType === type
          ? 'bg-primary text-white shadow'
          : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap gap-2 mb-4">
        <SearchTypeButton type="ai" label="AI Search" icon={<AiIcon className="w-4 h-4 mr-2" />} />
        <SearchTypeButton type="key" label="Key Search" icon={<KeyIcon className="w-4 h-4 mr-2" />} />
        <button type="button" className="flex items-center justify-center h-10 px-4 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
          <HistoryIcon className="w-4 h-4 mr-2" />
          Lịch sử (1)
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="chuyển tiền"
            className="flex-grow h-12 px-4 text-base bg-slate-50 text-slate-900 placeholder-slate-500 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center h-12 px-6 font-semibold text-white bg-primary rounded-md shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <SearchIcon className="w-5 h-5 mr-2" />
            )}
            {isLoading ? 'Searching...' : 'Tìm kiếm'}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="flex items-center mb-3">
          <span className="text-sm font-semibold text-slate-600 mr-4">Lọc theo:</span>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map(topic => (
              <button
                key={topic.name}
                onClick={() => setActiveTopic(topic.name)}
                className={`flex items-center h-8 px-3 text-sm font-medium rounded-full transition-colors ${
                  activeTopic === topic.name
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {topic.icon}
                {topic.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-sm font-semibold text-slate-600 mr-4">Channel:</span>
          <div className="flex flex-wrap gap-2">
             {CHANNELS.map(channel => (
              <button
                key={channel}
                onClick={() => setActiveChannel(channel)}
                className={`h-8 px-4 text-sm font-medium rounded-full transition-colors ${
                  activeChannel === channel
                    ? 'bg-primary-light text-primary'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {channel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;