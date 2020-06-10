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
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const SpeakersOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Speakers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard  mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    Now switch on each speaker from the back
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Speakers1.png")}
                  id={"img-on3"}
                />
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/speakers_2.png")}
                  id={"img-on3"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <br/>
        </IonCard>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  size={"large"}
                  id={"border-start"}
                  shape={"round"}
                  color={"transparent"}
                  expand={"full"}
                  routerLink={"/switch-on"}
                >
                  <IonText color={"warning"} id={"button-card-big2"}>
                    They're on!
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

export default SpeakersOn;
