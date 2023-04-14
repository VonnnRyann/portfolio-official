import React from 'react'
import logo from '../assets/Vonn.png'
import {Link} from 'react-router-dom'
import './styles/project.css'

const Projects = () => {
  return (
    <>
    <section id='projects'>
      <div className='center'>
          <h1 className='display'>Relevant Projects</h1>
      </div>
    <main className='container'>

      <section className='projects'>
        <div className='card'>
            <div className='text'>
              <h2><Link className='white' to='https://unsplash-photos-search.netlify.app/'>unsplash-photos-search</Link></h2>
            </div>
              <div className='down'>
                <Link to='https://unsplash-photos-search.netlify.app/'>
              <div>
                <img className='imageProject' src={logo} alt="" />
              </div>
          </Link>
          </div>
        </div>
        <div className='card'>
            <div className='text'>
              <h2><Link className='white' to='https://hourly-weather-app-api.netlify.app'>hourly-weather-app-api</Link></h2>
            </div>
              <div className='down'>
                <Link to='https://hourly-weather-app-api.netlify.app'>
              <div>
                <img className='imageProject' src={logo} alt="" />
              </div>
          </Link>
          </div>
        </div>
        <div className='card'>
            <div className='text'>
              <h2><Link className='white' to='https://simple-todo-app01.netlify.app'>simple-todo-app</Link></h2>
            </div>
              <div className='down'>
                <Link to='https://simple-todo-app01.netlify.app'>
              <div>
                <img className='imageProject' src={logo} alt="" />
              </div>
          </Link>
          </div>
        </div>
        {/* <div className='card'>
              <h2><Link className='white' to='https://hourly-weather-app-api.netlify.app'>hourly-weather-app-api</Link></h2>
            <Link to='https://hourly-weather-app-api.netlify.app'>
              <div className='image'>
                <img className='imageProject' src={logo} alt="" />
              </div>
          </Link>
        </div>
        <div className='card'>
        <h2><Link className='white' to='https://simple-todo-app01.netlify.app'>simple-todo-app01</Link></h2>
            <Link to='https://simple-todo-app01.netlify.app'>
              <div className='image'>
                <img className='imageProject' src={logo} alt="" />
              </div>
          </Link>
        </div> */}
            {/* <h2>Project 1</h2>
            <Link to='https://unsplash-photos-search.netlify.app/'>
          <div className='image'>
              <img src={logo} alt="" />
          </div>
        </Link>
            <h2>Project 1</h2>
            <Link to='https://unsplash-photos-search.netlify.app/'>
          <div className='image'>
              <img src={logo} alt="" />
          </div>
        </Link> */}
      </section>
    </main>
    </section>
    </>
  )
}

export default Projects