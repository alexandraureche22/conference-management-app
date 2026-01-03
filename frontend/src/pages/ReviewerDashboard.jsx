import { useEffect, useState } from 'react'
import { getReviews, updateReview } from '../api/reviewApi'

export default function ReviewerDashboard() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then(res => setReviews(res.data))
  }, [])

  const decide = (id, decision) => {
    updateReview(id, { decision, feedback: 'OK' })
  }

  return (
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
