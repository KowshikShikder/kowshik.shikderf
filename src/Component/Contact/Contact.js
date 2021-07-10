import React from 'react'
import './Contact.css'
import ContactItem from './ContactItem'


export default function Contact() {
    return (
        <div className="contact-main" id="contact">
            <div className="title title-contact">
                <p> Get in Touch  </p>
            </div>
            

            <div className="Contact-parent">

            <ContactItem icon="fa-facebook-square" text1="Find me on facebook" text2="Kowshik Shikder f" color="#105ec4" link="http://www.facebook.com/kowshik.shikderf" placeholder="Click to visit my profile" />

            <ContactItem icon="fa-whatsapp" text1="Contact through whatsApp" text2="+8801623038224" color="#44C052" link="W" placeholder="WhatsApp number" />

            <ContactItem icon="fab fa-facebook-messenger" text1="Available in Messenger" text2="Kowshik Shikder f" color="#0080F7" link="http://m.me/kowshik.shikderf" placeholder="Click here to send message" />

            <ContactItem icon="fas fa-at" text1="Reach through Email" text2="www.kowshikder7@gmail.com" color="#CE4B3F" link="mailto:www.kowshikder7@gmail.com" placeholder="Click here to mail" />

            <ContactItem icon="fas fa-mobile-alt" text1="Call in cell phone" text2="+8801623038224" color="#6D6C7C" link="www.facebook.com/kowshik.shikderf"  placeholder="Here is contact number" />

            </div>

        </div>
    )
}
