import React, { Fragment } from "react"
import { Link } from "react-router-dom"

export default function Pagation(props) {
    let { activePage, pageLength } = props
    console.log(activePage)
    return <nav>
        {
            // use [...(".".repeat(pageLength))] to create a array whose length is pageLength, item doesn't use in logic
            [...(".".repeat(pageLength))].map((item, index) => {
                index++
                return <Fragment key={index}>
                    <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
                    <Link
                        to={`/list/${index}`}
                        style={{ color: activePage == index ? "red" : "#000" }}
                    >
                        {index}
                    </Link>
                </Fragment>
            })
        }
        <span style={{ marginLeft: 10 }}>|</span>
    </nav>
}