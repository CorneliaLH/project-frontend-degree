import "./sass/home.css";
import imagelight from "../../images/logo-light2.svg";
import arrowdown from "../../images/arrow-down.svg";
import joachimBio from "../../images/joachimredigerad.jpg";
import { Link } from "react-router-dom";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { ScheduleService } from "../../services/ScheduleService";
import { ISchedule } from "../../models/ISchedule";

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
      // for (let i = 0; i < response.length; i++) {
      // return response.map(
      //   item => {
      //     <article className='schedule-article'>
      //       <h2>{item.title}</h2>
      //     </article>;
      //   }

      //   console.log(response[i]);
      //   let scheduleNew = (
      //     <article className='schedule-article'>
      //       <h2>{response[i].title}</h2>
      //     </article>
      //   );
      //   setSchedule(scheduleNew);
      // }
    });
  }, []);

  return (
    <>
      <div className='container-page'>
        <div className='hero-image'>
          <img id='arrow-down' src={arrowdown} alt='arrow down' />
        </div>
        <section className='container-bio'>
          <div className='container-home-image'>
            <img id='home-image' src={joachimBio} alt='Joachim Bäckström' />
          </div>

          <article className='container-bio-text'>
            <div className='container-bio-quote'>
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
        <div className='container-home-schedule'>
          {scheduleList.map((item) => {
            return (
              <>
                <h2 key={item._id}>{item.title}</h2>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
