"use client";
import React,{useState} from 'react';

const Page = () => { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
  
    e.preventDefault();
    // console.log(title);
    // console.log(description);
    setMainTask([...mainTask, {title, description}]);
    setTitle("");
    setDescription("");
  }

  const deleteHandler = (index) => {
    const newTask = [...mainTask];
    newTask.splice(index, 1);
    setMainTask(newTask);
  }

  let renderTask = <h2>No task Available </h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index}
        className='flex items-center justify-between mb-5 w-2/3'>
        <div className='flex items-center justify-between mb-5'>
          <h5 className='text-2xl font-bold px-5'>{task.title}</h5>
          <h6 className='text-xl'>{task.description}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(index);
        }}
        className='bg-red-400 text-white px-4 py-2 rounded font-bold mb-5'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
    <h1 className='text-white bg-black p-5 text-2xl font-bold text-center'>
      Rana Jay's Todo List
    </h1>

    <form onSubmit={submitHandler}>
      <input 
        typr='text'
        className='text-2xl rounded border-zinc-800 border-4 m-2 px-4 py-2'
        placeholder='Enter Task here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

<input 
        typr='text'
        className='text-2xl rounded border-zinc-800 border-4 m-2 px-4 py-2'
        placeholder='Enter Description here'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className='bg-black text-white text-2xl px-4 py-2 rounded'
      >
        Add Task
      </button>
    </form>

    <hr/>
    <h1 className='font-bold text-2xl m-2 text-center flex items-center justify-between'>TASKS</h1>
    
    <div className='m-5 p-8 bg-slate-200'>
      {renderTask}
    </div>
    </>
  );
}

export default Page;
