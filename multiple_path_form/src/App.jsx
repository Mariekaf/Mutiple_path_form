import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YourInfo from './pages/YourInfo';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import SelectPlan from './pages/SelectPlan';
import './App.scss';
import Thanks from './pages/Thanks';
const App = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [isCard4Selected, setCard4Selected] = useState(false);
  const [isCard5Selected, setCard5Selected] = useState(false);
  const [isCard6Selected, setCard6Selected] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [choix, setChoix] = useState();

  const [choix4, setChoix4] = useState();
  const [choix5, setChoix5] = useState();
  const [choix6, setChoix6] = useState();

  const handleClick = (id) => {
    setIsClicked(id);

    if (id >= 1 && id <= 3) {
      setChoix(id);
    }

    if (id === 4) {
      setCard4Selected(!isCard4Selected);
      setChoix4(isCard4Selected ? null : 4);
    }

    if (id === 5) {
      setCard5Selected(!isCard5Selected);
      setChoix5(isCard5Selected ? null : 5);
    }

    if (id === 6) {
      setCard6Selected(!isCard6Selected);
      setChoix6(isCard6Selected ? null : 6);
    }
  };
  console.log(choix4, " ", choix5, " ", choix6);
  useEffect(() => {
    console.log("le choix  est " + " " + choix4 + " " + "apres le use effect")
  }, [choix4]);
  useEffect(() => {
  }, [choix5]);
  useEffect(() => {
  }, [choix6]);
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<YourInfo />} />
          <Route path="/SelectPlan" element={<SelectPlan isClicked={isClicked} handleClick={handleClick} toggle={toggle} setToggle={setToggle} />} />
          <Route path="/AddOns" element={<AddOns isClicked={isClicked} handleClick={handleClick} isCard4Selected={isCard4Selected}
            isCard5Selected={isCard5Selected}
            isCard6Selected={isCard6Selected} toggle={toggle} setToggle={setToggle} setChoix4={setChoix4} setChoix5={setChoix5} setChoix6={setChoix6} />} />
          <Route path="/Summary" element={<Summary choix={choix} choix4={choix4} choix5={choix5} choix6={choix6} toggle={toggle} />} />
          <Route path="/Thanks" element={<Thanks/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>

    </div>

  );
};
export default App;