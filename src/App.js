import React,{useState} from 'react';

import './App.css';
import UserForm from './components/Form/UserForm';
import Users from './components/Users/Users';

function App() {

  const [userdata,setUserData]=useState([]);


  const saveUserHandler =(user)=>{
    const users={
      ...user,
      id:Math.random().toString()
    };
    setUserData((prevusers)=>{
      return[users,...prevusers]
    })
  }
  console.log(userdata)
  return (
    <div className="App">
      <UserForm onSaveUserData={saveUserHandler}/>
      <Users users={userdata}/>
    </div>
  );
}

export default App;
