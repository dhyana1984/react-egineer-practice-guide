import React from 'react';
import IndexView from '../view/index'
import AboutView from '../view/about'
import ListView from '../view/list'
import UndefinedView from '../view/404'

let routes = [{
    path: "/",
    exact: true,
    render(props) {
        return <IndexView {...props} />
    }
}, {
    path: "/about",
    exact: true,
    render(props) {
        return <AboutView {...props} />
    }
}, {
    path: ["/list", "/list/:page"],
    exact: true,
    render(props) {
        //props.match.params have the param "page" from route "/list/:page"
        let { page = 1 } = props.match.params // from the route component
        if (page >= 1) {
            // ListView is made up of 2 components, List and Pagation
            return <ListView {...props} />
        }
        return <UndefinedView {...props} />
    }
}, {
    path: "",
    exact: false,
    render(props) {
        return <UndefinedView {...props} />
    }
}]

let navs = [{
    to: "/",
    exact: true,
    title: "Index"
}, {
    to: "/about",
    exact: true,
    title: "About"
}, {
    to: "/list",
    isActive(url) {
        let urlData = url.split("/")
        // if url is "/list" or url is like "/list/3", this nav is active
        if (url === "/list" || (urlData?.length === 3 && urlData[1] === "list" && urlData[2] > 0)) {
            return true
        }
        return false
    },
    title: "List"
},]

export { routes, navs }