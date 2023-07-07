import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [click, setClick] = useState(0)
  const handleButtonClick = () => {
    setClick(click + 1);
  }
  const handleButtonUnclick = () => {
    setClick(click - 1);
  }

  return (
    <div className="App">
      <span>Button clicked {click} times</span>
      <Button handleButtonClick={handleButtonClick} BtnText={'Click'} />
      <Button handleButtonClick={handleButtonUnclick} BtnText={'Unclick'} />
    </div>
  );
}

export default App;