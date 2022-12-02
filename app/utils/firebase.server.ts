import {
  cert,
  getApp,
  getApps,
  initializeApp,
  ServiceAccount,
} from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import { firebaseServerConfig } from 'app/utils/firebase.config'

export const app = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert(firebaseServerConfig as ServiceAccount),
    })

export const bucket = getStorage(app).bucket(process.env.BUCKET)
