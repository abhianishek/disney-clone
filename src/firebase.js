const firebaseConfig = {
    apiKey: "AIzaSyAOMkGLcDejZ_j25d15SFkaOi62HgJ4Ck4",
    authDomain: "disney-clone-8e37b.firebaseapp.com",
    projectId: "disney-clone-8e37b",
    storageBucket: "disney-clone-8e37b.appspot.com",
    messagingSenderId: "371992852152",
    appId: "1:371992852152:web:a6300fea3d27c69241e64d",
    measurementId: "G-H3BZ3F9YXD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
