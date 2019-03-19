import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <footer id='contact' className='contactComponent'>
            <h1 className='contactTitle'>Contact</h1>
            <div className='contactInformation'>
                <a href='mailto:michaeltessey1@gmail.com'><i className="fas fa-envelope"></i></a>
                <a href='https://www.linkedin.com/in/michaeltse-tessey/' target='blank'><i className="fab fa-linkedin"></i></a>
                <a href='https://resume.creddle.io/resume/7wvn1bcq2v9' target='blank'><i className="fas fa-file"></i></a>
                <a href='https://github.com/MichaelTessey1' target='blank'><i className="fab fa-github"></i></a>
                <a href='https://www.instagram.com/michael_tessey/?hl=en' target='blank'><i className="fab fa-instagram"></i></a>
            </div>
        </footer>
    )
}

export default Contact