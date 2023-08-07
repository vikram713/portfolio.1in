import React from 'react'
import '../Intro/Floating.css'
const Floating = ({ image, txt1, txt2 }) => {
    return ( <
        div >
        <
        div className = "floatingdiv" >
        <
        img src = { image }
        alt = "" / >
        <
        span > { txt1 } <
        br / > { txt2 } <
        /span> <
        /div> <
        /div>
    )
}

export default Floating