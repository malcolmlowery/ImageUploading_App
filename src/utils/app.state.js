import { atom } from 'recoil';

export const imageState = atom({
  key: 'imageState',
  default: null
});

export const routerPathState = atom({
  key: 'routerPathState',
  default: '/',
});