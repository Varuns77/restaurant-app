import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { useHistory } from "react-router-dom";
import { setDoc, doc } from 'firebase/firestore';
import swal from 'sweetalert';
// import initializeAuthentication from '../config/firebase';


//initialize firebase  authentication
// initializeAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const auth = getAuth();
    const history = useHistory();

    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth,user => {
            if (user) {
                setUser(user)
            }
        })
    },[auth])

    //sign up functionality
    // const signUpUser = (email, password, name, image) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((res) => {
    //             setUser(res.user)
    //             updateProfile(auth.currentUser, {
    //                 displayName: name,
    //                 photoURL: image
    //             }).then(() => {
    //                 swal("Good job!", "Account has been created!", "success");
    //                 history.push('/');
    //             })

    //         }).catch(err => swal("Something went wrong!", `${err.message}`, "error"))
    // }

    const signUpUser = async (email, password, name, image) => {
        try {
            // Step 1: Create user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
    
            // Step 2: Update user profile with display name and photo URL
            if (user) {
                setUser(user)
                await updateProfile(user, {
                    displayName: name,
                    photoURL: image
                });
    
                // Step 3: Store user details in Firestore database
                await setDoc(doc(db, "Users", user.uid), {
                    fullName: name,
                    email: user.email,
                    photoURL: image,
                });
    
                console.log("User is registered successfully");
    
                // Step 4: Provide feedback to the user
                swal("Good job!", "Account has been created!", "success");
    
                // Step 5: Redirect the user to the login page
                history.push('/');
            }
        } catch (error) {
            console.log("Error registering user:", error.message);
            swal("Something went wrong!", `${error.message}`, "error");
        }
    }

    //sign in functionality
    // const signInUser = (email, password) => {
    //     signInWithEmailAndPassword(auth, email , password)
    //     .then(res => {
    //         setUser(res.user);
    //         swal("Sign in Successful!", "Welcome back !", "info")
    //         history.push('/');
    //     })
    //         .catch(err => swal("Something went wrong!", `${err.message}`, "error"))
    // }

    const signInUser = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            setUser(res.user);
            swal("Sign in Successful!", "Welcome back!", "info");
            history.push('/');
        } catch (err) {
            swal("Something went wrong!", `${err.message}`, "error");
        }
    }


    //google sign in 
    // const signInWithGoogle = () => {
    //     const googleProvider = new GoogleAuthProvider();
    //     signInWithPopup(auth, googleProvider)
    //     .then(res => {
    //         setUser(res.user);
    //         swal("Good job!", "Account has been created!", "success");
    //         history.push('/');
    //     }).catch(err => console.log(err.message))
    // }

    const signInWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, googleProvider);
            setUser(res.user);
            swal("Good job!", "Account has been created!", "success");
            history.push('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    // sign out 
    // const signOutUser = () => {
    //     signOut(auth).then(() => {
    //         setUser({});
    //         swal("Logout Successful!", "You are logged out!", "success");
    //         history.push('/signin')
    //     }).catch((err) => {
    //         swal("Something went wrong!", `${err.message}`, "error")
    //     });
    // }

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            history.push('/signin');
        } catch (err) {
            swal("Something went wrong!", `${err.message}`, "error");
        }
    }

    return {
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
}

export default useFirebase
