import { useEffect, useState } from "react";
import { ISchedule } from "../../models/ISchedule";
import { ScheduleService } from "../../services/ScheduleService";
import "./sass/schedule.css";

export function Schedule() {
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [renderedList, setRenderedList] = useState<ISchedule[]>([]);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true);

  //Changes color navigation

  //Get first 3 schedule-items
  useEffect(() => {
    let service = new ScheduleService();
    service.getScheduleAll().then((response) => {
      if (response.status === "error") {
        console.log(response.message);
        return;
      }
      setScheduleList(response);
      if (response.length > 3) {
        const slicedArray = response.slice(0, 3);
        setRenderedList(slicedArray);
        setShowMoreButton(true);
      } else {
        setRenderedList(response);
        setShowMoreButton(false);
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
