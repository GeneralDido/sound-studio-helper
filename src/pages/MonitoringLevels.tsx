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

const MonitoringLevels: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on2"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Monitoring levels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
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
                    Now while your talent is still speaking into the microphone,
                    go to the monitoring unit and adjust the{" "}
                    <b>Trim knob 3/4</b> until the input levels are at ca 0dB
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/MonitoringLevels1.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard>
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
                  routerLink={"/monitoring-levels2"}
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

export default MonitoringLevels;
