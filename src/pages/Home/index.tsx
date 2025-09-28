/* eslint-disable max-len */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { useCategoryService } from '../../services/categoryService';
import CategoryItem from '../../components/CategoryItem';
import { CategoryInterfaces } from '../../interfaces';

const Home: FC = () => {
  const { t } = useTranslation();
  const { getCategories } = useCategoryService();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });

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
      </div>
    </div>
  );
};

export default Home;
