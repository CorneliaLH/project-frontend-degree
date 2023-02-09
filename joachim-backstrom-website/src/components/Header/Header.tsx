import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImageLight from "../../images/logo-light2.svg";
import logoImageDark from "../../images/logo-dark2.svg";
import "./sass/header.css";

//Header Component
//Header content has different color based on the url
//Resizing of the window sets different views based on window width
//Below 900px the menu is displayed as a hamburger, above it is a navbar.

export function Header() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorNavLinks, setColorNavLinks] = useState<object>();
  const [urlLogoLinks, setUrlLogoLinks] = useState<string>();
  const [backgroundColorBurger, setBackgroundColorBurger] = useState<object>();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    handleLinks();
  }, [location]);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  const handleLinks = () => {
    if (location.pathname === "/") {
      setColorNavLinks({ color: "white" });
      setUrlLogoLinks(logoImageLight);
      setBackgroundColorBurger({ backgroundColor: "black" });
    } else {
      setColorNavLinks({ color: "black" });
      setUrlLogoLinks(logoImageDark);
      setBackgroundColorBurger({ backgroundColor: "white" });
    }
  };

  return (
    <>
      <header
        className={isDesktop ? "header-desktop" : "header-tablet-mobile"}
        id={isDesktop ? "header-desktop" : "header-tablet-mobile"}
      >
        <section className='logo-tablet-mobile' id='logo-tablet-mobile'>
          <h1>
            <span className='visually-hidden'>Tenor Joachim Bäckström</span>
            <Link className='nav-menu-link' to='/'>
              <img
                width='100'
                height='100'
                id='image-logo-light-mobile'
                src={urlLogoLinks}
                alt='Logo with Tenor Joachim Bäckström'
              />
              <img
                width='100'
                height='100'
                id='image-logo-dark-mobile'
                src={urlLogoLinks}
                alt='Logo with Tenor Joachim Bäckström'
              />
            </Link>
          </h1>
        </section>
        {isDesktop && (
          <nav id='menu-nav'>
            <ul>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/Schedule'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/Biography'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Biography
                </Link>
              </li>

              <li id='listitem-logo'>
                <h1>
                  <span className='visually-hidden'>
                    Tenor Joachim Bäckström
                  </span>
                  <Link
                    className='nav-menu-link'
                    to='/'
                    onClick={() => {
                      let hamburger =
                        document.querySelector<any>(".burger-button");
                      setMenuOpen(false);
                      hamburger.classList.remove("menu-open");
                      hamburger?.setAttribute("aria-expanded", "true");
                    }}
                  >
                    <img
                      width='100'
                      height='100'
                      id='image-logo-light'
                      src={urlLogoLinks}
                      alt='Logo with Tenor Joachim Bäckström'
                    />
                    <img
                      width='100'
                      height='100'
                      id='image-logo-dark'
                      src={urlLogoLinks}
                      alt='Logo with Tenor Joachim Bäckström'
                    />
                  </Link>
                </h1>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/Repetoire'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Repertoire
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/Media'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  style={colorNavLinks}
                  to='/Contact'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {menuOpen && (
          <nav id='menu-nav'>
            <ul>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/Schedule'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/Biography'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Biography
                </Link>
              </li>

              <li id='listitem-logo'>
                <h1>
                  <span className='visually-hidden'>
                    Tenor Joachim Bäckström
                  </span>
                  <Link
                    className='nav-menu-link'
                    to='/'
                    onClick={() => {
                      let hamburger =
                        document.querySelector<any>(".burger-button");
                      setMenuOpen(false);
                      hamburger.classList.remove("menu-open");
                      hamburger?.setAttribute("aria-expanded", "true");
                    }}
                  >
                    <img
                      id='image-logo-light'
                      src={logoImageLight}
                      alt='Logo with Tenor Joachim Bäckström'
                    />
                    <img
                      id='image-logo-dark'
                      src={logoImageDark}
                      alt='Logo with Tenor Joachim Bäckström'
                    />
                  </Link>
                </h1>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/Repetoire'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Repertoire
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/Media'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  className='nav-menu-link'
                  to='/Contact'
                  onClick={() => {
                    let hamburger =
                      document.querySelector<any>(".burger-button");
                    setMenuOpen(false);
                    hamburger.classList.remove("menu-open");
                    hamburger?.setAttribute("aria-expanded", "true");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <button
          aria-expanded='false'
          aria-label='Menu'
          className='burger-button'
          style={backgroundColorBurger}
          onClick={() => {
            let hamburger = document.querySelector<any>(".burger-button");

            if (menuOpen === true) {
              setMenuOpen(false);

              hamburger.classList.remove("menu-open");
              hamburger?.setAttribute("aria-expanded", "true");
            } else {
              setMenuOpen(true);

              hamburger.classList.add("menu-open");
              hamburger?.setAttribute("aria-expanded", "false");
            }
          }}
        >
          <span aria-hidden='true' className='hamburger' id='hamburger'></span>
        </button>
      </header>
    </>
  );
}
