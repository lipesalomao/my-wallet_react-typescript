import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

const config = {
    apiKey: '111111111111111111111',
    authDomain: '2222222222222222222',
    projectId: '111111111111',
    storageBucket: '11111111',
    messagingSenderId: '11111111111',
    appId: '111111111111',
    measurementId: '123456',
};

const firebaseApp = initializeApp(config);

export const dbFirestore = getFirestore(firebaseApp);
export const auth = getAuth();
export const storage = getStorage();
export const storageRef = ref;
