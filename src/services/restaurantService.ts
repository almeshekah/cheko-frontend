import { useApi } from '../hooks/useApi';
import { RestaurantInterfaces } from '../interfaces';

export const useRestaurantsService = () => {
  const { apiPublic } = useApi();

  const getRestaurants = async () => {
    const { data } = await apiPublic.get<RestaurantInterfaces[]>(
      '/restaurants'
    );

    return data;
  };

  return {
    getRestaurants,
  };
};
