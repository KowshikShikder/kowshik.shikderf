import React from 'react'
import MyImage from './MyImage'
import './About.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init({
    duration: 1500,
    easing: 'ease-out',
    delay:1500,
  });

export default function About() {

    
    return (
        <div  data-aos="about-animation" className="about-parent">
            <div className="About">
                <p> Who am I
                    <div class="para1-style">
                        
                    </div>
                </p>
                <p className="about-description">
                    
                        Working as a full-stack web developer for about 1 year. I have    created several websites specially for school , organization, online store.
                    
                    <br/><br/>
                        I use reactJS for frontend with HTML, CSS and JavaScript, NodeJS, expressJS for backend, Mongodb for database.
                <br/><br/>
                        Have the quality of Hard-working, quick-learning.
                </p>

                <MyImage/>
            </div>
        </div>
    )
}
