import "./sass/home.css";
import arrowdown from "../../images/arrow-down.svg";
import joachimBio from "../../images/joachimredigerad.webp";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScheduleService } from "../../services/ScheduleService";
import { ISchedule } from "../../models/ISchedule";
import quoteImageJoachim from "../../images/peter-grimes-4-photo-by-marek-olbrzymek-big.webp";
import { MediaService } from "../../services/MediaService";
import { IMedia } from "../../models/IMedia";

//Home component
//Gets schedule and media lists and renders three posts of each

export function Home() {
  //Changing nav menu color to white
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [mediaList, setMediaList] = useState<IMedia[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    let service = new ScheduleService();
    service.getSchedule().then((response) => {
      if (response.status === "error") {
        console.log(response.message);
        return;
      }
      setScheduleList(response);
    });
  }, []);

  //Renders first 3 items in Latest, News, Audio and Video.
  useEffect(() => {
    let service = new MediaService();
    service.getMediaNews().then((response) => {
      if (response.status === "error") {
        console.log(response.message);
        return;
      }
      if (response.length > 3) {
        let newArray = response.slice(0, -1);
        setMediaList(newArray);
      }
    });
  }, []);

  //Shows Schedule posts
  let scheduleToRender;
  if (scheduleList.length > 0) {
    scheduleToRender = scheduleList.map((item, i) => {
      return (
        <a key={item._id} className='home-schedule-card' href={item.read_more}>
          <img
            className='home-schedule-image'
            src={require("../../images/scheduleImage" + [i] + ".svg")}
            alt='image-opera'
            width='150'
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

  //Show Media posts
  let number = 0;
  let media = mediaList.map((item) => {
    number = number + 1;
    if (number === 6) {
      number = 0;
    }
    return (
      <a
        key={item._id}
        className='container-media-item'
        href={item.media_url}
        id={item._id}
      >
        <article className='media-item'>
          <img
            className='image-news-article'
            src={require("../../images/news" + number + ".webp")}
            alt='Newsdesk'
            width='300'
            height='200'
          />
          <div className='container-media-text'>
            <h3 className='media-text-heading'>{item.title}</h3>
            <p className='media-published-date'>Published: {item.date_pub}</p>
          </div>
        </article>
      </a>
    );
  });
  return (
    <>
      <div className='container-page'>
        <div className='hero-image'>
          <img id='arrow-down' src={arrowdown} alt='arrow down' />
        </div>
        <section className='section-home-bio'>
          <h2 className='heading2'>Joachim</h2>
          <div className='container-home-bio'>
            <div className='container-home-image'>
              <img
                id='home-image'
                src={joachimBio}
                alt='Joachim Bäckström'
                width='600'
                height='593'
              />
            </div>

            <div className='container-home-bio-text'>
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
                Tiramisu dragée ice cream powder cotton candy cookie lemon
                drops. Dessert cake cake donut shortbread lemon drops. Wafer
                chocolate bar danish cookie halvah powder brownie.
              </p>

              <Link className='secondary-button' to={"/biography"}>
                Go to Biography
              </Link>
            </div>
          </div>
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
            <img
              src={quoteImageJoachim}
              alt='Joachim in Peter Grimes on Národni divadlo in Brno.Photo by: Marek Olbrzymek'
              width='627'
              height='836'
            />
          </div>
        </div>
        <section className='container-media-home'>
          <h2>Newsdesk</h2>
          <div className='container-media-news'>{media}</div>
          <div className='container-media-link'>
            <button
              className='button-link'
              onClick={() => {
                navigation("/media");
              }}
            >
              More media
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
