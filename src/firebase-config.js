// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/auth";
// const firebaseConfig = {
//     apiKey: "AIzaSyA7FWmYfLBgI9Xi91INcqbDTrZXQ_p91_c",
//     authDomain: "auth-development-64923.firebaseapp.com",
//     projectId: "auth-development-64923",
//     storageBucket: "auth-development-64923.appspot.com",
//     messagingSenderId: "493899321054",
//     appId: "1:493899321054:web:87b63d6302687b01d83c4f",
// };
// //   ali  above
// const firebaseConfig = {
//     apiKey: "AIzaSyDR0pol-pBUU-vLagpoIUytQd0Q9J6TNcY",
//     authDomain: "iti-proj2.firebaseapp.com",
//     projectId: "iti-proj2",
//     storageBucket: "iti-proj2.appspot.com",
//     messagingSenderId: "611244260011",
//     appId: "1:611244260011:web:9b7681b17e26aef1c815ee",
//     measurementId: "G-FQC00LZSHC",
// };

const firebaseConfig = {
    apiKey: "AIzaSyCY8Teuayo30P-Qqq3fKXD3agHPwhSFnGE",
    authDomain: "new-test-7e4d3.firebaseapp.com",
    projectId: "new-test-7e4d3",
    storageBucket: "new-test-7e4d3.appspot.com",
    messagingSenderId: "192071835621",
    appId: "1:192071835621:web:9243c79d3192897553990c",
    measurementId: "G-FRS2EVY2E8",
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDuDhMbWjawU-kdtkldyr8hBdNmW7umiSk",
//     authDomain: "iti-test-9412d.firebaseapp.com",
//     projectId: "iti-test-9412d",
//     storageBucket: "iti-test-9412d.appspot.com",
//     messagingSenderId: "138154878249",
//     appId: "1:138154878249:web:df7256a5c49a800d450338",
//     measurementId: "G-48XYX5C66D",
// };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);