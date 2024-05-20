import React, { useState, useEffect } from 'react';

function App() {
    const [isDark, setIsDark] = useState(true);

    const toggleBackgroundColor = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? 'dark' : 'white';
    }, [isDark]);

    return (
        <div className="App">
            <button onClick={toggleBackgroundColor}>
                {isDark ? 'White Background' : 'Dark Background'}
            </button>
        </div>
    );
}

export default App;