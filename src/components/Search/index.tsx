import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '../icons/SearchIcon';

interface SearchProps {
  onSearch?: (query: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch?.(newQuery);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSearch} className='relative'>
      <div className='relative'>
        <div
          className={`absolute inset-y-0 ${
            language === 'ar' ? 'right-0 pr-0' : 'left-0 pl-0'
          } flex items-center pointer-events-none`}>
          <SearchIcon />
        </div>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          className={`block w-full ${
            language === 'ar' ? 'pr-10 pl-3' : 'pl-10 pr-3'
          } py-1 border-0 bg-transparent text-[#000000] placeholder-[#000000] 
          text-[18px] font-medium focus:ring-0 focus:outline-none
          dark:text-gray-200 dark:placeholder-gray-400`}
          placeholder={t('search') || ''}
        />
      </div>
    </form>
  );
};

export default Search;
