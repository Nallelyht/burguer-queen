import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCc5pbv3Y5E7DsxYi4dDfQNiG5ChMQyk2E',
  authDomain: 'burguer-queen-ed321.firebaseapp.com',
  databaseURL: 'https://burguer-queen-ed321.firebaseio.com',
  projectId: 'burguer-queen-ed321',
  storageBucket: 'burguer-queen-ed321.appspot.com',
  messagingSenderId: '948018825533',
  appId: '1:948018825533:web:954c02218e03362a1edd54',
  measurementId: 'G-XE6RL3VVZD'
}
firebase.initializeApp(firebaseConfig)

export default firebase
