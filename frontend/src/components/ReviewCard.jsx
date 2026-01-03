export default function ReviewCard({ review, onDecision }) {
  return (
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
