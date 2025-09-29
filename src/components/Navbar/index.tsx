/* eslint-disable max-len */
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Search from '../Search';
import Filter from '../Filter';

import NavigationTabs from '../NavigationTabs';
import DarkModeToggle from '../DarkModeToggle';
import LanguageToggle from '../LanguageToggle';
import hedarNaveSvg from '../../assets/svg/hedarNave.svg';

interface NavbarProps {
  filterOptions: { label: string; value: string }[];
  onSearch: (query: string) => void;
  onFilter: (filterValue: string) => void;
  onSearchSubmit: () => void;
}

const Navbar: FC<NavbarProps> = ({
  filterOptions,
  onSearch,
  onFilter,
  onSearchSubmit,
}) => {
  const { t, i18n } = useTranslation();
  const { language, dir } = i18n;

  useEffect(() => {
    document.body.dir = dir(language);
    document.documentElement.dir = dir(language);
  }, [language, dir]);

  const tabs = [
    {
      label: 'navigation.home',
      path: '/',
    },
    {
      label: 'navigation.map',
      path: '/map',
    },
  ];

  return (
    <nav className='font-inter relative flex items-center z-10'>
      <div
        className='h-[140px] sm:h-[160px] w-full'
        style={{
          backgroundImage: `url(${hedarNaveSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: language === 'ar' ? 'scaleX(-1)' : 'none',
        }}>
        <div
          className={`relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 ${
            language === 'ar' ? 'pr-4 sm:pr-6 lg:pr-8' : ''
          }`}
          style={{
            transform: language === 'ar' ? 'scaleX(-1)' : 'none',
          }}>
          <div className='h-full pb-4'>
            <div className='w-full'>
              <div>
                <NavigationTabs tabs={tabs} />
              </div>

              <div className='mt-4 sm:mt-6 lg:mt-8 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4'>
                <div
                  className='flex-1 flex flex-col sm:flex-row items-stretch sm:items-center bg-white dark:bg-gray-700 rounded-[15px] px-3 sm:px-4 py-3 gap-3 sm:gap-0'
                  style={{ boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.05)' }}>
                  <div className='w-full sm:flex-1'>
                    <Search onSearch={onSearch} />
                  </div>
                  <div className='hidden sm:block w-px h-10 bg-gray-300 dark:bg-gray-600 mx-4'></div>
                  <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-0'>
                    <div className='flex-1 sm:flex-none sm:min-w-[200px]'>
                      <Filter options={filterOptions} onFilter={onFilter} />
                    </div>
                    <button
                      onClick={onSearchSubmit}
                      className={`px-4 sm:px-6 lg:px-8 bg-[#F4CBDF] text-[#111216] rounded-[10px] text-[14px] sm:text-[15px] font-medium hover:bg-[#e9b7ce] transition-colors py-2 sm:py-0 ${
                        language === 'ar' ? 'sm:mr-4' : 'sm:ml-4'
                      }`}>
                      {t('search')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center fixed top-0 z-20 ${
          language === 'ar' ? 'left-2' : 'right-2'
        } sm:relative sm:top-auto sm:right-auto sm:left-auto sm:z-auto`}>
        <div className='flex items-center flex-row gap-2 sm:flex-col sm:gap-3 sm:pt-4 px-2 sm:px-3 bg-white bg-opacity-20 rounded-lg sm:bg-transparent'>
          <DarkModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
