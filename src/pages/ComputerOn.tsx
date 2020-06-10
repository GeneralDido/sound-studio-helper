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

const ComputerOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Computer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    The computer is located under the desk on the left side
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Computer2.png")}
                  id={"img-on3"}
                />
              </IonCol>
            </IonRow>
            <br />
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

export default ComputerOn;
