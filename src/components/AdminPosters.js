import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function AdminPosters(props) {
    const [jobs, setJobs] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.post('https://workstreet.herokuapp.com/admin/read', { ...props }).then((res) => {
            setJobs(res.data)
        })
    }, [props.section, count])

    const deletePost = (id) => {
        if (window.confirm('Are you sure that the post is required to be deleted')) {
            axios
                .post('https://workstreet.herokuapp.com/admin/delete', { ...props, id: id })
                .then((res) => {
                    setCount(count + 1)
                })
                .catch((err) => {
                    window.alert("Sorry can't delete because,", err.message)
                })
        }
    }

    return (
        <div className="adminpage-div-3">
            {jobs.map((item, i) => {
                return (
                    <div className="jobs-div" key={i}>
                        <h1>{item.company}</h1>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <NavLink
                            className="admin-update-btn"
                            to={{
                                pathname: '/admin/postform',
                                details: {
                                    ...jobs[i],
                                    id: i,
                                    section: props.section
                                }
                            }}
                        >
                            Update
                        </NavLink>
                        <button
                            className="admin-update-btn"
                            onClick={(e) => {
                                deletePost(i)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default AdminPosters
