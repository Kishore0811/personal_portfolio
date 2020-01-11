import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
      apiKey: "AIzaSyDUbp_hO6f1i5v_K0B8WsN1KYapav9MEqo",
      authDomain: "my-portfolio-0811.firebaseapp.com",
      databaseURL: "https://my-portfolio-0811.firebaseio.com",
      projectId: "my-portfolio-0811",
      storageBucket: "my-portfolio-0811.appspot.com",
      messagingSenderId: "1078888950035",
      appId: "1:1078888950035:web:b750a5cf3e2a7a836952e6",
      measurementId: "G-2VLLH3YJ4T"
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
