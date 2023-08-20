import Navbar from '@/Components/Navbar'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import narative from "../public/Capturre.JPG";
import Cyborg from "../public/Cyborg.png";
import movies from "../public/movies.PNG";
import RUBIC from "../public/RUBIC.JPG";
import menu from "../public/menu.JPG";
import plasec from "../public/Capture1 - Copy.JPG";
import social from "../public/social-media.JPG";
import Stephine from "../public/Capture.PNG";
import Tale from "../public/Tale.JPG";
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
export default function Projects() {
  return (
    <>
    <Head />
      <title>Mohamed Gamal</title>
      <meta name="description" about="Mohamed Gamal frontend"/>
      <meta name="description" about="Hello, I'm Mohamed"/>
      <meta name="description" about="make your amazing Website"/>
      <meta property="og:title" about="Front End Developer"/>
      <meta property="og:title" about="Mohamed Gamal"/>
      <meta property="og:title" about="Mohamed Gamal frontend"/>
      <meta name="keywords" content="frontend FrontEnd Mohamed Gamal"/>
      <meta name="authro" content="Mohamed Gamal"/>
      <link rel="icon" href="favicon.ico"/>
    <Navbar/>
      <title>Mohamed Gamal</title>
    <button class="button">
      <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Projects</span>
      </span>
    </button>
        <div className="up">
          
          <div className="continer">
            <div className="">
              <a href="https://mohamed-gamal2.surge.sh/" target="blank">
                <Image
                src={narative}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a href="https://mohamed-gamal1.surge.sh/" target="blank">
                <Image
                src={plasec}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a href="http://stephanie.surge.sh/" target="blank">
                <Image
                src={Stephine}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a
                href="https://cyborg.surge.sh/"
                target="blank"
              >
                <Image
                src={Cyborg}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a href="https://mohamed-gamal4.surge.sh/" target="blank">
                <Image
                src={movies}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a href="https://mohamed-gamal-g.github.io/Tale" target="blank">
                <Image
                src={Tale}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a
                href="https://mohamed-gamal-g.github.io/Restaurant/inex.html"
                target="blank"
              >
                <Image
                src={menu}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a href="https://mohamed-gamal-g.github.io/RUBIC/" target="blank">
                <Image
                src={RUBIC}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
          <div className="continer">
            <div className="">
              <a
                href="https://mohamed-gamal-g.github.io/social-media/"
                target="blank"
              >
                <Image
                src={social}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
              </a>
            </div>
          </div>
        </div>
    </>
  )
}