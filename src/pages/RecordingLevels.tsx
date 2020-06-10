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

const RecordingLevels: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on2"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Recording levels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>Step 1/2</IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    Ok, let’s go back to the mic amplifier. While your talent is
                    speaking into the microphone, turn up the <b>Mic Gain</b>{" "}
                    knob until the recording levels in <b>Logic</b> are at ca
                    -12dB
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/RecordingLevels1.png")}
                  id={"img-on4"}
                />
              </IonCol>
              <IonCol>
                <IonImg
                  src={require("../assets/img/RecordingLevels2.png")}
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
                  routerLink={"/recording-levels2"}
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

export default RecordingLevels;
