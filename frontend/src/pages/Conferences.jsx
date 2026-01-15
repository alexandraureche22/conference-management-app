import { useEffect, useState } from 'react'
import { getConferences } from '../api/conferenceApi'
import ConferenceCard from '../components/ConferenceCard'

<<<<<<< HEAD
export default function Conferences() {
  const [conferences, setConferences] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getConferences()
      .then(res => {
        if (Array.isArray(res.data)) {
          setConferences(res.data)
        } else {
          setConferences([])
        }
      })
      .catch(err => {
        console.error(err)
        setError('Failed to load conferences')
        setConferences([])
      })
  }, [])

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
  }

  return (
    <div style={{ maxWidth: 800, margin: '40px auto' }}>
      <h1>Conferences</h1>

      {conferences.length === 0 && (
        <p>No conferences available</p>
      )}

      {conferences.map(conf => (
        <ConferenceCard key={conf.id} conference={conf} />
=======
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
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
      ))}
    </div>
  )
}
