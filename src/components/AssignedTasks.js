import { useState, useContext } from 'react'
import axios from 'axios'
import { config } from '../env'
import { toast } from 'react-toastify'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import '../css/AssignedTasks.css'

const AssignedTasks = ({ task, email, ind, change }) => {
    const [sub, setSub] = useState(task.submission)
    const context = useContext(GoogleAuthContext)

    const finDay = new Date(task.deadline)
    const disableSubmission = new Date() > finDay

    return (
        <div className="Tasks-Editing">
            <input
                className={disableSubmission ? 'disabled' : ''}
                type="radio"
                value={false}
                onClick={() => {
                    if (!disableSubmission && sub !== '') {
                        handleSubmit(task, email, sub, context)
                        const obj = context
                        obj.tasks[task.ind].submission = sub
                        context.setDetails(obj)
                        change(ind, sub)
                    }
                }}
            />
            <div className="right-side" style={{ width: '100%' }}>
                <div className="Tasks-Upper-Portion">
                    <div>
                        <a
                            className="Task-Title"
                            href={task.submission}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {task.title}
                        </a>
                        <input
                            type="text"
                            placeholder="Submit your Task link here"
                            value={sub}
                            onChange={(e) => setSub(e.target.value)}
                            name={task.title}
                        />
                    </div>
                    <div className="Task-Deadline">
                        <p className="danger">Deadline</p>
                        <p>
                            {finDay.toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}{' '}
                            {finDay.toLocaleString('en-Us', {
                                hour: 'numeric',
                                minute: '2-digit'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const handleSubmit = async (task, email, submission) => {
    try {
        // console.log('Handle Submit called!!', task, email, submission, context)
        const res = await axios.post(config.apiDomain + 'user/tasks/edit', {
            email: email,
            ind: task.ind,
            submission: submission
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

export default AssignedTasks
