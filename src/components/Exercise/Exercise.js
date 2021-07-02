import { Link } from "react-router-dom"
import { formatRating, formatDate } from "../../utils/format"
import "./Exercise.css"

export default function Exercise({ exercise, user }) {
  const userOwnsExercise = user?.email && exercise?.userEmail === user?.email

  return (
    <div className="Exercise">
      <Link
        className="media"
        to={`/exercise${exercise.id}`}
      ></Link>

      <div className="body">
        <div className="info">
          <p className="name">{exercise.name}</p>
          <p className="duration">{exercise.duration}</p>
          <p className="intensity">{exercise.intensity}</p>

        </div>

        <div className="meta">
          <span className="user">
            {userOwnsExercise ? "You" : exercise.userEmail}
          </span>
        </div>
      </div>
    </div>
  )
}
