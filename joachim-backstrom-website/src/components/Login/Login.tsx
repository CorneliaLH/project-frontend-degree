import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { UserService } from "../../services/UserService";
import "./sass/login.css";
export function Login() {
  const [logInValues, setLogInValues] = useState<IUser>({
    userName: "",
    password: "",
  });

  const navigation = useNavigate();

  useEffect(() => {
    let headerDesktop = document.querySelector<any>(".header-desktop");
    let headerTabletMobile = document.querySelector<any>(
      ".header-tablet-mobile"
    );
    let footer = document.querySelector<any>(".container-footer");
    if (headerDesktop !== null) {
      headerDesktop.style.display = "none";
    }
    if (headerTabletMobile !== null) {
      headerTabletMobile.display = "none";
    }

    footer.style.display = "none";
  }, []);

  //Input values from inputfields
  function handleInputChangeLogin(e: ChangeEvent<HTMLInputElement>) {
    setLogInValues({ ...logInValues, [e.target.name]: e.target.value });
  }

  //Login function
  function submitLogIn() {
    let service = new UserService();
    service.postLogIn(logInValues).then((response) => {
      if (response.status === "ok") {
        sessionStorage.setItem("userId", response.message);
        navigation("/admin");
      } else {
        alert("Användare finns inte, försök gärna igen!");
      }
    });
    setLogInValues({
      userName: "",
      password: "",
    });
  }

  return (
    <>
      <div className='container-login'>
        <div className='container-login'>
          <h2 className='heading-login'>Var vänlig logga in nedan:</h2>
          <form className='form-login'>
            <input
              type='text'
              placeholder='Användarnamn'
              id='user-login'
              name='userName'
              value={logInValues.userName}
              onChange={handleInputChangeLogin}
            />
            <input
              type='password'
              placeholder='Lösenord '
              id='password-login'
              name='password'
              value={logInValues.password}
              onChange={handleInputChangeLogin}
            />
            <button
              type='submit'
              className='submit-button-login'
              onClick={(e) => {
                e.preventDefault();
                submitLogIn();
              }}
            >
              Logga in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
