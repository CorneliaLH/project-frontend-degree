import { useEffect, useState } from "react";
import { ISchedule } from "../../models/ISchedule";
import { ScheduleService } from "../../services/ScheduleService";
import "./sass/schedule.css";

export function Schedule() {
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [renderedList, setRenderedList] = useState<ISchedule[]>([]);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true);

  //Changes color navigation
  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let iconLight = document.querySelector<HTMLElement>("#image-logo-light");
    let iconDark = document.querySelector<HTMLElement>("#image-logo-dark");
    let iconLightMobile = document.querySelector<HTMLElement>(
      "#image-logo-light-mobile"
    );
    let iconDarkMobile = document.querySelector<HTMLElement>(
      "#image-logo-dark-mobile"
    );
    let hamburgerBackground =
      document.querySelector<HTMLElement>(".burger-button");
    if (hamburgerBackground != null) {
      hamburgerBackground.style.backgroundColor = "#ffffff";
    }
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

    if (iconLight != null && iconDark != null) {
      iconLight.style.display = "none";
      iconDark.style.display = "block";
    }

    if (iconLightMobile != null && iconDarkMobile != null) {
      iconLightMobile.style.display = "none";
      iconDarkMobile.style.display = "block";
    }
  }, []);

  //Get first 3 schedule-items
  useEffect(() => {
    let service = new ScheduleService();
    service.getScheduleAll().then((response) => {
      setScheduleList(response);
      if (response.length > 3) {
        const slicedArray = response.slice(0, 3);
        setRenderedList(slicedArray);
      } else {
        setRenderedList(response);
      }
    });
  }, []);

  //Get 3 more items från shedule list
  function renderMore() {
    if (scheduleList.length > renderedList.length) {
      const slicedArray = scheduleList.slice(0, renderedList.length + 3);
      setRenderedList(slicedArray);
      if (scheduleList.length <= slicedArray.length) {
        setShowMoreButton(false);
      } else setShowMoreButton(true);
    }
  }

  let number = 0;

  return (
    <>
      <div className='schedule-container-page'>
        <div className='menu-banner'></div>
        <div className='schedule-hero-image'></div>
        <div className='schedule-hero-image-filter'></div>
        <section className='container-schedule'>
          <h2 className='heading2'>Schedule</h2>
          <div className='container-cards'>
            {renderedList.map((item) => {
              number = number + 1;
              if (number === 3) {
                number = 0;
              }
              return (
                <div key={item._id} className='schedule-card'>
                  <div className='container-schedule-card-when'>
                    <p className='schedule-card-when'>{item.when}</p>
                  </div>
                  <article className='schedule-card-text'>
                    <h3>{item.title}</h3>
                    <p>
                      {" "}
                      <b>Conductor: </b>
                      {item.conductor}
                    </p>

                    <a className='primary-button' href={item.read_more}>
                      Go to Opera House
                    </a>
                  </article>

                  <img
                    width='400'
                    height='437'
                    className='schedule-card-image'
                    src={require("../../images/scheduleImage" +
                      number +
                      ".svg")}
                    alt='Joachim'
                  />
                </div>
              );
            })}
          </div>
          {showMoreButton ? (
            <div className='container-schedule-show-more'>
              <button
                onClick={() => {
                  renderMore();
                }}
                className='button-link'
              >
                More Schedule Posts
              </button>
            </div>
          ) : (
            <></>
          )}
        </section>
      </div>
    </>
  );
}
