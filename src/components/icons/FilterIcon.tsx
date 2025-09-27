import React from 'react';

interface FilterIconProps {
  className?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({
  className = 'h-6 w-6 text-[#21577E] ',
}) => {
  return (
    <svg
      className={className}
      width='13'
      height='6'
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.2' clipPath='url(#clip0_3_14)'>
        <path
          d='M11.25 20.25H15.75V18H11.25V20.25ZM3.375 6.75V9H23.625V6.75H3.375ZM6.75 14.625H20.25V12.375H6.75V14.625Z'
          fill='#000000'
        />
      </g>
      <defs>
        <clipPath id='clip0_3_14'>
          <rect width='27' height='27' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FilterIcon;
