import React, { useEffect, useState } from "react";
import {
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonCheckbox,
  IonButtons,
  IonMenuButton,
  IonText
} from "@ionic/react";
import {
  arrowForwardOutline,
  createOutline,
  downloadOutline,
  recordingOutline,
  volumeHighOutline, speedometerOutline, cellularOutline
} from "ionicons/icons";

const SWITCH_ON_DATA = [
  {
    id: "0",
    title: "Create project",
    icon: createOutline,
    url: "/create-project"
  },
  {
    id: "1",
    title: "Recording levels",
    icon: cellularOutline,
    url: "/recording-levels"
  },
  {
    id: "2",
    title: "Monitoring levels",
    icon: speedometerOutline,
    url: "/monitoring-levels"
  },
  {
    id: "3",
    title: "Start recording",
    icon: recordingOutline,
    url: "/start-recording"
  },
  {
    id: "4",
    title: "Export recording",
    icon: downloadOutline,
    url: "/export-recording"
  }
];

const SwitchOn2: React.FC = () => {
  const [checked, setChecked] = useState({
    c0: false,
    c1: false,
    c2: false,
    c3: false,
    c4: false
  });

  const [disabledButton, setDisabledButton] = useState({
    c0: false,
    c1: true,
    c2: true,
    c3: true,
    c4: true
  });

  const [finalButton, setFinalButton] = useState(true);

  function findButtonState(id: string) {
    switch (id) {
      case "0":
        return disabledButton.c0;
      case "1":
        return disabledButton.c1;
      case "2":
        return disabledButton.c2;
      case "3":
        return disabledButton.c3;
      case "4":
        return disabledButton.c4;
    }
  }

  function changeButtonState(id: string) {
    switch (id) {
      case "0":
        setDisabledButton({
          c0: disabledButton.c0,
          c1: false,
          c2: disabledButton.c2,
          c3: disabledButton.c3,
          c4: disabledButton.c4
        });

        setChecked({
          c0: true,
          c1: checked.c1,
          c2: checked.c2,
          c3: checked.c3,
          c4: checked.c4
        });
        return;
      case "1":
        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: false,
          c3: disabledButton.c3,
          c4: disabledButton.c4
        });

        setChecked({
          c0: checked.c0,
          c1: true,
          c2: checked.c2,
          c3: checked.c3,
          c4: checked.c4
        });
        return;
      case "2":
        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: disabledButton.c2,
          c3: false,
          c4: disabledButton.c4
        });

        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: true,
          c3: checked.c3,
          c4: checked.c4
        });
        return;
      case "3":
        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: disabledButton.c2,
          c3: disabledButton.c3,
          c4: false
        });

        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: checked.c2,
          c3: true,
          c4: checked.c4
        });
        return;
      case "4":
        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: checked.c2,
          c3: checked.c3,
          c4: true
        });
        return;
    }
  }

  function findToggleState(id: string) {
    switch (id) {
      case "0":
        return checked.c0;
      case "1":
        return checked.c1;
      case "2":
        return checked.c2;
      case "3":
        return checked.c3;
      case "4":
        return checked.c4;
    }
  }

  function changeToggleState(id: string, e: any) {
    switch (id) {
      case "0":
        setChecked({
          c0: e.detail.checked,
          c1: checked.c1,
          c2: checked.c2,
          c3: checked.c3,
          c4: checked.c4
        });

        setDisabledButton({
          c0: disabledButton.c0,
          c1: false,
          c2: disabledButton.c2,
          c3: disabledButton.c3,
          c4: disabledButton.c4
        });
        return;

      case "1":
        setChecked({
          c0: checked.c0,
          c1: e.detail.checked,
          c2: checked.c2,
          c3: checked.c3,
          c4: checked.c4
        });

        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: false,
          c3: disabledButton.c3,
          c4: disabledButton.c4
        });
        return;
      case "2":
        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: e.detail.checked,
          c3: checked.c3,
          c4: checked.c4
        });

        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: disabledButton.c2,
          c3: false,
          c4: disabledButton.c4
        });
        return;

      case "3":
        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: checked.c2,
          c3: e.detail.checked,
          c4: checked.c4
        });

        setDisabledButton({
          c0: disabledButton.c0,
          c1: disabledButton.c1,
          c2: disabledButton.c2,
          c3: disabledButton.c3,
          c4: false
        });
        return;

      case "4":
        setChecked({
          c0: checked.c0,
          c1: checked.c1,
          c2: checked.c2,
          c3: checked.c3,
          c4: e.detail.checked
        });
        return;
    }
  }
  useEffect(() => {
    finalButtonState(checked);
  });

  function finalButtonState(allToggles: any) {
    let toggles_true = {
      c0: true,
      c1: true,
      c2: true,
      c3: true,
      c4: true
    };
    if (JSON.stringify(toggles_true) === JSON.stringify(allToggles)) {
      setFinalButton(false);
    } else {
      setFinalButton(true);
    }
  }

  function buttonColor(id: string) {
    let currentToggleState = findToggleState(id);
    if (currentToggleState) {
      return "button-default-success";
    } else {
      return "button-default";
    }
    //   return "button-light-success";
    // } else {
    //   return "button-light";
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons>
            <IonMenuButton slot={"start"} />
          </IonButtons>
          <IonTitle id={"header-title2"}>Record/Export</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid id={"grid-padding-zero"}>
          {SWITCH_ON_DATA.map(action => (
            <IonRow key={action.id}>
              <IonCol size={"9"}>
                <IonButton
                  mode={"ios"}
                  id={buttonColor(action.id)}
                  expand={"block"}
                  size={"large"}
                  routerLink={action.url}
                  shape={"round"}
                  disabled={findButtonState(action.id)}
                  onClick={() => changeButtonState(action.id)}
                >
                  <IonIcon slot="start" icon={action.icon} />
                  {action.title}
                </IonButton>
              </IonCol>
              <IonCol>
                <h1>
                  <IonCheckbox
                    mode={"ios"}
                    checked={findToggleState(action.id)}
                    disabled={findButtonState(action.id)}
                    onIonChange={e => changeToggleState(action.id, e)}
                  />
                </h1>
              </IonCol>
            </IonRow>
          ))}
          <IonRow>
            <IonCol size={"11"}>
              <IonButton
                mode={"ios"}
                expand={"block"}
                size={"large"}
                shape={"round"}
                color={"success"}
                disabled={finalButton}
                routerLink={"/confirm-on2"}
              >
                <IonText id={"button-card-big2"}>Done!</IonText>
                <IonIcon slot="end" icon={arrowForwardOutline} size={"large"} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SwitchOn2;
