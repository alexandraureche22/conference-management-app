import { useEffect, useState } from 'react'
import { getConferences } from '../api/conferenceApi'
import ConferenceCard from '../components/ConferenceCard'

// Pagina pentru afișarea listei de conferințe disponibile
export default function Conferences() {
  const [conferences, setConferences] = useState([])

  // Încarcă conferințele la montarea componentei
  useEffect(() => {
    getConferences().then(res => setConferences(res.data))
  }, [])

  return (
    <div>
      <h2>Conferences</h2>
      {conferences.map(c => (
        <ConferenceCard key={c.id} conference={c} />
      ))}
    </div>
  )
}
