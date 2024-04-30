// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(prevInput => prevInput + value);
  };

  const evaluateExpression = () => {
    try {
      const result = evaluate(input);
      setResult(result.toString());
    } catch (error) {
        setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const evaluate = (expression) => {
    // Split the expression by arithmetic operators
    const tokens = expression.split(/([+\-*\/])/);

    // Initialize result to the first number
    let result = parseFloat(tokens[0]);

    // Iterate through tokens and perform arithmetic operations
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      // Check if the operand is a valid number
      if (isNaN(operand)) {
        throw new Error('Invalid expression');
      }

      // Perform arithmetic operation based on the operator
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          // Check for division by zero
          if (operand === 0) {
            if (result === 0) {
              return 'NaN';
            } else {
              return 'Infinity';
            }
          }
          result /= operand;
          break;
        default:
          throw new Error('Invalid operator');
      }
    }

    return result;
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className='result'>{result}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={evaluateExpression}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <button className="clear-button" onClick={clearInput}>Clear</button>
    </div>
  );
};

export default Calculator;
