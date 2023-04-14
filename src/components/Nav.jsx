import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/Vonn.png'

const Nav = () => {
  return (
    <>
    <Link to='/'>
      <div className='img'>
          <img src={logo} alt="" />
      </div>
    </Link>

    <nav>
       <ul>
        <NavLink to='/' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>Home <span>|</span></li>
        </NavLink>
        <NavLink to='/about' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>About <span>|</span></li>
        </NavLink>
        <NavLink to='/projects' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>Projects <span>|</span></li>
        </NavLink>
        <NavLink to='/techStack' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>Tech Stack <span>|</span></li>
        </NavLink>
        <NavLink to='/contact' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>Contacts <span>|</span></li>
          </NavLink>
        <NavLink to='/cv' style={({isActive}) => {
          return {
            borderBottom: isActive && '2px solid rgba(0, 0, 0, 0.3)'
          }
        }}>
          <li className='color'>CV</li>
        </NavLink>
      </ul>
    </nav>
    </>
  )
}

export default Nav