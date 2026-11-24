import api from "../../utils/axios"


const getCurrentUser = async () => {
  try {
    const {data} = await api.get("/me")
    console.log(data);
    
  } catch (error) {
    console.error("Error fetching current user:", error.response?.data || error.message)
    throw error
  }     
}

export default getCurrentUser