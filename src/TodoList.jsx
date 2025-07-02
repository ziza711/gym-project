import {useState} from 'react'
function TodoList(){
    const[list,setList]=useState(["breakfast","lunch","dinner"]);
    const[text,setText]=useState()
    const [ischecked,setIsChecked]=useState({})
    return(
        <div>
            <input type='text' placeholder='enter your name' onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>setList([...list, text])}>click</button>
            <span>{text}</span>
            {list.map((text,index)=>(
                <div className='flex-container'>
                    <input type="checkbox" onChange={(e)=>{
                        setIsChecked({
                        ...ischecked,
                        id:text,
                        checked:e.target.value
                    })
                    }}/>
                    <p>{text}</p>
                    <button onClick={()=>{
                        list.splice(index,1)
                        setList(list)
                    }}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoList;