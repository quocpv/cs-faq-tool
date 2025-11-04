
import React, { useState } from 'react';
import { SearchResult } from '../types';
import { ChevronDownIcon, CauseIcon, HandlingIcon, NoteIcon, TemplateIcon, CopyIcon, LinkIcon, InfoIcon } from './Icons';

interface SearchResultItemProps {
  result: SearchResult;
  defaultOpen?: boolean;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeTemplate, setActiveTemplate] = useState<'neutral' | 'calming'>('neutral');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = result.templates[activeTemplate];
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const InfoSection = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
    <div className="mb-6">
      <h4 className="flex items-center text-md font-bold text-slate-700 mb-2">
        {icon}
        {title}
      </h4>
      <ul className="list-none space-y-2 pl-6">
        {items.map((item, index) => (
          <li key={index} className="text-slate-600 relative before:content-['•'] before:absolute before:-left-4 before:text-primary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
      <header
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg font-bold text-primary">{result.id}: {result.title}</h3>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
              {result.tags.category}
            </span>
            <span className="font-semibold text-green-600">{result.tags.match}% Match</span>
            <span className="text-orange-600">{result.tags.level}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => e.stopPropagation()} className="flex items-center text-sm font-medium text-primary hover:underline">
                <LinkIcon className="w-4 h-4 mr-1" />
                Xem SOP gốc
            </a>
            <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </header>

      {isOpen && (
        <main className="p-6 border-t border-slate-200">
          <InfoSection icon={<CauseIcon className="w-5 h-5 mr-2 text-red-500" />} title="Nguyên nhân" items={result.cause} />
          <InfoSection icon={<HandlingIcon className="w-5 h-5 mr-2 text-green-500" />} title="Hướng xử lý" items={result.handling} />
          <InfoSection icon={<NoteIcon className="w-5 h-5 mr-2 text-yellow-500" />} title="Lưu ý" items={result.note} />
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-md font-bold text-slate-700">KH bức xúc?</span>
            <button onClick={() => setActiveTemplate('neutral')} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTemplate === 'neutral' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
              Bán neutral
            </button>
            <button onClick={() => setActiveTemplate('calming')} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTemplate === 'calming' ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
              Template Calming
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h5 className="flex items-center text-md font-bold text-green-800">
                <TemplateIcon className="w-5 h-5 mr-2" />
                {activeTemplate === 'neutral' ? 'Template Neutral' : 'Template Calming'}
              </h5>
              <button onClick={handleCopy} className="flex items-center h-9 px-4 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700">
                <CopyIcon className="w-4 h-4 mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-green-900 whitespace-pre-wrap text-sm leading-relaxed">{result.templates[activeTemplate]}</p>
          </div>
          
          <footer className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-sm">
            <a href="#" className="font-medium text-primary hover:underline">
              Kiểm tra KM Cashback
            </a>
            <div className="flex items-center text-red-600">
              <InfoIcon className="w-4 h-4 mr-1"/>
              Internal SOP
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default SearchResultItem;
