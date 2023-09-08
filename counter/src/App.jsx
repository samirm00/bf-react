import { useState } from 'react';

import './App.css';
import Button from './components/Button';

const App = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount((previousCount) => previousCount + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <Button clickHandler={clickHandler} />
        </div>
    );
};

export default App;
