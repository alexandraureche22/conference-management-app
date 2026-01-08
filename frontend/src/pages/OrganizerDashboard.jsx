import { useEffect, useState } from 'react'
import { getConferences, getConferencePapers } from '../api/conferenceApi'

// Pagina pentru monitorizarea conferințelor și lucrărilor de către organizator
export default function OrganizerDashboard() {
  const [conferences, setConferences] = useState([])
  const [papers, setPapers] = useState([])

  useEffect(() => {
    // Încarcă conferințele la montarea componentei
    getConferences().then(res => setConferences(res.data))
  }, [])

  const loadPapers = async (id) => {
    // Încarcă lucrările pentru conferința selectată
    const res = await getConferencePapers(id)
    setPapers(res.data.papers)
  }

  return (
    // Pagina principală a dashboard-ului organizatorului
    <div>
      <h2>Organizer Dashboard</h2>

      <h3>Conferences</h3>
      {conferences.map(c => (
        <button key={c.id} onClick={() => loadPapers(c.id)}>
          {c.title}
        </button>
      ))}

      <h3>Papers</h3>
      {papers.map(p => (
        <div key={p.id}>
          <b>{p.title}</b> – {p.status}
        </div>
      ))}
    </div>
  )
}
