import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main layout route */}
          <Route path="/" element={<Layout />}>
            {/* Home page route */}
            <Route index element={<Home />} />
            {/* Detail page route with dynamic slug */}
            <Route path=":slug" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
