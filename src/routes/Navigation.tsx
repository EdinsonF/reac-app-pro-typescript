import { BrowserRouter, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt="react logo" />

          <ul>
            <li>
              <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? 'nav-active' : '' }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-active' : '' }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/user" 
                className={({ isActive }) => isActive ? 'nav-active' : '' }  
              >
                User
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={ <h2> Home page </h2> }/>
          <Route path="/about" element={ <h2> About information </h2> }/>
          <Route path="/user" element={ <h2> user admin page </h2> }/>
          <Route path="/*" element={ <Navigate to="/home" replace /> }/>
        </Routes>
        

      </div>
    </BrowserRouter>
  )
}

export default Navigation;