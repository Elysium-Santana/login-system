import { initializeApp } from 'firebase/app';

export const URL_BASE = 'https://identitytoolkit.googleapis.com/v1/accounts:';

const firebaseConfig = {
  apiKey: 'AIzaSyBmJuikBAVI2HfA8OtOuH7dfY-e9OqTc1E',
  authDomain: 'login-system-f3748.firebaseapp.com',
  projectId: 'login-system-f3748',
  storageBucket: 'login-system-f3748.appspot.com',
  messagingSenderId: '617457026798',
  appId: '1:617457026798:web:3431401aa4ebfb8a78d5ff',
};
const app = initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;

export function USER_LOGIN(body) {
  return {
    url: URL_BASE + `signInWithPassword?key=${apiKey}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
