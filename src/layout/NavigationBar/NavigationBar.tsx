import React from "react"
import { RouteType } from "routes/MainRouter"
import { Link } from "react-router-dom"

interface IProps {
    routes: RouteType[]
}

function NavigationBar({ routes }: IProps) {
    return (
        <div>
            <h1>LOGO</h1>
            <div>
                <ul>
                    {routes.map((r, i) => {
                        return (
                            <li key={i}>
                                <Link to={r.path}> {r.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar
