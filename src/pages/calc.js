import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../api';

export default function Logon() {
  const history = useHistory();
  const [count, setCount] = useState(0);

  const goBack = () => history.push('/');
  const Add = () => setCount(count + 1)
  const Save = async () => await api.post('data', { count });

  return (
    <div className="logon-container">
      <section className="form">
        <h1>Hello World</h1>
        <h1 id="out">{count}</h1>
        <button onClick={goBack} value="Home">Home</button>
        <button onClick={Add} value="Home">Add</button>
        <button onClick={Save} value="Home">Save</button>
      </section>
    </div>
  );
}