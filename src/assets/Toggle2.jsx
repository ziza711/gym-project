 
import {useState} from 'react'
function Toggle2(){
    const[toggle,setToggle]= useState(false)
    return(
        <div>
        <button style= {{color:toggle?'green':'gray',cursor:'pointer'}} onClick={()=> setToggle(!toggle)}>{toggle?'ON' : 'OFF'}</button>
        </div>
    )
}
export default Toggle2;