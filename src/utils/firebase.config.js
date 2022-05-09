import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCxUo49hKZ7MelOSSA9zB2MJaNNIo6TYBo",
  authDomain: "imageuploader-app.firebaseapp.com",
  projectId: "imageuploader-app",
  storageBucket: "imageuploader-app.appspot.com",
  messagingSenderId: "685020217308",
  appId: "1:685020217308:web:495e0c35c54784420cd919"
};

initializeApp(firebaseConfig);

// Get a reference from the storage service, which is used to create
// references in the storage bucket
const storage = getStorage;
const storageRef = ref;
const uploadStringData = uploadString;

export { storage, storageRef, uploadStringData };