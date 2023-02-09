import { useNavigate } from "react-router-dom";
import "./sass/admin.css";
import { useEffect, useState } from "react";

import { PostMedia } from "../PostMedia/PostMedia";
import { PostSchedule } from "../PostSchedule/PostSchedule";
import { ChangeMedia } from "../ChangeMedia/ChangeMedia";
import { ChangeSchedule } from "../ChangeSchedule/ChangeSchedule";
import { ChangeRepertoire } from "../ChangeRepertoire/ChangeRepertoire";

//Admin Component
//Displays Logout-button and 5 action choises, 2 are creating new posts for media or schedule/repertoire
//3 are change/delete media, schedule and repertoire posts.

export function Admin() {
  const [newMediaPost, setNewMediaPost] = useState<boolean>(false);
  const [newSchedulePost, setNewSchedulePost] = useState<boolean>(false);
  const [changeMediaPost, setChangeMediaPost] = useState<boolean>(false);
  const [changeSchedulePost, setChangeSchedulePost] = useState<boolean>(false);
  const [changeRepetoirePost, setChangeRepertoirePost] =
    useState<boolean>(false);

  const navigation = useNavigate();

  //Check if user is logged in
  useEffect(() => {
    if (!sessionStorage.userId) {
      navigation("../");

      return;
    }
  }, []);

  //Logout function
  function logOut() {
    sessionStorage.removeItem("userId");
    navigation("/");
  }

  //Re-render component
  useEffect(() => {}, [
    newMediaPost,
    newSchedulePost,
    changeMediaPost,
    changeSchedulePost,
    changeRepetoirePost,
  ]);

  return (
    <>
      <div className='container-admin'>
        <h1>Welcome to admin</h1>
        <div className='container-logout-button'>
          {/* Button to go back to admin start page */}
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
          {/* Button to log out from Admin  */}
          <button className='primary-button' onClick={logOut}>
            Logout
          </button>
        </div>
        {/* If all booleans are false the list with action buttons are shown, if one of the booleans are true, buttons doesn't show and the component is displayed  */}
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
              }}
            >
              Change/Delete Media post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setChangeSchedulePost(true);
              }}
            >
              Change/Delete Schedule post
            </button>
            <button
              className='secondary-button'
              onClick={() => {
                setChangeRepertoirePost(true);
              }}
            >
              Change/Delete Repertoire post
            </button>
          </div>
        ) : (
          <></>
        )}

        {/* Components shown when boolean is set to true */}
        {newMediaPost === true && <PostMedia></PostMedia>}
        {newSchedulePost === true && <PostSchedule></PostSchedule>}
        {changeMediaPost === true && <ChangeMedia></ChangeMedia>}
        {changeSchedulePost === true && <ChangeSchedule></ChangeSchedule>}
        {changeRepetoirePost === true && <ChangeRepertoire></ChangeRepertoire>}
      </div>
    </>
  );
}
