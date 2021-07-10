import React from 'react'
import './ClientsComment.css'
import ClientCommentItem from './ClientCommentItem'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function ClientsComment() {

    return (
        <div className="ClientsComment-parent-main" id="review">

            <div className="title title-client">
                <p> Client's Review </p>
            </div>

        <div className="ClientsComment-parent">

            

            <OwlCarousel 

                className=' Clients-comment-main owl-theme bg-danger' 
                autoplayTimeout={4500} 
                autoplay={true}
                autoplayHoverPause={true}
                loop={true}
                responsive={{
                        0:{
                            items:1
                        },
                        700:{
                            items:1
                        },
                        1230:{
                            items:1
                        }
                    }} nav>

                <ClientCommentItem className="item" image="Mammu.jpeg"  name="Humaira Rahman Oishi" identity="Brac University"
                    comment= "I am very happy with my new website! It looks professional and very easy to navigate. My experience with Kowshik Shikder has been great. He handle things very efficiently. I would recommend him to anyone looking for website designer or web developer. [Dummy text]"  />

                <ClientCommentItem className="item" image="RaessMuhammad.jpg"   name="Raees Mohammed" identity="Freelancing digital market"
                    comment= "We are very impressed with the all aspects of our new website. We would highly recommend Kowshik Shikder to anyone looking to build a new website. [Dummy text]"  />

                <ClientCommentItem className="item" image="Shawn.jpg"   name="Abir Hasan" identity="Senior Software Engineer at Robi"
                    comment= "My new site created by Kowshik Shikder just launched. He has done a great job of creating exactly what I wanted. Easy to work with and very responsive. He met all of my expectations and had a lot of insight regarding marketing tools I didn’t know existed. [Dummy text]"  />
                
                </OwlCarousel>
            
        </div>
        </div>
    )
}
