import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function AdminPosters(props) {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.post('https://workstreet.herokuapp.com/admin/read', { ...props }).then((res) => {
            setJobs(res.data)
        })
    }, [props.section])

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
                    </div>
                )
            })}
        </div>
    )
}
export default AdminPosters
