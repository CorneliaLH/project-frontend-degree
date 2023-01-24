import { Link, Outlet } from "react-router-dom";
import "./sass/layout.css";
import logoImageLight from "../../images/logo-light2.svg";
import logoImageDark from "../../images/logo-dark2.svg";
import { useEffect, useState } from "react";
export function Layout() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  }, []);

  return (
    <>
      <header
        className={isDesktop ? "header-desktop" : "header-tablet-mobile"}
        id={isDesktop ? "header-desktop" : "header-tablet-mobile"}
      >
        <aside className='logo-tablet-mobile' id='logo-tablet-mobile'>
          <Link className='nav-menu-link' to='/'>
            <img
              width='100%'
              height='100%'
              id='image-logo-light-mobile'
              src={logoImageLight}
              alt='Logo with Tenor Joachim Bäckström'
            />
            <img
              width='100%'
              height='100%'
              id='image-logo-dark-mobile'
              src={logoImageDark}
              alt='Logo with Tenor Joachim Bäckström'
            />
          </Link>
        </aside>
        {isDesktop && (
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
                  Home
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
                    width='100%'
                    height='100%'
                    id='image-logo-light'
                    src={logoImageLight}
                    alt='Logo with Tenor Joachim Bäckström'
                  />
                  <img
                    width='100%'
                    height='100%'
                    id='image-logo-dark'
                    src={logoImageDark}
                    alt='Logo with Tenor Joachim Bäckström'
                  />
                </Link>
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
          <div aria-hidden='true' className='hamburger' id='hamburger'></div>
        </button>
      </header>
      <main className='main'>
        <Outlet></Outlet>
      </main>
      <footer>
        <section className='container-footer'>
          <article>
            <p className='contact-footer'>Contact information to agent</p>
            <p className='copyright'>Copyright 2023</p>
          </article>
        </section>
      </footer>
    </>
  );
}
