import React from 'react'
import logo from '../assets/logo.png'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label='Home' >
            <img src={logo} className='mx-2'  width={100} alt="Logo" />
            </a>

        </div>
        <div className="m-8 mt-14 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/yusuf-jamal-106772293/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank'
            rel="noreferrer"
            aria-label='LinkedIn'
            >
                <FaLinkedin/>
            </a>
            <a href="https://github.com/jamal3121"
            target='_blank'
            rel="noreferrer"
            aria-label='Github'
            >
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/yusuf-jamal-106772293/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank'
            rel="noreferrer"
            aria-label='Instagram'
            >
                <FaInstagram/>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=918825512668&text&type=phone_number&app_absent=0"
            target='_blank'
            rel='noopener'
            aria-label='whatapp'
            >
                <FaWhatsapp/>
            </a>
        </div>

    </nav>
  )
}

export default Navbar