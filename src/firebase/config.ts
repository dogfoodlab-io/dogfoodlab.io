// Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.GATSBY_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID" // This is needed for Google Analytics
}; 