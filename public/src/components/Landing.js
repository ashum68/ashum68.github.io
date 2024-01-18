import React from 'react'
import memoji from '../assets/memoji.png'
import bg from '../assets/bg.jpg'
import linked from '../assets/linked.png'
import git from '../assets/git.png'
import mail from '../assets/mail.png'


const Landing = () => {

  return (
    <div id='home' className='w-screen h-screen'>
      <img className='w-screen h-screen absolute' src={bg} />
      <div class="grid grid-cols-2 absolute w-screen h-screen justify-items-center items-center">
        <div class="p-4">
          <h1 className='text-5xl text-white font-bold '>Hi, I'm Andrew.</h1>
          <h4 className='text-gray-200'>I am a Software Developer based in Toronto.</h4>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/andrew-shum618/">
              <img src={linked} alt="LinkedIn" className="h-7 w-7 mr-4" />
            </a>
            <a href="https://github.com/ashum68">
              <img src={git} alt="GitHub" className="h-7 w-7 mr-4" />
            </a>
            <a href="mailto:andrew.shum068@gmail.com">
              <img src={mail} alt="Email" className="h-7 w-7" />
            </a>
          </div>
        </div>
        <div >
          <img src={memoji} className='h-95 w-85' />
        </div>
      </div>

    </div>

  )
}

export default Landing
