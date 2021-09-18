import React, { useState } from 'react'
import '../../css/dashboard.css'

const Dashboard = () => {
    const [values, setValues] = useState({
        fullName: 'John Doe',
        email: 'johndoe@itbhu.ac.in',
        password: 'johndoe',
        branch: 'Computer Science and Engineering',
        year: '2020',
        institute: 'Indian Institute of Technology (BHU), Varanasi'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if (hasEmptyFields) {
            // console.log('Please fill all fields ')
            return
        }

        if (values.password !== values.passwordConfirm) {
            // console.log('Password does not match')
        }

        // console.log(values)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <>
            <div className="form-container">
                <div className="profile-form">
                    <h1>Your Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <input
                                type="text"
                                id="fullname"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                disabled
                            />
                        </div>
                        <div className="same-row">
                            <div className="form-field">
                                <input
                                    type="text"
                                    id="branch"
                                    name="branch"
                                    value={values.branch}
                                    onChange={handleInputChange}
                                    className="form-field-hover"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                            <div className="form-select">
                                <select
                                    id="year"
                                    name="year"
                                    value={values.year}
                                    onChange={handleInputChange}
                                    style={{ outline: 'none' }}
                                >
                                    <option value="First Year">Freshman</option>
                                    <option value="Second Year">Sophomore</option>
                                    <option value="Third Year">Junior</option>
                                    <option value="Fourth Year">Senior</option>
                                    <option value="Fifth Year">Super Senior</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field">
                            <input
                                type="text"
                                id="institute"
                                name="institute"
                                value={values.institute}
                                onChange={handleInputChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>

                        <input type="submit" value="Save Changes" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard
