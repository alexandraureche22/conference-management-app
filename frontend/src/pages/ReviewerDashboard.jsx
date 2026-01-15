import { useEffect, useState } from 'react'
import api from '../api/axios'
import { updateReview } from '../api/reviewApi'

export default function ReviewerDashboard() {
  const [reviews, setReviews] = useState([])
  const [feedback, setFeedback] = useState({})

  // ✅ funcție comună de reload (era folosită dar NU exista)
  const loadReviews = () => {
    api.get('/reviews')
      .then(res => {
        console.log('REVIEWS:', res.data)
        setReviews(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    loadReviews()
  }, [])

  // ❌ feedback NU mai e parametru (era undefined)
  const handleDecision = async (reviewId, decision) => {
    try {
      await updateReview(reviewId, {
        decision,
        feedback: feedback[reviewId] || ''
      })

      alert('Review updated')
      loadReviews()
    } catch (err) {
      console.error(err)
      alert('Failed to update review')
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto' }}>
      <h1>Reviewer Dashboard</h1>

      {reviews.length === 0 && <p>No reviews assigned.</p>}

      {reviews.map(r => (
        <div
          key={r.id}
          style={{
            border: '1px solid #444',
            padding: 12,
            marginBottom: 12,
            borderRadius: 4
          }}
        >
          <h3>{r.Paper?.title}</h3>

          <p>
            Paper status: <strong>{r.Paper?.status}</strong>
          </p>

          <p>
            Review decision: <strong>{r.decision}</strong>
          </p>

          <textarea
            placeholder="Feedback for author"
            value={feedback[r.id] || ''}
            onChange={e =>
              setFeedback({ ...feedback, [r.id]: e.target.value })
            }
            style={{ width: '100%', marginBottom: 8 }}
          />

          {/* ✅ VALORI CORECTE PENTRU BACKEND */}
          <button onClick={() => handleDecision(r.id, 'APPROVE')}>
            Accept
          </button>{' '}
          <button onClick={() => handleDecision(r.id, 'REJECT')}>
            Revise
          </button>
        </div>
      ))}
    </div>
  )
}
