import Navbar from '@/Components/Navbar'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Imgc from "../public/mohamed.jpg";

const inter = Inter({ subsets: ['latin'] })
export default function CV() {
  return (
    <>
    <Navbar/>
      <title>Mohamed Gamal</title>
    <div className="body">
        <div className="containeer">
          <div className="left_side">
            <div className="profilletext">
              <div className="imgBx">
              <Image
                src={Imgc}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </div>
              <h2>
                Mohamed Gamal
                <br />
                <span>Web Devloper</span>
              </h2>
            </div>
            <div className="ContactInfo">
              <h3 className="titel">Contact Info</h3>
              <ul>
                <a href="http://wa.me/+201100784118" target="blank">
                  <li>
                    <span className="icon">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <span className="text">whatsapp</span>
                  </li>
                </a>
                <li>
                  <a href="tel:+201100784118">
                    <i classNameName="bx bxs-phone"></i>
                  </a>
                </li>
                <a href="https://www.linkedin.com/in/mohamed-gamal-1a95a0232/">
                  <li>
                    <span className="icon">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span className="text">Linkedin</span>
                  </li>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100006153453395">
                  <li>
                    <span className="icon">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span className="text">Facebook</span>
                  </li>
                </a>
                <li>
                  <span className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Talbia, Giza ,Egypt</span>
                </li>
              </ul>
            </div>
            <div className="ContactInfoEducation">
              <h3 className="titel">Education</h3>
              <ul>
                <li>
                  <h4>faculty of law</h4>
                  <h4>Cairo university</h4>
                </li>
                <br />
              </ul>
            </div>
          </div>
          <div className="right_side">
            <div className="about">
              <h2 className="titel2">profile</h2>
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web <br /> Applications that leads to the success of <br />{" "}
                the overall product. Check out some of my work in the Projects
                section.
                <br />
                <br />I can build a responsive website so that your website will
                look perfect on all small and wide screens I can assure you that
                I`ll be able to complete your task on time and with high
                quality.
              </p>
            </div>
            <div className="about">
              <h2 className="titel2">Experience</h2>
              <div className="box">
                <div className="text">
                  <h4>WEB DEVELOPER</h4>
                </div>
              </div>
              <div className="box">
                <div className="text">
                  <h4>WEB DESIGNER</h4>
                </div>
              </div>
            </div>
            <div className="about Skills">
              <h2 className="titel2">Professional Skills</h2>
              <div className="box">
                <h4>Html</h4>
              </div>
              <div className="box">
                <h4>Css</h4>
              </div>
              <div className="box">
                <h4>Javascript</h4>
              </div>
              <div className="box">
                <h4>Bootstrap</h4>
              </div>
              <div className="box">
                <h4>React</h4>
              </div>
              <div className="box">
                <h4>Next js</h4>
              </div>
            </div>
            <div className="about interst">
              <h2 className="titel2">Interest</h2>
              <ul>
                <li>
                   Gaming
                </li>
                <li>
                  Reading
                </li>
                <li>
                  Cooking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}