import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { client } from './graphql/client';
import Menu from './pages/layout/menu/menu';

function App() {
  const [isClientPost, setIsClientPost] = useState(client)
  console.log(isClientPost)

  return (
    <div>
      <Menu />
      <p>Teste</p>
    </div>
  );
}

export default App;
