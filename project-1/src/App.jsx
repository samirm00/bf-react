import { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
    const num = 0;
    // const [num, setNum] = useState(0);
    const clickHandler = () => {
        // setNum(num + 1);
    };

    return (
        <div>
            <h1>{num}</h1>
            <Button clickHandler={clickHandler} />
        </div>
    );
};

export default App;
