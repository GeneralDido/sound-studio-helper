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
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { powerOutline } from "ionicons/icons";

const MicrophoneOff: React.FC = () => {
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
      <IonContent id={"ion-background-2"}>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonText color="warning">
                      <b>Disconnect Microphone</b>
                    </IonText>
                  </IonCardTitle>
                  <IonCardTitle>
                    Dismount microphone and put it back in the box where it
                    belongs
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/MicrophoneOff.png")}
                  id={"amplifier-on"}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id={"button-start"}>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  color={"transparent"}
                  id={"border-off-icon"}
                  routerLink={"/switch-off"}
                >
                  <IonIcon
                    icon={powerOutline}
                    color={"primary"}
                    size={"large"}
                  />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default MicrophoneOff;
