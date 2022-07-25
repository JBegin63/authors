import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className='App'>
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll />} path="/" default />
          <Route element={<AddAuthor/>} path='/new'/>
          <Route element={<EditAuthor />} path='/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
