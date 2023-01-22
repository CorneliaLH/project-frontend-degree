import { useEffect, useState } from "react";
import { IMedia } from "../../models/IMedia";
import { MediaService } from "../../services/MediaService";
import newsimage0 from "../../images/news0.jpg";
import newsimage1 from "../../images/news1.jpg";
import newsimage2 from "../../images/news2.jpg";
import newsimage3 from "../../images/news3.jpg";
import newsimage4 from "../../images/news4.jpg";
import newsimage5 from "../../images/news5.jpg";
import audioimage from "../../images/audio.svg";
import imagedark from "../../images/logo-dark2.svg";

import "./sass/media.css";
export function Media() {
  //Sets select value from start
  const getInitialState = () => {
    const value = "Latest";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const [mediaList, setMediaList] = useState<IMedia[]>([]);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true);

  //Change navigation color
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

  //Renders first 4 items in Latest, News, Audio and Video.
  useEffect(() => {
    if (value === "Latest") {
      let service = new MediaService();
      service.getMedia().then((response) => {
        setMediaList(response);
        if (response.length >= 4) {
          setShowMoreButton(true);
        } else {
          setShowMoreButton(false);
        }
      });
    } else if (value === "Video") {
      let service = new MediaService();
      service.getMediaVideo().then((response) => {
        setMediaList(response);
        if (response.length >= 4) {
          setShowMoreButton(true);
        } else {
          setShowMoreButton(false);
        }
      });
    } else if (value === "Audio") {
      let service = new MediaService();
      service.getMediaAudio().then((response) => {
        setMediaList(response);
        if (response.length >= 4) {
          setShowMoreButton(true);
        } else {
          setShowMoreButton(false);
        }
      });
    } else if (value === "News") {
      let service = new MediaService();
      service.getMediaNews().then((response) => {
        setMediaList(response);
        if (response.length >= 4) {
          setShowMoreButton(true);
        } else {
          setShowMoreButton(false);
        }
      });
    }
  }, [value]);

  //Render all from Latest, Audio, Video and News when "Show more"-link is pressed
  function renderMore(valueFromSelect: string) {
    if (valueFromSelect == "Latest") {
      let service = new MediaService();
      service.getMediaAll().then((response) => {
        setMediaList(response);
        setShowMoreButton(false);
      });
    } else if (valueFromSelect == "Video") {
      let service = new MediaService();
      service.getMediaVideoAll().then((response) => {
        setMediaList(response);
        setShowMoreButton(false);
      });
    } else if (valueFromSelect == "Audio") {
      let service = new MediaService();
      service.getMediaAudioAll().then((response) => {
        setMediaList(response);
        setShowMoreButton(false);
      });
    } else if (valueFromSelect == "News") {
      let service = new MediaService();
      service.getMediaNewsAll().then((response) => {
        setMediaList(response);
        setShowMoreButton(false);
      });
    }
  }

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  let number = 0;
  //Function for rendering media
  let media = mediaList.map((item) => {
    number = number + 1;
    if (number === 6) {
      number = 0;
    }
    return (
      <div key={item._id} className='container-media-item'>
        {/* IMPORTANT: src in database must have embed instead of watch */}
        {item.type === "News" && (
          <article className='media-item'>
            <img
              className='image-news-article'
              src={require("../../images/news" + number + ".jpg")}
              alt='Newsdesk'
              width='640'
              height='427'
            />

            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className='primary-button'>
              <a href={item.media_url}>Go to article</a>
            </button>
            <p className='media-published-date'>Published: {item.date_pub}</p>
          </article>
        )}
        {/* IMPORTANT: src in database must have embed instead of watch */}
        {item.type === "Video" && (
          <article className='media-item'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <iframe
              width='560'
              height='315'
              src={item.media_url}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='frame-video'
            ></iframe>
            <p className='media-published-date'>Published: {item.date_pub}</p>
          </article>
        )}
        {/* LOCAL AUDIO FILE used, change later to link to stored data and remove local file */}
        {item.type === "Audio" && (
          <article className='media-item'>
            <img
              className='audio-image-article'
              src={audioimage}
              alt='Music notes'
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <audio
              controls
              src={require("../../audio/premieredanse-129944.mp3")}
            ></audio>
            <p className='media-published-date'>Published: {item.date_pub}</p>
          </article>
        )}
      </div>
    );
  });

  return (
    <>
      <div className='media-container-page'>
        <div className='menu-banner'></div>
        <div className='media-hero-image'></div>
        <div className='media-hero-image-filter'></div>
        <section className='container-media'>
          <h2 className='heading2'>Media</h2>
          <div className='container-select'>
            <select
              name='media-select'
              value={value}
              onChange={handleChange}
              id='media-select'
            >
              <option value='Latest'>Latest</option>
              <option value='News'>News</option>
              <option value='Audio'>Audio</option>
              <option value='Video'>Video</option>
            </select>
          </div>
          <section className='media-content'>{media}</section>
          {showMoreButton ? (
            <a
              className='media-link-show-all'
              onClick={() => {
                renderMore(value);
              }}
            >
              {value === "Latest" && "Show all media"}
              {value === "News" && "Show all News"}
              {value === "Audio" && "Show all Audio"}
              {value === "Video" && "Show all Videos"}
            </a>
          ) : (
            <></>
          )}
        </section>
      </div>
    </>
  );
}
