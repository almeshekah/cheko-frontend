/* eslint-disable max-len */
import { FC } from 'react';
import { CategoryInterfaces } from '../../interfaces';

interface CategoryItemProps {
  category: CategoryInterfaces;
  count?: number;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className='relative bg-white dark:bg-[#3F4142] border border-[#FCEFF5] dark:border-[#4A4C4D] rounded-[10px] hover:shadow-lg transition-shadow cursor-pointer h-[71px] flex items-center w-[209.59px] flex-shrink-0 px-[14px] py-[10px]'
      style={{
        boxShadow: '0px 7px 24px 0px rgba(220, 223, 228, 0.4)',
      }}>
      <div className='w-[53.45px] h-[51.01px] bg-[#F4CBDF] rounded-[15px] flex items-center justify-center mr-4 flex-shrink-0'>
        <div className='w-[41.45px] h-[42.01px]'>
          <img src={category?.imageUrl} alt='Placeholder' width={100} />
        </div>
      </div>

      <div className='flex-1 min-w-0'>
        <div className='text-black dark:text-white text-[18px] font-medium leading-[21.78px] font-inter truncate'>
          {category?.name}
        </div>
      </div>

      <div className='text-[#111216] dark:text-white text-[18px] font-medium leading-[21.78px] font-inter flex-shrink-0 ml-2'>
        {category?.menuItemsCount}
      </div>
    </div>
  );
};

export default CategoryItem;
