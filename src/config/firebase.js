import { initializeApp } from "firebase/app";
import config from "./config";

const firebaseConfig = {
        apiKey:config.oAuthGoogle.GOOGLE_FIREBASE_API_KEY,
        authDomain: config.oAuthGoogle.GOOGLE_FIREBASE_AUTH_DOMAIN,
        projectId: config.oAuthGoogle.GOOGLE_OAUTH_PROJECT_ID,
        storageBucket: config.oAuthGoogle.GOOGLE_STORAGE_BUCKET,
        messagingSenderId: config.oAuthGoogle.GOOGLE_MESSAGING_SENDER_ID,
        appId: config.oAuthGoogle.GOOGLE_OAUTH_APP_ID,
        measurementId: config.oAuthGoogle.GOOGLE_OAUTH_MEASUREMENT_ID
};

export const socialAuthApp = initializeApp(firebaseConfig);