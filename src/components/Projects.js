import React from 'react'
import Button from 'react-bootstrap/Button'
import placeholder from '../assets/placeholder.jpg'

const Projects = () => {
  return (
    <div id='projects'>
      <div className="my-8 mb-16">
        <h1 className='font-extrabold text-5xl bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 inline-block text-transparent bg-clip-text my-8 p-3'>Projects</h1>

        <div className="grid grid-cols-5 shadow p-8 my-4 rounded-3xl ">
          <div className='col-span-3 p-3 mt-8'>
            <h2>Blind Spot Monitor Using Computer Vision</h2>
            <p>A Blind Spot Monitor for driving by leveraging the power of OpenCV in conjunction with the state-of-the-art
              YOLO Object Detection model to classify vehicle types to successfully enhance safety by detecting hazards.</p>
            <p>Built with: Python, OpenCV, YOLO Object Detection Algorithm</p>
            <p>Technical Overview</p>
            <Button href='https://github.com/ashum68/blindspotmonitor' variant='dark' target="_blank" rel="noopener noreferrer">GitHub</Button>
          </div>
          <div className='col-span-2 p-3'>
            <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />

          </div>
        </div>
        <div className="grid grid-cols-5 shadow p-8 my-4 rounded-3xl ">
          <div className='col-span-3 p-3 mt-8'>
            <h2>Stock-Tracking Discord Bot</h2>
            <p>The Stalk-a-Stock Discord Bot is capable of outputting real-time stock prices by using Slash Commands and requesting any stock ticker.</p>
            <p>Built with: JavaScript, REST API, discord.js</p>
            <p>Technical Overview: Stock data is retrieved using the Financial Modelling Prep REST API.</p>
            <Button href='https://github.com/ashum68/stalkstock' variant='dark' target="_blank" rel="noopener noreferrer">GitHub</Button>
          </div>
          <div className='col-span-2 p-3'>
            <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />
          </div>
        </div>
        <div className="grid grid-cols-5 shadow p-8 my-4 rounded-3xl ">
          <div className='col-span-3 p-3 mt-8'>
            <h2>Personal Portfolio Website</h2>
            <p>This is my personal portfolio website where I can share all of my creative projects, my experiences, and a little bit about myself and my journey to becoming a software engineer.</p>
            <p>Built with: React, JavaScript, HTML, TailwindCSS</p>
            <p>Technical Overview</p>
            <Button href='https://github.com/ashum68/ashum68.github.io' variant='dark' target="_blank" rel="noopener noreferrer">GitHub</Button>
          </div>
          <div className='col-span-2 p-3'>
            <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects
