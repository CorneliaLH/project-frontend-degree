import { ChangeEvent, useEffect, useState } from "react";
import { IMedia } from "../../models/IMedia";
import { MediaService } from "../../services/MediaService";
import "./sass/changemedia.css";

export function ChangeMedia() {
  const [mediaList, setMediaList] = useState<IMedia[]>([]);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [changeInput, setChangeInput] = useState<boolean>(false);
  const [mediaValues, setMediaValues] = useState<IMedia>({
    title: "",
    description: "",
    type: "Choose one",
    media_url: "",
    date_pub: "",
    _id: "",
  });

  //Get whole media list
  useEffect(() => {
    let service = new MediaService();
    service.getMediaAll().then((response) => {
      setMediaList(response);
    });
  }, [updateList, changeInput]);

  //input values from form
  function handleInputMediaPost(e: ChangeEvent<any>) {
    setMediaValues({ ...mediaValues, [e.target.name]: e.target.value });
  }

  let mediaArray = mediaList.map((mediaitem) => {
    return (
      <>
        <ul className='container-change-list-item'>
          <li key={mediaitem._id} className='change-item-info'>
            <p>
              <span className='change-item-text-bold'>Title: </span>
              <span className='change-item-text'>{mediaitem.title}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Type: </span>
              <span className='change-item-text'>{mediaitem.type}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Publish date: </span>
              <span className='change-item-text'>{mediaitem.date_pub}</span>
            </p>
            <button
              className='primary-button'
              onClick={() => {
                let service = new MediaService();
                service.deleteMedia(mediaitem._id).then((response) => {
                  if (response.acknowledged === true) {
                    alert("Item deleted");
                    if (updateList === true) {
                      setUpdateList(false);
                    } else {
                      setUpdateList(true);
                    }
                    console.log(response);
                  }
                });
              }}
            >
              Delete
            </button>
            <button
              className='primary-button'
              onClick={() => {
                setMediaValues({
                  _id: mediaitem._id,
                  title: mediaitem.title,
                  description: mediaitem.description,
                  type: mediaitem.type,
                  media_url: mediaitem.media_url,
                  date_pub: mediaitem.date_pub,
                });
                setChangeInput(true);
              }}
            >
              Change
            </button>
          </li>
        </ul>
      </>
    );
  });
  return (
    <>
      <div className='container-change-media'>
        <h2>All media posts</h2>
        <div className='container-change-media-posts'>
          <div>
            <h3>Media list in database</h3>
            {mediaArray}
          </div>
          {changeInput && (
            <ul>
              <h3>Post to change:</h3>
              <li className='change-input-fields'>
                <form action='form-change'>
                  <div>
                    <label htmlFor='title'>Title:</label>
                    <input
                      name='title'
                      id='title'
                      type='title'
                      value={mediaValues.title}
                      onChange={handleInputMediaPost}
                    />
                  </div>
                  <div>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                      name='description'
                      id='description'
                      value={mediaValues.description}
                      onChange={handleInputMediaPost}
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor='type'>Media type: </label>
                    <select
                      name='type'
                      id='type'
                      value={mediaValues.type}
                      onChange={handleInputMediaPost}
                    >
                      <option value='Audio'>Audio</option>
                      <option value='Video'>Video</option>
                      <option value='News'>News</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='media_url'>Media URL:</label>
                    <input
                      id='media_url'
                      name='media_url'
                      type='media_url'
                      value={mediaValues.media_url}
                      onChange={handleInputMediaPost}
                    />
                  </div>

                  <div>
                    <label htmlFor='date'>Publish date:</label>
                    <input
                      id='date_pub'
                      name='date_pub'
                      type='date'
                      value={mediaValues.date_pub}
                      onChange={handleInputMediaPost}
                    />
                  </div>
                  <div className='container-form-button'>
                    <button
                      type='submit'
                      className='secondary-button'
                      onClick={(e) => {
                        e.preventDefault();

                        let service = new MediaService();
                        service.changeMedia(mediaValues).then((response) => {
                          console.log(response);
                          if (response.acknowledged === true) {
                            alert("The post has been changed");
                            setChangeInput(false);
                          } else {
                            alert(
                              "Something went wrong, the post could not be updated"
                            );
                          }
                        });
                      }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
