import { Link } from 'react-router-dom'

// Componentă pentru afișarea unei conferințe individuale
export default function ConferenceCard({ conference }) {
  return (
    // Card simplu cu titlul, descrierea și link către detalii
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <h3>{conference.title}</h3>
      <p>{conference.description}</p>
      <Link to={`/conference/${conference.id}`}>View details</Link>
    </div>
    
  )
}
