import axios from "axios";
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [admin, setAdmin] = useState({});    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const updateNavigate = (navigate,location) => {
        const redirect = location?.state?.form || '/home';
        navigate(redirect, {
            replace: true,
        });
    }

    const registration = (registrationData,navigate,location) => {
        setIsLoading(true);
        const {name,email,mobileNumber,password} = registrationData;

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {            
            updateProfile(auth.currentUser, {
                displayName: name,
            });
            setUser(result.user);
            saveUserData(name,email,mobileNumber);
            setIsLoading(false);
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
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const login = (loginData, navigate,location) => {
        setIsLoading(true);
        const {email,password} = loginData;
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            setIsLoading(false);
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
        .finally(() => {
            setIsLoading(false);
        })
    }

    const googleSignIn = (navigate,location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
            setIsLoading(false);
            swal({                    
                title: `Well Come ${result.user.displayName}`,
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
        .finally(() => {
            setIsLoading(false);
        })
    }

    const logOut = (navigate,location) => {
        signOut(auth)
        .then(() => {
            swal({                    
                title: `${user.displayName}`,
                text: 'Succefully Logout',                
                icon: "success",
                timer: 1000,
                html: true,
                customClass: 'logout-modal',
                buttons: false,        
              })
              .then(() => {
                updateNavigate(navigate,location);
              })
        })
    }

    const saveUserData = (name,email,mobileNumber) => {
        const user = {
            name,
            email,
            mobileNumber,
        }

        axios.post('https://arcane-lake-20041.herokuapp.com/add-user',user);
        
    }
    
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);

            return unsubscribe;
        })
    },[auth]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://arcane-lake-20041.herokuapp.com/check-admin?userEmail=${user?.email}`)
        .then((response) => {
            setAdmin(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [user.email])

    return {
        registration,
        login,
        googleSignIn,
        logOut,
        user,
        isLoading,
        admin,       
    }
}

export default useFirebase;