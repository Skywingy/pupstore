import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    //  credential: admin.credential.cert(serviceAccountJson),
  });
}

export const authAdmin = admin.auth();
