import axios from "axios";
import { IMediaPost } from "../models/IMediaPost";

export class MediaService {
  async getMedia() {
    let response = await axios.get<any>("http://localhost:3000/media");
    return response.data;
  }

  async getMediaAll() {
    let response = await axios.get<any>("http://localhost:3000/media/all");
    return response.data;
  }

  async getMediaVideo() {
    let response = await axios.get<any>("http://localhost:3000/media/video");
    return response.data;
  }

  async getMediaAudio() {
    let response = await axios.get<any>("http://localhost:3000/media/audio");
    return response.data;
  }

  async getMediaNews() {
    let response = await axios.get<any>("http://localhost:3000/media/news");
    return response.data;
  }

  async getMediaVideoAll() {
    let response = await axios.get<any>(
      "http://localhost:3000/media/video/all"
    );
    return response.data;
  }

  async getMediaAudioAll() {
    let response = await axios.get<any>(
      "http://localhost:3000/media/audio/all"
    );
    return response.data;
  }

  async getMediaNewsAll() {
    let response = await axios.get<any>("http://localhost:3000/media/news/all");
    return response.data;
  }

  async postMedia(mediaPost: IMediaPost) {
    let response = await axios.post<any>(
      "http://localhost:3000/media/add",
      mediaPost,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
