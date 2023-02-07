import { RepertoireService } from "../services/RepertoireService";

export interface IConcert {
  _id: string;
  composer: string;
  work: string;
  date_publish: string;
  display_repetoire: string;
}
