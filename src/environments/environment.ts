// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080/api/v1',
  mockBaseUrl: 'https://62564f8552d8738c692dcc47.mockapi.io/api/v1',
  mockNewsUrl: 'https://62564f8552d8738c692dcc47.mockapi.io/api/v1/cryptowatcher/get-news',
  mockNewsUrl2: 'https://62564f8552d8738c692dcc47.mockapi.io/api/v1/cryptowatcher/get-analysis'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
