import { useEffect, useState } from 'react'
import { getConferences } from '../api/conferenceApi'
import ConferenceCard from '../components/ConferenceCard'

export default function Conferences() {
  const [conferences, setConferences] = useState([])

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
