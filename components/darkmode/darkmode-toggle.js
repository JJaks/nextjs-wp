import React from 'react';
import useDarkMode from '@fisch0920/use-dark-mode';
import Toggle from './toggle';

const DarkModeToggle = () => {
    const darkMode = useDarkMode();

    // Weird fix for the dark mode toggle not working whilst it's true
    if (typeof window === 'undefined') return null;

    return (
        <div id="toggle-div">
            <button id="toggle-button" type="button" onClick={darkMode.disable}>
                <img className="light-mode-icon" src="/images/light-mode.svg" alt="Light mode icon"></img>
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} onClick={darkMode.disable}/>
            <button id="toggle-button" type="button" onClick={darkMode.enable}>
                <img className="dark-mode-icon" src="/images/dark-mode.svg" alt="Dark mode icon"></img>
            </button>
        </div>
    );
};

export default DarkModeToggle;