import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../api';

export default function Data() {
  const history = useHistory();
  const [data, setData] = useState([]);

  const goBack = () => history.push('/');

  const getData = async () => {
    await api.get('data')
      .then(response => setData(response.data));
  }

  return (
    <div className="profile-container">
      <header>
        <h1>Dados</h1>
        <div>
          <button onClick={getData}>Refresh</button>
          <button onClick={goBack}>Home</button>
        </div>
      </header>

      <h2>Dados cadastrados</h2>

      <ul>
        {data.map(data => (
          <li key={data.id}>
            <p>{data.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}