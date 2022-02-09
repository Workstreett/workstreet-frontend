import React from 'react'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import '../css/Tasks.css'

class Tasks extends React.Component {
    static contextType = GoogleAuthContext
    state = {}
    // a task object can will have a title, describe(link to the pdf), deadline, submission(link of the user submission)
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const condn = this.context.tasks && this.context.tasks.length
        return (
            <div className="Tasks-container">
                {condn && (
                    <>
                        <h1 className="Tasks-h1">Assigned Tasks</h1>
                        <ol>
                            {this.context.tasks.map((task, i) => {
                                return (
                                    <li key={i} style={{ fontSize: '20px' }}>
                                        <div className="Tasks-list">
                                            <h3 className="Tasks-heading">
                                                <a href={task.desc} target="blank">
                                                    {task.title || 'Task'}:
                                                </a>
                                            </h3>
                                            {task.submission === '' ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={this.state[i]}
                                                        name={i}
                                                        onChange={this.handleChange}
                                                    />
                                                    <button>Submit</button>
                                                </>
                                            ) : (
                                                <>
                                                    <a href={task.submission}>Submissions</a>
                                                    <button>
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
