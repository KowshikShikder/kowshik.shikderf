import React from 'react'


export default function ProjectsItem(props) {

const {image, webSiteName} =props;

    document.querySelector('.projects').scroll


    return (

            <div className="projects" >
                <p id="MyImage"> {webSiteName} </p>

                <div className="project-img">

                    <img src={`${window.location.origin}/kowshik.shikderf/Images/${image}`} alt="" />


                </div>

            </div>
    )
}
