import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: FC = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    changeLanguage(newLanguage);
    window.location.reload();
  };

  return (
    <button
      type='button'
      onClick={handleLanguageChange}
      className='inline-flex items-center p-2 rounded-lg pt-3
                 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors'
      aria-label='Toggle language'>
      <svg
        className='w-5 h-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
        />
      </svg>
    </button>
  );
};

export default LanguageToggle;
