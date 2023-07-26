import Navbar from '@/Components/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head />
      <title>Mohamed Gamal</title>
    <Navbar/>
    <div className='Home_continer'>
      <div className="loader">
        <span className="loader-text">Hello,&#160;I'm&#160;Mohamed</span>
      </div>
      <h1 className='Front'>
      Front End Developer
      </h1>
      <h2 className='amazing'>make your amazing Website</h2>
      <div className="social-icons">
            <a
              href="https://www.upwork.com/freelancers/~01e2eafb1befdc17cf"
              target="blank"
            >
              <i className="bx bxl-upwork"></i>
            </a>
            <a href="http://wa.me/+201100784118" target="blank">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="tel:+201100784118">
              <i className="bx bxs-phone"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006153453395"
              target="blank"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/mohamed_gmall_h?r=nametag"
              target="blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://twitter.com/Mohamed90202495?t=kN8jNNpBdyj71HjNkJP8CA&s=09"
              target="blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-gamal-1a95a0232/"
              target="blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://youtube.com/channel/UCxTEnUwdpTL4Dgy1PpifSlA"
              target="blank"
            >
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
          <div className="loadere">
            <p>key skills</p>
            <div className="words">
                <span className="word"></span>
                <span className="word">React</span>
                <span className="word">Next js</span>
                <span className="word">API</span>
                <span className="word">responsive design</span>
            </div>
          </div>
    </div>
    </>
  )
}

/* npm run build */
/* npm install --global serve */
/* npm install --global surge */
/* cd build */
/* serve */
/* surge */
/* then log in or if you are long in bress Entrt then Nam The Domain */
/* Mohamed_Gamal1.surge.sh */

/* ريأكت بالعربى - كيفية رفع المشروع [Build / Deploy React Project]

codeZone */
/* https://cyborg.surge.sh/ */
/* mohamed-gamal.surge.sh */
/* removed surge
  surge list
  surge teardown mohamed-gamal.surge.sh
 */
/*
E:\MOHAMED\React places\places> surge list
PS E:\MOHAMED\React places\places> surge teardown Mohamed_Gamal1.surge.sh
Success - mohamed_gamal1.surge.sh has been removed.
*/
//npm install --save react react-swiper
//npm i swiper