import '../css/TeamCard.css'

const TeamCard = ({ memberImg, name, role, bio, facebookId, linkedinId, twitterId }) => {
    return (
        <div className="card">
            <img src={memberImg} width={90} height={90} className="card-image-holder" />
            <div className="card-name">{name}</div>
            <div className="card-role">{role}</div>
            <div className="card-divider"></div>
            <div className="card-bio">{bio}</div>
            <div className="card-social-icons">
                <div className="facebook-icon">
                    <a href={facebookId}>
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
                <div className="linkedin-icon">
                    <a href={linkedinId}>
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <div className="twitter-icon">
                    <a href={twitterId}>
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
