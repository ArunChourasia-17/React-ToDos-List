import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onsubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="desc"/>
                </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
