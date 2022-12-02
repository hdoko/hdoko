import { getApp, getApps, initializeApp } from 'firebase/app'
import { firebaseClientConfig } from './firebase.config'

export const app = getApps().length
  ? getApp()
  : initializeApp(firebaseClientConfig)
