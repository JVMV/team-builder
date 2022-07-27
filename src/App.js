import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      <Form name={teamList.name} email={teamList.email} role={teamList.role}/>
    </div>
  );
}

export default App;
