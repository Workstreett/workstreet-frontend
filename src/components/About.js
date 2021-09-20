import React from 'react'
import '../css/about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
    AOS.init()
    return (
        <div className="about" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
            <div className="content">
                <div className="content-1">
                    <h1 id="aboutus-mainheading">About us</h1>
                    <p id="our-tagline">
                        Corporations are ready to hire and young adroiters are eager to work, and
                        WORKSTREET is here to act as their smoothest possible interaction medium.
                    </p>
                </div>
                <div
                    className="content-2"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    <p className="about-para">
                        <div className="about-para-1">
                            <h2 id="about-headings">
                                What <span style={{ color: '#4cead8' }}> We Do </span>{' '}
                            </h2>
                            Here at <b>WORKSTREET</b> , the best companies and the best students of
                            the nation are brought together. <b>WORKSTREET</b> is a platform
                            exclusively for students who are currently enrolled in any if the
                            <b> IITs</b> ,<b> NITs</b>,<b> IIITs</b> and <b>BITS</b>. Students are
                            constantly in search of work or experience opportunities whereas the
                            companies are in constant search for the best interns and employees. So
                            at <b>WORKSTREET</b> we aim at reducing the buffer between the companies
                            and the students.
                        </div>
                        <div className="about-para-2">
                            <h2 id="about-headings">
                                How{' '}
                                <span style={{ color: '#4cead8' }}>
                                    recruiters can use our platform?
                                </span>
                            </h2>
                            All a company/start-up has to do is post their job offer and
                            requirements to us, after that its advertising and publicity is our
                            responsibility.
                        </div>
                        <div className="about-para-3">
                            <h2 id="about-headings">
                                How{' '}
                                <span style={{ color: '#4cead8' }}>
                                    young adroiters can use our platform?
                                </span>
                            </h2>
                            On the other hand all a student has to do is enter his/her field/s of
                            interest , select the offers that suit him/her, and then apply for the
                            selection procedure.
                        </div>
                    </p>
                </div>
            </div>

            <div
                className="about-boxes"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
            >
                <div className="about-box-1">
                    <h1>
                        01<span style={{ color: '#4cead8' }}>.</span>
                    </h1>
                    <p>
                        All job offers at one place <br></br>no more hustle at mail box
                    </p>
                </div>
                <div className="about-box-2">
                    <h1>
                        02<span style={{ color: '#4cead8' }}>.</span>
                    </h1>
                    <p>Brief job description</p>
                </div>
                <div className="about-box-3">
                    <h1>
                        03<span style={{ color: '#4cead8' }}>.</span>
                    </h1>
                    <p>See anytime and anywhere</p>
                </div>
            </div>
        </div>
    )
}

export default About
