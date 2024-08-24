import admin from 'firebase-admin';
import serviceAccount from '/Users/uuy/moko-todo-app/mokotodoapp-469c4-firebase-adminsdk-3gud8-ec2a801343.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
