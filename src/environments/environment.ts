import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
      apiKey: "AIzaSyBzgG52qp5qmANbpcYastfykk8vVYIkKww",
    authDomain: "my-portfolio-08.firebaseapp.com",
    databaseURL: "https://my-portfolio-08.firebaseio.com",
    projectId: "my-portfolio-08",
    storageBucket: "my-portfolio-08.appspot.com",
    messagingSenderId: "1048511827437",
    appId: "1:1048511827437:web:c74333eb877668e8deabe4",
    measurementId: "G-PSV2R458ZQ"
},
  //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  //baseUrl : `http://localhost:4200/`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
