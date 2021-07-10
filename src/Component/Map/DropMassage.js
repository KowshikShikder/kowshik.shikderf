import React from 'react'

export default function DropMassage() {
    return (
        <div className="drop-massage">
            <p> Drop a massage </p>
            <form>
                <label> Name:   </label>  <br/>
                <input type="text" name="name" className="input" placeholder="Enter your name" />  <br/><br/>

                <label> Contact Number:   </label>  <br/>
                <input type="number" name="mobile" placeholder="Enter you number" />  <br/><br/>

                <label> Your massage:   </label>  <br/>
                <textarea  type="text" placeholder="Your massage" />  <br/><br/>

                <button type="submit" className="btn btn-primary" > Submit  </button>
            </form>






        </div>
    )
}
