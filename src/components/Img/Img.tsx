import React from "react"

interface IProps {
    src: string
    alt?: string
    size?: string
}

function Img({ src, alt, size }: IProps) {
    let imgSize

    return <img src={src || ""} alt={alt || ""} />
}

export default Img
