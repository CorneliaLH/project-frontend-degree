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
    let icon = document.querySelector<HTMLImageElement>("#image-logo");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "black";
    }
    if (icon != null) {
      icon.src = imagedark;
    }
  }, []);

  //Get Opera-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireOpera().then((response) => {
      setOperaList(response);
    });
  }, []);

  //Get Concert-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireConcert().then((response) => {
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
