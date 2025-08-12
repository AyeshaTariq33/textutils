import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [Mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light';
  });
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  };
  // useEffect(() => {
  //   document.body.style.backgroundColor = Mode === 'dark' ? '#042743' : 'white';
  // }, [Mode]);
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze." />
      </div>
    </>
  );
}
export default App;
