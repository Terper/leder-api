import firebase from "firebase";
import { collection } from "./collection"
import { Route } from "./UtilityClasses"

export const rootValue = {
  routes: async () => {
    let data: firebase.firestore.DocumentData[] = []
    const querySnapshot = await collection.get()
    querySnapshot.forEach((doc) => {
      data.push(new Route(doc.id, doc.data()))
    })
    return data
  },
  route: async ({id}: any) => {
    const querySnapshot = await collection.doc(id).get()
    return new Route(querySnapshot.id, querySnapshot.data())
  }
};
