import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MediaService } from "../../services/MediaService";
import { IMediaPost } from "../../models/IMediaPost";
import "./sass/postmedia.css";
import { InstructionsPostMedia } from "../InstructionsPostMedia/InstructionsPostMedia";

export function PostMedia() {
  const [knowMoreVideo, setKnowMoreVideo] = useState<boolean>(false);
  const [knowMoreAudio, setKnowMoreAudio] = useState<boolean>(false);
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

  const instructionsClosed1 = (message: string) => {
    if (message === "close") {
      setKnowMoreAudio(false);
      setKnowMoreVideo(false);
    }
  };

  return (
    <>
      <section className='container-media-post'>
        {/* Directions when know more button is pushed  */}
        {knowMoreAudio && (
          <InstructionsPostMedia
            media={"Audio"}
            instructionsClosed={instructionsClosed1}
          ></InstructionsPostMedia>
        )}
        {knowMoreVideo && (
          <InstructionsPostMedia
            media={"Video"}
            instructionsClosed={instructionsClosed1}
          ></InstructionsPostMedia>
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
