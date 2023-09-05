import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/action';
import EditTask from './EditTask';



const CardTask = ({task}) => {
  const dispatch=useDispatch();

  return (
    <div>
      
      <h1 id={task.isDone ? "comp" : "unc"}>{task.action}</h1>
      <button onClick={()=>dispatch(handleDelete(task.id))}>delete</button>
      <button onClick={()=>dispatch(handleComplete(task.id))}>{task.isDone?"undo":"complete"}
      
      </button>
      
      <EditTask task={task}/>
      
    </div>
  )
}

export default CardTask