
import React from 'react';
import { UserIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">CS FAQ TOOL</h1>
          <p className="text-slate-500 mt-1">40 cases • Semantic Search + Embeddings Ready</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <button className="flex items-center justify-center h-10 px-4 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50">
            <UserIcon className="w-4 h-4 mr-2" />
            Nhập tên CS...
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
