import axios from "axios";
import { URLTOUSE } from "..";
import { IMedia } from "../models/IMedia";
import { IMediaPost } from "../models/IMediaPost";

export class MediaService {
  ////////////////////////
  //GET MEDIA//
  ///////////////////////

  //Get first 4 media by most current date
  async getMedia() {
    try {
      let response = await axios.get(URLTOUSE + "media");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all media posts
  async getMediaAll() {
    try {
      let response = await axios.get(URLTOUSE + "media/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //GET VIDEO//
  ///////////////////////

  //Get first 4 video posts by most current date
  async getMediaVideo() {
    try {
      let response = await axios.get(URLTOUSE + "media/video");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all video posts
  async getMediaVideoAll() {
    try {
      let response = await axios.get(URLTOUSE + "media/video/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //GET AUDIO//
  ///////////////////////

  //Get first 4 audio posts by most current date
  async getMediaAudio() {
    try {
      let response = await axios.get(URLTOUSE + "media/audio");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all audio posts
  async getMediaAudioAll() {
    try {
      let response = await axios.get(URLTOUSE + "media/audio/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //GET NEWS//
  ///////////////////////

  //Get first 4 news posts by most current date
  async getMediaNews() {
    try {
      let response = await axios.get(URLTOUSE + "media/news");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all news posts
  async getMediaNewsAll() {
    try {
      let response = await axios.get(URLTOUSE + "media/news/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //POST MEDIA//
  ///////////////////////

  async postMedia(mediaPost: IMediaPost) {
    let response = await axios.post(URLTOUSE + "media/add", mediaPost, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }

  ////////////////////////
  //DELETE MEDIA//
  ///////////////////////

  async deleteMedia(mediaId: string) {
    try {
      let response = await axios.post(
        URLTOUSE + "media/delete",
        { _id: mediaId },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////
  //CHANGE MEDIA//
  ///////////////////////

  async changeMedia(media: IMedia) {
    try {
      console.log(media);
      let response = await axios.post(
        URLTOUSE + "media/change",
        { media },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
