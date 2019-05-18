import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB_usyGBUQD1iofcbZeV0rX6dPpLakjr8k",
  authDomain: "vue-firebase-project-dad78.firebaseapp.com",
  projectId: "vue-firebase-project-dad78"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
