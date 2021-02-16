import React from "react"
import data from "../data/data"

const pageLen = 3

export default function List(props) {

    let { activePage } = props
    let start = (activePage - 1) * pageLen
    let end = activePage * pageLen
    let nowData = data.filter((item, index) => index >= start && index < end)

    return <ul>
        {
            nowData.map(item =>
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.describe}</p>
                </li>
            )
        }
    </ul>
}