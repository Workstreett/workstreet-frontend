import React from 'react'
import '../css/RoundStatus.css'

export const Rounds = [
    {
        icon: 'fas fa-file',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task Round-2',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task-3 round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round',
        status: false
    },
    {
        icon: 'fas fa-user-friends',
        name: 'Interview Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round',
        status: false
    },
    {
        icon: 'fas fa-user-friends',
        name: 'Interview-2 Round',
        date: '12/10/2021',
        review: 'Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round',
        status: false
    }
]

// class RoundStatus extends React.Component {
//     render() {
//         return (
//             <div className="roundstatus-flex">
//                 <div style={{ padding: '2%', backgroundColor: 'green', borderRadius: '50%' }}>
//                     <i className="fas fa-circle-notch"></i>
//                 </div>
//                 <div className="roundstatus-text">
//                     {this.props.name}
//                     <div style={{ fontSize: '12px', color: '#6e6d76' }}>{this.props.date}</div>
//                 </div>
//                 <div className="roundstatus-review">&quot;{this.props.review}&quot;</div>
//             </div>
//         )
//     }
// }

// export default RoundStatus
