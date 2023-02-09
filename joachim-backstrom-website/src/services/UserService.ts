import axios from "axios";
import { URLTOUSE } from "..";
import { IUser } from "../models/IUser";

export class UserService {
  ////////////////////////
  //POST TO CHECK LOGIN CREDENTIALS//
  ///////////////////////

  async postLogIn(userInfo: IUser) {
    try {
      let response = await axios.post(
        URLTOUSE + "users/login",

        userInfo,

        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
