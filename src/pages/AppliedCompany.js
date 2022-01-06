import React from 'react'
import '../css/AppliedCompany.css'
import Company from '../components/Company'
import logo from '../images/logo.svg'

class AppliedCompany extends React.Component {
    render() {
        return (
            <div>
                <div className="applied-header">
                    <img src={logo} alt="Logo" />
                    <button>
                        <i className="fas fa-power-off fa-x"></i> Logout
                    </button>
                </div>
                <hr style={{ border: '1px solid #071E3D', marginBottom: '20px' }} />
                <div>
                    <div className="applied-user-info">
                        <img
                            src="https://lh3.googleusercontent.com/a/AATXAJy3xWOki6DHu_Kh1Ripe8bJQ5f6-70QcKxKMffl=s288-p-rw-no-mo"
                            alt="user-dp"
                        />
                        <div>
                            <p className="greeting">
                                Welcome, <span style={{ color: '#FFA45C' }}>Jhon Doe</span>
                            </p>
                            <p className="number">Total aplication: 3</p>
                        </div>
                    </div>
                </div>
                <h3>Your Application</h3>
            </div>
        )
    }
}

export default AppliedCompany
