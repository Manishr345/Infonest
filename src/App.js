import { useState } from 'react';
import './App.css';
import Categories from './Components/Categories/Categories.js';
import Navbar from './Components/Navbar/Navbar.js';
import News from './Components/News/News';

function App() {
  const [clickCat, setClickCat] = useState('');
  const onCat = () => {
    if(clickCat === null){
      setClickCat(1)
    }
    else{
      setClickCat(null)
    }
  }
  const [cat, setCat] = useState(null);
  const business = () => {
    setCat('&category=business');
  }
  const entertainment = () => {
    setCat('&category=entertainment');
  }
  const general = () => {
    setCat('&category=general');
  }
  const health = () => {
    setCat('&category=health');
  }
  const science = () => {
    setCat('&category=science');
  }
  const sports = () => {
    setCat('&category=sports');
  }
  const technology = () => {
    setCat('&category=technology');
  }
  return (
    <div className="App">
      <Navbar onCat={onCat}/>
      <Categories clickCat={clickCat} business={business} entertainment={entertainment} general={general} health={health} science={science} sports={sports} technology={technology}/>
      <News cat={cat}/>
    </div>
  );
}

export default App;
