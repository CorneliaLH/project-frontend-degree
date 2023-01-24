import { useEffect, useState } from "react";
import { IConcert } from "../../models/IConcert";
import { IOpera } from "../../models/IOpera";
import { RepertoireService } from "../../services/RepertoireService";
import "./sass/repetoire.css";
import imagedark from "../../images/logo-dark2.svg";

export function Repetoire() {
  const [operaList, setOperaList] = useState<IOpera[]>([]);
  const [concertList, setConcertList] = useState<IConcert[]>([]);

  //Change navigation link color
  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let iconLight = document.querySelector<any>("#image-logo-light");
    let iconDark = document.querySelector<any>("#image-logo-dark");
    let iconLightMobile = document.querySelector<any>(
      "#image-logo-light-mobile"
    );
    let iconDarkMobile = document.querySelector<any>("#image-logo-dark-mobile");
    let hamburgerBackground = document.querySelector<any>(".burger-button");
    hamburgerBackground.style.backgroundColor = "#ffffff";

    if (window.innerWidth > 600 && window.innerWidth < 900) {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }
    } else if (window.innerWidth < 600) {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }
    } else {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "black";
      }
    }
    // console.log(icon);
    if (iconLight != null && iconDark != null) {
      iconLight.style.display = "none";
      iconDark.style.display = "block";
    }

    if (iconLightMobile != null && iconDarkMobile != null) {
      iconLightMobile.style.display = "none";
      iconDarkMobile.style.display = "block";
    }
  }, []);

  //Get Opera-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireOpera().then((response) => {
      console.log(response);
      setOperaList(response);
    });
  }, []);

  //Get Concert-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireConcert().then((response) => {
      console.log(response);
      setConcertList(response);
    });
  }, []);

  return (
    <>
      <div className='repertoire-container-page'>
        <div className='menu-banner'></div>
        <div className='repertoire-hero-image'></div>
        <div className='repertoire-hero-image-filter'></div>

        <section className='container-repertoire'>
          <h2 className='heading2'>Repertoire</h2>
          <div className='container-repertoire-cards'>
            <article className='repertoire-opera'>
              <h3 className='heading3'>Opera</h3>
              <div className='repertoire-heading-container'>
                <h4 className='heading4'>Composer</h4>
                <h4 className='heading4'>Opera</h4>
                <h4 className='heading4'>Role</h4>
              </div>
              <section className='repertoire-item'>
                {operaList.map((item) => {
                  return (
                    <>
                      <div className='repertoire-item-text'>
                        <p>{item.composer}</p>
                        <p>{item.opera}</p>
                        <p>{item.role}</p>
                      </div>
                    </>
                  );
                })}
              </section>
            </article>
            <article className='repertoire-concert'>
              <h3 className='heading3'>Concert</h3>
              <div className='repertoire-heading-container'>
                <h4 className='heading4'>Composer</h4>
                <h4 className='heading4'>Work</h4>
              </div>
              <section className='repertoire-item'>
                {concertList.map((item) => {
                  return (
                    <>
                      <div className='repertoire-item-text'>
                        <p>{item.composer}</p>
                        <p>{item.work}</p>
                      </div>
                    </>
                  );
                })}
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
