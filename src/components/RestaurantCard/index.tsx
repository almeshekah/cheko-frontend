/* eslint-disable max-len */
import { FC } from 'react';
import { RestaurantInterfaces } from '../../interfaces';

interface RestaurantCardProps {
  restaurant: RestaurantInterfaces;
  onClose?: () => void;
  position?: { x: number; y: number };
}

const RestaurantCard: FC<RestaurantCardProps> = ({
  restaurant,
  onClose,
  position,
}) => {
  return (
    <div
      className='absolute z-10 bg-white dark:bg-[#2A2C2D] rounded-[8.47px] shadow-xl w-[322px] h-[156px] p-4 transform -translate-x-1/2 -translate-y-full'
      style={{
        boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.2)',
        left: position ? `${position.x}px` : '50%',
        top: position ? `${position.y - 20}px` : '50%',
      }}>
      <div className='absolute bottom-[-8px] left-1/2 transform -translate-x-1/2  w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white dark:border-t-[#2A2C2D]'></div>
      <div className='flex gap-4 h-full'>
        {/* Restaurant Image */}
        <div className='flex-shrink-0'>
          <div className='w-[130px] h-[130px] rounded-[15px] bg-gray-200 overflow-hidden'>
            <img
              src={'/item.png'}
              alt={restaurant?.restaurantName}
              className='w-full h-full object-cover'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/item.png';
              }}
            />
          </div>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div>
            <div className='text-[#1E1E1E] dark:text-[#D2D2D2] text-[18px] font-medium mb-2'>
              {restaurant?.restaurantName}
            </div>
            <p className='text-[#1D1C1D] dark:text-[#D2D2D2] text-[13.55px] font-medium opacity-50'>
              menu list
            </p>
          </div>

          <div className='flex justify-end'>
            <button
              onClick={onClose}
              className='w-[40px] h-[39px] bg-[#F4CBDF] rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity'>
              <svg width='9' height='16' viewBox='0 0 9 16' fill='none'>
                <path
                  d='M1 1L8 8L1 15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
