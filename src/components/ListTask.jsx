import React from 'react'
import { useSelector } from 'react-redux'
import CardTask from './CardTask'


const ListTask = () => {
  const {todos,filters}=useSelector(state=>state)

  return (
    <div>
        {filters?
        todos
        
        
      .filter((el) => el.isDone === false)
      .map((el)=><CardTask key={el.id} task={el}/>)
      : todos.map((el) => <CardTask key={el.id} task={el} />)
        }
       
    </div>
  )
}

export default ListTask