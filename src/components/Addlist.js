import React, { useEffect, useState } from 'react'
import "./Addlist.css"
import {AiFillDelete, AiOutlineCheck} from 'react-icons/ai'

const Addlist = ({allTodos,setTodos}) => {
  const [completedTodos,setCompletedTodos] = useState([]);
 const[click,setClick]=useState(true);

 const handleDeleteTodo=(index)=>{
       let reduceTodo=[...allTodos];
       reduceTodo.splice(index,1);

       localStorage.setItem('todolist',JSON.stringify(reduceTodo));
       setTodos(reduceTodo);
 }
 
 const handleComlplete=(index)=>{
  let now = new Date();
  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  let yyyy = now.getFullYear();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let completedOn = dd + '-'+ mm + '-' + yyyy +' '+ 'at'+' ' + h + ':' + m + ':' + s;

  let filteredItem = {
    ...allTodos[index],
    completedOn: completedOn

  }
  let updatedCompletedArr=[...completedTodos];
  updatedCompletedArr.push(filteredItem);
  setCompletedTodos(updatedCompletedArr);
  handleDeleteTodo(index);
  localStorage.setItem('completedTodos',JSON.stringify(updatedCompletedArr))
}
const handleDeletecompletedTodo =(index)=>{
  let reduceTodo=[...completedTodos];
       reduceTodo.splice(index,1);

       localStorage.setItem('completedTodos',JSON.stringify(reduceTodo));
       setCompletedTodos(reduceTodo);
 }

useEffect (()=>{
  let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
  if(savedCompletedTodo){
    setCompletedTodos(savedCompletedTodo);
  }
},[])

  return (
    <div className='Addlist'>
      <div className='filter'>
        <center>
            <button className={click?'active':'inactive'} onClick={()=>{setClick(true)}}>Todo</button>
        <button className={!click?'active':'inactive'} onClick={()=>{setClick(false)}}>Completed</button>
        </center>
    
        </div>
       <div className="tasklist">
       {click===true && allTodos.map((item,index)=>(
         <div className='tasklist-item' key={index}>
         <div>
       <h2>{item.title}</h2>
       <p>{item.Description}</p>
       </div>
       <div>
       <AiFillDelete className='icon' onClick={()=>{handleDeleteTodo(index)}}/>
       <AiOutlineCheck className='icon-check' onClick={()=>{handleComlplete(index)}}/>

       </div>
       </div>
        
       )  )}
       {click===false && completedTodos.map((item,index)=>(
         <div className='tasklist-item' key={index}>
         <div>
       <h2>{item.title}</h2>
       <p>{item.Description}</p>
       <p><small>Completed on : {item.completedOn}</small></p>

       </div>
       <div>
       <AiFillDelete className='icon' onClick={()=>{handleDeletecompletedTodo(index)}}/>
       {/* <AiOutlineCheck className='icon-check' onClick={()=>{handleComlplete(index)}}/> */}

       </div>
       </div>
        
       )  )}
       
       </div>
    </div>
  )
}

export default Addlist