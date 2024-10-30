import { useState } from 'react';
import './App.css';
import Categories from './Components/Categories/Categories.js';
import Navbar from './Components/Navbar/Navbar.js';
import News from './Components/News/News';
import Signup from './Components/Signup/Signup.js';
import Login from './Components/Login/Login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [isLogin, setLogin] = useState(null);
  const [setHome, settingHome] = useState(null);

  const doneLogin = () => {
    setLogin(null);
    settingHome(1);
  }

  const [clickCat, setClickCat] = useState('');
  const onCat = () => {
    if (clickCat === null) {
      setClickCat(1)
    }
    else {
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
      <Router>
        <Navbar onCat={onCat} setHome={setHome} />
        <Categories clickCat={clickCat} business={business} entertainment={entertainment} general={general} health={health} science={science} sports={sports} technology={technology} />
        <Signup isLogin={isLogin} setLogin={setLogin} doneLogin={doneLogin}/>
        <Routes>
          <Route exact path='/signup' element={<Signup isLogin={isLogin} setLogin={setLogin} doneLogin={doneLogin} />}/>
          <Route exact path='/login' element={<Login isLogin={isLogin} doneLogin={doneLogin} />}/>
          <Route exact path='/home' element={<News setHome={setHome} cat={cat} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
