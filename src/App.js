import React , {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <div classname='container'> 
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>weight (lbs)</label>
          <input type="text" placeholder= "enter weight value" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>height (lbs)</label>
          <input type="text" placeholder= "enter height value" value={height} onChange={(event) => setHeight(event.target.value)} />
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
