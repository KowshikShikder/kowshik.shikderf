import React from 'react'

export default function ServiceItem(props) {

    const { title, description, icon, color }= props;


    return (
        <div className="service">
                <div className="Service-icon" style={{background:color}}> <i className={`fa ${icon}`}></i> </div>
                <div className="Service-title"> {title} </div>
                
                <div className="Service-details" style={{background:color}}>
                    <p> {description}  </p> 
                </div>
        </div>
    )
}
