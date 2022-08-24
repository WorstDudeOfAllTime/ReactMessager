import './App.css';
import { db, login, signUp } from './firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import ChatPage from './components/ChatPage';
function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getData() {
      const userBase = await getDocs(collection(db, 'userBase'));
      userBase.forEach((doc) => console.log(doc.id.avatar));
    }
    async function getUsers() {
      const userRef = doc(db, 'userBase', 'user0');
      const userBoy = await getDoc(userRef);

      if (userBoy) {
        console.log(userBoy.data());
      }
    }
    getData();
    getUsers();
  });

  return (
    <div className="App">
      {loggedIn ? (
        <ChatPage />
      ) : loginStatus ? (
        <Login
          loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
          login={login}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <SignUp setLoginStatus={setLoginStatus} signUp={signUp} />
      )}
    </div>
  );
}

export default App;
