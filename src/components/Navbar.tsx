import { NavLink } from 'react-router-dom';
import '../sass/navbar.scss';

// type NavbarProps = {
//   data: IData[],
//   level: number
// }

const Navbar: React.FC = () => {
  return (
    <nav className={"navbar"}>
      <ul>
        <li>
          <NavLink to="/map" >Map</NavLink>
        </li>
        <li>
          <NavLink to="/" >Main</NavLink>
        </li>
        <li>
          <NavLink to="/chart" >Charts</NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar