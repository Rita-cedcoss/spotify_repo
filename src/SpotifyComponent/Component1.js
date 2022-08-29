import React, { Component } from 'react'
import './Component.css'

class Component1 extends Component {
  render() {
    return (
        <>
         <div id="outer">
           <div id="topbar">
             <div id="topbar_left">
                <div id="tobarimage"><img id="image_topbar" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=''></img></div>
             </div>
             <div id="topbar_right">
                   <a href='{#}' id="achorTop">Primium</a>
                   <a href='{#}'>Support</a>   
                   <a href='{#}'>Download</a>
                   <a href='{#}'>|</a> 
                   <a href='{#}'>Sign up</a>
                   <a href='{#}'>Log in</a>
                    
             </div>
           </div>
         </div>
        </>
    )
  }
}

export default Component1