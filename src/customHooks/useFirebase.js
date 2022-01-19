import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();

const useFirebase = () => {

    const [user, setUser] = useState();

    const auth = getAuth();

    const registration = (registrationData) => {
        const {name,email,mobileNumber,city,password} = registrationData;

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result);
        })
    }

    return {
        registration,
    }
}

export default useFirebase;