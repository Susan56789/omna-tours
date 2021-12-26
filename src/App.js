import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList/TourList';


const App = () => {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
