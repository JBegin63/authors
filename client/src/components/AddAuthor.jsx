import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/author", { name })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p className='purple-text'>Add a new author: </p>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='col-5 pt-2'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name" className='form-control'>Name:</label>
                                <input 
                                type="text" 
                                name='name' 
                                className='form-control' 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                />
                                {errors.name ? <p>{errors.name.message}</p> : null}
                            </div>
                            <div className='form-group pt-4'>
                                <button className='btn btn-success m-1' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAuthor