import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
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

const RecordingLevels2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on2"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Recording levels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>Step 2/2</IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    Use the <b>Trim</b> knob to make small adjustments if needed
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/RecordingLevels3.jpg")}
                  id={"img-on4"}
                />
              </IonCol>
              <IonCol>
                <IonImg
                  src={require("../assets/img/RecordingLevels2.png")}
                  id={"amplifier-on"}
                />
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                  <IonCardContent>
                    <i>
                      *The <IonText color="dark">Trim</IonText> knob increases/decreases gain by 1dB up to -6dB / +6dB
                    </i>
                  </IonCardContent>
              </IonCol>
            </IonRow>
            <br/>
          </IonGrid>
        </IonCard>
        <IonCard mode={"md"}>
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
                  routerLink={"/switch-on2"}
                >
                  <IonText color={"warning"} id={"button-card-big"}>
                    Done!
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

export default RecordingLevels2;
