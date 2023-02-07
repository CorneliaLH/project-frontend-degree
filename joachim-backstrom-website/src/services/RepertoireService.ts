import axios from "axios";

export class RepertoireService {
  ////////////////////////
  //GET REPERTOIRE OPERA//
  ///////////////////////

  //Get all Opera rep that should be displayed
  async getRepertoireOpera() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/opera"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all Opera rep posts (also the ones not displayed)
  async getRepertoireOperaAll() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/opera/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //GET REPERTOIRE CONCERT//
  ///////////////////////

  //Get all Opera rep that should be displayed
  async getRepertoireConcert() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/concert"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all Concert rep posts (also the ones not displayed)
  async getRepertoireConcertAll() {
    try {
      let response = await axios.get<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/concert/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //DELETE REPERTOIRE//
  ///////////////////////

  //Delete Opera
  async deleteRepertoireOpera(operaId: string) {
    try {
      console.log(operaId);
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/opera/delete",
        { _id: operaId },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Delete Concert
  async deleteRepertoireConcert(concertId: string) {
    try {
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/concert/delete",
        { _id: concertId },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //CHANGE REPERTOIRE//
  ///////////////////////

  //Change Opera
  async changeOpera(operapost: any) {
    try {
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/opera/change",
        { operapost },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Change Concert
  async changeConcert(concertpost: any) {
    try {
      console.log(concertpost);
      let response = await axios.post<any>(
        process.env.REACT_APP_BACKEND_URL + "repertoire/concert/change",
        { concertpost },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
