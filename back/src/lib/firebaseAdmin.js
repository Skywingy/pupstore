import admin from "firebase-admin";
import { createRequire } from "module";
import serviceAcc from "../config/fireBaseServiceAccount.json" with { type: "json" };

if (!admin.apps.length) {
  admin.initializeApp({
    //credential: admin.credential.applicationDefault(),
    credential: admin.credential.cert(serviceAcc),
  });
}

export const authAdmin = admin.auth();