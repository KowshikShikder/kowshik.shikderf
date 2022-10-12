import React, { useEffect } from 'react'


export default function ProjectsItem(props) {

const {image, webSiteName} =props;



    const scrollToBottom = () => {
        // window.scrollTo(300, 500);
        // document.querySelector(".projects").scroll="200"
    }

    return (

            <div className="projects" onClick={scrollToBottom}>
                <p id="MyImage"> {webSiteName} </p>

                <div className="project-img">

                    <img src={`${window.location.origin}/kowshik.shikderf/Images/${image}`} alt="" />


                </div>

            </div>
    )
}
