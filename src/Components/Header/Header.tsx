import { NavLink } from 'react-router-dom';
import { HeaderBody } from './HeaderStyle';
import logo from '../../assets/lumis.svg';
export default function Header(){
   return(
      <>
         <HeaderBody>
            <img src={logo} alt="Lumis logo" />
            <NavLink activeClassName={'active'} to="/" exact>Home</NavLink>
            <NavLink activeClassName={'active'} to="/contact">Contact</NavLink>
         </HeaderBody>
      </>
   )
}