import './App.css';
import Header from './components/Header';
import Addtask from './components/Addtask';
import Addlist from './components/Addlist';
import { useState } from 'react';
import { Footer } from './components/Footer';



function App() {
  const[allTodos,setTodos]=useState([]);
  

  return (
    <div className='App'>
      <Header/>
    <main>
    <Addtask allTodos={allTodos} setTodos={setTodos}/>
      <Addlist allTodos={allTodos} setTodos={setTodos}/>

    </main>
    <Footer/>

     
    </div>
  )

  
}

export default App;
