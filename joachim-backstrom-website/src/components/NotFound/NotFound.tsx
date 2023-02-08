import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sass/notfound.css";

export function NotFound() {
  useEffect(() => {
    let headerDesktop = document.querySelector<HTMLElement>(".header-desktop");
    let headerTabletMobile = document.querySelector<HTMLElement>(
      ".header-tablet-mobile"
    );
    let footer = document.querySelector<HTMLElement>(".container-footer");
    if (headerDesktop !== null) {
      headerDesktop.style.display = "none";
    }
    if (headerTabletMobile !== null) {
      headerTabletMobile.style.display = "none";
    }

    if (footer !== null) {
      footer.style.display = "none";
    }
  }, []);
  return (
    <>
      <div className='container-notfound-page'>
        <section className='container-notfound-card'>
          <h2>404</h2>
          <p>Something went wrong! Page not found</p>
          <Link className='notfound-link' to='/'>
            Home
          </Link>
        </section>
      </div>
    </>
  );
}
