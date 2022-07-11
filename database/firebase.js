const Config = require("../config")
const Firebase = require("firebase")
var apiPath = {	
      apiKey: Config.database.firebase.apiKey,
      authDomain: Config.database.firebase.authDomain,
      databaseURL: Config.database.firebase.databaseURL,
      projectId: Config.database.firebase.projectId,
      storageBucket: Config.database.firebase.storageBucket,
      messagingSenderId: Config.database.firebase.messagingSenderId,
      appId: Config.database.firebase.appId
      }
      new Firebase.initializeApp(apiPath); 
  const Database = Firebase.database();
  console.log(require("colors").cyan.italic("Firebase ativado!"))