import React from 'react'
import '../css/RoundStatus.css'

export const Rounds = [
    {
        icon: 'fas fa-circle',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah '
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    },
    {
        icon: 'fas fa-circle-notch',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round'
    }
]

class RoundStatus extends React.Component {
    render() {
        return (
            <div className="roundstatus-flex">
                <div style={{ padding: '2%', backgroundColor: 'green', borderRadius: '50%' }}>
                    <i className="fas fa-circle-notch"></i>
                </div>
                <div className="roundstatus-text">
                    {this.props.name}
                    <div style={{ fontSize: '12px', color: '#6e6d76' }}>{this.props.date}</div>
                </div>
                <div className="roundstatus-review">&quot;{this.props.review}&quot;</div>
            </div>
        )
    }
}

export default RoundStatus
