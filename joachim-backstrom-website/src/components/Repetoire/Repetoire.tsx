import { useEffect, useState } from "react";
import { IConcert } from "../../models/IConcert";
import { IOpera } from "../../models/IOpera";
import { RepertoireService } from "../../services/RepertoireService";
import "./sass/repetoire.css";
import imagedark from "../../images/logo-dark2.svg";
import { time } from "console";

export function Repetoire() {
  const [operaList, setOperaList] = useState<IOpera[]>([]);
  const [concertList, setConcertList] = useState<IConcert[]>([]);

  //Get Opera-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireOpera().then((response) => {
      if (response.status == "error") {
        console.log(response.message);
        return;
      }
      setOperaList(response);
    });
  }, []);

  //Get Concert-list
  useEffect(() => {
    let service = new RepertoireService();
    service.getRepertoireConcert().then((response) => {
      if (response.status == "error") {
        console.log(response.message);
        return;
      }
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
              <div className='repertoire-item'>
                {operaList.map((item) => {
                  return (
                    <div key={item._id} className='repertoire-item-text'>
                      <p>{item.composer}</p>
                      <p>{item.opera}</p>
                      <p>{item.role}</p>
                    </div>
                  );
                })}
              </div>
            </article>
            <article className='repertoire-concert'>
              <h3 className='heading3'>Concert</h3>
              <div className='repertoire-heading-container'>
                <h4 className='heading4'>Composer</h4>
                <h4 className='heading4'>Work</h4>
              </div>
              <div className='repertoire-item'>
                {concertList.map((item) => {
                  return (
                    <div key={item._id} className='repertoire-item-text'>
                      <p>{item.composer}</p>
                      <p>{item.work}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
