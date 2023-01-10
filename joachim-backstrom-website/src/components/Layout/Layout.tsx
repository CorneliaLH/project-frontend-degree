import { Outlet } from "react-router-dom";
import "./sass/layout.css";
import logoImage from "../../images/logo-dark2.svg";
export function Layout() {
  return (
    <>
      <header className='header'>
        <nav>
          <ul>
            <li>
              <a className='nav-menu-link' href='/'>
                Start
              </a>
            </li>
            <li>
              <a className='nav-menu-link' href='/Schedule'>
                Schedule
              </a>
            </li>
            <li>
              <a className='nav-menu-link' href='/Biography'>
                Biography
              </a>
            </li>

            <li>
              <a href='/'>
                <img
                  id='image-logo'
                  src={logoImage}
                  alt='Logo with Tenor Joachim Bäckström'
                />
              </a>
            </li>
            <li>
              <a className='nav-menu-link' href='/Repetoire'>
                Repetoire
              </a>
            </li>
            <li>
              <a className='nav-menu-link' href='/Media'>
                Media
              </a>
            </li>
            <li>
              <a className='nav-menu-link' href='/Contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <Outlet></Outlet>
      </main>
      <footer>
        <section>footer</section>
      </footer>
    </>
  );
}
