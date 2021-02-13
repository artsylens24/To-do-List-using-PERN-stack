import React,{Fragment, useState} from 'react'

const Inputtodo = () => {

    const [description, setdescription] = useState("");

    const submitform = async event =>{
        event.preventDefault();
        try {
            const body = {description};
            await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5" >input todo</h1>
            <form className="d-flex mt-5" onSubmit={submitform} >
                <input 
                    type="text" className="form-control" 
                    value={description} 
                    onChange={event=>setdescription(event.target.value)} 
                    placeholder="type something"/>
                <button className="btn btn-success">add</button>
            </form>
        </Fragment>
    )
}

export default Inputtodo