import React, { useState } from 'react'
import '../../css/dashboard.css'

const Dashboard = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        branch: '',
        year: '',
        institute: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if (hasEmptyFields) {
            console.log('Please fill all fields ')
            return
        }

        if (values.password !== values.passwordConfirm) {
            console.log('Password does not match')
            return
        }

        console.log(values)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <>
            <div className="dashboard-containers">
                <div className="dashboard-name">
                    <div>Welcome</div>
                    <div>John Doe</div>
                </div>
                <div className="dashboard-form">
                    <h1>Edit Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                value={values.passwordConfirm}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="branch">Branch</label>
                            <input
                                type="text"
                                id="branch"
                                name="branch"
                                value={values.branch}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="year">Year</label>
                            <select
                                id="year"
                                name="year"
                                value={values.year}
                                onChange={handleInputChange}
                            >
                                <option value="First Year">Freshman</option>
                                <option value="Second Year">Sophomore</option>
                                <option value="Third Year">Junior</option>
                                <option value="Fourth Year">Senior</option>
                                <option value="Fifth Year">Super Senior</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="institute">Institute</label>
                            <input
                                type="text"
                                id="institute"
                                name="institute"
                                value={values.institute}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input type="submit" value="Save Changes" className="btn" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard
