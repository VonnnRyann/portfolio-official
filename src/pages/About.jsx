import React from 'react'
import photo from '../assets/CV-photo1.jpg'
import './styles/about.css'

const About = () => {
  return (
    <>
      <section className='center'>
          <h1 className='display'>About</h1>
      </section>
      <section className='about-center'>
          <img className='cv-photo' src={photo} alt="" />
        <p className='parag'>Hi, my name is <span className='name'>Vonn Ryann Cruz</span>. From Waiter to Cruise Ship to becoming a Web Developer.I'm here to Shape your Company.</p>
      </section>
    </>
  )
}

export default About