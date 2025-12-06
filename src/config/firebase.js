const admin = require('firebase-admin');

// Para desarrollo local
const serviceAccount = require('C:\Users\luisc\Downloads');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };