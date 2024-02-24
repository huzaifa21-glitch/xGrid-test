import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './screens/test';

function App() {
  return (
    <BrowserRouter>
      <>
     
        <Routes>
          <Route path="/" element={<TestPage/>} />
      
        </Routes>
    
      </>
    </BrowserRouter>
  );
}

export default App;
