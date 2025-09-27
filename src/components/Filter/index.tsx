import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilterIcon from '../icons/FilterIcon';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  options: FilterOption[];
  onFilter?: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ options, onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FilterOption | null>(null);
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleSelect = (option: FilterOption) => {
    setSelected(option);
    setIsOpen(false);
    onFilter?.(option.value);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center justify-between px-4 py-2 
                   bg-transparent border-0 
                   text-gray-700 hover:bg-gray-200 hover:bg-opacity-50 rounded-lg
                   dark:text-gray-300 dark:hover:bg-gray-600'>
        <div className='flex items-center'>
          <FilterIcon />
          <span
            className={`text-[#000000] text-[18px] font-medium dark:text-gray-200 ${
              language === 'ar' ? 'pr-5' : 'pl-5'
            }`}>
            {selected?.label || t('filter')}
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            language === 'ar' ? 'left-0' : 'right-0'
          } mt-2 w-full bg-white border border-gray-300 
                        rounded-lg shadow-lg z-10 dark:bg-gray-800 dark:border-gray-600`}>
          <div className='py-1'>
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`block w-full ${
                  language === 'ar' ? 'text-right' : 'text-left'
                } px-4 py-2 text-gray-700 
                           hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
