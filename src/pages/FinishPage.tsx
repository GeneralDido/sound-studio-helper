import React from "react";

import { refreshOutline } from "ionicons/icons";

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
  IonText
} from "@ionic/react";

const Finish: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonTitle id={"header-title"}>Finish</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard id={"start_card"}>
          <IonCardHeader>
            <IonCardTitle id={"card-id"} color={"warning"}>
              <b>Well done! You are finished!</b>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonTitle>
          <IonGrid>
            <br />
            <br />
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  expand={"block"}
                  size={"large"}
                  shape={"round"}
                  color={"warning"}
                  routerLink={"/report-error"}
                >
                  <IonText id={"button-card-big3"}>
                    <IonText color={"light"}>Rate me!</IonText>
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>

            <br />
            <br />
            <br />

            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  color={"transparent"}
                  shape={"round"}
                  size={"large"}
                  id={"border-start"}
                  routerLink={"/"}
                >
                  <IonIcon icon={refreshOutline} id={"icon-big"} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Finish;
