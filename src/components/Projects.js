import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import placeholder from '../assets/placeholder.jpg'

const Projects = () => {
  return (
    <div id='projects' className="shadow p-14 rounded-3xl mt-8">
      <h1 className='font-extrabold text-5xl bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 inline-block text-transparent bg-clip-text'>Projects</h1>
      <div className="grid grid-cols-5 grid-rows-3">
        <div className='col-span-3 p-3 mt-3'>
          <h2>BizFund</h2>
          <p>project description</p>
          <p>Build with: Python, React Native, Verbwire API, MongoDB</p>
          <p>Technical Overview</p>
          <a href=''>GitHub</a>
        </div>
        <div className='col-span-2 p-3'>
          <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />
        </div>

        <div className='col-span-3 p-3 mt-8'>
          <h2>Blind Spot Monitor Using Computer Vision</h2>
          <p>project description</p>
          <p>Build with:</p>
          <p>Technical Overview</p>
          <a href=''>GitHub</a>
        </div>
        <div className='col-span-2 p-3'>
          <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />

        </div>

        <div className='col-span-3 p-3 mt-8'>
          <h2>Stock-Tracking Discord Bot</h2>
          <p>The Stalk-a-Stock Discord Bot is capable of outputting real-time stock prices by using Slash Commands and requesting any stock ticker.</p>
          <p>Build with: JavaScript, REST API, discord.js</p>
          <p>Technical Overview: Stock data is retrieved using the Financial Modelling Prep REST API.</p>
          <a href=''>GitHub</a>
        </div>
        <div className='col-span-2 p-3'>
          <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />
        </div>

        <div className='col-span-3 p-3 mt-8'>
          <h2>Personal Portfolio Website</h2>
          <p>This is my personal portfolio website where I can share all of my creative projects, my experiences, and a little bit about myself and my journey to becoming a software engineer.</p>
          <p>Build with: React, JavaScript, HTML, TailwindCSS</p>
          <p>Technical Overview</p>
          <a href=''>GitHub</a>
        </div>
        <div className='col-span-2 p-3'>
          <img src={placeholder} alt='project picture' className='w-full h-full rounded-xl' />
        </div>
      </div>




    </div>
  )
}

export default Projects
