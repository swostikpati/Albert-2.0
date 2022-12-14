// initiating server.js as a module
import { createRequire } from "module";
// import fetch from 'node-fetch'
const require = createRequire(import.meta.url);

const express = require("express");
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(filename);

app.use(express.json());

// Setting up Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcD23dlmAxl92EmXnEaAv5fUjj1MQtnKA",
    authDomain: "albertv2test.firebaseapp.com",
    databaseURL: "https://albertv2test-default-rtdb.firebaseio.com",
    projectId: "albertv2test",
    storageBucket: "albertv2test.appspot.com",
    messagingSenderId: "765936931880",
    appId: "1:765936931880:web:655be757e6fda734ed911d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, update, remove, get } from "firebase/database"

// Initialize the realtime database
const db = getDatabase(firebaseApp);


let semesterData;

// Function to select specific data from the database
function selectData() {
    const dbref = ref(db);

    get(child(dbref, "semesters"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                semesterData = snapshot.val();
                // console.log(snapshot.val());
            }
            else {
                console.log("No Data Found");
            }

        })
        .catch((e) => console.log("Error 2", e))
}


// Function to update specifc data
function updateData() {
    update(ref(db, "semesters/0/Courses/0/"), { classSize: 100 })
        .then(() => {
            console.log("data updated successfullly");
        })
        .catch((e) => console.log("Error 3:", e))
}


// updateData();

// The following line renders the entire React App in the same port as the server
app.use(express.static(path.join(__dirname + "/public")));


// sending data to the Client-side 
app.get("/api/semesters", (req, res) => {
    selectData();
    res.json(semesterData);
})

// server runs on port 5000 while the client was initially running at port 3000
// After a build of the React App was stored in the server-side public folder and served, there is no longer the need to run two servers. 
// Everything happens on localhost:5000 now
app.listen(5000, () => console.log("listening on port 5000"));