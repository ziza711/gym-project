import {useEffect, useState} from 'react';

function FecthData() {
    const [posts, setPosts]= useState([]);
    const [,setInput] = useState("")
    const fecthData = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET'
        })
        .then((res)=>{
            return res.json()
        })
        .then((response) => {
            setPosts(response)
            console.log(response)
        })
        .catch((error)=> {console.log('went wrong:',error)})
        
    }
    useEffect(()=> {fecthData()},[]) 

    return(
        <>
        <div className='flex-container'>
        {posts.map((post)=> (
          
            <div className='card'>
            <tr>{post.userId}</tr>
            <tr>{post.body}</tr>
            <tr>{post.id}</tr>
            <tr>{post.title}</tr>
            
          </div>  
          
        )
       
        )}

         </div>
        </>
    )
}
export default FecthData;