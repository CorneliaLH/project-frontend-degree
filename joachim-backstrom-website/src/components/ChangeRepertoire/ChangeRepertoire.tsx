import { ChangeEvent, useEffect, useState } from "react";
import { IConcert } from "../../models/IConcert";
import { IOpera } from "../../models/IOpera";
import { RepertoireService } from "../../services/RepertoireService";
import "./sass/changerepertoire.css";

//ChangeRepertoire component
//Gets whole repertoire-list inkl. opera and concert (both displayed and not displayed on site)
// and renders each post with a delete and change button
//Each post kan be changed or deleted
//Alert pops up with result

export function ChangeRepertoire() {
  const [operaList, setOperaList] = useState<any[]>([]);
  const [concertList, setConcertList] = useState<any[]>([]);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [changeInputOpera, setChangeInputOpera] = useState<boolean>(false);
  const [changeInputConcert, setChangeInputConcert] = useState<boolean>(false);
  const [operaValues, setOperaValues] = useState<IOpera>({
    _id: "",
    opera: "",
    date_publish: "",
    role: "",
    display_repetoire: "",
    composer: "",
  });

  const [concertValues, setConcertValues] = useState<IConcert>({
    _id: "",
    date_publish: "",
    display_repetoire: "",
    work: "",
    composer: "",
  });

  //GET all Opera and Concert posts

  useEffect(() => {
    let service1 = new RepertoireService();
    service1.getRepertoireOperaAll().then((response) => {
      console.log(response);
      if (response.status === "error") {
        console.log(response.message);
        return;
      }
      setOperaList(response);
    });
    let service2 = new RepertoireService();
    service2.getRepertoireConcertAll().then((response) => {
      console.log(response);
      if (response.status === "error") {
        console.log(response.message);
        return;
      }
      setConcertList(response);
    });
  }, [updateList, changeInputConcert, changeInputOpera]);

  //input values from form Opera
  function handleInputMediaPostOpera(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) {
    setOperaValues({ ...operaValues, [e.target.name]: e.target.value });
  }

  //input values from form Concert
  function handleInputMediaPostConcert(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) {
    setConcertValues({ ...concertValues, [e.target.name]: e.target.value });
  }

  let operaArray = operaList.map((operaitem) => {
    return (
      <>
        <ul className='container-change-list-item'>
          <li key={operaitem._id} className='change-item-info'>
            <p>
              <span className='change-item-text-bold'>Opera: </span>
              <span className='change-item-text'>{operaitem.opera}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Role: </span>
              <span className='change-item-text'>{operaitem.role}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Composer: </span>
              <span className='change-item-text'>{operaitem.composer}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Publish date: </span>
              <span className='change-item-text'>{operaitem.date_publish}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>
                Show in repertoire:{" "}
              </span>

              {operaitem.display_repetoire === "true" ? (
                <span className='change-item-text'>Yes</span>
              ) : (
                <span className='change-item-text'>No</span>
              )}
            </p>
            <button
              className='primary-button'
              onClick={() => {
                setChangeInputOpera(false);
                let service = new RepertoireService();
                service
                  .deleteRepertoireOpera(operaitem._id)
                  .then((response) => {
                    if (response.status === "error") {
                      console.log(response.message);
                      alert("Something went wrong, try again");
                      return;
                    }
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
                setOperaValues({
                  _id: operaitem._id,
                  opera: operaitem.opera,
                  date_publish: operaitem.date_publish,
                  role: operaitem.role,
                  display_repetoire: operaitem.display_repetoire,
                  composer: operaitem.composer,
                });
                setChangeInputOpera(true);
              }}
            >
              Change
            </button>
          </li>
        </ul>
      </>
    );
  });

  let concertArray = concertList.map((concertitem) => {
    return (
      <>
        <ul className='container-change-list-item'>
          <li key={concertitem._id} className='change-item-info'>
            <p>
              <span className='change-item-text-bold'>Work: </span>
              <span className='change-item-text'>{concertitem.work}</span>
            </p>

            <p>
              <span className='change-item-text-bold'>Composer: </span>
              <span className='change-item-text'>{concertitem.composer}</span>
            </p>
            <p>
              <span className='change-item-text-bold'>Publish date: </span>
              <span className='change-item-text'>
                {concertitem.date_publish}
              </span>
            </p>
            <p>
              <span className='change-item-text-bold'>
                Show in repertoire:{" "}
              </span>

              {concertitem.display_repetoire === "true" ? (
                <span className='change-item-text'>Yes</span>
              ) : (
                <span className='change-item-text'>No</span>
              )}
            </p>
            <button
              className='primary-button'
              onClick={() => {
                setChangeInputConcert(false);
                let service = new RepertoireService();
                service
                  .deleteRepertoireConcert(concertitem._id)
                  .then((response) => {
                    if (response.status === "error") {
                      alert("Something went wrong, try again");
                      console.log(response.message);
                      return;
                    }
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
                setConcertValues({
                  _id: concertitem._id,
                  work: concertitem.work,
                  date_publish: concertitem.date_publish,
                  display_repetoire: concertitem.display_repetoire,
                  composer: concertitem.composer,
                });
                setChangeInputConcert(true);
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
      <div className='container-change-repertoire'>
        <h2>All Opera posts</h2>
        <div className='container-change-repertoire-posts'>
          <div>
            <h3>Opera list in database</h3>
            {operaArray}
          </div>
          {changeInputOpera && (
            <ul>
              <h3>Post to change:</h3>
              <li className='change-input-fields'>
                <form action='form-change' id='admin-repertoire-form'>
                  <div className='repertoire-form-input'>
                    <label htmlFor='opera'>Opera:</label>
                    <input
                      name='opera'
                      type='text'
                      value={operaValues.opera}
                      onChange={handleInputMediaPostOpera}
                    />
                  </div>
                  <div className='repertoire-form-input'>
                    <label htmlFor='role'>Role:</label>
                    <input
                      name='role'
                      value={operaValues.role}
                      onChange={handleInputMediaPostOpera}
                    />
                  </div>

                  <div className='repertoire-form-input'>
                    <label htmlFor='composer'>Composer: </label>
                    <input
                      name='composer'
                      value={operaValues.composer}
                      onChange={handleInputMediaPostOpera}
                    />
                  </div>

                  <div className='repertoire-form-input'>
                    <label htmlFor='date_publish'>Date to publish:</label>
                    <input
                      name='date_publish'
                      type='date'
                      value={operaValues.date_publish}
                      onChange={handleInputMediaPostOpera}
                    />
                  </div>

                  <div className='repertoire-form-input'>
                    <label htmlFor='display_repetoire'>
                      Display under repertoire:
                    </label>
                    <select
                      name='display_repetoire'
                      value={operaValues.display_repetoire}
                      onChange={handleInputMediaPostOpera}
                    >
                      <option value='true'>Yes</option>
                      <option value='false'>No</option>
                    </select>
                  </div>
                  <div className='container-form-button'>
                    <button
                      type='submit'
                      className='secondary-button'
                      onClick={(e) => {
                        e.preventDefault();

                        let service = new RepertoireService();
                        service.changeOpera(operaValues).then((response) => {
                          console.log(response);
                          if (response.acknowledged === true) {
                            alert("The post has been changed");
                            setChangeInputOpera(false);
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
        <div className='container-change-repertoire-posts'>
          <div>
            <h3>Concert list in database</h3>
            {concertArray}
          </div>
          {changeInputConcert && (
            <ul>
              <h3>Post to change:</h3>
              <li className='change-input-fields'>
                <form action='form-change'>
                  <div>
                    <label htmlFor='Work'>Work:</label>
                    <input
                      name='work'
                      type='text'
                      value={concertValues.work}
                      onChange={handleInputMediaPostConcert}
                    />
                  </div>

                  <div>
                    <label htmlFor='composer'>Composer: </label>
                    <input
                      name='composer'
                      value={concertValues.composer}
                      onChange={handleInputMediaPostConcert}
                    />
                  </div>

                  <div>
                    <label htmlFor='date_publish'>Date to publish:</label>
                    <input
                      name='date_publish'
                      type='date'
                      value={concertValues.date_publish}
                      onChange={handleInputMediaPostConcert}
                    />
                  </div>

                  <div>
                    <label htmlFor='display_repetoire'>
                      Display under repertoire:
                    </label>
                    <select
                      name='display_repetoire'
                      value={concertValues.display_repetoire}
                      onChange={handleInputMediaPostConcert}
                    >
                      <option value='true'>Yes</option>
                      <option value='false'>No</option>
                    </select>
                  </div>
                  <div className='container-form-button'>
                    <button
                      type='submit'
                      className='secondary-button'
                      onClick={(e) => {
                        e.preventDefault();

                        let service = new RepertoireService();
                        service
                          .changeConcert(concertValues)
                          .then((response) => {
                            console.log(response);
                            if (response.acknowledged === true) {
                              alert("The post has been changed");
                              setChangeInputConcert(false);
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
