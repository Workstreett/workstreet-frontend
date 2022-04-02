import React from 'react'
import { ToastContainer } from 'react-toastify'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import '../css/Tasks.css'
import AssignedTasks from './AssignedTasks'

class Tasks extends React.Component {
    static contextType = GoogleAuthContext
    state = {
        isEditing: [],
        submitted: [],
        showSubmitted: false
    }
    // a task object can will have a title, describe(link to the pdf), deadline, submission(link of the user submission)

    componentDidMount = () => {
        const editing = []
        const sub = []
        this.context.tasks.forEach((task, ind) => {
            if (task.submission === '') editing.push({ ...task, ind: ind })
            else sub.push({ ...task, ind: ind })
        })
        this.setState({
            isEditing: editing,
            submitted: sub
        })
    }

    enableEditing = (ind) => {
        const edit = this.state.isEditing
        const sub = this.state.submitted

        edit.push(sub[ind])
        sub.splice(ind, 1)

        this.setState({
            isEditing: edit,
            submitted: sub
        })
    }

    disableEditing = (ind, submission) => {
        const edit = this.state.isEditing
        const sub = this.state.submitted
        edit[ind].submission = submission

        sub.push(edit[ind])
        edit.splice(ind, 1)

        this.setState({
            isEditing: edit,
            submitted: sub
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
                            <h3>To Do</h3>
                            {this.state.isEditing.map((task, ind) => {
                                return (
                                    <AssignedTasks
                                        change={this.disableEditing}
                                        ind={ind}
                                        key={ind}
                                        task={task}
                                        email={this.context.email}
                                    />
                                )
                            })}

                            <div
                                className="Task-complete"
                                onClick={() =>
                                    this.setState((prev) => ({
                                        showSubmitted: !prev.showSubmitted
                                    }))
                                }
                            >
                                <h3>Completed</h3>
                                {this.state.showSubmitted ? (
                                    <i className="fas fa-caret-down"></i>
                                ) : (
                                    <i className="fas fa-caret-left"></i>
                                )}
                            </div>
                            {this.state.showSubmitted &&
                                this.state.submitted.map((task, ind) => {
                                    const disableEditing = new Date() > new Date(task.deadline)
                                    return (
                                        <div
                                            className={
                                                disableEditing
                                                    ? 'Tasks-list disabled'
                                                    : 'Tasks-list'
                                            }
                                            key={ind}
                                        >
                                            <i
                                                className={'fas fa-check '}
                                                onClick={() => {
                                                    if (!disableEditing) this.enableEditing(ind)
                                                }}
                                            ></i>
                                            <a
                                                href={task.submission}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {task.title}
                                            </a>
                                        </div>
                                    )
                                })}
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
