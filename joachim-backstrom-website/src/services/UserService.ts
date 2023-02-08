import axios from "axios";
import { IUser } from "../models/IUser";

export class UserService {
  ////////////////////////
  //POST TO CHECK LOGIN CREDENTIALS//
  ///////////////////////

  async postLogIn(userInfo: IUser) {
    try {
      let response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "users/login",

        userInfo,

        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
