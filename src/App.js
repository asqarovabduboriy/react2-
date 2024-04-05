import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import Main from "./components/main/Main.js";
import Category from './components/category/Category.js';
import Card from './components/cards/Card.js';


function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Category />
      <Card/>
    </>
  );
}

export default App;
