/* eslint-disable max-len */
import { FC } from 'react';

import CategoryItem from '../../components/CategoryItem';
import MenuItem from '../../components/MenuItem';
import { CategoryInterfaces } from '../../interfaces';
import { MenuItemInterfaces } from '../../interfaces/menuItemInterfaces';

export interface props {
  categories?: CategoryInterfaces[];
  items?: CategoryInterfaces[];
}

const Home: FC<props> = ({ categories, items }) => {
  // Get the selected category name from items
  const selectedCategoryName =
    items?.[0]?.name || items?.[0]?.name || 'Categories';

  return (
    <div className=''>
      <div className='mt-[100px] sm:mt-8'>
        {categories && categories?.length > 0 && (
          <div className='flex gap-4 overflow-x-scroll pb-4 scrollbar-hide'>
            {categories?.map((category: CategoryInterfaces) => (
              <CategoryItem
                key={category.name}
                category={category ?? category}
              />
            ))}
          </div>
        )}
        <div className='mt-8 mb-6'>
          <div className='flex items-baseline gap-4'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              {selectedCategoryName}
            </h2>
            <div className='flex-1 h-px bg-gray-300 dark:bg-gray-600'></div>
          </div>
        </div>

        {items?.[0]?.menuItems && items?.[0]?.menuItems.length > 0 && (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center lg:justify-items-start '>
            {items?.[0]?.menuItems.map((item: MenuItemInterfaces) => (
              <div className='w-full' key={item?.itemName}>
                <MenuItem
                  item={{
                    itemName: item?.itemName || 'Menu Item',
                    itemPrice: item?.itemPrice || 80,
                    itemCalories: item?.itemCalories || 200,
                    itemImageUrl: item?.itemImageUrl,
                    itemDescription: item?.itemDescription,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
