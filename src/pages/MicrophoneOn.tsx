import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const MicrophoneOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Microphone</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard  mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>Step 1/2</IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size={"7"}>
                <IonCardHeader>
                  <IonCardTitle>
                    Attach the shock mount to a stand...
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
              {/*</IonRow>*/}
              {/*<IonRow>*/}
              <IonCol>
                <IonImg
                  src={require("../assets/img/Microphone-in-11.png")}
                  id={"amplifier-on"}
                  // onClick={showImage}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    ...with the pop filter on, place the microphone inside and
                    secure as shown
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Microphone-in-21.png")}
                  id={"img-on"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard  mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  size={"large"}
                  shape={"round"}
                  id={"border-start"}
                  color={"transparent"}
                  expand={"full"}
                  routerLink={"/microphone-on2"}
                >
                  <IonText color={"warning"} id={"button-card-big"}>
                    Next
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default MicrophoneOn;
