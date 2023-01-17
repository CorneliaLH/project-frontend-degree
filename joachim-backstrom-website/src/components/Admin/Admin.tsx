import { useNavigate } from "react-router-dom";
import "./sass/admin.css";
import { useEffect, useState } from "react";

import { PostMedia } from "../PostMedia/PostMedia";
import { PostSchedule } from "../PostSchedule/PostSchedule";
import { ChangeMedia } from "../ChangeMedia/ChangeMedia";
import { ChangeSchedule } from "../ChangeSchedule/ChangeSchedule";
import { ChangeRepertoire } from "../ChangeRepertoire/ChangeRepertoire";

export function Admin() {
  const [newMediaPost, setNewMediaPost] = useState<boolean>(false);
  const [newSchedulePost, setNewSchedulePost] = useState<boolean>(false);
  const [changeMediaPost, setChangeMediaPost] = useState<boolean>(false);
  const [changeSchedulePost, setChangeSchedulePost] = useState<boolean>(false);
  const [changeRepetoirePost, setChangeRepertoirePost] =
    useState<boolean>(false);

  const navigation = useNavigate();

  useEffect(() => {
    let header = document.querySelector<any>(".header");
    let footer = document.querySelector<any>(".container-footer");

    header.style.display = "none";
    footer.style.display = "none";
  }, []);

  useEffect(() => {
    if (!sessionStorage.userId) {
      navigation("../");

      return;
    } else {
      console.log(sessionStorage.userId);
    }
  }, []);

  //Logout function
  function logOut() {
    sessionStorage.removeItem("userId");
    let header = document.querySelector<any>(".header");
    let footer = document.querySelector<any>(".container-footer");

    header.style.display = "flex";
    footer.style.display = "flex";

    navigation("/");
  }
  return (
    <>
      <div className='container-admin'>
        <h1>Welcome to admin</h1>
        <div className='container-logout-button'>
          {(newMediaPost ||
            newSchedulePost ||
            changeMediaPost ||
            changeSchedulePost ||
            changeRepetoirePost) && (
            <button
              className='primary-button'
              onClick={() => {
                setNewMediaPost(false);
                setNewSchedulePost(false);
                setChangeMediaPost(false);
                setChangeSchedulePost(false);
                setChangeRepertoirePost(false);
              }}
            >
              Go back to admin
            </button>
          )}
          <button className='primary-button' onClick={logOut}>
            Logga ut
          </button>
        </div>
        {!newMediaPost &&
        !newSchedulePost &&
        !changeMediaPost &&
        !changeSchedulePost &&
        !changeRepetoirePost ? (
          <div className='container-admin-buttons'>
            <button
              className='secondary-button'
              onClick={() => {
                setNewMediaPost(true);
                let containerbuttons = document.querySelector<any>(
                  ".container-admin-buttons"
                );
                containerbuttons.style.display = "none";
              }}
            >
              New media post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setNewSchedulePost(true);
                let containerbuttons = document.querySelector<any>(
                  ".container-admin-buttons"
                );
                containerbuttons.style.display = "none";
              }}
            >
              New Schedule and Repertoire post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setChangeMediaPost(true);
                let containerbuttons = document.querySelector<any>(
                  ".container-admin-buttons"
                );
                containerbuttons.style.display = "none";
              }}
            >
              Change/Delete Media post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setChangeSchedulePost(true);
                let containerbuttons = document.querySelector<any>(
                  ".container-admin-buttons"
                );
                containerbuttons.style.display = "none";
              }}
            >
              Change/Delete Schedule post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setChangeRepertoirePost(true);
                let containerbuttons = document.querySelector<any>(
                  ".container-admin-buttons"
                );
                containerbuttons.style.display = "none";
              }}
            >
              Change/Delete Repertoire post
            </button>
          </div>
        ) : (
          <></>
        )}
        {/* <div className='container-admin-items'> */}
        {newMediaPost === true && <PostMedia></PostMedia>}
        {newSchedulePost === true && <PostSchedule></PostSchedule>}
        {changeMediaPost === true && (
          <>
            <ChangeMedia></ChangeMedia>
          </>
        )}
        {changeSchedulePost === true && (
          <>
            <ChangeSchedule></ChangeSchedule>
          </>
        )}
        {changeRepetoirePost === true && (
          <>
            <ChangeRepertoire></ChangeRepertoire>
          </>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
