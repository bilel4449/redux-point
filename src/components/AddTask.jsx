import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleFilter } from '../redux/action';

const AddTask = () => {
    const { filters } = useSelector((state) => state);
    const [action, setAction] = useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const task={
            id:Math.random(),
            action,
            isDone:false
        }
    
        dispatch(handleAdd(task))
        setAction("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={action} onChange={(e)=>setAction(e.target.value)} />
            <button type="submit">add</button>
        </form>
        <button onClick={() => dispatch(handleFilter())}>
        {filters ? "Show All" : "Show Uncompleted"}
      </button>
    </div>
  )
}

export default AddTask