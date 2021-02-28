import { NavLink } from 'react-router-dom';

import ChartIcon from './Icons/ChartIcon';
import GlobeIcon from './Icons/GlobeIcon';
import TableIcon from './Icons/TableIcon';
import '../sass/navbar.scss';
import '../sass/_constants.scss'

const Navbar: React.FC = () => {
  return (
    <nav className={"navbar"}>
      <ul>
        <li>
          <NavLink to="/" className={"navlink"} activeClassName='active' exact>
            <TableIcon
                className={'navbar-icon'}
                fill={'#262B2F'}
                width={'60'}
                height={'60'}
              />
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className={"navlink"} activeClassName='active'>
            <GlobeIcon
                className={'navbar-icon'}
                fill={'#262B2F'}
                width={'60'}
                height={'60'}
              />
          </NavLink>         
        </li>
        <li>
          <NavLink to="/chart" className={"navlink"} activeClassName='active'>
            <ChartIcon
              className={'navbar-icon'}
              fill={'#262B2F'}
              width={'60'}
              height={'60'}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar