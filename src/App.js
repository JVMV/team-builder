import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const blankValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamList, setTeamList] = useState([]);

  const [formValues, setFormValues] = useState(blankValues)

  const updateForm = (input, value) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [input]: value });
  }

  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(newMember.name && newMember.email && newMember.role) {
      setTeamList(teamList.concat(newMember));
      setFormValues(blankValues);
    } else {
      return 'All fields required';
    }
  }

  return (
    <div className="App">
      <Form name={teamList.name} email={teamList.email} role={teamList.role} update={updateForm} submit={formSubmit}/>
    </div>
  );
}

export default App;
