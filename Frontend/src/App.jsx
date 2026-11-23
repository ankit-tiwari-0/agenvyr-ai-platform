import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../utils/firebase'

const App = () => {

  const googleLogin = async () => {
    const data = await signInWithPopup(auth,googleProvider)
    console.log(data);
  }
    
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center' >
      <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300' onClick={googleLogin} >
        Click me</button>
    </div>
  )
}

export default App

1;6