import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const profileContainer = document.getElementById('profileContainer');
const logoutButton = document.getElementById('logout');

onAuthStateChanged(auth, (user) => {
  if (user) {
    profileContainer.innerHTML = `<h1>Welcome, ${user.email}</h1>`;
  } else {
    window.location.href = '/index.html';
  }
});

logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('Logged out successfully!');
    window.location.href = '/index.html';
  }).catch((error) => {
    alert(`Error: ${error.message}`);
  });
});
