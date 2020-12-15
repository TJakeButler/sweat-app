// import React from "react"
// import { Link } from "react-router-dom"


// export const NavBar = (props) => {
//     return (
//         <ul className="navbar">
//             <li className="navbar__item active">
//                 <Link className="navbar__link" to="/">SWEAT Home Page</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/exerciseTypes">Exercise List</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/exerciseLogs">Exercise Log</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/newExerciseTypeform">Create New Exercise</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/newExerciseLogform">Log New Exercise</Link>
//             </li>
//         </ul>
//     )
// }

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SWEAT APP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/exerciseTypes/">Exercise List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/exerciseLogs/">Exercise Log</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newExerciseTypeform/">Create New Exercise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newExerciseLogform/">Log New Exercise</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>SWEAT App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

