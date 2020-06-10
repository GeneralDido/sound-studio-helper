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

const ExportMultitrack: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/export-recording"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Multitrack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonText color="warning">
                      <b>Multitrack as separate files</b>
                    </IonText>
                  </IonCardTitle>
                  <IonCardTitle>
                    Go to <b>File → Export → All Tracks as Audio Files</b>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/ExportMultitrackSeparate.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
            <IonItem />
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonText color="warning">
                      <b>Multitrack mixed to a single file</b>
                    </IonText>
                  </IonCardTitle>
                  <IonCardTitle>
                    Go to <b>File → Bounce → Project or Section</b>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/ExportMultitrackMixed.png")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size={"6"}>
              <IonButton
                mode={"ios"}
                size={"large"}
                shape={"round"}
                id={"border-start"}
                color={"light"}
                expand={"full"}
                routerLink={"/export-recording"}
              >
                <IonText color={"warning"} id={"button-card-big3"}>
                  Back
                </IonText>
              </IonButton>
            </IonCol>
            <IonCol size={"6"}>
              <IonButton
                mode={"ios"}
                size={"large"}
                shape={"round"}
                id={"border-start"}
                color={"light"}
                expand={"full"}
                routerLink={"/switch-on2"}
              >
                <IonText color={"warning"} id={"button-card-big3"}>
                  Done
                </IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ExportMultitrack;
