import {useState} from 'react';
import "./list.css"
function List (){
    const[list, setList]= useState(['breakfast','lunch'])
    const[text, setText]= useState()
    const[toggle, setToggle]= useState(false)
    return(
        <div>
           {
             list.map((number)=> (
                toggle ? (
                    <ul >
                    <li className='list'>
                        {number}
                    </li>
                </ul>
                ):(
                    <ol type='A'>
                    <li className='list'>
                        {number}
                    </li>
                </ol>
                )
             ))
           }
            <input type='text' onChange={(e)=> setText(e.target.value)}/>
            <button onClick={()=>setList([...list, text])}>click</button>
            <button onClick= {() =>setToggle(!toggle )}>Toggle</button>
           
        </div>
    )
}
export default List;