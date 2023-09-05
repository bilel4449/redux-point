import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes"


export const handleAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }

}
export const handleDelete=(ID)=>{
    return{
        type:DELETE,
        payload:ID
    }

}
export const handleComplete=(THEID)=>{
    return{
        type:COMPLETE,
        payload:THEID
    }
}
export const handleEdit=(editTask)=>{
    return{
        type:EDIT,
        payload:editTask
    }
}
export const handleFilter=()=>{
    return{
        type:FILTER,
        
    }
}