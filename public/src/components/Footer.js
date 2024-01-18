import React from 'react'
import linked from '../assets/linked.png'
import git from '../assets/git.png'
import mail from '../assets/mail.png'
import mugshot from '../assets/mugshot.png'

const Footer = () => {
    return (
        <div class="bg-black text-white grid grid-cols-3  justify-items-center items-center p-4">
            <div class="">
                <img class="w-12 h-12 rounded-full" src={mugshot} alt="Profile Picture" />

            </div>
            <div className="leading-none my-2">
                <p className='text-center'>Copyright © 2024 Andrew Shum</p>
                <p className='text-center'>All rights reserved</p>
            </div>
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
    )
}

export default Footer
