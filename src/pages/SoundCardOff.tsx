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

const SoundCardOff: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Sound Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id={"ion-background-2"}>
        <IonCard>
          <IonGrid>
            <IonRow>
              <br/><br/><br/>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonText color="warning">
                      <b>Switch off sound card</b>
                    </IonText>
                  </IonCardTitle>
                  <br/><br/><br/>
                  <IonCardTitle>
                    <b>Hold</b> the power button in for 1 second to switch off
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br /><br/>
            <br />
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/SoundCard2.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
            <br />
            <br /><br/><br/><br/><br/>
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

export default SoundCardOff;
