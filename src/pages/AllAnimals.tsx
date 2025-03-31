import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import animalsJSON from "../data/animals.json"
import { useState} from 'react';

const AllAnimals = () => {

  const { name } = useParams<{ name: string; }>();

  const [animals, setAnimals] = useState<string[]>([])

  useIonViewWillEnter(() => {
    const stored = localStorage.getItem("animals")
    if (stored) {
      setAnimals(JSON.parse(stored))
    } else {
      localStorage.setItem("animals", JSON.stringify(animalsJSON))
      setAnimals(animalsJSON)
    }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light">
      <IonList inset={true}>
        {animals.map((animal, index)=>
        <IonItem key={index}>
          <IonLabel>{animal}</IonLabel>
        </IonItem>
        )}
      </IonList>
    </IonContent>
    </IonPage>
  );
};

export default AllAnimals;
