import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIUq7sDmfOnbXJjmZaZRkfGg-AdmOdX7M",
    authDomain: "taskme-5bf78.firebaseapp.com",
    databaseURL: "https://taskme-5bf78-default-rtdb.firebaseio.com",
    projectId: "taskme-5bf78",
    storageBucket: "taskme-5bf78.appspot.com",
    messagingSenderId: "56931129844",
    appId: "1:56931129844:web:1e25b14fabfc88e4f841a1",
    measurementId: "G-BQBQQPH9LB"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const tasksRef = ref(database, "tasks");
const analytics = getAnalytics(app);

export { tasksRef };
export default database;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);