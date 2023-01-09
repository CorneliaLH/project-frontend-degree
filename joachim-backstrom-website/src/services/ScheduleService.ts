import axios from "axios";

export class ScheduleService {
    async getSchedule() {
        let response = await axios.get<any>(
          "http://localhost:3000/schedule"
        );
        return response.data;
      }

      async postSchedule() {
        let response = await axios.post<any>(
          "http://localhost:3000/schedule/add",
          {
            title:"Title of the Opera", 
            when:"September-October 2020",
            where:"Sydney Opera House",
            conductor:"Waving Astick",
            role:"Don José",
            image_url:"http://image.se",
            read_more:"http://theTicketSalesList", 
            date_remove:"2020-11-01",
            repetoire:"Opera",
            composer:"Georges Bizet",
            opera:"Carmen",
            display_repetoire:true      
        },
    
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      }
}