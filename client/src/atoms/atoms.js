import { atom } from 'recoil';
export const locationAtom = atom({
    key: 'locationAtom', // unique ID (with respect to other atoms/selectors)
    default: { lat: 50, lng: -94 }, // default value (aka initial value)
  });
export const caravanAtom = atom({
    key: 'caravanAtom',
    default: [],
})