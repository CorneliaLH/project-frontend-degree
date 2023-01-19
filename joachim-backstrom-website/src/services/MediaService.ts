import axios from "axios";
import { IMedia } from "../models/IMedia";
import { IMediaPost } from "../models/IMediaPost";

export class MediaService {
  async getMedia() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media"
    );
    return response.data;
  }

  async getMediaAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/all"
    );
    return response.data;
  }

  async getMediaVideo() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/video"
    );
    return response.data;
  }

  async getMediaAudio() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/audio"
    );
    return response.data;
  }

  async getMediaNews() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/news"
    );
    return response.data;
  }

  async getMediaVideoAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/video/all"
    );
    return response.data;
  }

  async getMediaAudioAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/audio/all"
    );
    return response.data;
  }

  async getMediaNewsAll() {
    let response = await axios.get<any>(
      process.env.REACT_APP_BACKEND_URL + "media/news/all"
    );
    return response.data;
  }

  async postMedia(mediaPost: IMediaPost) {
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "media/add",
      mediaPost,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async deleteMedia(mediaId: string) {
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "media/delete",
      { _id: mediaId },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }

  async changeMedia(media: IMedia) {
    console.log(media);
    let response = await axios.post<any>(
      process.env.REACT_APP_BACKEND_URL + "media/change",
      { media },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
}
