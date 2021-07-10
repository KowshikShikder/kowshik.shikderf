import React from 'react'
import './MySkills.css'
import Aos from 'aos'
Aos.init();


export default function MySkills() {


    return (
        <div className="MySkills-parents" id="skills">

        <div className="title title-mySkills">
            <p> Skills </p>
        </div>

            
        <div className="MySkills-main">

            <div className="html bar oneBar ">
                <div className="skills-icon"><i class="fab fa-html5"></i>  </div>
                    <div className="skills-bar">  
                        
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="html" > </div></div>

                    <p>  90% </p>
                </div> 
            </div>

            

            
            <div className="css bar twoBar">
                <div className="skills-icon"><i class="fab fa-css3-alt"></i>  </div>
                    <div className="skills-bar">  
                    
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="css" > </div></div>

                    <p> 85% </p>
                </div> 
            </div>

            
            <div className="javaScript bar oneBar ">
                <div className="skills-icon"><i class="fab fa-js-square"></i>  </div>
                    <div className="skills-bar">  
                    
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="js"> </div></div>

                    <p> 70% </p>
                </div> 
            </div>


            
            <div className="react bar twoBar">
                <div className="skills-icon"><i class="fab fa-react"></i>  </div>
                    <div className="skills-bar">  
                    
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="react"> </div></div>

                    <p> 75% </p>
                </div> 
            </div>

            
            <div className="nodeJs bar oneBar ">
                <div className="skills-icon"><i class="fab fa-node"></i>  </div>
                    <div className="skills-bar">  
                        
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="node"> </div></div>

                    <p> 75% </p>
                </div> 
            </div>

            
            <div className="mongodb bar twoBar">
                <div className="skills-icon"><i class="fab fa-mdb"></i>  </div>
            <div className="skills-bar">  
                        
                    <div className="progressBar"> <div className="progressBar-inner"  data-aos-duration="800" data-aos-easing="ease-out" data-aos-offset="20"   data-aos="mongo"> </div></div>

                    <p> 80% </p>
                </div> 
            </div>
            </div>
        </div>
    )
}
