import React from "react";

import { caretForwardCircleOutline } from "ionicons/icons";

import {
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonCol,
  IonRow,
  IonGrid,
  IonPage,
  IonButtons,
  IonMenuButton
} from "@ionic/react";

const Start: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons>
            <IonMenuButton slot={"start"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard id={"start_card"}>
          <IonCardHeader>
            <IonCardTitle id={"card-id"} color={"warning"}>
              <b>
                  Hi! Welcome to UiA Grimstad sound studio. Let’s get you started with the basics!
              </b>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonTitle>
          <br />
          <br />
          <br />
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1 id={"title-start"}>Ready?</h1>
              </IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  color={"transparent"}
                  shape={"round"}
                  size={"large"}
                  id={"border-start"}
                  routerLink={"/instructions"}
                >
                  <IonIcon icon={caretForwardCircleOutline} id={"icon-big"} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Start;
