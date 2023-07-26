/* import React from "react";
import { /* Link, */ /*NavLink } from "next"; */
/* import "./style.css"; */

/* import {
  NavbarSection, */
/* Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor, */
/* } from "./style.js"; */
//import styled from "styled-components";

/* const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`; */

/* const LinkStyle = () => {
  `
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
  `
} */

import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <div className="header" id="header">
        <div className="container">
          {/* <a href="index.html" className="logo"> */}
          <Link className="logo" href="/">
            Mohamed
          </Link>
          {/* Mohamed */}
          {/* </a> */}
          <ul className="main-nav">
            <li>
              <Link href="/Projects">
                Projects
                {/* <a href="team.html">Projects</a> */}
              </Link>
            </li>
            <li>
              <Link href="/CV">
                CV
                {/* <a href="team.html">Projects</a> */}
              </Link>
            </li>
            {/* <li>
              <a href="Quiz.html">Quiz</a>
            </li>
            <li>
              <a href="books.html">books</a>
            </li> */}
            {/* <li>
              <a href="#">Other Links</a>
              
              <div class="mega-menu">
                <div class="image">
                  <img src="img/megamenu.png" alt="" />
                </div>
                <ul class="links">
                  <li>
                    <a href="Responsive Games Website/index.html">
                      <i class="fa-solid fa-gamepad"></i> Game Store
                    </a>
                  </li>
                  <li>
                    <a href="hotel/index.html">
                      <i class="fa-solid fa-hotel"></i> Holux
                    </a>
                  </li>
                  <li>
                    <a href="skills.html">
                      <i class="far fa-check-circle fa-fw"></i> Skills
                    </a>
                  </li>
                  <li>
                    <a href="video.html">
                      <i class="far fa-play-circle fa-fw"></i> Video
                    </a>
                  </li>
                  <li>
                    <a href="landing.html">
                      <i class="fa-solid fa-house-laptop"></i> Landing page
                    </a>
                  </li>
                  <li>
                    <a href="restaurant.html">
                      <i class="fa-solid fa-utensils"></i> restaurant
                    </a>
                  </li>
                  <li>
                    <a href="tesla.html">
                      <i class="fa-solid fa-car"></i> tesla
                    </a>
                  </li>
                  <li>
                    <a href="learnMems.html">
                      <i class="fa-solid fa-graduation-cap"></i> Learn Mems
                    </a>
                  </li>
                  <li>
                    <a href="ContactUs.html">
                      <i class="fa-solid fa-phone-volume"></i> ContactUs
                    </a>
                  </li>
                  <li>
                    <a href="New folder (5)/index.html">
                      <i class="fa-solid fa-photo-film"></i> social media
                    </a>
                  </li>
                  <li>
                    <a href="Liberty/index.html">
                      <i class="fa-solid fa-vr-cardboard"></i> Liberty
                    </a>
                  </li>
                  <li>
                    <a href="Liberty/index.html">
                      <i class="fa-solid fa-vr-cardboard"></i> Liberty
                    </a>
                  </li>
                  <li>
                    <a href="cyborg/index.html">
                      <i class="fa-solid fa-gamepad"></i>Cyborg
                    </a>
                  </li>
                  <li>
                    <a href="bootstrap2/index.html">
                      <i class="fa-solid fa-person"></i>Tale
                    </a>
                  </li>
                </ul>
              </div> 

            </li>*/}
          </ul>
        </div>
      </div>
      {/*  <!--End Heder--> */}
    </div>
  );
};

export default Navbar;
