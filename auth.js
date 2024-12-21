import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user)
    .catch(error => { throw new Error(error.message); });
};

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user)
    .catch(error => { throw new Error(error.message); });
};

export { login, register };
