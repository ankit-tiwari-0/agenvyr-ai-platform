import api from "../../utils/axios"
import { useDispatch } from "react-redux"

const getCurrentUser = async () => {
  try {
    const {data} = await api.get("/me")
     return data
    
  } catch (error) {
    console.error("Error fetching current user:", error.response?.data || error.message)
    return null
  }     
}

export default getCurrentUser