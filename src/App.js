import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(null);

  const appendNumber = (number) => {
    setCurrentOperand((prev) => prev + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
      calculate();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

  const calculate = () => {
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    let computation;
    switch (operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '/':
        computation = prev / curr;
        break;
      case '%':
        computation = prev % curr;
        break;
      default:
        return;
    }
    setCurrentOperand(computation);
    setPreviousOperand('');
    setOperation(null);
  };

  const clear = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(null);
  };

  const deleteLast = () => {
    setCurrentOperand((prev) => prev.slice(0, -1));
  };

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two' onClick={clear}>AC</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => chooseOperation('%')}>%</button>
      <button onClick={() => appendNumber('1')}>1</button>
      <button onClick={() => appendNumber('2')}>2</button>
      <button onClick={() => appendNumber('3')}>3</button>
      <button onClick={() => chooseOperation('*')}>*</button>
      <button onClick={() => appendNumber('4')}>4</button>
      <button onClick={() => appendNumber('5')}>5</button>
      <button onClick={() => appendNumber('6')}>6</button>
      <button onClick={() => chooseOperation('+')}>+</button>
      <button onClick={() => appendNumber('7')}>7</button>
      <button onClick={() => appendNumber('8')}>8</button>
      <button onClick={() => appendNumber('9')}>9</button>
      <button onClick={() => chooseOperation('-')}>-</button>
      <button onClick={() => appendNumber('.')}>.</button>
      <button onClick={() => appendNumber('0')}>0</button>
      <button className='span-two' onClick={calculate}>=</button>
    </div>
  );
};

export default App;
