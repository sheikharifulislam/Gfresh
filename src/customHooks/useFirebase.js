import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import swal from "sweetalert";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);    

    const auth = getAuth();
    const updateNavigate = (navigate,location) => {
        const redirect = location?.state?.form || '/home';
        navigate(redirect, {
            replace: true,
        });
    }

    const registration = (registrationData,navigate,location) => {
        const {name,email,mobileNumber,city,password} = registrationData;

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {            
            updateProfile(auth.currentUser, {
                displayName: name,
            });
            setUser(result.user);
            swal({                    
                title: `Well Come ${name}`,
                text: "Thank you For Registration Please Wait For Redirect",
                icon: "success",
                timer: 1000,
                buttons: false,        
              })
              .then(() => {
                updateNavigate(navigate,location);
              })
              
        })
        .catch((error) => {
            if(error.message) {
                swal({                    
                    text: error.message.slice(22, error.message.length - 2),
                    icon: "warning",
                    button: "OK",
                  });
            }
        });
    }

    const login = (loginData, navigate,location) => {
        const {email,password} = loginData;
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            swal({                    
                title: `Wellcome Back ${result.user.displayName}`,
                text: "Thank you For Login Please Wait For Redirect",
                icon: "success",
                timer: 1000,
                buttons: false,        
              })
              .then(() => {
                updateNavigate(navigate,location);
              })
        })
        .catch((error) => {
            if(error.message) {
                swal({                    
                    text: error.message.slice(22, error.message.length - 2),
                    icon: "warning",
                    button: "OK",
                  });
            }
        })
    }

    return {
        registration,
        login,
        
    }
}

export default useFirebase;