import "./sass/home.css";
import imagelight from "../../images/logo-light2.svg";
import arrowdown from "../../images/arrow-down.svg";
import joachimBio from "../../images/joachimredigerad.webp";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScheduleService } from "../../services/ScheduleService";
import { ISchedule } from "../../models/ISchedule";
import quoteImageBanner from "../../images/notes.svg";
import quoteImageJoachim from "../../images/peter-grimes-4-photo-by-marek-olbrzymek-big.webp";

import { MediaService } from "../../services/MediaService";
import { IMedia } from "../../models/IMedia";

export function Home() {
  //Changing nav menu color to white
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [mediaList, setMediaList] = useState<IMedia[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let iconLight = document.querySelector<any>("#image-logo-light");
    let iconDark = document.querySelector<any>("#image-logo-dark");
    let iconLightMobile = document.querySelector<any>(
      "#image-logo-light-mobile"
    );
    let iconDarkMobile = document.querySelector<any>("#image-logo-dark-mobile");
    let hamburgerBackground = document.querySelector<any>(".burger-button");
    hamburgerBackground.style.backgroundColor = "#000000";

    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "#ffffff";
    }

    console.log(iconLightMobile);
    console.log(iconDarkMobile);
    if (iconLight != null && iconDark != null) {
      iconLight.style.display = "block";
      iconDark.style.display = "none";
    }

    if (iconLightMobile != null && iconDarkMobile != null) {
      iconLightMobile.style.display = "block";
      iconDarkMobile.style.display = "none";
    }
  }, []);

  useEffect(() => {
    let service = new ScheduleService();
    service.getSchedule().then((response) => {
      setScheduleList(response);
      console.log(response);
    });
  }, []);
  console.log(scheduleList);

  //Renders first 4 items in Latest, News, Audio and Video.
  useEffect(() => {
    let service = new MediaService();
    service.getMediaNews().then((response) => {
      setMediaList(response);
    });
  }, []);

  let scheduleToRender;
  if (scheduleList.length > 0) {
    scheduleToRender = scheduleList.map((item, i) => {
      return (
        <a key={item._id} className='home-schedule-card' href={item.read_more}>
          <img
            className='home-schedule-image'
            src={require("../../images/scheduleImage" + [i] + ".svg")}
            alt='image-opera'
            width='auto'
            height='150'
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
  let number = 0;
  let media = mediaList.map((item) => {
    number = number + 1;
    if (number === 6) {
      number = 0;
    }
    return (
      <>
        <a
          key={item._id}
          className='container-media-item'
          href={item.media_url}
        >
          <article className='media-item'>
            <img
              className='image-news-article'
              src={require("../../images/news" + number + ".jpg")}
              alt='Newsdesk'
              width='640'
              height='427'
            />
            <div className='container-media-text'>
              <h3 className='media-text-heading'>{item.title}</h3>
              <p>{item.description}</p>

              <p className='media-published-date'>Published: {item.date_pub}</p>
            </div>
          </article>
        </a>
      </>
    );
  });
  return (
    <>
      <div className='container-page'>
        <div className='hero-image'>
          <img id='arrow-down' src={arrowdown} alt='arrow down' />
        </div>
        <p className='hero-photo-text'>
          Photo from Peter Grimes / Národni divadlo in Brno <br></br>
          Photo by: Marek Olbrzymek
        </p>
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
          <div className='container-icons-quote-banner'>
            {/* <img src={quoteImageBanner} alt='Music notes' /> */}
            <img
              src={quoteImageJoachim}
              alt='Joachim in Peter Grimes on Národni divadlo in Brno.Photo by: Marek Olbrzymek'
              width='627'
              height='836'
            />
            <p className='hero-photo-text'>
              Photo from Peter Grimes / Národni divadlo in Brno <br></br>
              Photo by: Marek Olbrzymek
            </p>
          </div>
        </div>
        <div className='container-media-home'>
          <h2>Newsdesk</h2>
          <section className='container-media-news'>{media}</section>
          <div className='container-media-link'>
            <a
              onClick={() => {
                navigation("/media");
              }}
            >
              More media
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
