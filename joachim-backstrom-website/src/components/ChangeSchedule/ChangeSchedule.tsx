import { ChangeEvent, useEffect, useState } from "react";
import { ISchedule } from "../../models/ISchedule";
import { ScheduleService } from "../../services/ScheduleService";
import "./sass/changeschedule.css";

export function ChangeSchedule() {
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [changeInput, setChangeInput] = useState<boolean>(false);
  const [scheduleValues, setScheduleValues] = useState<ISchedule>({
    _id: "",
    title: "",
    when: "",
    where: "",
    conductor: "",
    image_url: "",
    read_more: "",
    date_remove: "",
  });

  //GET all schedule posts
  useEffect(() => {
    let service = new ScheduleService();
    service.getScheduleTotal().then((response) => {
      setScheduleList(response);
    });
  }, [updateList]);

  //input values from form
  function handleInputMediaPost(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) {
    setScheduleValues({ ...scheduleValues, [e.target.name]: e.target.value });
  }

  let scheduleArray = scheduleList.map((scheduleitem) => {
    return (
      <ul key={scheduleitem._id} className='container-change-list-item'>
        <li className='change-item-info'>
          <p>
            <span className='change-item-text-bold'>Title: </span>
            <span className='change-item-text'>{scheduleitem.title}</span>
          </p>
          <p>
            <span className='change-item-text-bold'>When: </span>
            <span className='change-item-text'>{scheduleitem.when}</span>
          </p>
          <p>
            <span className='change-item-text-bold'>Where: </span>
            <span className='change-item-text'>{scheduleitem.where}</span>
          </p>
          <p>
            <span className='change-item-text-bold'>Will be removed: </span>
            <span className='change-item-text'>{scheduleitem.date_remove}</span>
          </p>
          <button
            className='primary-button'
            onClick={() => {
              let service = new ScheduleService();
              service.deleteSchedule(scheduleitem._id).then((response) => {
                if (response.acknowledged === true) {
                  alert("Item deleted");
                  if (updateList === true) {
                    setUpdateList(false);
                  } else {
                    setUpdateList(true);
                  }
                }
              });
            }}
          >
            Delete
          </button>
          <button
            className='primary-button'
            onClick={() => {
              setScheduleValues({
                _id: scheduleitem._id,
                title: scheduleitem.title,
                when: scheduleitem.when,
                where: scheduleitem.where,
                image_url: scheduleitem.image_url,
                date_remove: scheduleitem.date_remove,
                conductor: scheduleitem.conductor,
                read_more: scheduleitem.read_more,
              });
              setChangeInput(true);
            }}
          >
            Change
          </button>
        </li>
      </ul>
    );
  });
  return (
    <>
      <div className='container-change-media'>
        <h2>All schedule posts</h2>
        <div className='container-change-media-posts'>
          <div>
            <h3>Schedule list in database</h3>
            {scheduleArray}
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
                      value={scheduleValues.title}
                      onChange={handleInputMediaPost}
                    />
                  </div>
                  <div>
                    <label htmlFor='when'>When:</label>
                    <input
                      name='when'
                      id='description'
                      value={scheduleValues.when}
                      onChange={handleInputMediaPost}
                    />
                  </div>

                  <div>
                    <label htmlFor='type'>Where: </label>
                    <input
                      name='where'
                      id='type'
                      value={scheduleValues.where}
                      onChange={handleInputMediaPost}
                    />
                  </div>

                  <div>
                    <label htmlFor='image_url'>Media URL:</label>
                    <input
                      name='image_url'
                      type='image_url'
                      value={scheduleValues.image_url}
                      onChange={handleInputMediaPost}
                    />
                  </div>

                  <div>
                    <label htmlFor='conductor'>Conductor:</label>
                    <input
                      name='conductor'
                      type='conductor'
                      value={scheduleValues.conductor}
                      onChange={handleInputMediaPost}
                    />
                  </div>

                  <div>
                    <label htmlFor='date'>Will be removed:</label>
                    <input
                      id='date_remove'
                      name='date_remove'
                      type='date'
                      value={scheduleValues.date_remove}
                      onChange={handleInputMediaPost}
                    />
                  </div>
                  <div className='container-form-button'>
                    <button
                      type='submit'
                      className='secondary-button'
                      onClick={(e) => {
                        e.preventDefault();

                        let service = new ScheduleService();
                        service
                          .changeSchedule(scheduleValues)
                          .then((response) => {
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
