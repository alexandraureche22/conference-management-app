export default function PaperCard({ paper }) {
  return (
    <div style={{ border: '1px solid #aaa', padding: 8, marginBottom: 8 }}>
      <b>{paper.title}</b>
      <div>Status: {paper.status}</div>
    </div>
  )
}
