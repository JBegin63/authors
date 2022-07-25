import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response.data);
                setAuthorName(response.data.name);
            })
            .catch((err) => console.log(err));
    }, [id])
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/author/${id}`, {name: authorName})
            .then((response) => {
                console.log(response)
            })
            .catch((err) => console.log(err.response.data.err.errors))
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p className='purple-text'>Add a new author: </p>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='col-3 pt-2'>
                        <form onSubmit={submitHandler}>
                            <div className='form-group'>
                                <label htmlFor="name" className='form-control'>Name:</label>
                                <input 
                                type="text" 
                                name='name' 
                                className='form-control' 
                                onChange={(e) => setAuthorName(e.target.value)}
                                value={authorName}
                                />
                                {errors.name ? <p>{errors.name.message}</p> : null}
                            </div>
                                <button className='btn btn-success mt-2' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAuthor