import { useEffect, useState } from 'react'
import { getConferences } from '../api/conferenceApi'
import ConferenceCard from '../components/ConferenceCard'

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
      ))}
    </div>
  )
}
