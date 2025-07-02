
import React, {useState} from 'react';
import App from './App.jsx';


function Counter (){
    const [count, setCount] = useState(0);
    return (
        <div>
   <h1>count:{count}</h1>
   <button onClick ={ () => setCount(count + 1)}>increment</button>
   <button onClick = {() => count > 0 && setCount(count - 1)}>decrement</button>

   </div>
    )
}

export default Counter;
