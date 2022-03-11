import React from 'react'
import '../css/Landing.css'
import Landing1 from '../components/Landing1'
import Landing2 from '../components/Landing2'
import Landing3 from '../components/Landing3'
import TestimonialCrouser from '../components/TestimonialCrouser'
import Landing4 from '../components/Landing4'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-grid">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Landing1 />
                <Landing2 />
                <Landing3 />
                <TestimonialCrouser />
                <Landing4 />
            </div>
        )
    }
}
export default Landing
