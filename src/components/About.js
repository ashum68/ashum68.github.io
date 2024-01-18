//<a target="_blank" href="https://icons8.com/icon/84888/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import React from 'react'
import portrait from '../assets/portrait.png'

const About = () => {
    return (
        <div id='about' className="grid grid-cols-3 shadow p-14 rounded-3xl">
            <div className='col-span-2 pr-16'>
                <h1 className='font-extrabold text-5xl bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 inline-block text-transparent bg-clip-text'>About Me</h1>
                <p className='mt-5 text-lg'>Hi, I'm Andrew! I'm an aspiring software engineer eager to learn more about emerging technologies and their real-world applications. In particular, I am currently invested in machine learning and blockchain projects. I am currently pursuing a Computer Science degree with an Artificial Intelligence Specialization from the University of Waterloo. I enjoy building projects that challenge my capabilities, leading to further growth, while making a positive impact on the world.</p>
                <span className='text-lg'>If I'm not coding, you can find me playing ice hockey, going skiing, biking around the city, and playing the piano. Feel free to reach out and connect with me via </span><a href='https://www.linkedin.com/in/andrew-shum618/' className='inline' target="_blank" rel="noopener noreferrer">LinkedIn</a><span> or </span><a className='inline' href='mailto:andrew.shum068@gmail.com'>Email</a><span>.</span>
            </div>
            <div>
                <img src={portrait} alt='picture of myself' className="w-full h-full rounded-xl" />
            </div>
        </div>
    )
}

export default About
