import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { useRef, useState } from 'react';

const AddAnimal = () => {

  const { name } = useParams<{ name: string; }>();

  const [animals, setAnimals] = useState<string[]>(JSON.parse(localStorage.getItem("animals") || "[]"))

  const animalRef = useRef<HTMLIonInputElement>(null)

  const add = () => {
    const singleAnimal = animalRef.current?.value as string
    const updatedAnimals = [...animals, singleAnimal]
    // const updatedAnimals = animals.slice()
    // updatedAnimals.push(singleAnimal)
    setAnimals(updatedAnimals)
    localStorage.setItem("animals", JSON.stringify(updatedAnimals))
    animalRef.current!.value = ""
  }

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

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
      <IonItem>
        <IonInput ref={animalRef} label="Add a New Animal" placeholder="Enter text"></IonInput>
      </IonItem>
      <IonButton onClick={add} fill="outline">Add</IonButton>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AddAnimal;
