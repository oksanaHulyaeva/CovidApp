import { NavLink } from 'react-router-dom';

import { ChartIcon, GlobeIcon, TableIcon} from './Icons/IconSprite';
import '../sass/navbar.scss';
import '../sass/_constants.scss'

export const Navbar: React.FC = () => {
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