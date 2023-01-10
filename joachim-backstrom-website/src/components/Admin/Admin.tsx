import { ScheduleService } from "../../services/ScheduleService";
import { UserService } from "../../services/UserService";
import { MediaService } from "../../services/MediaService";
import "./sass/admin.css";

export function Admin() {
  return (
    <>
      <div className='containerAdmin'>
        <button
          onClick={() => {
            let service = new UserService();
            let user = { userName: "Joachim122", password: "Password123" };
            service.postLogIn(user).then((response) => {
              if (response.status === "ok") {
                console.log("Namn finns");
              } else {
                alert("Användare finns inte, försök gärna igen!");
              }
            });
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            let service = new ScheduleService();
            service.getSchedule().then((response) => {
              console.log(response);
            });
          }}
        >
          Schedule
        </button>
        <button
          onClick={() => {
            let schedulePost = {
              title: "Title of the Opera",
              when: "September-October 2020",
              where: "Sydney Opera House",
              conductor: "Waving Astick",
              role: "Don José",
              image_url: "http://image.se",
              read_more: "http://theTicketSalesList",
              date_remove: "2020-11-01",
              repetoire: "Opera",
              composer: "Georges Bizet",
              opera: "Carmen",
              display_repetoire: true,
            };
            let service = new ScheduleService();
            service.postSchedule(schedulePost).then((response) => {
              console.log(response);
            });
          }}
        >
          Post New Schedule
        </button>
        <button
          onClick={() => {
            let service = new MediaService();
            service.getMedia().then((response) => {
              console.log(response);
            });
          }}
        >
          Get media
        </button>
        <button
          onClick={() => {
            let mediaPost = {
              title: "Name of News, video or audio",
              description:
                "Croissant gingerbread gummi bears icing cookie croissant shortbread. Bonbon lollipop jujubes gingerbread bear claw bear claw muffin lollipop brownie. Cheesecake candy canes caramels marzipan bear claw icing topping donut tart. Candy macaroon bonbon danish jelly-o ice cream muffin ice cream muffin.",
              type: "News/Video/Audio",
              media_url: "http://linkto.com",
              date_pub: "Date",
            };

            let service = new MediaService();
            service.postMedia(mediaPost).then((response) => {
              console.log(response);
            });
          }}
        >
          Post Media
        </button>
      </div>
    </>
  );
}
