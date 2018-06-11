// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDDAa3h1KO4LFHX9MRCNZ8259uztT8DIgk",
    authDomain: "game-cup-pi.firebaseapp.com",
    databaseURL: "https://game-cup-pi.firebaseio.com",
    projectId: "game-cup-pi",
    storageBucket: "game-cup-pi.appspot.com",
    messagingSenderId: "468609302013"
  }
};
