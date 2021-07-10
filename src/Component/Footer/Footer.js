import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <div className="footer">

            <div className="important-link">
            <ul>
                <li>              Important Links: </li>
                <li> <a href="https://www.w3schools.com">  w3school.com  </a>  </li>
                <li> <a href="https://www.freecodecamp.org">  Free code camp  </a>  </li>
                <li> <a href="https://github.com">  Git hub  </a>  </li>
                {/* <li>   </li> */}
            </ul>
            </div>

    <button className="go-to-top">  <a href="#top" className=""> Top  </a> </button>


            <p className="btn"> © 2020 Kowshik Shikder f | All Rights Reserved  </p>
            
        </div>
    )
}
