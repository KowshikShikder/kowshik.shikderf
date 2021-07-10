import React from 'react'

export default function ContactItem(props) {

    const {icon, text1, text2, color, link, placeholder }  = props


    return (
        <div className="Content-placeholder">
        <div className="Contact" style={{boxShadow: `0px 0px 20px 1px ${color}`}}>
        <div className="contact-icon"><i className={`fab ${icon}`} style={{color: color}} ></i></div>
            <div className="contact-text text-1"> <p> {text1} </p>   </div>
            <div className="contact-text text-2 btn" > <p> <a href={link}> {text2} </a> </p>   </div>
        </div>
        
        <div className="contact-placeholder"> <p>  {placeholder} </p>  <div className="placeholder-style">   </div> </div>

        </div>
    )
}
