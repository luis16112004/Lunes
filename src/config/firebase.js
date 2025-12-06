const admin = require('firebase-admin');

let credential;

if (process.env.NODE_ENV === 'production') {
  credential = admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  });
} else {
  const serviceAccount = require('../../firebase-credentials.json');
  credential = admin.credential.cert(serviceAccount);
}

admin.initializeApp({
  credential: credential,
  databaseURL: 'https://backendjaminfirebase-default-rtdb.firebaseio.com'
});

const db = admin.database(); // Cambia a database() en lugar de firestore()

module.exports = { admin, db };