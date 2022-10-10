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
                <p> Who I am
                    <div class="para1-style">
                        
                    </div>
                </p>
                <p className="about-description">
                    
                        Working as a frontend web developer since 2020. I have created several websites specially for schools, organizations, online stores.
                    
                    <br/><br/>
                        Along with HTML and CSS I am quite good at react JS, next JS, Redux and obviously bootstrap & sass.
                <br/><br/>
                        I Have the quality of Hard-working, quick-learning.
                </p>

                <MyImage/>
            </div>
        </div>
    )
}
