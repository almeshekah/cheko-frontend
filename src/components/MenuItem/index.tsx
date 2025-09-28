/* eslint-disable max-len */
import { FC, useState } from 'react';

import { MenuItemInterfaces } from '../../interfaces/menuItemInterfaces';

interface MenuItemProps {
  item: MenuItemInterfaces;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className='bg-white flex gap-6 p-4 rounded-[8.47px] shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full'>
      <div className='flex-shrink-0'>
        <div className='w-[140px] h-[140px] rounded-[16.1px] bg-gray-200 overflow-hidden relative'>
          <img
            src={item?.itemImageUrl || '/item.png'}
            alt={item?.itemName}
            className='w-full h-full object-cover'
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/item.png';
            }}
          />
        </div>
      </div>

      <div className='relative flex flex-col justify-between'>
        <div>
          <div className='text-[#1E1E1E] text-[21.18px] font-medium leading-[25.6px] mb-2'>
            {item?.itemName}
          </div>

          {item?.itemCalories && (
            <p className='text-[#1E1E1E] text-[15.55px] font-medium leading-[16.4px] opacity-50 mb-4'>
              {item?.itemCalories} Cal
            </p>
          )}
        </div>
        {true && (
          <div className='absolute bottom-[60px] left-[-11rem;] sm:bottom-[45px] sm:left-[-3rem;] bg-[#D0EAE3] rounded-[5.08px] px-3 py-0'>
            <span className='text-[#599887] text-sm font-medium'>
              Best Sale
            </span>
          </div>
        )}

        <div className='flex flex-col items-start sm:flex-row  sm:items-center gap-2'>
          <div className='text-[#F4CBDF] text-[22.03px] font-medium  '>
            {item?.itemPrice} SR
          </div>

          <div className='flex items-center gap-2'>
            <button
              onClick={decrementQuantity}
              className='w-[33.89px] h-[33.04px] bg-[#F4CBDF] rounded-[8.47px] flex items-center justify-center hover:opacity-80 transition-opacity'>
              <div className='w-[13.55px] h-[1.69px] bg-black'></div>
            </button>

            <span className='text-black text-[12.71px] font-medium min-w-[20px] text-center'>
              {quantity}
            </span>

            <button
              onClick={incrementQuantity}
              className='w-[33.89px] h-[33.04px] bg-[#F4CBDF] rounded-[8.47px] flex items-center justify-center hover:opacity-80 transition-opacity'>
              <svg width='20.33' height='20.33' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M12 4V20M20 12H4'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
