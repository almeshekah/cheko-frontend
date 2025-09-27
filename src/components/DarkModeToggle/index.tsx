import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DarkModeToggle: FC = () => {
  const [isDark, setIsDark] = useState(false);
  const { i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    // Check if dark mode is already enabled
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='flex items-center flex-col'>
      <div className={`mt-1 pb-1 ${language === 'ar' ? 'pe-5' : 'ps-5'}`}>
        <svg
          className='w-7 h-7 text-[#111216] dark:text-[#3F4142]'
          fill='currentColor'
          viewBox='0 0 24 24'>
          <path d='M2.8775 2.1475L1.9825 1.25L1.275 1.9575L2.1725 2.855L2.8775 2.1475ZM1.5 4.975H0V5.975H1.5V4.975ZM6 0H5V1.475H6V0ZM9.725 1.9575L9.0175 1.25L8.12 2.1475L8.8275 2.855L9.725 1.9575ZM8.1225 8.8025L9.02 9.7L9.7275 8.9925L8.83 8.095L8.1225 8.8025ZM9.5 4.975V5.975H11V4.975H9.5ZM5.5 2.475C3.8425 2.475 2.5 3.8175 2.5 5.475C2.5 7.1325 3.8425 8.475 5.5 8.475C7.1575 8.475 8.5 7.1325 8.5 5.475C8.5 3.8175 7.1575 2.475 5.5 2.475ZM5 10.95H6V9.475H5V10.95ZM1.275 8.9925L1.9825 9.7L2.88 8.8025L2.1725 8.095L1.275 8.9925Z' />
        </svg>
      </div>
      <div className='rotate-90 origin-center'>
        <button
          onClick={toggleDarkMode}
          className='relative inline-flex items-center justify-center w-10 h-4 
                 bg-[#111216] rounded-full transition-colors duration-200 
                 dark:bg-[#3F4142] focus:ring-2 focus:ring-[#111216] dark:focus:ring-[#111216]'
          aria-label='Toggle dark mode'>
          <div
            className={`absolute w-3 h-3 bg-[#F4CBDF] rounded-full shadow-md transform transition-transform duration-200 ${
              isDark ? 'translate-x-3' : '-translate-x-3'
            }`}></div>
        </button>
      </div>
      <div className={`mb-1 pt-4 ${language === 'ar' ? 'pe-2' : 'ps-2'}`}>
        <svg
          className='w-3 h-3 text-[#111216] dark:text-[#3F4142]'
          fill='currentColor'
          viewBox='0 0 24 24'>
          <path
            d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                     0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21
                     12.75 21a9.753 9.753 0 009.002-5.998z'
          />
        </svg>
      </div>
    </div>
  );
};

export default DarkModeToggle;
