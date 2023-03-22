import React from 'react'
import "./Footer.css"
import img1 from "../../image/9.png"
import img2 from "../../image/8.png"
import img3 from "../../image/10.png"
import img4 from "../../image/11.png"
import line from "../../image/line.png"
import lol from "../../image/12.png"
import img5 from "../../image/Line 28.png"

import { TfiLinkedin } from 'react-icons/tfi'
import { SlSocialTwitter } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'



function Footer() {
    return (
        <div className='Footer'>
            <div className="footer_ima">
                <div className="footer_ima1">
                    <p>LATEST NEWS</p>
                    <h2>Check some of latest
                        news & Articles</h2>
                    <img src={img1} width="400px" alt="" />
                    <p>BRANDING</p>
                    <h3>Things to look for when
                        comparing branding
                        alternatives</h3>
                </div>
                <img src={line} height="500px" background-color="black" alt="" />
                <div className="footer_ima2">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna.</p>

                    <img src={img2} width="400px" alt="" />
                    <p>BRANDING</p>
                    <h3>Drawing identity elements on
                        branded media</h3>
                    <hr height="500px" />
                    <h5>DEVELOPMENT</h5>
                    <h4>How to add a count animation
                        the webflow site</h4>
                </div>

            </div>
            <hr />
            <div className="footer1">
                <div className="logoo">
                    <h1 className='mol'>GET IN</h1>
                    <img src={lol} alt="" />

                </div>
                <hr />
                <div className="logo">
                    <div className='div1'>
                        <h2 className='h2'><img src={img4} width="30px" alt="" /> BINO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.</p>
                        <h4>© 2023. All Rights Reserved.</h4>
                    </div>
                    <img src={line} height="250px" alt="" />
                    <div className="div2">
                        <h2> Useful Link</h2>
                        <li>HOME</li>
                        <li> SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>LATEST NEWS</li>
                        <li>CONTACT</li>
                    </div>
                    <div className="div3">
                        <h2> Useful Link</h2>
                        <p>20 Cooper Square,
                            New York, NY 1003, USA</p>
                        <p>(+251)155 69669 365</p>
                        <p>support@bimo.com</p>
                        <p>www.bimosupport.com</p>
                    </div>
                    <div className="div4">
                        <h2> Useful Link</h2>
                        <h4>Be up to date with new products.</h4>
                        <p>Enter email...</p>
                        <hr />
                        <h5> SUBSCRIBE <img src={img3} alt="" /></h5>
                    </div>
                </div>

            </div>
            <img src={img5} width="100%" alt="" />
            <div className="icons">
                <button><SlSocialTwitter /></button>
                <button><AiOutlineInstagram /></button>
                <button><TfiLinkedin /></button>

                <p>Privacy Policy     |     Terms of Use</p>
            </div>

        </div>
    )
}

export default Footer