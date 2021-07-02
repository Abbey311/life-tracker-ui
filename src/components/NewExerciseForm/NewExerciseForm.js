import { useState } from "react"
import apiClient from "../../services/apiClient"
import NotAllowed from "../NotAllowed/NotAllowed"
import "./NewExerciseForm.css"

export default function NewExerciseForm({ user, addExercise }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const { data, error } = await apiClient.addExercise({ name: form.name, category: form.category, duration: form.duration, intensity: form.intensity })
    console.log(data)
    if (error) setError(error)
    if (data){
      addExercise(data.exercise)
      setForm({ name: "", category: "", duration: "", intensity: ""})
    } 

    setIsLoading(false)
    


    // try {
    //   const res = await axios.post(`http://localhost:3001/posts`, form)
    //   if (res?.data?.post) {
    //     addExercise(res.data.post)
    //     setForm({ caption: "", imageUrl: "" })
    //   } else {
    //     setError("Something went wrong with post creation.")
    //   }
    // } catch (err) {
    //   console.log(err)
    //   const message = err?.response?.data?.error?.message
    //   setError(message ?? String(err))
    // } finally {
    //   setIsLoading(false)
    // }
  }

  const renderForm = () => {
    if (!user?.email) {
      return <NotAllowed />
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="caption">Exercise Name</label>
          <input
            type="text"
            name="name"
            placeholder="Add exercise here"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="imageUrl">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Add Exercise Category"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="imageUrl">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Add Exercise Duration"
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="imageUrl">Intensity</label>
          <input
            type="text"
            name="intensity"
            placeholder="Add Exercise Intensity from 1-10"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
        </div>

        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    )
  }

  return (
    <div className="NewExerciseForm">
      <div className="card">
        <h2>Add Exercise</h2>

        {Boolean(error) && <span className="error">{error}</span>}

        {renderForm()}
      </div>
    </div>
  )
}
