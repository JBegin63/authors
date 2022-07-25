import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayAll = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/author")
            .then((response) => {
                console.log(response.data)
                setAllAuthors(response.data)
            })
            .catch((err) => console.log(err.response));
    }, []);

    const handleDeleteAuthor = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/author/${idFromBelow}`)
            .then((response) => {
                console.log('success deleting author')
                console.log(response)
                const filteredAuthors = allAuthors.filter(author => {
                    return author._id !== idFromBelow;
                });
                setAllAuthors(filteredAuthors);
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Link to='/new'>Add a new author:</Link>
            <p className='purple-text'>We have quotes by:</p>
            <div className='container'>
                <div className='row'>
                    <div className='px-5'>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th scope='col'>Authors</th>
                                    <th scope='col'>Actions available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allAuthors.map((author, index) => {
                                    return (
                                        <tr key={author._id}>
                                            <td>{author.name}</td>
                                            <td>
                                                <Link to={`/edit/${author._id}`}>
                                                    <button className='btn btn-success'>
                                                        Edit
                                                    </button>
                                                </Link>
                                                <button className='btn btn-warning' onClick={() => handleDeleteAuthor(author._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayAll