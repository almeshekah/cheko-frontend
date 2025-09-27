import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Map } from './pages';

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            padding: '1rem',
            backgroundColor: '#1B365D',
            color: 'white',
            textAlign: 'center',
          }}>
          <h1>Cheko Frontend</h1>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
