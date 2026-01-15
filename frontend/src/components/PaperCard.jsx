// File: frontend/src/components/PaperCard.jsx
export default function PaperCard({ paper }) {
    // Componentă pentru afișarea unei lucrări individuale
  return (
    // Card simplu cu titlul și statusul lucrării
    <div style={{ border: '1px solid #aaa', padding: 8, marginBottom: 8 }}>
      <b>{paper.title}</b>
      <div>Status: {paper.status}</div>
    </div>
  )
}
