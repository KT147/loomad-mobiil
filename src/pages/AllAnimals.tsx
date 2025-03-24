import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import animalsJSON from "../data/animals.json"
import { useState, useEffect } from 'react';

const AllAnimals = () => {

  const { name } = useParams<{ name: string; }>();

  const [animals, setAnimals] = useState<string[]>(animalsJSON)

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animalsJSON))
  }, []);

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
        {animals.map(animal=>
        <IonItem key={animal}>
          <IonLabel>{animal}</IonLabel>
        </IonItem>
        )}
      </IonList>
    </IonContent>
    </IonPage>
  );
};

export default AllAnimals;
