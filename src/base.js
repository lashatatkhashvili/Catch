import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyAttBZFK8DiE6ATRXc-liw-APqnQAzNfsA",
     authDomain: "catch-of-the-day-5d3f7.firebaseapp.com",
     databaseURL: "https://catch-of-the-day-5d3f7.firebaseio.com",
  
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base;