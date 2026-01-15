// File: frontend/src/components/ReviewCard.jsx
export default function ReviewCard({ review, onDecision }) {
    // Componentă pentru afișarea unei recenzii individuale
  return (
    // Card simplu cu ID-ul recenziei, decizia și butoane pentru aprobare/rejectare
    <div style={{ border: '1px solid #888', padding: 8, marginBottom: 8 }}>
      <div>Review #{review.id}</div>
      <div>Decision: {review.decision}</div>
      <button onClick={() => onDecision(review.id, 'APPROVE')}>
        Approve
      </button>
      <button onClick={() => onDecision(review.id, 'REJECT')}>
        Reject
      </button>
    </div>
  )
}
