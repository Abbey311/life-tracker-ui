import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import apiClient from "../../services/apiClient"
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"

export default function App() {
  const [user, setUser] = useState({})
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.listExercises()
      if (data) setExercises(data.exercises)
      if (error) setError(error)

      setIsFetching(false)
    }

    fetchExercises()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  const addExercise = (newExercise) => {
    // add to the database
    // return updated list
    setExercises((oldExercises) => [newExercise, ...oldExercises]) // set new list to the state
  }

  // const addSleep = (newSleep) => {
  //   setSleep((oldSleep) => [newSleep, ...oldSleep])
  // }
  // const addNutrition = (newNutrition) => {
  //   setNutrition((oldNutrition) => [newNutrition, ...oldNutrition])
  // }

  

  const handleLogout =  async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} exercises={exercises} addExercise={addExercise} isFetching={isFetching} />}
          />
          <Route
            path="/exercise"
            element={<NewExerciseForm user={user} error={error} exercises={exercises} addExercise={addExercise} isFetching={isFetching} />}
          />
          
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
