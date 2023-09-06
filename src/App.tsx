/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { ShoppingCartSolidIcon } from '@fluentui/react-icons-mdl2';
import FacebookIcon from './assets/facebookIcon';
import { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import TwitterIcon from './assets/twitterIcon';
import InstagramIcon from './assets/instagramIcon';
import YoutubeIcon from './assets/youtubeIcon';
import carmine from "./assets/carmine_01.jpg";
import carmine2 from "./assets/carmine_02.jpg";
import carmine3 from "./assets/carmine_03.jpeg";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const crossOne = useRef(null);
  const crossTwo = useRef(null);
  const navContainer = useRef(null);
  const navLinks = useRef(null);
  const socialsRef = useRef(null);
  const showImagePartOne = useRef(null);
  const showImagePartTwo = useRef(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  //https://carmine-fluid-demo.squarespace.com/

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(crossOne.current, {
        opacity: 0,
        duration: 0.5,
        delay: -0.3,
      }).from(crossTwo.current, {
        opacity: 0,
        duration: 1,
        delay: -0.8,
      })
      
      tl.fromTo(showImagePartOne.current, {
        height: "30vh",
      }, {
        height: 0,
        duration: 0.3,
      }).fromTo(showImagePartTwo.current, {
        height: "30vh",
      }, {
        height: 0,
        duration: 0.3,
      })

      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const handleNavLinks = () => {

    const lineOne = document.getElementById("header-line-1");
    const lineTwo = document.getElementById("header-line-2");
    const header = document.getElementById("header-main");

    if(!timeline?.isActive()) {

      const ctx = gsap.context(() => {
  
        if(navLinks.current) {
          const navLinksCurrent: any = navLinks.current;

          if(navLinksCurrent.style.display === "none" || navLinksCurrent.style.display.length === 0) {
  
            !timeline?.isActive() && timeline?.to(crossOne.current, {
              rotate: "+=45",
              y: "+=7",
              scaleX: 0.6,
              duration: 0.4,
            }).to(crossTwo.current, {
              rotate: "+=135",
              y: "-=3",
              scaleX: 0.6,
              translateY: "-=11px",
              duration: 0.5,
              delay: -0.5,
              ease: "easeIn"
            }).fromTo(navContainer.current, {
              opacity: 0,
              display: "none"
            }, {
              opacity: 1,
              display: "flex",
              delay: -0.5,
              y: "+10",
            }).fromTo(navLinksCurrent, {
              opacity: 0,
              display: "none",
            },{
              opacity: 1,
              display: "flex",
              delay: -0.3,
              y: "+10",
            }).fromTo(socialsRef.current, {
              opacity: 0,
              display: "none",
            }, {
              opacity: 1,
              display: "flex",
              delay: -0.1,
              y: "+10",
            })
  
            if(lineOne) {
              lineOne.style.opacity = "1";
              lineOne.style.height = "1px";
            }
  
            if(lineTwo) {
              lineTwo.style.opacity = "1";
              lineTwo.style.height = "1px";
            }
  
            if(header) {
              header.style.position = "fixed";
            }
  
          } else {
  
            !timeline?.isActive() && timeline?.to(crossOne.current, {
              rotate: "-=45",
              y: "-=7",
              scaleX: 1,
              duration: 0.3,
            }).to(crossTwo.current, {
              rotate: "-=135",
              y: "+=3",
              scaleX: 1,
              translateY: "0px",
              duration: 0.5,
              delay: -0.3,
              ease: "easeIn"
            }).to(navLinks.current, {
              opacity: 1,
              delay: -0.3,
              y: "-10",
              display: ""
            }).to(socialsRef.current, {
              opacity: 0,
              delay: -0.3,
              y: "-10",
              display: "none",
            }).to(navContainer.current, {
              opacity: 0,
              delay: -0.4,
              y: "-10",
            })
  
            if(lineOne) {
              lineOne.style.opacity = "0.6";
              lineOne.style.height = "2px";
            }
  
            if(lineTwo) {
              lineTwo.style.opacity = "0.6";
              lineTwo.style.height = "2px";
            }
  
            if(header) {
              header.style.position = "absolute";
            }

          }
        }
      });

      return () => ctx.revert();

    } else {

      return false;

    }

  }

  return (
    <>
      <main>
        <header id='header-main'>
          <div className="header-hamburger" onClick={handleNavLinks}>
            <span className="header-hamburger-item-1" ref={crossOne} id="header-line-1"></span>
            <span className="header-hamburger-item-2" ref={crossTwo} id="header-line-2"></span>
          </div>
          <div className="header-title">
            <h6>Carmine</h6>
          </div>
          <nav className="header-nav" ref={navContainer}>
            <ul className="header-navlinks" ref={navLinks}>
              <li><a href="#">Speackers</a></li>
              <li><a href="#">Schedule</a></li>
              <li><a href="#">Tickets</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
          <div className="header-socials" ref={socialsRef}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YoutubeIcon/>
          </div>
          <div className="header-cart">
          <ShoppingCartSolidIcon style={{color: "#000", fontSize:"1.5rem", cursor: 'pointer'}}/>
            <div>
              0
            </div>
          </div>
        </header>
        <section className="hero-section">
          <h1>
          Carmine is a new event for designers who think like artists
          </h1>
          <p>
          10—12 August 2023
          </p>
        </section>
      </main>
      <div className="info-banner-container">
        <div className="info-section-one">
          {
            //first one height to 0
          }
          <div className="block-image-one" ref={showImagePartOne}></div>
          {
            //second one height to 0
          }
          <div className="block-image-two" ref={showImagePartTwo}></div>
          <img src={carmine} alt="camine image artists 1" />
        </div>
        <div className="info-section-two">
          <p>
          We went to hundreds of design conferences, were inspired by countless speakers and made tons of new connections and friends… but always walked away feeling like we were only talking about a fraction of what designers can do. This is an event dedicated to the rest of it.
          </p>

        </div>
      </div>
      <section className="info-dates-container">
        <h2>
        Friday—Sunday
        10—12 August 2023
        </h2>
        <div></div>
        <h1>
        Brooklyn—NY
        Clarkson House
        </h1>
        <p>
        We were always taught that art creates problems and design solves them. Is that an overly limiting way to think of our practice? Are we closing ourselves off to interesting opportunities by not embracing the role of troublemakers?
        </p>
      </section>
      <div className="info-banner-container">
        <div className="info-section-one">
          {
            //first one height to 0
          }
          <div className="block-image-one" ref={showImagePartOne}></div>
          {
            //second one height to 0
          }
          <div className="block-image-two" ref={showImagePartTwo}></div>
          <img src={carmine2} alt="camine image artists 1" />
        </div>
        <div className="info-section-two">
          <h1>
          Speakers include Mark Novo, Sofia Pazari, Sandra Cami, Kevin Matsuya, Chase Nevins, Ida Kester, Helen Gates and more.
          </h1>
        </div>
      </div>
      <div className="info-banner-container">
        <div className="info-section-one">
          {
            //first one height to 0
          }
          <div className="block-image-one" ref={showImagePartOne}></div>
          {
            //second one height to 0
          }
          <div className="block-image-two" ref={showImagePartTwo}></div>
          <img src={carmine3} alt="camine image artists 1" />
        </div>
        <div className="info-section-two">
          <p>
          Enjoy live demonstrations of papermaking, Japanese calligraphy, screenprinting and other craft traditions with applications to both art and design. 
          </p>
        </div>
      </div>
      <div className="action-buy-tickets">
        <div className="buy-tickets">
          <a href='#'>
            Buy Tickets
          </a>
        </div>
      </div>
      <footer className="footer-container">
        <ul className="socials">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
