import admin from 'firebase-admin';

if (!admin.apps.length) {
    const serviceAccount = require("./permissions.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // databaseURL: 'YOUR_DATABASE_URL_HERE'
    });
}

export {admin}

export default admin.firestore();