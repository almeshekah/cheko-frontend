import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Map } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 font-inter'>
        <Navbar />

        <main className='container mx-auto py-6 font-inter'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
