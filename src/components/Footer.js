import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="foot-row-first">
                <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                        <h4>Find us</h4>
                        <span>IIT(BHU), Varanasi, Uttar Pradesh</span>
                    </div>
                </div>
                <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                        <h4>Call us</h4>
                        <span>0123456789</span>
                    </div>
                </div>
                <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                        <h4>Mail us</h4>
                        <span>support@workstreet.tech</span>
                    </div>
                </div>
            </div>
            <div className="follow-text"> Follow us</div>
            <div className="social-icons">
                <div className="follow-item">
                    <a
                        className="facebook"
                        href="https://www.facebook.com/Workstreet-102924965400188"
                    >
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
                <div className="follow-item">
                    <a className="twitter" href="https://twitter.com/Workstreet6">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                <div className="follow-item">
                    <a className="instagram" href="https://www.instagram.com/workstreet9/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="follow-item">
                    <a className="linkedin" href="https://www.linkedin.com/company/wworkstreet">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="copyright-text">
                <p>
                    Copyright &copy; 2021 All Rights Reserved by
                    <a href="mailto:support@workstreet.tech"> Workstreet</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
