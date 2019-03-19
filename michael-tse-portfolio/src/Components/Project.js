import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <div id='project' className='projectComponent'>
            <h1 className='projectTitle'>Projects</h1>
            <div className='projectContainer'>
            
                <div className='project2'>
                    <div className='project2image'></div>
                    <div className='project2content'>
                        <h2 className='project2title'>AniStorm</h2>
                        <p className='project2text'>
                            AniStorm is a site built on React that uses the Kitsu API to display anime shows. Users are allowed to search for their desired
                            anime, or if they're new and are not sure what to look for, they're allowed to search by selecting a random genere
                            that simply prints a bundle of random animes that the user can checkout.
                        </p>
                        <br />
                        <div className='projectLinks'>
                            <a href='https://git.generalassemb.ly/michaeltessey1/project-2' target='blank'>Github</a>
                            <a href='http://lewd-yoke.surge.sh/' target='blank'>Live</a>
                        </div>
                    </div>
                </div>

                <div className='project4'>
                    <div className='project4image'></div>
                    <div className='project4content'>
                        <h2 className='project4title'>Photo Wing</h2>
                        <p className='project4text'>
                            Photo Wing is a React Native app with a Rails API for it's backend. Users can give the app permissions to select or 
                            take photos with the photo library or camera on their phones. The users can use the images, add a comment to make a post,
                            edit, and delete whichever post is selected.
                        </p>
                        <br />
                        <div className='projectLinks'>
                            <a href='https://git.generalassemb.ly/michaeltessey1/p4-life-gallery' target='blank'>Github</a>
                            <a href='https://expo.io/@michaeltessey1/photowing' target='blank'>Live</a>
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <div className='project1image'></div>
                    <div className='project1content'>
                        <h2 className='project1title'>Rasengan</h2>
                        <p className='project1text'>
                            Rasengan is a game where the user will play a character that moves through arrow keys and the goal is to defeat
                            the enemy on the other side. The game uses grid coordination, keyboard events to create
                            functions to move the character, and collision detection to detect when someone should take damage.
                        </p>
                        <br />
                        <div className='projectLinks'>
                            <a href='https://git.generalassemb.ly/michaeltessey1/Rasengan' target='blank'>Github</a>
                            <a href='https://tender-beaver-a03f51.netlify.com/' target='blank'>Live</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project