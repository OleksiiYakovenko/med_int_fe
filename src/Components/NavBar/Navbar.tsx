import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                MED FRONT INT PROJECT
            </Link>
            <ul>
                <CustomLink to="/AboutProject">About Project</CustomLink>
                <CustomLink to="/CompanyList">Company List</CustomLink>
                <CustomLink to="/CompanyProfile">Company Profile</CustomLink>
                <CustomLink to="/UserAuthorization">User Authorization</CustomLink>
                <CustomLink to="/UserList">User List</CustomLink>
                <CustomLink to="/UserProfile">User Profile</CustomLink>
                <CustomLink to="/UserRegistration">User Registration</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }:{to:any, children:any}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default Navbar;





