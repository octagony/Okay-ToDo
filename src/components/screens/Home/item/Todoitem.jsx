import React from 'react'
import Check from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'


const Todoitem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className='flex items-center justify-between mb-5 rounded-3xl bg-zinc-800 p-5 w-full'>
            <button className='flex items-center' onClick={()=> changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
            <span className={cn({'line-through': todo.isCompleted})}>   {todo.title}
            </span>
            </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <BsTrash size={22} className='text-gray-600 hover:text-pink-500 transition-colors ease-in-out duration-400'/>
                </button>
        </div>
    )
}

export default Todoitem
