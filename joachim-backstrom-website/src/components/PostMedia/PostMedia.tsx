import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MediaService } from "../../services/MediaService";
import { IMediaPost } from "../../models/IMediaPost";
import imageYoutube1 from "../../images/youtube-embed-share1.png";
import imageYoutube2 from "../../images/youtube-embed-button1.png";
import imageYoutube3 from "../../images/youtube-embed-link1.png";
import "./sass/postmedia.css";

export function PostMedia() {
  const [buttonBackBoolean, setButtonBackBoolean] = useState<boolean>(false);
  const [buttonForwardBoolean, setButtonForwardBoolean] =
    useState<boolean>(true);
  const [knowMore, setKnowMore] = useState<boolean>(false);
  const [mediaValues, setMediaValues] = useState<IMediaPost>({
    title: "",
    description: "",
    type: "Choose one",
    media_url: "",
    date_pub: "",
  });

  const navigation = useNavigate();

  //Check if user is logged in
  useEffect(() => {
    if (!sessionStorage.userId) {
      navigation("../");

      return;
    } else {
      console.log(sessionStorage.userId);
    }
  }, []);

  //input values from form
  function handleInputMediaPost(e: ChangeEvent<any>) {
    setMediaValues({ ...mediaValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className='container-media-post'>
        {/* Directions when know more button is pushed  */}

        {knowMore && (
          <article className='container-knowmore' id='container-knowmore'>
            <h4>Find embed-link</h4>
            <button
              className='secondary-button'
              onClick={() => {
                setKnowMore(false);
              }}
            >
              Close
            </button>
            <div className='container-images-youtube'>
              <img
                id='knowmore-image1'
                src={imageYoutube1}
                alt='Printscreen youtube share'
              />
              <img
                id='knowmore-image2'
                src={imageYoutube2}
                alt='Printscreen youtube embed button'
              />
              <img
                id='knowmore-image3'
                src={imageYoutube3}
                alt='Printscreen youtube embed link'
              />
            </div>
            <div className='container-knowmore-button'>
              {buttonBackBoolean && (
                <button
                  className='secondary-button'
                  onClick={() => {
                    let imageKnow1 =
                      document.querySelector<any>("#knowmore-image1");
                    let imageKnow2 =
                      document.querySelector<any>("#knowmore-image2");
                    let imageKnow3 =
                      document.querySelector<any>("#knowmore-image3");

                    if (getComputedStyle(imageKnow3).zIndex === "3") {
                      imageKnow3.style.zIndex = "1";
                      imageKnow2.style.zIndex = "3";
                      setButtonBackBoolean(true);
                      setButtonForwardBoolean(true);
                    } else if (getComputedStyle(imageKnow2).zIndex === "3") {
                      imageKnow2.style.zIndex = "1";
                      imageKnow1.style.zIndex = "3";
                      setButtonForwardBoolean(true);
                      setButtonBackBoolean(false);
                    }
                  }}
                >
                  Go back
                </button>
              )}
              {buttonForwardBoolean && (
                <button
                  className='secondary-button'
                  onClick={() => {
                    let imageKnow1 =
                      document.querySelector<any>("#knowmore-image1");
                    let imageKnow2 =
                      document.querySelector<any>("#knowmore-image2");
                    let imageKnow3 =
                      document.querySelector<any>("#knowmore-image3");

                    if (getComputedStyle(imageKnow1).zIndex === "3") {
                      imageKnow1.style.zIndex = "1";
                      imageKnow2.style.zIndex = "3";
                      setButtonBackBoolean(true);
                    } else if (getComputedStyle(imageKnow2).zIndex === "3") {
                      imageKnow2.style.zIndex = "1";
                      imageKnow3.style.zIndex = "3";
                      setButtonForwardBoolean(false);
                    }
                  }}
                >
                  Next image
                </button>
              )}
            </div>
          </article>
        )}
        {/* Input fields to create posts */}
        <div className='container-media-input-fields'>
          <h2>Media post</h2>
          <form action='mediapost' className='media-form'>
            <input
              type='text'
              placeholder=' Title of News, Audio or Video'
              name='title'
              value={mediaValues.title}
              onChange={handleInputMediaPost}
            />
            <textarea
              name='description'
              id='media-textarea'
              placeholder=' Media description'
              value={mediaValues.description}
              onChange={handleInputMediaPost}
            ></textarea>
            <label htmlFor='type'>Media type:</label>
            <select
              name='type'
              id='mediatype'
              value={mediaValues.type}
              onChange={handleInputMediaPost}
            >
              <option disabled>Choose one</option>
              <option value='Video'>Video</option>
              <option value='Audio'>Audio</option>
              <option value='News'>News</option>
            </select>
            {mediaValues.type === "Choose one" && <></>}
            {mediaValues.type === "News" && <></>}
            {mediaValues.type === "Video" && (
              <div>
                <p>
                  Add video link from Youtube, need guidance{" "}
                  <a
                    className='video-knowmore-link'
                    onClick={() => {
                      setKnowMore(true);
                    }}
                  >
                    click here
                  </a>
                </p>
                <input
                  name='media_url'
                  type='text'
                  placeholder=' URL Video'
                  value={mediaValues.media_url}
                  onChange={handleInputMediaPost}
                />
              </div>
            )}
            {mediaValues.type === "Audio" && (
              <div>
                <input
                  name='media_url'
                  type='text'
                  placeholder=' URL Audio'
                  value={mediaValues.media_url}
                  onChange={handleInputMediaPost}
                />
              </div>
            )}

            <label htmlFor='date-pub'> Publish date</label>
            <input
              type='date'
              name='date_pub'
              id='date-pub'
              value={mediaValues.date_pub}
              onChange={handleInputMediaPost}
            />

            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault();

                let service = new MediaService();
                service.postMedia(mediaValues).then((response) => {
                  console.log(response);
                  if (response.acknowledged === true) {
                    alert("You created a new media post");
                    setMediaValues({
                      title: "",
                      description: "",
                      type: "Choose one",
                      media_url: "",
                      date_pub: "",
                    });
                  } else {
                    alert("Something is wrong, your post couldn't be created");
                  }
                });
              }}
            >
              Publish
            </button>
          </form>
        </div>
        <div className='container-media-result'>
          <h3>Post preview</h3>
          <div className='media-result-text'>
            <p className='title-media-heading'>{mediaValues.title}</p>
            <p>{mediaValues.description}</p>
            <p>{mediaValues.type === "Choose one" ? "" : mediaValues.type}</p>
            {mediaValues.type === "Video" && (
              <>
                <iframe
                  width='200'
                  height='130'
                  src={mediaValues.media_url}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  className='frame-video-admin'
                  id='frame-video-admin'
                ></iframe>
              </>
            )}
            {mediaValues.type === "Audio" && (
              //OBS!! Ändra nedan Audio-src till mediaValues.media_url
              <>
                <p>Add link to audio-mp3 file (Dropbox or Google Drive)</p>
                <audio controls src={mediaValues.media_url}></audio>
              </>
            )}
            <p>{mediaValues.date_pub}</p>
          </div>
        </div>
      </section>
    </>
  );
}
