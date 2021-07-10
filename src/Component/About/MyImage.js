import React from 'react'
import './MyImage.css'
import Aos from 'aos'
Aos.init({
    duration: 1500,
    easing: 'ease-out',
    delay: 800,
    once:true
})


export default function MyImage() {

    return (
        <div className="my-image-parents" data-aos="image-animation" >
            <div className="my-image">
                {/* <img src={`${window.location.origin}`} alt="" class=""> */}
            </div>

        </div>
    )
}
