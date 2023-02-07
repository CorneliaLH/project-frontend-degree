import axios from "axios";
import { IScheduleConcert } from "../models/IScheduleConcert";
import { IScheduleOpera } from "../models/IScheduleOpera";

export class ScheduleService {
  ////////////////////////
  //GET SCHEDULE//
  ///////////////////////

  //Get first 3 future schedule posts by most current date
  async getSchedule() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all future schedule posts
  async getScheduleAll() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all past/future schedule posts
  async getScheduleTotal() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule/total"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //POST SCHEDULE//
  ///////////////////////

  //Post schedule AND opera OR concert repertoire posts
  async postSchedule(schedulePost: IScheduleOpera | IScheduleConcert) {
    try {
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule/add",
        schedulePost,

        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //DELETE SCHEDULE//
  ///////////////////////

  async deleteSchedule(scheduleId: string) {
    try {
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule/delete",
        { _id: scheduleId },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //CHANGE SCHEDULE//
  ///////////////////////

  async changeSchedule(schedule: any) {
    try {
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "schedule/change",
        { schedule },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
