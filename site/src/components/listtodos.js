import React,{Fragment, useEffect, useState} from 'react'
import Edittodo from './edittodo'

const Listtodos = () => {

    const [todos, settodos] = useState([]);
    
    const deletetodo = async(id) => {
        try {
            await fetch("http://localhost:5000/todos/"+id,
            {
                method:"DELETE"
            });
            settodos(todos.filter(todo=>todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const Gettodos = async() => {

        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsondata = await response.json();

            settodos(jsondata);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(()=>{
        Gettodos();
    },[]);

    console.log(todos);

    return (
    <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
          {todos.map(todo => { return (
              <tr key={todo.todo_id}>
                  <td>{todo.description}</td>
                  <td><Edittodo todo={todo}/></td>
                  <td><button className="btn btn-danger" onClick={()=>deletetodo(todo.todo_id)} >Delete</button></td>
              </tr>
          )
          })}
    </tbody>
    
  </table>
    </Fragment>
    )
}

export default Listtodos