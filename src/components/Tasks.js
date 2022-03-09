import axios from 'axios'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import '../css/Tasks.css'
import { config } from '../env'

class Tasks extends React.Component {
    static contextType = GoogleAuthContext
    state = {
        isEditing: []
    }
    // a task object can will have a title, describe(link to the pdf), deadline, submission(link of the user submission)

    componentDidMount = () => {
        const obj = {}
        const arr = []
        this.context.tasks.forEach((task, i) => {
            obj[i] = task.submission
            arr.push(false)
        })
        this.setState({ ...obj, isEditing: arr })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (ind) => {
        try {
            const res = await axios.post(config.apiDomain + 'user/tasks/edit', {
                email: this.context.email,
                ind: ind,
                submission: this.state[ind]
            })
            toast.success(res.data, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            this.setState((prevState) => {
                prevState.isEditing[ind] = false
                return prevState
            })
            this.context.setTaskSubmission(ind, this.state[ind])
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            }
        }
    }

    render() {
        const condn = this.context.tasks && this.context.tasks.length
        return (
            <div className="Tasks-container">
                <ToastContainer />
                {condn && (
                    <>
                        <h1 className="Tasks-h1">Assigned Tasks</h1>
                        <ol>
                            {this.context.tasks.map((task, i) => {
                                const disableSubmission = new Date() > new Date(task.deadline)
                                return (
                                    <li key={i} style={{ fontSize: '20px' }}>
                                        <div className="Tasks-list">
                                            <h3 className="Tasks-heading">
                                                <a href={task.desc} target="blank">
                                                    {task.title || 'Task'}:
                                                </a>
                                            </h3>
                                            {task.submission === '' || this.state.isEditing[i] ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={this.state[i]}
                                                        name={i}
                                                        onChange={this.handleChange}
                                                    />
                                                    <button
                                                        onClick={() => this.handleSubmit(i)}
                                                        disabled={disableSubmission}
                                                    >
                                                        Submit
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <a
                                                        className="submission-link"
                                                        href={task.submission}
                                                    >
                                                        Your Submission
                                                    </a>
                                                    <button
                                                        onClick={() => {
                                                            this.setState((prevState) => {
                                                                prevState.isEditing[i] = true
                                                                return prevState
                                                            })
                                                        }}
                                                    >
                                                        <i className="far fa-edit"></i>Edit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </>
                )}
            </div>
        )
    }
}

export default Tasks
