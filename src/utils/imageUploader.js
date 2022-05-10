import { collection } from 'firebase/firestore';
import { v4 as v4uuid } from 'uuid';
import { 
  db,
  getDownloadURL, 
  addDoc, 
  storageRef, 
  storage,
  uploadStringData 
} from './firebase.config';

// PERSONAL NOTE: Had to do some research on how to currectly upload a file image to...
// the storage bucket on Firebase.
// Learned that I had to first get the image blob from the input element target file and...
// from there - convert it using the FileReader object - then reading...
// the result which came back in base64 - which is also one of the formats...
// that firebase accepts for uploading images

export const uploadImageToFirebase = (image) => {
  const uuid = v4uuid();
  const fr = new FileReader();

  fr.readAsDataURL(image)
  fr.onload = async () => {
    const getStorage = storage();
    const ref = storageRef(getStorage, `${uuid}.jpg`);
    await uploadStringData(ref, fr.result, 'data_url');
    const url = await getDownloadURL(ref);
    
    await addDoc(collection(db, '/images'), { imageURL: url })
  }
};