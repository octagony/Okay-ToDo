import React,{useState} from 'react'
import Todoitem from './item/Todoitem'
import CreateTodoField from './item/create-todo-field/CreateTodoField'

const data = [
    {
        id:'w2wd9asd',
        title:'Finish the collab',
        isCompleted: false,
    },
    {
        id:'w2wd9a9312d',
        title:'Read next chapater of the book',
        isCompleted: false,
    },
    {
        id:'w2wd9a9312sd12d',
        title:'Go to training',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id =>{
        const copy = [...todos];
        const current = copy.find(t=>t.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))
    

    return (
        <div className='text-white w-4/5 mx-auto'>
        
        <h1 className='text-2xl font-bold text-center mb-10'>Okay, ToDo</h1>
        {todos.map(todo => (<Todoitem 
        key={todo.id} 
        todo={todo} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo}/>
        ))}
        <CreateTodoField setTodos={setTodos}/>
    </div>
    )
}

export default Home