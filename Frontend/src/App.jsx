import { useEffect } from 'react'
import Home from './pages/Home'
import getCurrentUser from './feature/getCurrentUser'
import { useDispatch } from 'react-redux'
import { setUsedata } from './redux/userSlice'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrentUser()
      dispatch(setUsedata(data))
    }
    getUser()
  }, [])

  return (
    <>
    <Home />
    </>
  )
}

export default App 