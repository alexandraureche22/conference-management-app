import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getConferencePapers } from '../api/conferenceApi'

export default function ConferenceDetails() {
  const { id } = useParams()

  const [conferenceTitle, setConferenceTitle] = useState('')
  const [papers, setPapers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getConferencePapers(id)
      .then(res => {
        console.log('CONFERENCE DETAILS RESPONSE:', res.data)

        setConferenceTitle(res.data.conferenceTitle)
        setPapers(res.data.papers || [])
      })
      .catch(err => {
        console.error(err)
        setError('Failed to load conference details')
      })
  }, [id])

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>
  }

  return (
    <div style={{ maxWidth: 800, margin: '40px auto' }}>
      <h1>{conferenceTitle}</h1>

      {papers.length === 0 && (
        <p>No papers submitted yet.</p>
      )}

      {papers.map(paper => (
        <div
          key={paper.id}
          style={{
            padding: 12,
            marginBottom: 12,
            border: '1px solid #444',
            borderRadius: 4
          }}
        >
          <h3>{paper.title}</h3>

          <p>
            <strong>Abstract:</strong> {paper.abstract}
          </p>

          <p>
            <strong>Status:</strong> {paper.status}
          </p>

          <p>
            <strong>File:</strong> {paper.fileUrl}
          </p>

          <p>
            <strong>Author ID:</strong> {paper.authorId}
          </p>

          {/* 🔹 F7.3 – Alocare automată 2 revieweri */}
          {paper.Reviews && paper.Reviews.length > 0 && (
            <div style={{ marginTop: 10 }}>
              <strong>Automatically assigned reviewers:</strong>
              <ul>
                {paper.Reviews.map(review => (
                  <li key={review.id}>
                    {review.User?.name} ({review.User?.email})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
