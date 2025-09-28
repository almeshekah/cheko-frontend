import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Home, Map } from './pages';
import { Navbar } from './components';

import { useCategoryService, useMenuItemService } from './services';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { getCategories } = useCategoryService();
  const { getMenuItem } = useMenuItemService();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });

  const defaultFilter = categories?.[0]?.name || '';
  const currentFilter = filterValue || defaultFilter;

  const { data: items, refetch: refetchItems } = useQuery({
    queryKey: ['getMenuItem'],
    queryFn: () =>
      getMenuItem({
        search: searchQuery || undefined,
        filter: currentFilter || undefined,
      }),
    enabled: false,
  });

  const filterOptions = [
    ...(categories?.map((category) => ({
      label: category.name,
      value: category.name,
    })) || []),
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (filterVal: string) => {
    setFilterValue(filterVal === 'all' ? '' : filterVal);
  };

  const handleSearchSubmit = () => {
    refetchItems();
  };

  useEffect(() => {
    if (categories && !items) {
      refetchItems();
    }
  }, [categories, items, refetchItems]);

  return (
    <Router>
      <div className='min-h-screen bg-gray-50 dark:bg-[#111315] font-inter'>
        <Navbar
          filterOptions={filterOptions}
          onSearch={handleSearch}
          onFilter={handleFilter}
          onSearchSubmit={handleSearchSubmit}
        />

        <main className='container mx-auto py-6 font-inter px-4 sm:px-0'>
          <Routes>
            <Route
              path='/'
              element={<Home categories={categories} items={items} />}
            />
            <Route path='/map' element={<Map />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
