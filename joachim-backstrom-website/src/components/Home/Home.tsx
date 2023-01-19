import "./sass/home.css";
import imagelight from "../../images/logo-light2.svg";
import arrowdown from "../../images/arrow-down.svg";
import joachimBio from "../../images/joachimredigerad.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScheduleService } from "../../services/ScheduleService";
import { ISchedule } from "../../models/ISchedule";
import quoteImageBanner from "../../images/notes.svg";

export function Home() {
  //Changing nav menu color to white
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);

  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let icon = document.querySelector<HTMLImageElement>("#image-logo");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "white";
    }
    if (icon != null) {
      icon.src = imagelight;
    }
  }, []);

  useEffect(() => {
    let service = new ScheduleService();
    service.getSchedule().then((response) => {
      setScheduleList(response);
    });
  }, []);
  console.log(scheduleList);

  let scheduleToRender;
  if (scheduleList.length > 0) {
    scheduleToRender = scheduleList.map((item) => {
      return (
        <a key={item._id} className='home-schedule-card' href={item.read_more}>
          <img
            className='home-schedule-image'
            src={require("../../images/schedule-test.jpg")}
            alt='image-opera'
            width='640'
            height='360'
          />
          <article className='home-schedule-card-text'>
            <h3>{item.title}</h3>
            <p className='home-schedule-card-text-p1'>{item.when}</p>
            <p className='home-schedule-card-text-p2'>
              Conductor: {item.conductor}
            </p>
          </article>
        </a>
      );
    });
  }
  return (
    <>
      <div className='container-page'>
        <div className='hero-image'>
          <img id='arrow-down' src={arrowdown} alt='arrow down' />
        </div>
        <section className='container-home-bio'>
          <div className='container-home-image'>
            <img
              id='home-image'
              src={joachimBio}
              alt='Joachim Bäckström'
              width='600'
              height='593'
            />
          </div>

          <article className='container-home-bio-text'>
            <div className='container-home-bio-quote'>
              <div className='quoteOne'></div>
              <q className='quote'>
                LOREM IPSUM <br /> LOREM <br />
                LOREM IPSUM LOREM IPSUM <br /> LOREM <br />
                LOREM IPSUM
              </q>
              <div className='quoteTwo'></div>
              <p className='quote-author'>Author Authorsson</p>
            </div>
            <p className='home-biography'>
              Gingerbread topping brownie cookie jelly-o jelly-o sugar plum
              lemon drops. Biscuit cupcake cotton candy icing gummies gummies.
              Tiramisu dragée ice cream powder cotton candy cookie lemon drops.
              Dessert cake cake donut shortbread lemon drops. Wafer chocolate
              bar danish cookie halvah powder brownie.
            </p>
            <button className='secondary-button'>
              {" "}
              <Link to={"/biography"}>Read more</Link>
            </button>
          </article>
        </section>
        <div className='container-home-schedule'></div>
        <div className='container-home-schedule-filter'>
          <h2 className='heading2'>Schedule</h2>
          <div className='home-schedule-cards-container'>
            {scheduleToRender}
          </div>
        </div>
        <div className='home-quote-banner'>
          <div className='container-icons-quote-banner'>
            <img src={quoteImageBanner} alt='Music notes' />
          </div>
          <div className='container-home-bio-quote'>
            <div className='quoteOne'></div>
            <q className='quote'>
              LOREM IPSUM <br /> LOREM <br />
              LOREM IPSUM LOREM IPSUM <br /> LOREM <br />
              LOREM IPSUM
            </q>
            <div className='quoteTwo'></div>
            <p className='quote-author'>Author Authorsson</p>
          </div>
        </div>
      </div>
    </>
  );
}
