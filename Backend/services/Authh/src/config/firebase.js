import { cert, initializeApp } from "firebase-admin";
import serviceAccount from "../../serviceAccountKey.json" assert { type: "json" };

export const App = initializeApp({
  credential: cert(serviceAccount),
});
