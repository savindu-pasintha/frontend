import React from 'react'
import image from "./golk.png"
import "./reloader.css"
function Fallback() {
    return (
        <div className="reloader">
            <img width="100px" height="100px"  src={image} className="reloader_image" />
        </div>
    )
}

export default Fallback



