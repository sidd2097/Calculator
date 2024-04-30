import React, {useState} from 'react';
import './Calculator.css';

const Calculator = ()=> {
    const [input, setInput] = useState('');

    const handleButtonClick = (value)=> {
        setInput(prevInput => prevInput + value);
        console.log(input, 'input')
    };

    const evaluateExpression = ()=> {
        try {
            const result = eval(input);
            console.log(result, 'result')
            setInput(result.toString());
        } catch (error){
            setInput('Error');
        }
    };

    const clearInput = ()=> {
        setInput('');
    };

    return (
        <div className='calculator'>
            <h1>React Calculator</h1>
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={()=> handleButtonClick('7')}>7</button>
                <button onClick={()=> handleButtonClick('8')}>8</button>
                <button onClick={()=> handleButtonClick('9')}>9</button>
                <button onClick={()=> handleButtonClick('+')}>+</button>

                <button onClick={()=> handleButtonClick('4')}>4</button>
                <button onClick={()=> handleButtonClick('5')}>5</button>
                <button onClick={()=> handleButtonClick('6')}>6</button>
                <button onClick={()=> handleButtonClick('-')}>-</button>

                <button onClick={()=> handleButtonClick('1')}>1</button>
                <button onClick={()=> handleButtonClick('2')}>2</button>
                <button onClick={()=> handleButtonClick('3')}>3</button>
                <button onClick={()=> handleButtonClick('*')}>*</button>

                <button onClick={()=> handleButtonClick('0')}>0</button>
                <button onClick={()=> handleButtonClick('.')}>.</button>
                <button onClick={evaluateExpression}>=</button>
                <button onClick={()=> handleButtonClick('/')}>/</button>
                
            </div>
            <button className='clear-button' onClick={clearInput}>Clear</button>
        </div>
    )
};

export default Calculator;