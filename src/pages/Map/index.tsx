/* eslint-disable max-len */
import { FC } from 'react';

import { RestaurantInterfaces } from '../../interfaces';

export interface props {
  restaurants?: RestaurantInterfaces[];
}

const Map: FC<props> = ({ restaurants }) => {
  return (
    <div className=''>
      <div className='mt-[100px] sm:mt-8'></div>
    </div>
  );
};

export default Map;
