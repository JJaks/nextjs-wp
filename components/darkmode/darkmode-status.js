import useDarkMode from '@fisch0920/use-dark-mode';

const DarkModeStatus = () => {
    const { value } = useDarkMode(false);

    return value ? 'Dark Mode' : 'Light Mode';
};

export default DarkModeStatus;