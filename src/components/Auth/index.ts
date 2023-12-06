import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    FacebookAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    deleteUser,
    User, 
    UserCredential,
    sendPasswordResetEmail
} from "firebase/auth";

import { config } from '../../config/config';

initializeApp(config.firebaseConfig)

const auth = getAuth();


export const signInWithGoogle = async () => {
    
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    .then((result) => {
    })
    .catch((error) => {
        console.log('Error en el inicio de sesion')
        
    });
}

export const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();

    await signInWithPopup(auth, provider)
    .then((result) => {
    })
    .catch((error) => {
        console.log('Error en el inicio de sesion')
    });
}

export const signUpWithMail = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        sendEmailVerification(user);
    })
    .catch((error) => {
        console.log('Error en el inicio de sesion')
    });
}

export const signInWithMail = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        console.log('Error en el inicio de sesion')
    });
}

export const signOutUser = async () => {
    signOut(auth).then((result) => {
        console.log('Sesion cerrada')

    }).catch((error) => {
        console.log('Error en el cierre de sesion')
    });
}

export const deleteAccount = async () => {
    const user = auth.currentUser;
    if (user) {
        deleteUser(user).then(() => {
            console.log('Usuario eliminado')
        }).catch((error) => {
            console.log('Error en la eliminacion de cuenta')
        });
    }
}