// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig : {
      apiKey: "AIzaSyBn6PSs-grLloLvTqn3R4MsfLN535M4wOU",
      authDomain: "e-card-creator.firebaseapp.com",
      projectId: "e-card-creator",
      storageBucket: "e-card-creator.appspot.com",
      messagingSenderId: "610815746444",
      appId: "1:610815746444:web:6edfc71ebfe7be4aa2b6a9",
      measurementId: "G-QYB9F91DSF"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
