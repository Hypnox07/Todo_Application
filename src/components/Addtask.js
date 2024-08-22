import React,{useEffect, useState} from 'react'
import "./Addtask.css"

const Addtask = ({allTodos,setTodos}) => {
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState('')

  const handleAdd =(event)=>{
    event.preventDefault()
   

   if(title===''&&description===''){
    alert('Please fill the fields')
   }else{
    let newTodoItem={
      title,
      Description:description
    }
   let updatedTodoArr=[newTodoItem,...allTodos];
  //  updatedTodoArr.push(newTodoItem)
   setTodos(updatedTodoArr);
   localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
   setTitle('');
   setDescription('');
   }
  };

  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])
  return (
    <div>
        <form onSubmit={handleAdd}>
            <div className='Addtask'>
                <div>
                <label className='title'>Title</label><br/>
            <input  placeholder="What's the task title" type='text'  value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                </div>
           <div className='desc-box'>
           <label className='desc'>Description</label><br/>
            <input  placeholder="What's the task description" type='text'  value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
            <button className='add' type='submit'>ADD</button>
           </div>
          
            </div>
           
           
            <div className='line'></div>
        </form>
    </div>
  )
}

export default Addtask