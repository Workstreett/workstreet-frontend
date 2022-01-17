// import React from 'react'
// import '../css/RoundStatus.css'

export const Rounds = [
    {
        icon: 'fas fa-file',
        name: 'Resume Round',
        date: '12/10/2021',
        review: 'We have went through your resume. We judged you on several skills in technologies across development. Like Reactjs, Django. We found your ReactJs skills weak. We want you judge you by giving you a task in next round',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task Round',
        date: '12/10/2021',
        review: 'You have submitted your task in this round. We are happy with your submission. It was awesome in Reactjs and Django. You have proved your self. Qualified for next rounds',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task Round-2',
        date: '12/10/2021',
        review: 'Here you improvised your previous submission and we have to say you have really worked hard.',
        status: true
    },
    {
        icon: 'far fa-check-circle',
        name: 'Task-3 round',
        date: '12/10/2021',
        review: 'Good submission! Keep It Up',
        status: false
    },
    {
        icon: 'fas fa-user-friends',
        name: 'Interview Round',
        date: '12/10/2021',
        review: 'Your communication skills and pressure handling skills are great. We are happy to have you as a potential conadidate',
        status: false
    },
    {
        icon: 'fas fa-user-friends',
        name: 'Interview-2 Round',
        date: '12/10/2021',
        review: 'SELECTED',
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
