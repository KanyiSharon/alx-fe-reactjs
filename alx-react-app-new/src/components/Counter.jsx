import {useState} from 'react';
 export default function Counter(){
    const[count,setCount]=useState(0);
    return (
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={function(){setCount(count-1)}}>Decrement</button>
        <button onClick={function(){setCount(0)}}>Reset</button>
      </div>
    );
 }