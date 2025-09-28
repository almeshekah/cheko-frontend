/* eslint-disable max-len */
import { FC, useState } from 'react';
import { MenuItemInterfaces } from '../../interfaces/menuItemInterfaces';
import CloseIcon from '../../assets/svg/Close_Icons.svg';

interface MenuItemModalProps {
  item: MenuItemInterfaces;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal: FC<MenuItemModalProps> = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-4'
      style={{ backgroundColor: 'rgba(24, 22, 24, 0.84)' }}
      onClick={onClose}>
      <div
        className='bg-white dark:bg-[#2A2C2D] rounded-[28px] p-4 sm:p-6 lg:p-8 relative max-w-[575px] w-full max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between'>
          <div className='mb-4 sm:mb-6'>
            <div className='flex gap-5 items-center'>
              <div className='text-[#1E1E1E] dark:text-[#D2D2D2] text-[20px] sm:text-[24.68px] font-medium leading-tight'>
                {item?.itemName}
              </div>
              <div className=' bottom-[60px] left-[-11rem;] sm:bottom-[45px] sm:left-[-3rem;] bg-[#D0EAE3] rounded-[5.08px] px-3 py-0'>
                <span className='text-[#599887] text-sm font-medium'>
                  Best Sale
                </span>
              </div>
            </div>
            <div className='text-[#1E1E1E] dark:text-[#D2D2D2] text-[14px] sm:text-[15.8px] font-medium opacity-50 mt-2'>
              {item?.itemCalories} Cal
            </div>
          </div>
          <button
            onClick={onClose}
            className='right-4 w-[30px] h-[30px] flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity'>
            <img src={CloseIcon} alt='Close' width='26' height='26' />
          </button>
        </div>

        <div className='mb-6 sm:mb-8'>
          <div className='text-black dark:text-[#D2D2D2] text-[12px] sm:text-[13.18px] font-medium leading-relaxed opacity-30'>
            {item?.itemDescription}
          </div>
        </div>

        <div className='mb-6 sm:mb-8 flex justify-center'>
          <div className='rounded-[16.1px] bg-gray-200 overflow-hidden w-full  max-w-[513px] aspect-[513/310]'>
            <img
              src={'/item.png'}
              alt={item?.itemName}
              className='w-full h-full object-cover'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/item.png';
              }}
            />
          </div>
        </div>

        <div className='flex justify-end gap-12'>
          <div className='text-[#F4CBDF] dark:text-[#979797] text-[20px] sm:text-[22.03px] font-medium'>
            {item?.itemPrice} SR
          </div>

          <div className='flex items-center gap-2 sm:gap-2'>
            <button
              onClick={decrementQuantity}
              className='w-[33.89px] h-[33.04px] bg-transparent border border-[#F4CBDF] rounded-[8.47px] flex items-center justify-center hover:opacity-80 transition-opacity'>
              <div className='w-[13.55px] h-[1.69px] bg-[#F4CBDF]'></div>
            </button>

            <span className='text-black dark:text-[#7B7B7B] text-[12.71px] font-medium min-w-[20px] text-center'>
              {quantity}
            </span>

            <button
              onClick={incrementQuantity}
              className='w-[33.89px] h-[33.04px] bg-transparent border border-[#F4CBDF] rounded-[8.47px] flex items-center justify-center hover:opacity-80 transition-opacity'>
              <svg width='20.33' height='20.33' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M12 4V20M20 12H4'
                  stroke='#F4CBDF'
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

export default MenuItemModal;
