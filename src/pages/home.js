import React from 'react';
import { useHistory } from 'react-router-dom';

// import api from '../../services/api';

export default function Logon(){
  const history = useHistory();

  function goCalc(){history.push('/calc');}
  function goData(){history.push('/data');}

  return(
    <div className="logon-container">
      <section className="form">
          <h1>Hello World</h1>
          <div>
          <button className="button" onClick={goCalc}>Count</button>
          <button className="button" onClick={goData}>Data</button>
          </div>
      </section>
    </div>
  );
}