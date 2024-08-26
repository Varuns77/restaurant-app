import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { useNavigate } from "react-router-dom"; // Updated hook for React Router v6
import { setDoc, doc } from 'firebase/firestore';
import swal from 'sweetalert';

const useFirebase = () => {
    const [user, setUser] = useState(null); // Initialize user as null for better conditional checks
    const auth = getAuth();
    const navigate = useNavigate(); // Updated hook from useHistory to useNavigate

    // Handle user authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null); // Reset user to null when signed out
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    const signUpUser = async (email, password, name, image) => {
        try {
            // Step 1: Create user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;

            // Step 2: Update user profile with display name and photo URL
            if (user) {
                setUser(user);
                await updateProfile(user, {
                    displayName: name,
                    photoURL: image,
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
                navigate('/'); // Updated to use navigate
            }
        } catch (error) {
            console.log("Error registering user:", error.message);
            swal("Something went wrong!", `${error.message}`, "error");
        }
    };

    const signInUser = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            setUser(res.user);
            swal("Sign in Successful!", "Welcome back!", "info");
            navigate('/'); // Updated to use navigate
        } catch (err) {
            swal("Something went wrong!", `${err.message}`, "error");
        }
    };

    const signInWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, googleProvider);
            setUser(res.user);
            swal("Good job!", "Account has been created!", "success");
            navigate('/'); // Updated to use navigate
        } catch (err) {
            console.log(err.message);
            swal("Something went wrong!", `${err.message}`, "error");
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null); // Reset user to null after sign out
            swal("Logout Successful!", "You are logged out!", "success");
            navigate('/signin'); // Updated to use navigate
        } catch (err) {
            swal("Something went wrong!", `${err.message}`, "error");
        }
    };

    return {
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    };
};

export default useFirebase;
