import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Tab {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

const NavigationTabs: FC<NavigationTabsProps> = ({ tabs }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div
      className={`flex ${
        language === 'ar' ? 'space-x-reverse space-x-1' : 'space-x-1'
      }`}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-6 pt-6 pb-4 rounded-b-[10px] font-medium transition-colors text-[18px] ${
              isActive
                ? 'bg-[#F4CBDF] text-[#000000]'
                : 'text-white hover:text-white hover:bg-gray-700'
            }`}>
            <span>{t(tab.label)}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
