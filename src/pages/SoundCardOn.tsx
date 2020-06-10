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

const SoundCardOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Sound card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard  mode={"ios"}>
          <IonGrid>
            <br/>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    On the left rack, locate the unit shown
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/SoundCard1.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    The power button is located to the right
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/SoundCard2.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard  mode={"ios"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  size={"large"}
                  shape={"round"}
                  id={"border-start"}
                  expand={"full"}
                  routerLink={"/switch-on"}
                  color={"transparent"}
                >
                  <IonText color={"warning"} id={"button-card-big"}>
                    It's on!
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

export default SoundCardOn;
