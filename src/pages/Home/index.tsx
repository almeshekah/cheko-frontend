import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center font-inter'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4 font-inter'>
        🏠 {t('navigation.home')}
      </h1>
      <p className='text-gray-600 dark:text-gray-300 mb-8 font-inter'>
        {t('common.welcome')}
      </p>

      <div className='mt-8'>
        <Link
          to='/map'
          className='inline-flex items-center px-6 py-3 bg-primary-500 text-white 
                     font-medium rounded-lg hover:bg-primary-600 transition-colors'>
          <svg
            className='w-5 h-5 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
            />
          </svg>
          Go to Map
        </Link>
      </div>
    </div>
  );
};

export default Home;
