import { initializeApp } from 'firebase/app';
import { 
  addDoc,
  collection, 
  doc,
  getFirestore 
} from 'firebase/firestore';
import { 
  getStorage, 
  getDownloadURL,
  ref, 
  uploadString
} from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCxUo49hKZ7MelOSSA9zB2MJaNNIo6TYBo",
  authDomain: "imageuploader-app.firebaseapp.com",
  projectId: "imageuploader-app",
  storageBucket: "imageuploader-app.appspot.com",
  messagingSenderId: "685020217308",
  appId: "1:685020217308:web:495e0c35c54784420cd919"
});

const db = getFirestore(firebaseApp);

// Get a reference from the storage service, which is used to create
// references in the storage bucket
const storage = getStorage;
const storageRef = ref;
const uploadStringData = uploadString;

export { 
  addDoc,
  collection,
  db,
  doc,
  getDownloadURL, 
  storage, 
  storageRef,
  uploadStringData 
};