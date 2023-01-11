import { useEffect, useState } from "react";
import { ISchedule } from "../../models/ISchedule";
import { ScheduleService } from "../../services/ScheduleService";
import "./sass/schedule.css";

export function Schedule() {
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [renderedList, setRenderedList] = useState<ISchedule[]>([]);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true);

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

  function renderMore() {
    console.log(scheduleList.length);
    console.log(renderedList.length);
    if (scheduleList.length > renderedList.length) {
      const slicedArray = scheduleList.slice(0, renderedList.length + 3);
      setRenderedList(slicedArray);
      if (scheduleList.length <= slicedArray.length) {
        setShowMoreButton(false);
      } else setShowMoreButton(true);
    }
  }

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
              return (
                <article key={item._id} id='schedule-card'>
                  <div className='container-schedule-card-when'>
                    <p className='schedule-card-when'>{item.when}</p>
                  </div>
                  <section className='schedule-card-text'>
                    <h3>{item.title}</h3>
                    <p>Conductor: {item.conductor}</p>
                    <button className='primary-button'>
                      <a href={item.read_more}>Read more</a>
                    </button>
                  </section>

                  <img
                    width='400'
                    height='437'
                    className='schedule-card-image'
                    src={require("../../images/schedule-test.jpg")}
                    alt='Joachim'
                  />
                </article>
              );
            })}
          </div>
          {showMoreButton ? (
            <div className='container-schedule-show-more'>
              <a
                onClick={() => {
                  renderMore();
                }}
                className='show-more-link'
              >
                Show more
              </a>
            </div>
          ) : (
            <></>
          )}
        </section>
        {/* <div className='page-separator'></div> */}
      </div>
    </>
  );
}
