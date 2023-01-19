import axios from "axios";
import { IScheduleConcert } from "../models/IScheduleConcert";
import { IScheduleOpera } from "../models/IScheduleOpera";

export class ScheduleService {
  async getSchedule() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule"
    );
    return response.data;
  }

  async getScheduleAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule/all"
    );
    return response.data;
  }

  async getScheduleTotal() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule/total"
    );
    return response.data;
  }

  async postSchedule(schedulePost: IScheduleOpera | IScheduleConcert) {
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule/add",
      schedulePost,

      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async deleteSchedule(scheduleId: string) {
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule/delete",
      { _id: scheduleId },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async changeSchedule(schedule: any) {
    console.log(schedule);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "schedule/change",
      { schedule },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
