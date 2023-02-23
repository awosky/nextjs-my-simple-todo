import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const getFirebaseAuth = () => {
  return getAuth(firebaseApp);
};

export const getFirebaseCollection = (collectionName: string) => {
  return collection(getFirestore(firebaseApp), collectionName);
};

export const addFirebaseDocument = async (
  collection: string,
  id: string,
  values: object
) => {
  await setDoc(doc(getFirestore(firebaseApp), collection, id), values);
};

export const updateFirebaseDocument = async (
  collection: string,
  id: string,

  values: object
) => {
  await updateDoc(doc(getFirestore(firebaseApp), collection, id), values);
};

export const deleteFirebaseDocument = async (
  collection: string,
  id: string
) => {
  await deleteDoc(doc(getFirestore(firebaseApp), collection, id));
};
