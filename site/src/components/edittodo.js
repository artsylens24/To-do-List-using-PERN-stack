import React,{Fragment, useState} from 'react'

const Edittodo = ({todo}) => {

    const [description,setdescription]=useState(todo.description);

    const updatedescription = async(event) => {
        event.preventDefault();
        try {
            const body = {description};
            await fetch("http://localhost:5000/todos/"+todo.todo_id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/"
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>

<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>


<div class="modal" id={`id${todo.todo_id}`} onClick={()=>setdescription(todo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Edit todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setdescription(todo.description)}>&times;</button>
      </div>


      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={event=>setdescription(event.target.value)}/>
      </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={event=>updatedescription(event)} >Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setdescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default Edittodo