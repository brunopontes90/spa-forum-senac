import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { client } from './config/client';
import Menu from './pages/layout/menu/menu';
import { GET_USERS } from './graphql/query';
import { EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function App() {
  const [isClientPost, setIsClientPost] = useState([]);

  useQuery(GET_USERS, {
    client,
    onCompleted: (data) => setIsClientPost(data.users)
  });

  return (
    <div>
      <Menu />
      {isClientPost.map((user, index) => (
        <div key={index++} className="ml-5 mr-5 mt-5 shadow p-3 mb-5 bg-body rounded" style={{ width: '700px' }}>
          <span className="d-flex justify-content-center">
            <p className="h4 font-weight-bold text-center">{user.nomeCompleto}</p>
            <Link
              className='ml-3'
              to={`/edit/${user.id}`}
            >
              <EditOutlined style={{ fontSize: "25px" }} />
            </Link>
          </span>
          <p className='h5'>{user.postagem}</p>
          <p className='h6'>{user.email}</p>
          <p className='h6'>{user.created_at}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
