import { ScheduleService } from "../../services/ScheduleService";
import { UserService } from "../../services/UserService";
import { MediaService } from "../../services/MediaService";
import "./sass/home.css";
export function Home() {

    return <><button onClick={()=>{
        let service = new UserService();
        let user = {userName:"Joachim122", password:"Password123"}
        service.postLogIn(user).then((response) => {
            
            if (response.status === "ok") {
             console.log("Namn finns")
            } else {
              alert("Användare finns inte, försök gärna igen!");
            }
          });
    }}>Login</button>
    <button onClick={()=>{
        let service = new ScheduleService();
        service.getSchedule().then((response) => {
            
          console.log(response)
          });
    }}>Schedule</button>
     <button onClick={()=>{
        let service = new ScheduleService();
        service.postSchedule().then((response) => {
            
          console.log(response)
          });
    }}>Post New Schedule</button>
     <button onClick={()=>{
        let service = new MediaService();
        service.getMedia().then((response) => {
            
          console.log(response)
          });
    }}>Get media</button>
      <button onClick={()=>{
        let service = new MediaService();
        service.postMedia().then((response) => {
            
          console.log(response)
          });
    }}>Post Media</button>
    </>
}