import React from 'react'
import "./Map.css"
import DropMassage from './DropMassage'

export default function Map() {
    return (
        <div className="Drop-map-parent">

            <DropMassage />

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8229501338!2d90.27889453685273!3d23.780887145881692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1625736805914!5m2!1sen!2sbd"  title="map" loading="lazy"></iframe>

            </div>

        </div>
    )
}
