import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
  // IonCard
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";

// import { EmailComposer } from "@ionic-native/email-composer";

// const ReportError: React.FC = () => {
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");
//
//   const changeSubject = (e:any) => {
//     setSubject(e.detail.value);
//   };
//
//   const changeBody = (e:any) => {
//     setBody(e.detail.value);
//   };
//
//   const sendOnClick = () => {
//     sendEmail(subject,body);
//   };
//
//   const sendEmail = (subject: string, body: string) => {
//
//     let email = {
//       to: "dimpanouris@gmail.com",
//       cc: "boudido@hotmail.com",
//       subject: subject,
//       body: body
//     };
//     console.log(email);
//
//     // Send a text message using default options
//     // EmailComposer.open(email);
//   };
//
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton slot={"start"} />
//           </IonButtons>
//           <IonTitle id={"header-title"}>Feedback/Report</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className={"ion-padding"}>
//         <IonGrid>
//           {/*<IonRow className="ion-align-items-center">*/}
//           {/*    <IonCol>*/}
//           {/*<IonToolbar color={"transparent"}>*/}
//           {/*  <IonTitle id={"white-header"}>Give us feedback or report an error</IonTitle>*/}
//           {/*</IonToolbar>*/}
//           {/*</IonCol>*/}
//           {/*</IonRow>*/}
//           <br />
//           <IonRow>
//             <IonCol>
//               <IonTitle id={"white-bold"}>Title </IonTitle>
//             </IonCol>
//           </IonRow>
//
//           <IonRow>
//             <IonCol>
//               <IonItem id={"border-large"}>
//                 {/*<IonLabel position={"floating"}>Title</IonLabel>*/}
//                 <IonInput type="text" required={true} onIonChange={changeSubject}/>
//               </IonItem>
//             </IonCol>
//           </IonRow>
//
//           <IonRow>
//             <IonCol>
//               <IonTitle id={"white-bold"}> Description </IonTitle>
//             </IonCol>
//           </IonRow>
//           <IonRow>
//             <IonCol>
//               <IonItem id={"border-large"}>
//                 {/*<IonLabel position={"floating"}>Detailed Description</IonLabel>*/}
//                 <IonTextarea rows={10} onIonChange={changeBody}/>
//               </IonItem>
//             </IonCol>
//           </IonRow>
//           <IonRow>
//             <IonCol className={"ion-text-center"}>
//               <IonButton
//                 size={"large"}
//                 shape={"round"}
//                 expand={"block"}
//                 color={"primary"}
//                 id={"border-large"}
//                 onClick={sendOnClick}
//               >
//                 <IonIcon slot={"start"} icon={checkmarkDoneOutline} />
//                 SUBMIT!
//               </IonButton>
//             </IonCol>
//           </IonRow>
//         </IonGrid>
//       </IonContent>
//     </IonPage>
//   );
// };

import Iframe from "react-iframe";

const ReportError: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot="start">
            <IonMenuButton slot={"start"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Feedback/Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Iframe
          url="https://docs.google.com/forms/d/e/1FAIpQLSfibzmfEW6juaDqQpujfSZ4kvJS2o1bmcVLF8f_fu518FrcUw/viewform?embedded=true"
          width="370"
          height="800"
        >
        </Iframe>
      </IonContent>
    </IonPage>
  );
};

export default ReportError;
