import { RepertoireService } from "../services/RepertoireService";

export interface IConcert {
  _id: string;
  composer: string;
  work: string;
  date_publish: string;
  shedule_id: string;
  display_repetoire: boolean;
}
