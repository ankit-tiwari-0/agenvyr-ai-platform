import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../utils/firebase'
import api from '../utils/axios'

const App = () => {

  const handleLogin = async (token) => {
    try {
      const { data } = await api.post('/auth/login', { token });
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

 const googleLogin = async () => {
  try {
    const data = await signInWithPopup(auth, googleProvider);

    const token = await data.user.getIdToken();

    console.log("Firebase token generated");

    await handleLogin(token);

    console.log("Google user:", data.user);
  } catch (error) {
    console.error("Google login failed:", error.response?.data || error.message);
  }
};
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center' >
      <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300' onClick={googleLogin} >
        Click me</button>
    </div>
  )
}

export default App