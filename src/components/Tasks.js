import React from 'react'
import { ToastContainer } from 'react-toastify'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import '../css/Tasks.css'
import { OngoingTask } from './AssignedTasks'

class Tasks extends React.Component {
    static contextType = GoogleAuthContext
    state = {
        expired: [],
        ongoing: []
    }
    // a task object can will have a title, describe(link to the pdf), deadline, submission(link of the user submission)

    componentDidMount = () => {
        const expired = []
        const ongoing = []
        const today = new Date()
        this.context.tasks.forEach((task, ind) => {
            const deadline = new Date(task.deadline)
            if (today <= deadline) ongoing.push({ ...task, ind: ind, company: 'Signo' })
            else expired.push({ ...task, ind: ind, company: 'Signo' })
        })
        this.setState({
            expired: expired,
            ongoing: ongoing
        })
    }

    render() {
        const condn = Boolean(this.context.tasks && this.context.tasks.length)
        return (
            <div className="Tasks-container">
                <hr
                    style={{ width: '80%', border: '1px solid black', margin: '20px 0 40px 0' }}
                ></hr>
                <ToastContainer />
                {condn ? (
                    <>
                        <h1 className="Tasks-h1">Assigned Tasks</h1>
                        <div className="Tasks-list-container">
                            <div className="Tasks-card-container">
                                <h2>Current Task</h2>
                            </div>
                            {this.state.ongoing.map((task, ind) => {
                                return <OngoingTask key={ind} task={task} />
                            })}
                            <div className="Tasks-card-container">
                                <h2>Completed Task</h2>
                            </div>
                        </div>
                    </>
                ) : (
                    <h3> All the tasks assigned to you are going to appear here</h3>
                )}
            </div>
        )
    }
}

export default Tasks
