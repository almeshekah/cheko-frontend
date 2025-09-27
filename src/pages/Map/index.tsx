import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Map: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center font-inter'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4 font-inter'>
        🗺️ {t('navigation.map')}
      </h1>
      <p className='text-gray-600 dark:text-gray-300 mb-8'>
        This is the Map page where you can add your map component!
      </p>

      <div className='mt-8'>
        <Link
          to='/'
          className='inline-flex items-center px-6 py-3 bg-secondary-500 text-white 
                     font-medium rounded-lg hover:bg-secondary-600 transition-colors'>
          <svg
            className='w-5 h-5 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className='mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg max-w-2xl mx-auto'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
          📍 Map Component Will Go Here
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          You can integrate any map library like:
        </p>
        <ul className='text-left max-w-xs mx-auto text-gray-700 dark:text-gray-300 space-y-2'>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary-500 rounded-full mr-2'></span>
            Google Maps
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary-500 rounded-full mr-2'></span>
            Leaflet
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary-500 rounded-full mr-2'></span>
            Mapbox
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary-500 rounded-full mr-2'></span>
            OpenStreetMap
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
