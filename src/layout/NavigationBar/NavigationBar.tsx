import React from "react"
import { RouteType } from "routes/MainRouter"
import { Link } from "react-router-dom"

//css
import { NavDiv, ContainerDiv } from "layout/NavigationBar/NagivaionBar.style"

interface IProps {
    routes: RouteType[]
}

function NavigationBar({ routes }: IProps) {
    return (
        <NavDiv>
            <ContainerDiv>
                <h1>29CM</h1>
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
            </ContainerDiv>
        </NavDiv>
    )
}

export default NavigationBar
