import React from 'react'
import About from './About'
import './AboutSection.css'

export default function AboutSection() {
    return (
        <div id="about"> 
            <div className="title title-about">
                <p> About </p>
            </div> 
            
        <div className="about-section">
            <About/>
        </div>
        </div>
    )
}
