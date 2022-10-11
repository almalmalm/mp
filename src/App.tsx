import React from 'react';
import './styles/App.css';
import About from './components/About';
import Greetings from './components/Greetings';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Working from './components/Working';

function App() {
  return (
    <div className="App">
      <Greetings />
      <About />
      <Working />
      <Services />
      <Reviews />
    </div>
  );
}

export default App;
