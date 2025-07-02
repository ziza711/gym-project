import React, {useState} from 'react';
function Input(){
    const [inputs, setInput] = useState("")
    return (
        <div>
            <input type = 'text' placeholder ='inter text' onChange={(e)=>setInput(e.target.value)} style={{color:'green'}}/>
            <span style={{color:'blue'}}>{inputs}</span>
        </div>
    )
}
export default Input;