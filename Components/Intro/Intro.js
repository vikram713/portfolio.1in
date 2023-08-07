import React from 'react'
import img from '../Img/github.png'
import img2 from '../Img/instagram.png'
import Likdin from '../Img/linkedin.png'
import vect from '../Img/one.png'
import ve from '../Img/Vector2.png'
import boy from '../Img/boy.png'
import Floating from './Floating'
import crown from '../Img/crown.png'
import thumb from '../Img/thumbup.png'
import glass from '../Img/glassesimoji.png'
import resume from '../Intro/vikram.pdf'
const Intro = () => {
  return (
    <div className="intro">
    <div className="i-left">
     <div className="i-name">
     <span>Hii I am</span>
     <span>Vikram Singh Bora</span>
     <span>Frontend Devloper With High Level Of Experience
     In Designing and Devlopment ,Producting The Quality Work 
     </span>   
     <button className='i-button'><a href={resume} download>Download cv</a></button>
      <div className="i-icons">
      <img src={img} alt="" />
      <img src={img2} alt="" />
      <img src={Likdin} alt="" />
      </div>
     </div>
    </div>
    <div className="i-right"> 
    <img src={vect} alt="" />
    <img src={ve} alt="" />
    <img src={boy} alt="" />
    <img src={glass} alt="" />
    <div style={{top:'3%' ,left:'60%'}}>
    <Floating image={crown} txt1="web" txt2="Devloper"/>
    </div>
    <div style={{top:'22.9rem' ,left:'3%'}}>
    <Floating image={thumb} txt1="Best" txt2="Design"/>
    </div>
    <div className="blur" style={{background:"rgb(238 ,210, 255)"}}>
    </div>
    <div className="blur" style={{background:"rgb(198,255,227)",
  top:"21rem", 
  left:"-11%",
  }}>
    </div>

      </div>
    </div>
  )
}

export default Intro
