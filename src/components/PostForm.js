import React from 'react'
import '../css/dashboard.css'
import axios from 'axios'
import { Sections } from '../data/section'
import { withRouter } from 'react-router'

class PostForm extends React.Component {
    state = {
        section: Sections[0],
        company: '',
        title: '',
        desc: '',
        extra: '',
        url: '',
        tags: '',
        image: null
    }

    componentDidMount() {
        const details = this.props.location.details
        if (details && details.section) {
            this.setState({
                ...details,
                oldSection: details.section
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.id) {
            axios
                .post('https://workstreet.herokuapp.com/admin/create', this.state)
                .then((res) => {
                    alert(res.data)
                })
                .catch((err) => {
                    console.log(err.message)
                    alert('Try again Later!!')
                })
        } else {
            axios
                .post('https://workstreet.herokuapp.com/admin/update', this.state)
                .then((res) => {
                    alert(res.data)
                })
                .catch((err) => {
                    console.log(err.message)
                    alert('Try again Later!!')
                })
        }
    }

    handleChange = (event) => {
        const { name, type, value } = event.target
        if (type === 'file') {
            this.setState({
                [name]: event.target.files[0]
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        const { history } = this.props
        return (
            <div className="form-container" style={{ width: '100vw', height: '100vh' }}>
                <div className="profile-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="same-row">
                            <div className="form-field">
                                <input
                                    name="company"
                                    type="text"
                                    value={this.state.company}
                                    placeholder="company"
                                    onChange={this.handleChange}
                                    className="form-field-hover"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                            <div className="form-select">
                                <select
                                    name="section"
                                    value={this.state.section}
                                    onChange={this.handleChange}
                                    style={{ outline: 'none' }}
                                >
                                    {Sections.map((sec, i) => {
                                        return (
                                            <option key={i} value={sec}>
                                                {sec}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-field">
                            <input
                                name="title"
                                type="text"
                                value={this.state.title}
                                placeholder="title"
                                onChange={this.handleChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                name="desc"
                                type="text"
                                value={this.state.desc}
                                placeholder="Role Description"
                                onChange={this.handleChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                name="extra"
                                type="text"
                                value={this.state.extra}
                                placeholder="Company Description"
                                onChange={this.handleChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                name="url"
                                type="text"
                                value={this.state.url}
                                placeholder="Link for the apply button"
                                onChange={this.handleChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                name="tags"
                                type="text"
                                value={this.state.tags}
                                placeholder="Add tags using #"
                                onChange={this.handleChange}
                                className="form-field-hover"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <div className="form-field">
                            <input
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="same-row">
                            <button
                                style={{
                                    width: '45%',
                                    background: 'rgb(52, 107, 219, 0.95)'
                                }}
                                className="back"
                                onClick={() => {
                                    history.push('/admin')
                                }}
                            >
                                Back
                            </button>
                            <input type="submit" value="Submit" style={{ width: '45%' }} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PostForm)
