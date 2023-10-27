import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';


export const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li><NavLink to={'aboutme'}>About</NavLink></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
