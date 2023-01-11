import axios from "axios";
import { IScheduleConcert } from "../models/IScheduleConcert";
import { IScheduleOpera } from "../models/IScheduleOpera";

export class ScheduleService {
  async getSchedule() {
    let response = await axios.get<any>("http://localhost:3000/schedule");
    return response.data;
  }

  async getScheduleAll() {
    let response = await axios.get<any>("http://localhost:3000/schedule/all");
    return response.data;
  }

  async postSchedule(schedulePost: IScheduleOpera | IScheduleConcert) {
    let response = await axios.post<any>(
      "http://localhost:3000/schedule/add",
      schedulePost,

      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
