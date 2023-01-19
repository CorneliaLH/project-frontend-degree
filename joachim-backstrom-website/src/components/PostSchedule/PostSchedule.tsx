import { ScheduleService } from "../../services/ScheduleService";
import { useNavigate } from "react-router-dom";
import "./sass/postschedule.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IScheduleOpera } from "../../models/IScheduleOpera";
import { IScheduleConcert } from "../../models/IScheduleConcert";

export function PostSchedule() {
  const [repetoireChoice, setRepetoireChoice] = useState<string>("Choose one");

  const [scheduleOperaValues, setScheduleOperaValues] =
    useState<IScheduleOpera>({
      title: "",
      when: "",
      where: "",
      conductor: "",
      role: "",
      image_url: "",
      read_more: "",
      date_remove: "",
      repetoire: "Choose one",
      composer: "",
      opera: "",
      display_repetoire: "Choose one",
    });

  const [scheduleConcertValues, setScheduleConcertValues] =
    useState<IScheduleConcert>({
      title: "",
      when: "",
      where: "",
      conductor: "",
      image_url: "",
      read_more: "",
      date_remove: "",
      repetoire: "Choose one",
      composer: "",
      work: "",
      display_repetoire: "Choose one",
    });
  const navigation = useNavigate();

  //Check that user is logged in
  useEffect(() => {
    if (!sessionStorage.userId) {
      navigation("../");

      return;
    } else {
      console.log(sessionStorage.userId);
    }
  }, []);

  //Input values from form
  function handleInputSchedulePost(e: ChangeEvent<any>) {
    console.log(e.target.value);
    if (repetoireChoice === "Choose one") {
      setRepetoireChoice(e.target.value);
      if (e.target.value === "Opera") {
        setScheduleOperaValues({
          ...scheduleOperaValues,
          [e.target.name]: e.target.value,
        });
      } else if (e.target.value === "Concert") {
        setScheduleConcertValues({
          ...scheduleConcertValues,
          [e.target.name]: e.target.value,
        });
      }
    } else if (
      (e.target.name === "repetoire" && e.target.value === "Opera") ||
      e.target.value === "Concert"
    ) {
      setRepetoireChoice(e.target.value);
    }

    if (repetoireChoice === "Opera") {
      setScheduleOperaValues({
        ...scheduleOperaValues,
        [e.target.name]: e.target.value,
      });
    } else if (repetoireChoice === "Concert") {
      setScheduleConcertValues({
        ...scheduleConcertValues,
        [e.target.name]: e.target.value,
      });
    }
  }
  return (
    <>
      <section className='container-schedule-post'>
        <h2>Schedule post</h2>
        <div className='container-schedule'>
          <div className='container-schedule-form'>
            <form action='schedulepost' className='schedule-form'>
              <label htmlFor='type'>Schedule type:</label>

              <select
                name='repetoire'
                id='repetoire'
                value={
                  repetoireChoice === "Opera"
                    ? scheduleOperaValues.repetoire
                    : scheduleConcertValues.repetoire
                }
                onChange={handleInputSchedulePost}
              >
                <option disabled>Choose one</option>
                <option value='Opera'>Opera</option>
                <option value='Concert'>Concert</option>
              </select>
              {(repetoireChoice === "Opera" ||
                repetoireChoice === "Concert") && (
                <>
                  {" "}
                  <label htmlFor='title'>Title of opera or concert</label>
                  <input
                    type='text'
                    placeholder=' Title of Opera/Concert'
                    name='title'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.title
                        : scheduleConcertValues.title
                    }
                    onChange={handleInputSchedulePost}
                  />
                  <label htmlFor='title'>
                    When: example format: April-June 2022
                  </label>
                  <input
                    name='when'
                    placeholder=' When'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.when
                        : scheduleConcertValues.when
                    }
                    onChange={handleInputSchedulePost}
                  ></input>
                  <label htmlFor='where'>
                    Where: which opera or concert house house
                  </label>
                  <input
                    name='where'
                    type='text'
                    placeholder=' Where'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.where
                        : scheduleConcertValues.where
                    }
                    onChange={handleInputSchedulePost}
                  />
                  <label htmlFor='conductor'>
                    Conductor: name of conductor
                  </label>
                  <input
                    name='conductor'
                    type='text'
                    placeholder=' Conductor'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.conductor
                        : scheduleConcertValues.conductor
                    }
                    onChange={handleInputSchedulePost}
                  />
                  <label htmlFor='read_more'>Link to booking tickets</label>
                  <input
                    name='read_more'
                    type='text'
                    placeholder=' URL for read-more'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.read_more
                        : scheduleConcertValues.read_more
                    }
                    onChange={handleInputSchedulePost}
                  />
                  {repetoireChoice === "Opera" && (
                    <>
                      <h3 className='repetoire-heading'>Repertoire Opera</h3>
                      <label htmlFor='opera'>Title of opera:</label>
                      <input
                        name='opera'
                        type='text'
                        placeholder=' Opera title'
                        value={scheduleOperaValues.opera}
                        onChange={handleInputSchedulePost}
                      />
                    </>
                  )}
                  {repetoireChoice === "Opera" && (
                    <>
                      <label htmlFor='role'>Role:</label>
                      <input
                        name='role'
                        type='text'
                        placeholder=' Role'
                        value={scheduleOperaValues.role}
                        onChange={handleInputSchedulePost}
                      />
                    </>
                  )}
                  <label htmlFor='composer'>Composer: Name of composer</label>
                  <input
                    name='composer'
                    type='text'
                    placeholder=' Composer'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.composer
                        : scheduleConcertValues.composer
                    }
                    onChange={handleInputSchedulePost}
                  />
                  {repetoireChoice === "Concert" && (
                    <>
                      <h3 className='repetoire-heading'>Repetoire Concert</h3>
                      <label htmlFor='work'>Work performed:</label>
                      <input
                        name='work'
                        type='text'
                        placeholder=' Concert work'
                        value={scheduleConcertValues.work}
                        onChange={handleInputSchedulePost}
                      />
                    </>
                  )}
                  <label htmlFor='repertoire_publish'>
                    Publish in repertoire:
                  </label>
                  <select
                    name='display_repetoire'
                    id='display_repetoire'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.display_repetoire
                        : scheduleConcertValues.display_repetoire
                    }
                    onChange={handleInputSchedulePost}
                  >
                    <option disabled>Choose one</option>
                    <option value='true'>Publish</option>
                    <option value='false'>Do NOT publish</option>
                  </select>
                  <label htmlFor='date_remove'>
                    Date to remove schedule post and post repetoire:{" "}
                  </label>
                  <input
                    name='date_remove'
                    type='date'
                    id='date-remove'
                    value={
                      repetoireChoice === "Opera"
                        ? scheduleOperaValues.date_remove
                        : scheduleConcertValues.date_remove
                    }
                    onChange={handleInputSchedulePost}
                  />
                  <div className='container-button'>
                    <button
                      className='secondary-button'
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(scheduleConcertValues);
                        console.log(scheduleOperaValues);
                        if (repetoireChoice === "Opera") {
                          let service = new ScheduleService();
                          service
                            .postSchedule(scheduleOperaValues)
                            .then((response) => {
                              console.log(response);
                            });
                        } else if (repetoireChoice === "Concert") {
                          let service = new ScheduleService();
                          service
                            .postSchedule(scheduleConcertValues)
                            .then((response) => {
                              console.log(response);
                            });
                        }
                      }}
                    >
                      Publish this
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <div className='container-schedule-preview'>
            {(repetoireChoice === "Opera" || repetoireChoice === "Concert") && (
              <>
                {repetoireChoice === "Opera" ? (
                  <h4>Opera preview</h4>
                ) : (
                  <h4>Concert preview</h4>
                )}
                <div className='container-post-preview'>
                  <h5>Schedule post:</h5>

                  {repetoireChoice === "Opera" ? (
                    <p>Title: {scheduleOperaValues.title}</p>
                  ) : (
                    <p>Title: {scheduleConcertValues.title}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <p>When: {scheduleOperaValues.when}</p>
                  ) : (
                    <p>When: {scheduleConcertValues.when}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <p>Where: {scheduleOperaValues.where}</p>
                  ) : (
                    <p>Where: {scheduleConcertValues.where}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <p>Conductor: {scheduleOperaValues.conductor}</p>
                  ) : (
                    <p>Conductor: {scheduleConcertValues.conductor}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <p>Read-more link: {scheduleOperaValues.read_more}</p>
                  ) : (
                    <p>Read-more link: {scheduleConcertValues.read_more}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <h5>Repetoire Opera</h5>
                  ) : (
                    <h5>Repetoire Concert</h5>
                  )}

                  {repetoireChoice === "Opera" && (
                    <p>Opera: {scheduleOperaValues.opera}</p>
                  )}

                  {repetoireChoice === "Opera" && (
                    <p>Role: {scheduleOperaValues.role}</p>
                  )}
                  {repetoireChoice === "Concert" && (
                    <p>Work: {scheduleConcertValues.work}</p>
                  )}

                  {repetoireChoice === "Opera" ? (
                    <p>Composer: {scheduleOperaValues.composer}</p>
                  ) : (
                    <p>Composer: {scheduleConcertValues.composer}</p>
                  )}

                  {scheduleOperaValues.display_repetoire === "true" ||
                  scheduleConcertValues.display_repetoire === "true" ? (
                    <p>Will show</p>
                  ) : (
                    <p> Will NOT show</p>
                  )}
                  <p>
                    Shedule will be removed{" "}
                    {scheduleOperaValues.display_repetoire === "true" && (
                      <>and repertoire published: </>
                    )}
                    : {scheduleOperaValues.date_remove}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
