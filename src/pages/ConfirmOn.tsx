import React from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const ConfirmOn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonTitle id={"header-title"}>Great Job!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    You’re now all set up and ready to adjust the settings.
                    Let’s make a project!
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
                  color={"success"}
                  expand={"full"}
                  routerLink={"/switch-on2"}
                >
                  Alright!
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  color={"danger"}
                  id={"border-start"}
                  expand={"full"}
                  routerLink={"/switch-on"}
                >
                  Wait, need to go back
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmOn;
