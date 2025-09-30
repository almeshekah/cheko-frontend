import { MenuItemInterfaces } from './menuItemInterfaces';

export interface CategoryInterfaces {
  name: string;
  imageUrl?: string;
  menuItemsCount?: string;
  menuItems?: MenuItemInterfaces[];
}
