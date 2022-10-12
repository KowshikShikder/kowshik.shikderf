import React from 'react'
import './Cover.css'
import Typewriter from 'typewriter-effect'
import { Button, ButtonGroup } from '@material-ui/core'
import { useState } from 'react'


export default function Cover() {

const [Parallax, setParallax] = useState()



window.addEventListener('scroll', ()=>{
    let value= window.scrollY;
    setParallax(value)
})


    return (
        <div className="Cover-parent" >
            <div className="Cover" id="home">
        
            </div>
            {/* <div class="Cover-text" style={{marginTop: Parallax}}  > */}
            <div class="Cover-text" style={{transform:`translateY(${Parallax}px)`}}  >
                <p   data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> Hi,</p>
                <p  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> This is <span>  Kowshik </span></p>
                <p  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> Work with  
                    <Typewriter 
                        className="Typewriter"
                        options={{
                            typeSpeed:"10",
                            startDelay:"200",
                            autoStart:true,
                            loop: true,
                            delay: true,
                            strings:[ "HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express Js", "MongoDB"  ]
                        }}
                    />
                </p>

            </div>
            <div className="animation" style={{transform:`translateY(${Parallax}px)`}}  > 
            <img src={`${window.location.origin}/kowshik.shikderf/Images/thinkingAnimi.png`} alt="" /> 
            </div>

            <div class="HireMeButton" style={{marginTop: Parallax}} >
                <ButtonGroup >
            <Button className="Hire-button" variant="outlined" color="secondary">
                    <p className="hire-button-text"> Hire Me </p> 
            </Button>
            <Button className="Hire-button" variant="outlined" color="secondary">
                    <a href="https://drive.google.com/u/0/uc?id=1qCrb7pMafeeBGeqBZi58d7wKMGY4KQat&export=download"> <p className="hire-button-text"> Download CV  </p>  </a>
            </Button>
            </ButtonGroup>
            </div>

        </div>
    )
}
