import React, {useState} from 'react';


function Toggle(){
    const [toggles, setToggles] = useState(false)
    const [hide, setHide] = useState(false)
    return(
        <div>
        {/* <h1></h1> */}
        <button onClick = {()=> setToggles(!toggles)}>{toggles ? "ON":"OFF"}</button>
        <button onClick = {()=> setHide(!hide)}>{!hide? 'display details' : 'hide details'}</button>
           {hide&&(<p>welcome to our app</p>)}
    </div>
     
    )   
}
export default Toggle;