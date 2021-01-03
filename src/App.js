import React from 'react';
import Login from './components/Login'
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  render(){
    return (
      <div className="App">
        <img src={logo} className="Delicious Burger" alt="logo" />
        <hr></hr> 
        <Login/>


      </div>
  );
  }
  
}

export default App;
