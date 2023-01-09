import axios from "axios";


export class MediaService {
    async getMedia() {
        let response = await axios.get<any>(
          "http://localhost:3000/media"
        );
        return response.data;
      }

    async postMedia() {
        let response = await axios.post<any>(
          "http://localhost:3000/media/add",
    
          {
            title:"Name of News, video or audio", 
            description:"Croissant gingerbread gummi bears icing cookie croissant shortbread. Bonbon lollipop jujubes gingerbread bear claw bear claw muffin lollipop brownie. Cheesecake candy canes caramels marzipan bear claw icing topping donut tart. Candy macaroon bonbon danish jelly-o ice cream muffin ice cream muffin.",
            type:"News/Video/Audio",
            media_url:"http://linkto.com",
            date_pub:Date()
          },
    
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      }

}