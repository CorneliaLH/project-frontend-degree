import axios from "axios";
import { IUser } from "../models/IUser";

export class UserService {
  async postLogIn(userInfo: IUser) {
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "users/login",

      userInfo,

      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
