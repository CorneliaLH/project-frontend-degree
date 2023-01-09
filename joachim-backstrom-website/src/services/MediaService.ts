import axios from "axios";
import { IMedia } from "../models/IMedia";


export class MediaService {
    async getMedia() {
        let response = await axios.get<any>(
          "http://localhost:3000/media"
        );
        return response.data;
      }

    async postMedia(mediaPost:IMedia) {
        let response = await axios.post<any>(
          "http://localhost:3000/media/add",
          mediaPost
          ,
    
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      }

}