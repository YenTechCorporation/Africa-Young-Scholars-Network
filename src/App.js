import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './screens/Home'
import Footer from './components/Footer'
//TODO https://www.monde-diplomatique.fr
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
