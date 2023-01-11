import axios from "axios";

export class RepertoireService {
  async getRepertoireOpera() {
    let response = await axios.get<any>(
      "http://localhost:3000/repertoire/opera"
    );
    return response.data;
  }

  async getRepertoireConcert() {
    let response = await axios.get<any>(
      "http://localhost:3000/repertoire/concert"
    );
    return response.data;
  }
}
