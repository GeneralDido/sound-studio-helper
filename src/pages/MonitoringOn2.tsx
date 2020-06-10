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

const MonitoringOn2: React.FC = () => {
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
                <IonItem>Step 2/2</IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    1.Activate buttons <b>3/4</b> and <b>A</b> so they are lit
                    green
                  </IonCardTitle>
                  <IonCardTitle>
                    2.Set the <b>speakers</b> knob to the 9 o’clock position
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Monitoring2.jpg")}
                  id={"img-on3"}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                  <IonCardContent>
                    <i>
                      *Button 3/4 activates sound from the computer. Button A
                      activates sound to the speakers
                    </i>
                  </IonCardContent>
              </IonCol>
            </IonRow>
            <br/>
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
                  routerLink={"/switch-on"}
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

export default MonitoringOn2;
