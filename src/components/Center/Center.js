import React from 'react'
import "./Center.css"
import branding from "../images/branding.png"
import content from "../images/content.png"
import design from "../images/design.png"
import marketing from "../images/marketing.png"
import dev from "../images/dev.png"
import text from "../images/text.png"
import button from "../images/button.png"
import title from "../images/title.png"

function Center() {
  return (
    <div className='center'>
        <div className="center_top">
            <img src={title} alt="" />
        </div>
        <div className="middle">
            <div className="middle_left">
              <img src={dev} alt="" />
            </div>
            <div className="middle_right">
                <div className="branding">
                    <img src={branding} alt="" />
                </div>
                <div className="design">
                    <img src={design} alt="" />
                </div>
            </div>
        </div>
        <div className="center_bottom">
        <div className="bottom_left">
            <img src={text} alt="" />
            <img src={button} alt="" />
        </div>
         <div className="bottom_right">
            <div className="marketing">
                <img src={marketing} alt="" />
            </div>
            <div className="content">
                <img src={content} alt="" />
            </div>
         </div>
        </div>
    </div>
  )
}

export default Center