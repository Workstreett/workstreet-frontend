import '../css/NotFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="img_container">
                    <img src="../assets/404Image.svg"></img>
                </div>
                <h1 className="heading">Oops!</h1>
                <div className="subheading_container">
                    <p className="subheading">You should not be here</p>
                    <p className="subheading">Go back to the homepage</p>
                </div>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="home_button">Back to Homepage</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
