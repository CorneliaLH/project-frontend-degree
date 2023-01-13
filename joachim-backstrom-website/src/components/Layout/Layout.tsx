import { Link, Outlet } from "react-router-dom";
import "./sass/layout.css";
import logoImage from "../../images/logo-dark2.svg";
export function Layout() {
  return (
    <>
      <header className='header'>
        <nav>
          <ul>
            <li>
              <Link className='nav-menu-link' to='/'>
                Start
              </Link>
              {/* <a className='nav-menu-link' href='/'>
                Start
              </a> */}
            </li>
            <li>
              <Link className='nav-menu-link' to='/Schedule'>
                Schedule
              </Link>
              {/* <a className='nav-menu-link' href='/Schedule'>
                Schedule
              </a> */}
            </li>
            <li>
              <Link className='nav-menu-link' to='/Biography'>
                Biography
              </Link>
              {/* <a className='nav-menu-link' href='/Biography'>
                Biography
              </a> */}
            </li>

            <li>
              <Link className='nav-menu-link' to='/'>
                <img
                  id='image-logo'
                  src={logoImage}
                  alt='Logo with Tenor Joachim Bäckström'
                />
              </Link>
            </li>
            <li>
              <Link className='nav-menu-link' to='/Repetoire'>
                Repertoire
              </Link>
              {/* <a className='nav-menu-link' href='/Repetoire'>
                Repertoire
              </a> */}
            </li>
            <li>
              <Link className='nav-menu-link' to='/Media'>
                Media
              </Link>
              {/* <a className='nav-menu-link' href='/Media'>
                Media
              </a> */}
            </li>
            <li>
              <Link className='nav-menu-link' to='/Contact'>
                Contact
              </Link>
              {/* <a className='nav-menu-link' href='/Contact'>
                Contact
              </a> */}
            </li>
          </ul>
        </nav>
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
