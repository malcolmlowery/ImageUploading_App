import { atom, selector } from 'recoil';
import { collection, db, getDocs } from './firebase.config';

export const imageState = atom({
  key: 'imageState',
  default: null
});

export const routerPathState = atom({
  key: 'routerPathState',
  default: '/'
});

export const imagesQuery = selector({
  key: 'imagesState',
  get: async () => {
    let data = [];
    const querySnapshot = await getDocs(collection(db, 'images'));
    await querySnapshot.forEach(doc => {
      return data.push(doc.data().imageURL)
    })
    return data
  }
})