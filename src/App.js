import React , {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div classname='container'> 
      <h2>BMI Calculator</h2>
      <form>
        <div>
          <label>weight (lbs)</label>
          <input type="text" placeholder= "enter weight value" value={weight} />
        </div>
        <div>
          <label>height (lbs)</label>
          <input type="text" placeholder= "enter height value" value={height} />
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
      </form>
      </div>
    </div>
  );
}

export default App;
