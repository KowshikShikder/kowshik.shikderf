import React from 'react'
import './Loading.css'

export default function Loading() {
    return (
      <div class="loading-parent">
        <div class="animation-loading">
        
          <div class="pillar"> </div>
          <div class="pillar"> </div>
          <div class="pillar"> </div>
          <div class="pillar"> </div>
          <div class="pillar"> </div>
          
          <div class="ball-holder">
              <div class="ball"></div>
          </div>
        </div>
      </div>
    )
}
