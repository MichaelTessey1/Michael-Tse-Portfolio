import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='aboutComponent'>
            <div className='aboutContainer'>
                <h1 className='aboutComponentTitle'>Who Am I?</h1>
                <div className='aboutContentContainer'>

                    <p className='aboutPara'>
                        Hello, my name is Michael Tse but everyone calls me 'Tessey'. I am a gamer and a BIG FAN of Fortnite (I know I know..) but I've recently found my passion
                        for Web/App Development. In my perspective, community and people is everything. From a simple act of sharing or helping to a fun or meaningful bonding experience, I've
                        learned that there are all kinds of amazing people out there that I want to surrounding myself with. This idea alone, drives me to want to become a better
                        Web/App Developer, simply so I can give back to the community that's taken care of me and shaped me into the person I am today. I simply want to live life 
                        making things I love for the people I love. At the end of the day, its fun learning and making cool new apps/webs, especially when it could be used to help somebody else.
                    </p>

                    <ul className='aboutSkills'>
                        <h3>Knowledgable In</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaSript(es6)</li>
                        <li>ReactJs</li>
                        <li>React Native</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>Ruby on Rails</li>
                        <li>NodeJs</li>
                        <li>Git/Github</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About