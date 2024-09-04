import React, { useEffect } from 'react';
import './DarkMode.css';
import moon from './moon.png';
import sun from './sun.png';

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  };

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    const img = document.getElementById('icon');

    if (body?.getAttribute('data-theme') === 'dark') {
      img.src = moon;
      setLightMode();
    } else {
      img.src = sun;
      setDarkMode();
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.querySelector('body').setAttribute('data-theme', storedTheme);
      const img = document.getElementById('icon');
      img.src = storedTheme === 'dark' ? moon : sun;
    }
  }, []);

  return (
    <div className="toggle-container" onClick={toggleDarkMode}>
      <img src={moon} alt="ThemeIcon" id="icon" width={25} height={25} />
    </div>
  );
};

export default DarkMode;
