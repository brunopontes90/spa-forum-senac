import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Post from './pages/post/post';
import Edit from './pages/edit/edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/posts' element={<Post />} />
      <Route path='/edit/id' element={<Edit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
