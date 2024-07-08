// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA68iibcHynmV-_H7AzKbLPPBzxUxBUJlU",
  authDomain: "startups-tubeguruji.firebaseapp.com",
  projectId: "startups-tubeguruji",
  storageBucket: "startups-tubeguruji.appspot.com",
  messagingSenderId: "438426232172",
  appId: "1:438426232172:web:e481e3a17d90cb36167f49",
  measurementId: "G-891Y808MLB"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// export const auth = getAuth