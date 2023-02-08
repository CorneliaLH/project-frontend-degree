import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MediaService } from "../../services/MediaService";
import { IMediaPost } from "../../models/IMediaPost";
import imageYoutube1 from "../../images/youtube-embed-share1.png";
import imageYoutube2 from "../../images/youtube-embed-button1.png";
import imageYoutube3 from "../../images/youtube-embed-link1.png";
import imageAudio1 from "../../images/Audio-knowmore-image1.webp";
import imageAudio2 from "../../images/Audio-knowmore-image2.webp";
import imageAudio3 from "../../images/Audio-knowmore-image3.webp";
import imageAudio4 from "../../images/Audio-knowmore-image4.webp";
import imageAudio5 from "../../images/Audio-knowmore-image5.webp";
import imageAudio6 from "../../images/Audio-knowmore-image6.webp";
import imageAudio7 from "../../images/Audio-knowmore-image7.webp";
import imageAudio8 from "../../images/Audio-knowmore-image8.webp";
import "./sass/postmedia.css";

export function PostMedia() {
  const [buttonBackBoolean, setButtonBackBoolean] = useState<boolean>(false);
  const [buttonForwardBoolean, setButtonForwardBoolean] =
    useState<boolean>(true);
  const [knowMoreVideo, setKnowMoreVideo] = useState<boolean>(false);
  const [knowMoreAudio, setKnowMoreAudio] = useState<boolean>(false);
  const [imageKnowMoreVideo1, setImageKnowMoreVideo1] = useState(true);
  const [imageKnowMoreVideo2, setImageKnowMoreVideo2] = useState(false);
  const [imageKnowMoreVideo3, setImageKnowMoreVideo3] = useState(false);
  const [imageKnowMoreAudio1, setImageKnowMoreAudio1] = useState(true);
  const [imageKnowMoreAudio2, setImageKnowMoreAudio2] = useState(false);
  const [imageKnowMoreAudio3, setImageKnowMoreAudio3] = useState(false);
  const [imageKnowMoreAudio4, setImageKnowMoreAudio4] = useState(false);
  const [imageKnowMoreAudio5, setImageKnowMoreAudio5] = useState(false);
  const [imageKnowMoreAudio6, setImageKnowMoreAudio6] = useState(false);
  const [imageKnowMoreAudio7, setImageKnowMoreAudio7] = useState(false);
  const [imageKnowMoreAudio8, setImageKnowMoreAudio8] = useState(false);

  const [mediaValues, setMediaValues] = useState<IMediaPost>({
    title: "",
    description: "",
    type: "Choose one",
    media_url: "",
    date_pub: "",
  });
  const [disabledValue, setDisabledValue] = useState(true);

  const navigation = useNavigate();

  //Validation fields and remove disabled button
  useEffect(() => {
    if (
      (mediaValues.type === "Video" || mediaValues.type === "Audio") &&
      mediaValues.date_pub.length > 0 &&
      mediaValues.description.length > 0 &&
      mediaValues.media_url.length > 0 &&
      mediaValues.title.length > 0
    ) {
      setDisabledValue(false);
    } else if (
      mediaValues.type === "News" &&
      mediaValues.date_pub.length > 0 &&
      mediaValues.description.length > 0 &&
      mediaValues.title.length > 0
    ) {
      setDisabledValue(false);
    } else {
      setDisabledValue(true);
    }
  }, [mediaValues]);

  //Check if user is logged in
  useEffect(() => {
    if (!sessionStorage.userId) {
      navigation("../");

      return;
    }
  }, []);

  //input values from form
  function handleInputMediaPost(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) {
    setMediaValues({ ...mediaValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className='container-media-post'>
        {/* Directions when know more button is pushed  */}

        {(knowMoreVideo || knowMoreAudio) && (
          <article className='container-knowmore' id='container-knowmore'>
            {knowMoreVideo && <h4>Find embed-link on YouTube</h4>}
            {knowMoreAudio && <h4>Upload Audio and get URL on Supabase</h4>}
            <button
              className='secondary-button'
              onClick={() => {
                setKnowMoreVideo(false);
                setKnowMoreAudio(false);
              }}
            >
              Close
            </button>
            {knowMoreVideo && (
              <div className='container-images-youtube'>
                {imageKnowMoreVideo1 && (
                  <img src={imageYoutube1} alt='Printscreen youtube share' />
                )}
                {imageKnowMoreVideo2 && (
                  <img
                    src={imageYoutube2}
                    alt='Printscreen youtube embed button'
                  />
                )}
                {imageKnowMoreVideo3 && (
                  <img
                    src={imageYoutube3}
                    alt='Printscreen youtube embed link'
                  />
                )}
              </div>
            )}
            {knowMoreAudio && (
              <div className='container-images-youtube'>
                {imageKnowMoreAudio1 && (
                  <>
                    <img
                      src={imageAudio1}
                      alt='Printscreen supabase sign in / sign up form'
                    />
                    <p>Sing in or sign up to Supabase</p>
                  </>
                )}
                {imageKnowMoreAudio2 && (
                  <img
                    src={imageAudio2}
                    alt='Printscreen Supabase circle around new Project button'
                  />
                )}
                {imageKnowMoreAudio3 && (
                  <img
                    src={imageAudio3}
                    alt='Printscreen Supabase circle around add Name to project and region Central Frankfurt'
                  />
                )}
                {imageKnowMoreAudio4 && (
                  <>
                    <img
                      src={imageAudio4}
                      alt='Printscreen Supabase wait for project to set up'
                    />
                    <p>Wait for project to set up and then press Storage</p>
                  </>
                )}
                {imageKnowMoreAudio5 && (
                  <img
                    src={imageAudio5}
                    alt='Printscreen Supabase circle around create a new Bucket'
                  />
                )}
                {imageKnowMoreAudio6 && (
                  <img
                    src={imageAudio6}
                    alt='Printscreen Supabase name your new bucket'
                  />
                )}
                {imageKnowMoreAudio7 && (
                  <>
                    <img
                      src={imageAudio7}
                      alt='Printscreen Supabase drop files'
                    />
                    <p>Drop music files to upload</p>
                  </>
                )}
                {imageKnowMoreAudio8 && (
                  <>
                    <img
                      src={imageAudio8}
                      alt='Printscreen Supabase circle around dots to open menu, press Get URL and Choose expire in 1 year '
                    />
                    <p>
                      Press small dots next to music file name and choose Get
                      URL and press when you want it to expire.
                    </p>
                  </>
                )}
              </div>
            )}
            <div className='container-knowmore-button'>
              {buttonBackBoolean && (
                <button
                  className='secondary-button'
                  onClick={() => {
                    if (knowMoreVideo == true) {
                      if (
                        imageKnowMoreVideo1 === false &&
                        imageKnowMoreVideo2 === false &&
                        imageKnowMoreVideo3 === true
                      ) {
                        setImageKnowMoreVideo3(false);
                        setImageKnowMoreVideo2(true);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(true);
                      } else if (imageKnowMoreVideo2 === true) {
                        setImageKnowMoreVideo1(true);
                        setImageKnowMoreVideo2(false);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(false);
                      }
                    } else if (knowMoreAudio === true) {
                      if (imageKnowMoreAudio8 === true) {
                        setImageKnowMoreAudio8(false);
                        setImageKnowMoreAudio7(true);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(true);
                      } else if (imageKnowMoreAudio7 === true) {
                        setImageKnowMoreAudio7(false);
                        setImageKnowMoreAudio6(true);
                      } else if (imageKnowMoreAudio6 === true) {
                        setImageKnowMoreAudio6(false);
                        setImageKnowMoreAudio5(true);
                      } else if (imageKnowMoreAudio5 === true) {
                        setImageKnowMoreAudio5(false);
                        setImageKnowMoreAudio4(true);
                      } else if (imageKnowMoreAudio4 === true) {
                        setImageKnowMoreAudio4(false);
                        setImageKnowMoreAudio3(true);
                      } else if (imageKnowMoreAudio3 === true) {
                        setImageKnowMoreAudio3(false);
                        setImageKnowMoreAudio2(true);
                      } else if (imageKnowMoreAudio2 === true) {
                        setImageKnowMoreAudio2(false);
                        setImageKnowMoreAudio1(true);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(false);
                      }
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
                    if (knowMoreVideo === true) {
                      if (
                        imageKnowMoreVideo1 === true &&
                        imageKnowMoreVideo2 === false &&
                        imageKnowMoreVideo3 === false
                      ) {
                        setImageKnowMoreVideo1(false);
                        setImageKnowMoreVideo2(true);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(true);
                      } else if (imageKnowMoreVideo2 === true) {
                        setImageKnowMoreVideo2(false);
                        setImageKnowMoreVideo3(true);
                        setButtonForwardBoolean(false);
                        setButtonBackBoolean(true);
                      }
                    } else if (knowMoreAudio === true) {
                      if (imageKnowMoreAudio1 === true) {
                        setImageKnowMoreAudio1(false);
                        setImageKnowMoreAudio2(true);
                        setButtonForwardBoolean(true);
                        setButtonBackBoolean(true);
                      } else if (imageKnowMoreAudio2 === true) {
                        setImageKnowMoreAudio2(false);
                        setImageKnowMoreAudio3(true);
                      } else if (imageKnowMoreAudio3 === true) {
                        setImageKnowMoreAudio3(false);
                        setImageKnowMoreAudio4(true);
                      } else if (imageKnowMoreAudio4 === true) {
                        setImageKnowMoreAudio4(false);
                        setImageKnowMoreAudio5(true);
                      } else if (imageKnowMoreAudio5 === true) {
                        setImageKnowMoreAudio5(false);
                        setImageKnowMoreAudio6(true);
                      } else if (imageKnowMoreAudio6 === true) {
                        setImageKnowMoreAudio6(false);
                        setImageKnowMoreAudio7(true);
                      } else if (imageKnowMoreAudio7 === true) {
                        setImageKnowMoreAudio7(false);
                        setImageKnowMoreAudio8(true);
                        setButtonForwardBoolean(false);
                        setButtonBackBoolean(true);
                      }
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
                      setKnowMoreVideo(true);
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
                <p>
                  Add Audio link from Supabase, need guidance{" "}
                  <a
                    className='video-knowmore-link'
                    onClick={() => {
                      setKnowMoreAudio(true);
                    }}
                  >
                    click here
                  </a>
                </p>
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
              className='secondary-button'
              disabled={disabledValue}
              id='button-submit-new-media'
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
        {/* Preview post media  */}
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
                <audio
                  className='audio-controls'
                  controls
                  src={mediaValues.media_url}
                ></audio>
              </>
            )}
            <p>{mediaValues.date_pub}</p>
          </div>
        </div>
      </section>
    </>
  );
}
