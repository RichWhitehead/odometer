import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Odometer from './Odometer';



function App() {
  return (
    <div className="App">
      <Header greeting = "Hello! Welcome to my Odometer" />
      <Odometer />
      <Footer trademark = "Odometer"/>
      

    </div>
  );
}

export default App;
