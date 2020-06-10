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

const MonitoringOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Monitoring Unit</IonTitle>
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
              <IonCol>
                <IonCardHeader>
                  <br />
                  <IonCardTitle>
                    Locate this unit on the left side of the desk. The power button is found at the back to the right.

                  </IonCardTitle>
                  <br />
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Monitoring1-1.png")}
                  id={"img-on4"}
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
                  id={"border-start"}
                  shape={"round"}
                  color={"transparent"}
                  expand={"full"}
                  routerLink={"/monitoring-on2"}
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

export default MonitoringOn;
