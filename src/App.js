import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Sports from "./pages/Soprts"
import Coachs from "./pages/Coachs"
import Classes from "./pages/Classes"
import SportsContext from "./utils/SportsContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import PrivtClass from "./pages/PrivtClass"

function App() {
  const [sports, setSports] = useState([])
  const [users, setUsers] = useState([])
  const [coachs, setCoachs] = useState([])
  const [classes, setClasses] = useState([])
  const [privtclass, setPrivtClass] = useState([])
  const navigate = useNavigate()

  //----------------------------------------------------------------
  const getSports = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/sports")
    setSports(response.data)
  }

  //-------------------------------------------------
  const getClasses = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/classes")
    setClasses(response.data)
  }
  //-------------------------------------------
  const getprivtclass = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/privtclass")
    setPrivtClass(response.data)
  }

  //-----------------------------------------------
  const getCoachs = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/coachs", {
      headers: {
        Authorization: localStorage.tokenDashboardSports,
      },
    })
    setCoachs(response.data)
  }
  //------------------------------------------------
  const getUsers = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardSports,
      },
    })
    setUsers(response.data)
  }
  useEffect(() => {
    getSports()
    getClasses()
    getUsers()
    getCoachs()
    getprivtclass()
  }, [])
  //----------------------------------------------------------------------------------------------------
  const deleteSport = async sportId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com/api/sports/${sportId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      toast.success("sport deleted")
      getSports()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------------------------------------------------------------------------------------------------
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://gym-api-1.herokuapp.com/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardSports = response.data
      toast.success("login success")
      navigate("/sports")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------------------------------------------------------------------
  const editSport = async (e, sportId) => {
    e.preventDefault()
    try {
      const form = e.target

      const sportBody = {
        title: form.elements.title.value,
        poster: form.elements.poster.value,
        description: form.elements.description.value,
        coach: form.elements.coach.value,
      }
      await axios.put(`https://gym-api-1.herokuapp.com/api/sports/${sportId}`, sportBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getSports()
      getCoachs()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------
  const addSport = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const sportBody = {
        title: form.elements.title.value,
        poster: form.elements.poster.value,
        description: form.elements.description.value,
        coach: form.elements.coach.value,
      }
      await axios.post(`https://gym-api-1.herokuapp.com/api/sports`, sportBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getSports()
      toast.success("add sport success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------------------------------------------
  const logout = () => {
    localStorage.removeItem("tokenDashboardSports")
  }
  //-----------------------------------------------------------------------------------

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`https://gym-api-1.herokuapp.com/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------------------------------------------------------------------------
  const deleteUser = async userId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------------------------------------------------------------
  const addCoach = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const coachBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
      }
      await axios.post(`https://gym-api-1.herokuapp.com/api/coachs`, coachBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getCoachs()
      toast.success("add coach success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------
  const editCoach = async (e, coachId) => {
    e.preventDefault()
    try {
      const form = e.target

      const coachBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
      }
      await axios.put(`https://gym-api-1.herokuapp.com/api/coachs/${coachId}`, coachBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getCoachs()
      toast.success("edit coach success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------------
  const deleteCoach = async coachId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com/api/coachs/${coachId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      toast.success("coach deleted")
      getCoachs()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------------------------------------------------------
  const addClass = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const classesBody = {
        time: form.elements.time.value,
        sportId: form.elements.sportId.value,
      }
      await axios.post(`https://gym-api-1.herokuapp.com/api/classes`, classesBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getClasses()
      toast.success("add classes success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------
  const editClass = async (e, classesId) => {
    e.preventDefault()
    try {
      const form = e.target

      const classesBody = {
        time: form.elements.time.value,
      }
      await axios.put(`https://gym-api-1.herokuapp.com/api/classes/${classesId}`, classesBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getClasses()
      toast.success("edit classes success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------------
  const deleteClass = async classesId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com//api/classes/${classesId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      toast.success("classes deleted")
      getClasses()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------------------------------------------
  const addprivtclass = async (e, coachId) => {
    e.preventDefault()
    try {
      const form = e.target

      coachId = e.target.coachId.value
      console.log(coachId)
      const privtclassBody = {
        time: form.elements.time.value,
      }
      await axios.post(`https://gym-api-1.herokuapp.com//api/privtclass/${coachId}`, privtclassBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getprivtclass()
      toast.success("add privtclass success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------
  const editprivtclass = async (e, privtclassId) => {
    e.preventDefault()
    try {
      const form = e.target

      const privtclassBody = {
        time: form.elements.time.value,
      }
      await axios.put(`https://gym-api-1.herokuapp.com//api/privtclass/${privtclassId}`, privtclassBody, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      getprivtclass()
      toast.success("edit privtclass success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------------
  const deletePrivtClass = async privtclassId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com//api/privtclass/${privtclassId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardSports,
        },
      })
      toast.success("privtclass deleted")
      getprivtclass()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //-----------------------------------------------------------------------------
  const store = {
    sports,
    classes,
    users,
    login,
    logout,
    addAdmin,
    deleteUser,
    deleteSport,
    editSport,
    addSport,
    coachs,
    addCoach,
    editCoach,
    deleteCoach,
    addClass,
    editClass,
    deleteClass,
    addprivtclass,
    privtclass,
    editprivtclass,
    deletePrivtClass,
  }

  return (
    <>
      <SportsContext.Provider value={store}>
        <ToastContainer />
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Routes>
              <Route
                path="/sports"
                element={localStorage.tokenDashboardSports ? <Sports /> : <Navigate to="/login" />}
              />
              <Route path="/users" element={localStorage.tokenDashboardSports ? <Users /> : <Navigate to="/login" />} />
              <Route
                path="/coachs"
                element={localStorage.tokenDashboardSports ? <Coachs /> : <Navigate to="/login" />}
              />
              <Route
                path="/classes"
                element={localStorage.tokenDashboardSports ? <Classes /> : <Navigate to="/login" />}
              />

              <Route
                path="/privtclass"
                element={localStorage.tokenDashboardSports ? <PrivtClass /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Box>
      </SportsContext.Provider>
    </>
  )
}

export default App
