import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Jobs(props) {
    return (
        <div className="jobs-div">
            <h1>{props.about.company}</h1>
            <h2>{props.about.title}</h2>
            <p>{props.about.desc}</p>
            <button className="admin-update-btn"> Update</button>
        </div>
    )
}
class Admin extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        axios.post('https://workstreet.herokuapp.com/admin/read', this.props).then((res) => {
            console.log(res)
            const jobs = res.data
            this.setState({ jobs })
        })
    }

    render() {
        // eslint-disable-next-line camelcase
        const jobs_component = this.state.jobs.map((item, i) => {
            return <Jobs key={i} about={item} />
        })
        // eslint-disable-next-line camelcase
        return <div className="adminpage-div-3">{jobs_component}</div>
    }
}
export default Admin
