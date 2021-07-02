import Exercise from "../Exercise/Exercise"
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import "./Home.css"
import Hero from "../../Hero/Hero"

const heroBgImage = "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"

export default function Home({ user, isFetching, exercises, addExercise, error }) {
  return (
    <div className="Home">
      <Hero bgImage={heroBgImage}/>
      <h1 className="intro">Life Tracker</h1>
      <p className="description">Helping you become the best version of yourself, one step at a time.</p>

      {/* <ActivityFeed className="listActivity" user={user} listActivity={listActivity} />  */}
      <footer className="activities">
        <li className="fitness"> 
         {/* <img src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="alternatetext"/> */}
        Fitness
        </li>
        <li className="food" img src="url" alt="alternatetext">
        Food
        </li>
        <li className="rest" img src="url" alt="alternatetext">
        Rest
        </li>
        <li className="planner" img src="url" alt="alternatetext">
        Planner
        </li>
        </footer>

      <div className="feed">
        {error ? <h2 className="error">{error}</h2> : null}
        {isFetching ? <h2>Loading...</h2> : null}
      </div>
    </div>
  )
}
