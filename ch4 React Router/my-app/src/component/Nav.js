import React, { Fragment } from "react"
import { navs } from "../route/router"
import { NavLink, useLocation } from "react-router-dom"

export default function Nav() {
    //useLocation is a router hook. use withRouter is another choice
    //useLocation return location which has {pathname, search, hash, state }
    let { pathname } = useLocation()
    return <nav>
        <span style={{ marginRight: 10 }}>|</span>
        {
            navs.map(item =>
                <Fragment key={item.to}>
                    <NavLink
                        to={item.to}
                        exact={item.exact}
                        isActive={item.isActive ? () => item.isActive(pathname) : null}
                        activeStyle={{ color: 'red' }}
                    >
                        {item.title}
                    </NavLink>
                    <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
                </Fragment>)
        }
    </nav>
}