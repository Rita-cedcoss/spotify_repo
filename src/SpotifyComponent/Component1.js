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
           <div id="middle">
                   <h1>Get Premium free for 1 month</h1>
                   <p>just ₹119/month after.Debit and credit cards accept.Cancel anytime</p>
                   <button id="button1">GET START</button>
                   <button id="button2">SEE OTHER PLAN</button>
                   <p id="pbottom">Monthly subscription fee applies after. Limited eligibility. Terms and conditions apply. Offer 11/09/22.</p>
           </div>
           <div id="bottom">
               <h1>Introducing Premium Mini</h1>
               <p>₹7 for 1 day</p>
               <p>₹25 for 1 week</p>
               <button id="btnbottom">GET MINI</button>
               <p id="pbottom">Term and Condition apply</p>
           </div>
         </div>
        </>
    )
  }
}

export default Component1