import axios from "axios";

export class RepertoireService {
  async getRepertoireOpera() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/opera"
    );
    return response.data;
  }

  async getRepertoireOperaAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/opera/all"
    );
    return response.data;
  }

  async getRepertoireConcert() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/concert"
    );
    return response.data;
  }

  async getRepertoireConcertAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/concert/all"
    );
    return response.data;
  }

  async deleteRepertoireOpera(operaId: string) {
    console.log(operaId);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/opera/delete",
      { _id: operaId },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async deleteRepertoireConcert(concertId: string) {
    console.log(concertId);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/concert/delete",
      { _id: concertId },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async changeOpera(operapost: any) {
    console.log(operapost);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/opera/change",
      { operapost },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async changeConcert(concertpost: any) {
    console.log(concertpost);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "repertoire/concert/change",
      { concertpost },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
