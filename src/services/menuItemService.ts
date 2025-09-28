import { useApi } from '../hooks/useApi';
import { CategoryInterfaces } from '../interfaces';

export interface props {
  search?: string;
  filter?: string;
}

export const useMenuItemService = () => {
  const { apiPublic } = useApi();

  const getMenuItem = async (filter: props) => {
    const { data } = await apiPublic.get<CategoryInterfaces[]>(
      `${`/menuItem/list-by-category?${`category=${filter.filter}`}${
        filter.search != undefined ? `&q=${filter.search}` : ''
      }`}`
    );
    return data;
  };

  return {
    getMenuItem,
  };
};
