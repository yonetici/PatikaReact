import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import AraKatman from './araKatman';
class App extends Component {
  render(){
    const sayi=43;
    const dogruMu= false;
    const myArray = [{
      id:1,
      title:"Hiper",
      description:"React"
    },
    {
      id:2,
      title:"Süpper",
      description:"React Öğrenmek"
    },
    {
      id:3,
      title:"Marvelous",
      description:"React Projesi"
    }];
  return (
    <div className="App">
      <header className="App-header">
        <AraKatman myArray={myArray} />
        <img src={logo} className="App-logo" alt="logo" />
        <h4>{sayi}</h4>
        <p>
          Edit {2+2} <code>src/App.j s</code> and {"save".toUpperCase()} to reload.
        </p>
        {
          dogruMu ? "Kullanıcı var" : "Kullanıcı yok"
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JS </a>



      </header>
    </div>
  );
  }
}

export default App;
