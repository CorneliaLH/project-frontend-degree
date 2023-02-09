import axios from "axios";
import { URLTOUSE } from "..";
// import { URLTOUSE } from "..";
import { IScheduleConcert } from "../models/IScheduleConcert";
import { IScheduleOpera } from "../models/IScheduleOpera";

export class ScheduleService {
  ////////////////////////
  //GET SCHEDULE//
  ///////////////////////

  //Get first 3 future schedule posts by most current date
  async getSchedule() {
    try {
      let response = await axios.get(URLTOUSE + "schedule");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all future schedule posts
  async getScheduleAll() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    console.log(URLTOUSE);
    try {
      let response = await axios.get(URLTOUSE + "schedule/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all past/future schedule posts
  async getScheduleTotal() {
    try {
      let response = await axios.get(URLTOUSE + "schedule/total");
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
      let response = await axios.post(
        URLTOUSE + "schedule/add",
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
      let response = await axios.post(
        URLTOUSE + "schedule/delete",
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
      let response = await axios.post(
        URLTOUSE + "schedule/change",
        { schedule },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
