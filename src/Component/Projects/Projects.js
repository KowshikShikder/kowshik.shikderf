import React from 'react'
import './Projects.css'
import ProjectsItem from './ProjectsItem'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Projects() {



    


    return (
        <div className="Projects-main" id="projects">
            <div className="title title-project">
                <p> My projects </p>
            </div>

            <div className="Projects-Parent">
            <OwlCarousel 
                className='  owl-theme' 
                // autoplayTimeout={3000} 
                // autoplay={true}
                // autoplayHoverPause={true}
                loop={true}
                responsive={{
                        0:{
                            items:1
                        },
                        700:{
                            items:2
                        },
                        1230:{
                            items:3
                        }
                    }} nav>
            
                <ProjectsItem className="item" image="03_Homepage.jfif" webSiteName="Organization Portfolio" />
                <ProjectsItem className="item" image="grameenphone.jpg" webSiteName="Grameenphone's Website" />
                <ProjectsItem className="item" image="OnlineShopWebsite.png" switchSides={true} webSiteName="Online Shop"/>
                

            </OwlCarousel>

            </div>
        </div>
    )
}
