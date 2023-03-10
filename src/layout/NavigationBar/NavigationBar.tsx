import React from "react"
import { Link } from "react-router-dom"

//css
import { NavDiv, ContainerDiv } from "layout/NavigationBar/NagivaionBar.style"

//component
import CountNotify from "components/CountNotify/CountNotify"

//type
import { RouteType } from "routes/MainRouter"

interface IProps {
    routes: RouteType[]
}

function NavigationBar({ routes }: IProps) {
    return (
        <NavDiv>
            <ContainerDiv>
                <h1>
                    <Link to={"/"}>미니 쇼핑몰</Link>
                </h1>
                <div>
                    <ul>
                        {routes.map((r, i) => {
                            return (
                                <li key={i}>
                                    <Link to={r.path}>
                                        {r.name} {r.name === "장바구니" && <CountNotify />}
                                    </Link>
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
