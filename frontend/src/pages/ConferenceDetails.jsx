import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getConferencePapers } from '../api/conferenceApi'
import PaperCard from '../components/PaperCard'

// Pagina pentru afișarea detaliilor unei conferințe și a lucrărilor asociate
export default function ConferenceDetails() {
  const { id } = useParams()
  const [papers, setPapers] = useState([])

    // Încarcă lucrările conferinței la montarea componentei
  useEffect(() => {
    getConferencePapers(id).then(res => setPapers(res.data.papers))
  }, [id])

  return (
    <div>
      <h2>Conference papers</h2>
      {papers.map(p => (
        <PaperCard key={p.id} paper={p} />
      ))}
    </div>
  )
}
