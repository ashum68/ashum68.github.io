//<a target="_blank" href="https://icons8.com/icon/84888/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import React from 'react'
import portrait from '../assets/portrait.png'

const About = () => {
    return (
        <div id='about' className="grid grid-cols-3 shadow p-14 rounded-3xl">
            <div className='col-span-2 pr-16'>
                <h1 className='font-extrabold text-5xl bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 inline-block text-transparent bg-clip-text'>About Me</h1>
                <p>I am currently studying Computer Science at the University of Waterloo.</p>
                <p>I </p>
                <p>If I'm not coding, you can find me playing ice hockey, going skiing, biking around the city, and playing the piano.</p>
            </div>
            <div>
                <img src={portrait} alt='picture of myself' className="w-full h-full rounded-xl" />
            </div>
        </div>
    )
}

export default About
