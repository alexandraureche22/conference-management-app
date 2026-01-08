import { useEffect, useState } from 'react'
import { getReviews, updateReview } from '../api/reviewApi'

// Pagina pentru dashboard-ul recenzorului
export default function ReviewerDashboard() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // Încarcă recenziile la montarea componentei
    getReviews().then(res => setReviews(res.data))
  }, [])

  const decide = (id, decision) => {
    updateReview(id, { decision, feedback: 'OK' })
  }

  return (
    // Pagina principală a dashboard-ului recenzorului
    <div>
      <h2>Reviewer Dashboard</h2>
      {reviews.map(r => (
        <div key={r.id}>
          Review #{r.id}
          <button onClick={() => decide(r.id, 'APPROVE')}>Approve</button>
          <button onClick={() => decide(r.id, 'REJECT')}>Reject</button>
        </div>
      ))}
    </div>
  )
}
