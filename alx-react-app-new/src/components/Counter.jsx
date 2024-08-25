import {useState} from 'react';
 export default function Counter(){
    const[count,setCount]=useState(0);
    return (
      <div>
        <h3>
            Counter:{count}
        </h3>
        <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
        <button
          onClick={function () {
            setCount(count - 1);
          }}
        >
          Decrement
        </button><br></br>
        <button
          onClick={function () {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    );
 }