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
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const ExportRecording: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on2"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Export</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    When you are finished with your recording, it's time to
                    export it!
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  id={"border-start"}
                  color={"warning"}
                  expand={"full"}
                  routerLink={"/export-single-track"}
                >
                  <IonText color={"light"}>
                    <b>Single track recording</b>
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  color={"warning"}
                  id={"border-start"}
                  expand={"full"}
                  routerLink={"/export-multi-track"}
                >
                  <IonText color={"light"}>
                    <b>Multitrack recording</b>
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

export default ExportRecording;
