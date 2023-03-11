import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnUdrF1HwgnWVfR-jNLB8RorqPsH_Lwpg",
  authDomain: "commerce2-11a8d.firebaseapp.com",
  projectId: "commerce2-11a8d",
  storageBucket: "commerce2-11a8d.appspot.com",
  messagingSenderId: "157190827283",
  appId: "1:157190827283:web:112eeb92ad7643908ffee6"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
);
