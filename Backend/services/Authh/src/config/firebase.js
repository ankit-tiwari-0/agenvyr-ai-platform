import { cert, initializeApp } from "firebase-admin";
import serviceAccount from "../../serviceAccountKey.json" with {
  type: "json",
};
export const App = initializeApp({
  credential: cert(serviceAccount),
});
